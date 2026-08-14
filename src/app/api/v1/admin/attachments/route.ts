import type { NextResponse } from 'next/server';
import { z } from 'zod';

import {
  attachmentStoragePath,
  newStorageToken,
  validateUpload,
  type AttachmentParent,
} from '@/lib/attachments/storage';
import { getViewer } from '@/lib/auth/session';
import { createServerSupabaseClient } from '@/lib/db/server';
import { serverEnv } from '@/lib/env';
import {
  checkRateLimit,
  rateLimitHeaders,
  rateLimitIdentity,
} from '@/lib/http/rate-limit';
import {
  apiError,
  created,
  rateLimited,
  validationFailed,
  withErrorHandling,
} from '@/lib/http/responses';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * POST /api/v1/admin/attachments — staff upload.
 *
 * Role, not rank. Everyone in the editorial chain attaches evidence to the
 * records they work on, so all four content roles are accepted; a Premium
 * member has rank 30 and cannot reach this at all. Administrative permissions
 * are role checks (CLAUDE.md, "the access model").
 *
 * The uploaded row is left at the `scan_status` default of `pending`, and
 * `pending` is not servable. Scanning happens out of band in the
 * `scan-attachments` job — a 25 MB file against a vendor API takes longer than
 * a request should live, and the alternative of scanning inline would mean
 * either a slow upload or a timeout leaving the row in a state nobody set.
 * The cost is that a freshly uploaded file is briefly undownloadable, which is
 * the right way round: unavailable-but-unchecked beats available-but-unchecked.
 */

/**
 * The non-file half of the form. Multipart values arrive as strings, so the
 * rank is coerced; everything else is validated as given.
 *
 * Exactly one parent, enforced here rather than left to the
 * `attachment_has_parent` CHECK — the constraint allows *at least* one and
 * would happily accept a row hung off both a record and a report, which is a
 * shape nothing in the product reads.
 */
const metadataSchema = z
  .object({
    opportunityId: z.string().uuid().optional(),
    reportId: z.string().uuid().optional(),
    /** Omitted means "inherit the parent's rank" — resolved below. */
    minimumAccessRank: z.coerce.number().int().min(0).max(100).optional(),
  })
  .refine((value) => Boolean(value.opportunityId) !== Boolean(value.reportId), {
    message:
      'Give exactly one of opportunityId or reportId — an attachment ' +
      'belongs to one parent.',
    path: ['opportunityId'],
  });

