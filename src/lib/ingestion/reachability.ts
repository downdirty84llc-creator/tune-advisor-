/**
 * Generic reachability check, shared by every source regardless of adapter.
 *
 * Mirrors `public.source_check_status` (migration 0001): `ok`, `changed`,
 * `unreachable`, `access_denied`, `terms_changed`, `retired`. This module only
 * ever produces `ok`, `unreachable` or `access_denied` — the other three are
 * editorial judgements (a diff worth a human's attention, a terms change, a
 * retirement) that stay something a person records, not something a HEAD
 * request can decide.
 */

export type SourceCheckStatus =
  | 'ok'
  | 'changed'
  | 'unreachable'
  | 'access_denied'
  | 'terms_changed'
  | 'retired';

export interface ReachabilityResult {
  status: SourceCheckStatus;
  notes: string;
}

/** Classifies an HTTP response status into a `source_checks` outcome. */
export function classifyStatusCode(statusCode: number): SourceCheckStatus {
  if (statusCode >= 200 && statusCode < 400) return 'ok';
  if (statusCode === 401 || statusCode === 403 || statusCode === 429) {
    return 'access_denied';
  }
  return 'unreachable';
}

export async function checkReachability(
  url: string,
): Promise<ReachabilityResult> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(10_000),
      headers: {
        'user-agent': 'GeorgiaOpportunityLedger-SourceCheck/1.0',
      },
    });
    const status = classifyStatusCode(response.status);
    return { status, notes: `HTTP ${response.status}` };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: 'unreachable', notes: message.slice(0, 500) };
  }
}
