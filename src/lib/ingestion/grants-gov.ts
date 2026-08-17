import type { IngestionCandidate } from '@/lib/ingestion/types';

/**
 * Grants.gov `search2` adapter.
 *
 * This is the one public source in the ledger's list with a documented,
 * unauthenticated JSON API, so it is the first automated adapter. Every other
 * source in spec 1's list (commercial listings, county tax pages, DCA and SBA
 * bulletins, utility incentive pages, licensed data) needs either a
 * per-source scraper or a paid feed and a `scraping_review_status` of
 * `permitted`/`permitted_with_limits` before automation is legally allowed
 * (`sources.automation_requires_review`) — those stay manual research until
 * someone reviews that source's terms and adds an adapter for it.
 *
 * The keyword filter is a coarse net, not a precision instrument: Grants.gov
 * does not expose a clean "eligible in Georgia" filter on the search API, so
 * this over-collects and leans on human review (workflow status stays
 * `draft`) rather than risking under-collection.
 */

const SEARCH_URL = 'https://api.grants.gov/v1/api/search2';
const DETAIL_URL_BASE = 'https://grants.gov/search-results-detail';

export interface GrantsGovSearchParams {
  keyword: string;
  rows?: number;
}

interface GrantsGovSearchResponse {
  data?: {
    hitCount?: number;
    oppHits?: unknown[];
  };
}

/** MM/DD/YYYY, as Grants.gov returns it, to the YYYY-MM-DD Postgres expects. */
function parseGrantsGovDate(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim());
  if (!match) return null;
  const [, month, day, year] = match;
  return `${year}-${month}-${day}`;
}

/**
 * Pure parse of a `search2` response body into draft-shaped candidates.
 *
 * Kept separate from the fetch so the mapping is unit-testable against a
 * captured response body without a network call.
 */
export function parseGrantsGovResponse(payload: unknown): IngestionCandidate[] {
  const hits = (payload as GrantsGovSearchResponse | undefined)?.data?.oppHits;
  if (!Array.isArray(hits)) return [];

  const candidates: IngestionCandidate[] = [];
  for (const hit of hits) {
    if (!hit || typeof hit !== 'object') continue;
    const row = hit as Record<string, unknown>;

    const id =
      typeof row.id === 'string' || typeof row.id === 'number'
        ? String(row.id)
        : null;
    const title = typeof row.title === 'string' ? row.title.trim() : '';
    if (!id || !title) continue;

    const agency = typeof row.agency === 'string' ? row.agency : null;
    const number = typeof row.number === 'string' ? row.number : null;

    const summary = [
      agency ? `Agency: ${agency}.` : null,
      number ? `Opportunity number ${number}.` : null,
      'Auto-collected from Grants.gov and not yet reviewed — confirm ' +
        'eligibility, funding amounts and deadline against the source ' +
        'before this leaves draft.',
    ]
      .filter(Boolean)
      .join(' ')
      .slice(0, 4000);

    candidates.push({
      externalId: id,
      title: title.slice(0, 240),
      category: 'business_funding',
      subtype: 'grant',
      summary,
      originalSourceUrl: `${DETAIL_URL_BASE}/${id}`,
      openingDate: parseGrantsGovDate(row.openDate),
      closingDate: parseGrantsGovDate(row.closeDate),
    });
  }
  return candidates;
}

export async function fetchGrantsGovCandidates(
  params: GrantsGovSearchParams,
): Promise<{ candidates: IngestionCandidate[]; hitCount: number }> {
  const response = await fetch(SEARCH_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      keyword: params.keyword,
      rows: params.rows ?? 50,
      oppStatuses: 'forecasted|posted',
    }),
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) {
    throw new Error(`Grants.gov search2 returned ${response.status}`);
  }

  const payload = (await response.json()) as GrantsGovSearchResponse;
  const candidates = parseGrantsGovResponse(payload);

  return {
    candidates,
    hitCount: payload.data?.hitCount ?? candidates.length,
  };
}
