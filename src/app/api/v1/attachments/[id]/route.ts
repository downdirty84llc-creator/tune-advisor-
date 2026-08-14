import type { NextResponse } from 'next/server';

import { canServeAttachment } from '@/lib/attachments/scanning';
import { ATTACHMENT_SIGNED_URL_TTL_SECONDS } from '@/lib/attachments/storage';
import { getViewer } from '@/lib/auth/session';
import { createServerSupabaseClient } from '@/lib/db/server';
import { serverEnv } from '@/lib/env';
import { apiError, ok, withErrorHandling } from '@/lib/http/responses';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * GET /api/v1/attachments/{id}
 *
 * Two independent refusals, and they answer different questions. The scan gate
 * asks "is this file safe to hand to anybody"; entitlement asks "may this
 * account have it". Neither substitutes for the other, so both run.
 *
 * The scan gate has no staff exemption. That is not an oversight: an
 * administrator opening an infected attachment is the likeliest way it does
 * damage, because they open more of them on machines with more access. The
 * reasoning is recorded in `src/lib/attachments/scanning.ts` — do not add a
 * bypass here.
 *
 * Entitlement is left to row-level security rather than re-derived in
 * TypeScript. The row is read through the session-bound client, so
 * `attachments_read` decides visibility using the caller's rank and the
 * parent record's own gate, and a hidden row simply is not returned.
 *
 * The cost of that choice is honest and worth stating: a member below the
 * required rank gets a 404, not the 402 `upgrade_required` this API prefers,
 * because an invisible row cannot tell us which plan would unlock it.
 * Recovering the upsell would mean reading the row with the service-role key
 * on a member-facing path, which removes the row-level-security backstop for
 * the sake of a nicer error. The upsell belongs on the parent record's
 * endpoint, which does have the record in hand and does return a 402; by the
 * time somebody has an attachment id they have already been past that gate.
 */
export const GET = withErrorHandling(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (_request: Request, context: any): Promise<NextResponse> => {
    const { id } = await (context as RouteContext).params;
    const viewer = await getViewer();

    if (!viewer.isAuthenticated) {
      return apiError('unauthorized', 'Sign in to download an attachment.');
    }
    if (viewer.accountStatus !== 'active') {
      return apiError(
        'forbidden',
        'Your account is suspended, so attachments are unavailable.',
      );
    }

    const supabase = await createServerSupabaseClient();
    const { data: attachment, error } = await supabase
      .from('attachments')
      .select(
        `id, file_name, file_path, mime_type, file_size, scan_status,
         minimum_access_rank, uploaded_at`,
      )
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!attachment) return apiError('not_found', 'Attachment not found.');

    const serve = canServeAttachment(attachment.scan_status);
    if (!serve.allowed) {
      // The distinction matters to the caller: `not_yet_scanned` is worth
      // retrying in a minute, `infected` never is. Both statuses carry the
      // reason so a client can tell them apart without matching on prose.
      const code =
        serve.reason === 'not_yet_scanned' || serve.reason === 'scan_failed'
          ? 'conflict'
          : 'forbidden';
      return apiError(code, serve.message, {
        reason: serve.reason,
        scanStatus: attachment.scan_status,
      });
    }

    // Minted per request rather than stored, so a link copied out of a browser
    // history stops working within minutes. Signed by the caller's own client:
    // the storage policy added in migration `...002600` re-checks both the
    // attachment's visibility and its scan status, so a member who somehow
    // reached this line without entitlement still gets nothing.
    const { data: signed, error: signError } = await supabase.storage
      .from(serverEnv().storageBuckets.attachments)
      .createSignedUrl(attachment.file_path, ATTACHMENT_SIGNED_URL_TTL_SECONDS);

    if (signError || !signed?.signedUrl) {
      console.error('[attachments] could not sign download', {
        attachmentId: attachment.id,
        error: signError?.message,
      });
      return apiError(
        'internal_error',
        'That file could not be prepared for download. Please try again.',
      );
    }

    return ok({
      id: attachment.id,
      fileName: attachment.file_name,
      mimeType: attachment.mime_type,
      fileSize: attachment.file_size,
      scanStatus: attachment.scan_status,
      uploadedAt: attachment.uploaded_at,
      downloadUrl: signed.signedUrl,
      expiresInSeconds: ATTACHMENT_SIGNED_URL_TTL_SECONDS,
    });
  },
);
