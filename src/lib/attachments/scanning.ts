/**
 * Attachment virus scanning (spec 20).
 *
 * Two halves, and the second is the one that matters. A scanner that labels
 * files but never stops one being served is decoration; the gate below is the
 * control. So `canServeAttachment` is written first, defaults to refusing, and
 * is enforced at the point a file would be handed out — not at upload, where a
 * later re-classification could not reach it.
 *
 * The provider sits behind an interface for the same reason the email client
 * does: switching vendors is a config change, and the default provider is the
 * inert one. Unlike email, though, the inert default does **not** wave files
 * through. With no scanner configured every attachment stays `pending`, and
 * `pending` is not servable. An unscanned file being unavailable is a
 * feature-off; an unscanned file being served is the failure the spec asks us
 * to prevent.
 */

export const SCAN_STATUSES = [
  'pending',
  'scanning',
  'clean',
  'infected',
  'failed',
  'skipped',
] as const;

export type ScanStatus = (typeof SCAN_STATUSES)[number];

export function isScanStatus(value: unknown): value is ScanStatus {
  return (
    typeof value === 'string' &&
    (SCAN_STATUSES as readonly string[]).includes(value)
  );
}

export interface ServeDecision {
  allowed: boolean;
  /** Machine-readable, for the API error code. */
  reason: 'clean' | 'not_yet_scanned' | 'infected' | 'scan_failed' | 'unknown';
  /** One sentence, written to be shown verbatim. */
  message: string;
}

/**
 * Whether a stored file may be handed to anybody — member or staff.
 *
 * Staff are **not** exempt. An administrator opening an infected attachment is
 * the likeliest way it does damage: they open more of them, on machines with
 * more access. The upload path is the place to give staff latitude, not the
 * download path.
 */
export function canServeAttachment(status: unknown): ServeDecision {
  if (!isScanStatus(status)) {
    return {
      allowed: false,
      reason: 'unknown',
      message:
        'This file has no recorded scan result and cannot be downloaded.',
    };
  }

  switch (status) {
    case 'clean':
      return { allowed: true, reason: 'clean', message: '' };

    case 'infected':
      return {
        allowed: false,
        reason: 'infected',
        message:
          'This file was found to contain malware and has been withheld. ' +
          'It has been reported to the team.',
      };

    case 'failed':
      return {
        allowed: false,
        reason: 'scan_failed',
        message:
          'This file could not be scanned, so it is not available for ' +
          'download. Please contact support.',
      };

    // `skipped` means a deliberate decision was recorded not to scan this
    // file — a scanner outage with an operator override, say. It is still not
    // a clean result, so it is still not served.
    case 'pending':
    case 'scanning':
    case 'skipped':
    default:
      return {
        allowed: false,
        reason: 'not_yet_scanned',
        message:
          'This file is still being checked for malware. Try again shortly.',
      };
  }
}

// ---------------------------------------------------------------------------
// Providers
// ---------------------------------------------------------------------------

export interface ScanOutcome {
  status: ScanStatus;
  /** Vendor's identifier for the scan, kept for support questions. */
  reference: string | null;
  detail: string | null;
}

export type ScanProvider = 'none' | 'virustotal';

export function configuredProvider(raw: string | undefined): ScanProvider {
  return raw === 'virustotal' ? 'virustotal' : 'none';
}

/**
 * Scans one file's bytes.
 *
 * Returns `failed` rather than throwing on a vendor error, because the caller
 * records the outcome per attachment and one unscannable file must not stop
 * the batch. `failed` is not servable, so the safe direction is preserved.
 */
export async function scanBytes(
  provider: ScanProvider,
  bytes: Uint8Array,
  apiKey: string,
): Promise<ScanOutcome> {
  if (provider === 'none' || !apiKey) {
    return {
      status: 'pending',
      reference: null,
      detail: 'No scanner configured; file left pending and unservable.',
    };
  }

  try {
    const form = new FormData();
    form.append('file', new Blob([bytes as unknown as BlobPart]));

    const upload = await fetch('https://www.virustotal.com/api/v3/files', {
      method: 'POST',
      headers: { 'x-apikey': apiKey },
      body: form,
    });

    if (!upload.ok) {
      return {
        status: 'failed',
        reference: null,
        detail: `Scanner returned ${upload.status}.`,
      };
    }

    const body = (await upload.json()) as { data?: { id?: string } };
    const analysisId = body.data?.id ?? null;
    if (!analysisId) {
      return { status: 'failed', reference: null, detail: 'No analysis id.' };
    }

    const analysis = await fetch(
      `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
      { headers: { 'x-apikey': apiKey } },
    );

    if (!analysis.ok) {
      return {
        status: 'scanning',
        reference: analysisId,
        detail: 'Submitted; result not ready yet.',
      };
    }

    const result = (await analysis.json()) as {
      data?: { attributes?: { status?: string; stats?: Record<string, number> } };
    };
    const attributes = result.data?.attributes;

    if (attributes?.status !== 'completed') {
      return {
        status: 'scanning',
        reference: analysisId,
        detail: 'Analysis still running.',
      };
    }

    return {
      status: interpretStats(attributes.stats),
      reference: analysisId,
      detail: JSON.stringify(attributes.stats ?? {}),
    };
  } catch (error) {
    return {
      status: 'failed',
      reference: null,
      detail: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Any engine calling a file malicious is enough to withhold it.
 *
 * A single detection among many engines is often a false positive, and on a
 * different product this would be tuned. Here the cost of withholding a clean
 * PDF is that someone asks support for it; the cost of serving a malicious one
 * to a subscriber is unbounded. `suspicious` alone is not treated as
 * infection, but it is not clean either — it lands in `failed`, which is also
 * not served, and puts a human in the loop.
 */
export function interpretStats(
  stats: Record<string, number> | undefined,
): ScanStatus {
  if (!stats) return 'failed';

  const malicious = Number(stats.malicious ?? 0);
  const suspicious = Number(stats.suspicious ?? 0);
  const harmless = Number(stats.harmless ?? 0);
  const undetected = Number(stats.undetected ?? 0);

  if (malicious > 0) return 'infected';
  if (suspicious > 0) return 'failed';
  if (harmless + undetected === 0) return 'failed';
  return 'clean';
}