/** Reads a form field as a string, treating a blank entry as absent. */
function field(form: FormData, name: string): string | undefined {
  const value = form.get(name);
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export const POST = withErrorHandling(
  async (request: Request): Promise<NextResponse> => {
    const viewer = await getViewer();

    if (
      !viewer.isAuthenticated ||
      viewer.accountStatus !== 'active' ||
      !['researcher', 'reviewer', 'editor', 'super_administrator'].includes(
        viewer.role,
      )
    ) {
      return apiError('forbidden', 'You cannot upload attachments.');
    }

    const limit = await checkRateLimit(
      'attachmentUpload',
      rateLimitIdentity(request, viewer.userId),
    );
    if (!limit.allowed) return rateLimited(limit.resetAt);

    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return apiError(
        'bad_request',
        'Send the file as multipart form data with a "file" part.',
      );
    }

    const file = form.get('file');
    if (!(file instanceof File)) {
      return apiError('bad_request', 'No file was included in the upload.');
    }

    const parsed = metadataSchema.safeParse({
      opportunityId: field(form, 'opportunityId'),
      reportId: field(form, 'reportId'),
      minimumAccessRank: field(form, 'minimumAccessRank'),
    });
    if (!parsed.success) return validationFailed(parsed.error);

    const env = serverEnv();

    // Only the first bytes are read for the content check; reading the whole
    // file here would double the memory cost of every upload for a comparison
    // that needs sixteen bytes.
    const header = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    const check = validateUpload(
      {
        fileName: file.name,
        mimeType: file.type,
        sizeBytes: file.size,
        header,
      },
      env.maxUploadBytes,
    );

    // 422 rather than letting the `attachment_mime_allowed` CHECK or the
    // bucket's own `allowed_mime_types` refuse it: a constraint violation
    // surfaces as an opaque 500 and tells the uploader nothing they can act on.
    if (!check.ok) {
      return apiError('validation_failed', check.message, {
        reason: check.reason,
      });
    }

    const supabase = await createServerSupabaseClient();

    const parent: AttachmentParent = parsed.data.opportunityId
      ? { type: 'opportunity', id: parsed.data.opportunityId }
      : { type: 'report', id: parsed.data.reportId as string };

    // Read the parent before writing anything. The foreign key would catch a
    // bad id, but as a 500 after the bytes are already in the bucket — and it
    // is also where the default rank comes from.
    const { data: parentRow, error: parentError } = await supabase
      .from(parent.type === 'opportunity' ? 'opportunities' : 'reports')
      .select('id, minimum_access_rank')
      .eq('id', parent.id)
      .maybeSingle();

    if (parentError) throw new Error(parentError.message);
    if (!parentRow) {
      return apiError('not_found', `No ${parent.type} exists with that id.`, {
        [`${parent.type}Id`]: parent.id,
      });
    }

    // Inheriting the parent's rank is the safe default. Defaulting to 0 would
    // make an attachment on a Premium-only record readable by a free account
    // the moment someone forgot the field — the sort of quiet leak that only
    // shows up in a support ticket.
    const minimumAccessRank =
      parsed.data.minimumAccessRank ??
      (typeof parentRow.minimum_access_rank === 'number'
        ? parentRow.minimum_access_rank
        : 0);

    const filePath = attachmentStoragePath(
      parent,
      newStorageToken(),
      check.fileName,
    );

    // Uploaded through the caller's own session, not the service role: the
    // storage policy from `...001800` grants staff manage rights on this
    // bucket, so the database is still the thing deciding the write is allowed.
    const { error: uploadError } = await supabase.storage
      .from(env.storageBuckets.attachments)
      .upload(filePath, file, {
        contentType: check.mimeType,
        upsert: false,
      });

    if (uploadError) {
      throw new Error(`Attachment upload failed: ${uploadError.message}`);
    }

    const { data: row, error: insertError } = await supabase
      .from('attachments')
      .insert({
        opportunity_id: parsed.data.opportunityId ?? null,
        report_id: parsed.data.reportId ?? null,
        file_name: file.name.slice(0, 240),
        file_path: filePath,
        mime_type: check.mimeType,
        file_size: file.size,
        minimum_access_rank: minimumAccessRank,
        uploaded_by: viewer.userId,
        // `scan_status` is left at its default. Setting it here — to anything
        // — would be the API asserting a scan result it has not got.
      })
      .select('id, file_name, mime_type, file_size, scan_status, uploaded_at')
      .single();

    if (insertError || !row) {
      // The object is already in the bucket. Left there it is an orphan no row
      // points at, invisible to the scan job and to every listing, so it is
      // removed before the error is reported. A failed removal is logged and
      // not raised: the caller's problem is the failed insert.
      const { error: cleanupError } = await supabase.storage
        .from(env.storageBuckets.attachments)
        .remove([filePath]);
      if (cleanupError) {
        console.error('[attachments] orphaned object left in bucket', {
          filePath,
          error: cleanupError.message,
        });
      }
      throw new Error(
        `Attachment record could not be created: ${
          insertError?.message ?? 'no row returned'
        }`,
      );
    }

    // Written after the row exists, so the trail never claims a file that is
    // not there. `log_admin_action` rather than `write_audit_log` — the
    // wrapper re-checks staff membership itself.
    const { error: auditError } = await supabase.rpc('log_admin_action', {
      p_action: 'attachment.uploaded',
      p_entity_type: 'attachment',
      p_entity_id: row.id,
      p_previous: null,
      p_new: {
        fileName: row.file_name,
        filePath,
        mimeType: check.mimeType,
        fileSize: file.size,
        minimumAccessRank,
        [`${parent.type}Id`]: parent.id,
      },
    });

    if (auditError) {
      // The file is stored and the row exists, so this is not a failure to
      // report as one — but an unlogged upload is a gap in an append-only
      // trail, so it must be loud.
      console.error('[attachments] upload succeeded but audit entry failed', {
        attachmentId: row.id,
        error: auditError.message,
      });
    }

    return created(
      {
        id: row.id,
        fileName: row.file_name,
        mimeType: row.mime_type,
        fileSize: row.file_size,
        minimumAccessRank,
        scanStatus: row.scan_status,
        uploadedAt: row.uploaded_at,
        audited: !auditError,
        // Said plainly so an administrator does not read the immediate 404 on
        // the download endpoint as a bug.
        message:
          'Uploaded. The file is queued for a malware scan and cannot be ' +
          'downloaded until it passes.',
      },
      { headers: rateLimitHeaders(limit) },
    );
  },
);
