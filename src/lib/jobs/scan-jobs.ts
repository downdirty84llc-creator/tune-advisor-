import {
  canServeAttachment,
  configuredProvider,
  scanBytes,
  type ScanStatus,
} from '@/lib/attachments/scanning';
import { createAdminClient } from '@/lib/db/admin';
import { serverEnv } from '@/lib/env';
import type { JobDefinition } from '@/lib/jobs/runner';

/**
 * Attachment virus scanning (spec 20, "where supported").
 *
 * Runs out of band rather than inside the upload request. Scanning a 25 MB
 * file against a vendor API takes longer than a request should live, and doing
 * it inline would mean either a slow upload or a timeout that leaves the row
 * in a state nobody set deliberately. Uploaded files are `pending`, `pending`
 * is not servable, and this job moves them on.
 *
 * With no scanner configured the job is a no-op and files stay `pending` —
 * which means unavailable, not available-but-unchecked. That is the safe
 * direction, and it is why the download gate refuses by default rather than
 * allowing by default.
 */
export const scanAttachmentsJob: JobDefinition = {
  name: 'scan-attachments',
  description:
    'Scans newly uploaded attachments for malware and records the result.',
  // No idempotency key: the job claims rows by moving them to `scanning`, so
  // two invocations cannot pick up the same file, and a file left behind by a
  // crashed run should be retried on the next tick rather than skipped for the
  // rest of the window.
  handler: async ({ note }) => {
    const env = serverEnv();
    const provider = configuredProvider(process.env.VIRUS_SCAN_PROVIDER);
    const apiKey = process.env.VIRUS_SCAN_API_KEY ?? '';

    if (provider === 'none' || !apiKey) {
      note('scanner', 'not configured');
      return {
        processed: 0,
        failed: 0,
        skipped: true,
        detail: {
          reason:
            'No VIRUS_SCAN_PROVIDER configured. Attachments remain pending, ' +
            'and pending attachments are not served.',
        },
      };
    }

    const supabase = createAdminClient();

    const { data: queued, error } = await supabase
      .from('attachments')
      .select('id, file_path, file_size, scan_status')
      .eq('scan_status', 'pending')
      .order('uploaded_at', { ascending: true })
      .limit(25);

    if (error) throw new Error(error.message);

    let processed = 0;
    let failed = 0;
    let infected = 0;

    for (const row of (queued ?? []) as Array<{
      id: string;
      file_path: string;
      file_size: number;
    }>) {
      // Claim the row first. Without this a slow scan overlapping the next
      // tick would be paid for twice.
      const { error: claimError } = await supabase
        .from('attachments')
        .update({ scan_status: 'scanning' })
        .eq('id', row.id)
        .eq('scan_status', 'pending');
      if (claimError) continue;

      let status: ScanStatus = 'failed';
      let detail: string | null = null;

      // A file larger than the upload ceiling should never exist; if one does,
      // treat it as unscannable rather than streaming it to a vendor.
      if (row.file_size > env.maxUploadBytes) {
        detail = 'Larger than the configured upload ceiling.';
      } else {
        const download = await supabase.storage
          .from(env.storageBuckets.attachments)
          .download(row.file_path);

        if (download.error || !download.data) {
          detail = download.error?.message ?? 'File missing from storage.';
        } else {
          const bytes = new Uint8Array(await download.data.arrayBuffer());
          const outcome = await scanBytes(provider, bytes, apiKey);
          status = outcome.status;
          detail = outcome.detail;
        }
      }

      await supabase
        .from('attachments')
        .update({ scan_status: status })
        .eq('id', row.id);

      if (status === 'infected') infected += 1;
      // `scanning` means the vendor has the file but no verdict yet; it is
      // rolled back to `pending` so the next tick asks again.
      if (status === 'scanning') {
        await supabase
          .from('attachments')
          .update({ scan_status: 'pending' })
          .eq('id', row.id);
      }
      if (status === 'failed') failed += 1;

      if (canServeAttachment(status).allowed) processed += 1;

      if (detail) {
        console.info('[scan-attachments] result', {
          attachmentId: row.id,
          status,
          detail: detail.slice(0, 200),
        });
      }
    }

    note('infected', infected);

    return {
      processed,
      failed,
      detail: {
        examined: queued?.length ?? 0,
        cleared: processed,
        infected,
        unscannable: failed,
      },
    };
  },
};
