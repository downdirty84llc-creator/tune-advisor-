import type { OPPORTUNITY_CATEGORIES } from '@/lib/search/filters';

/**
 * Shape a source adapter hands to the ingestion job.
 *
 * This is deliberately the same information a human researcher supplies
 * through `POST /api/v1/admin/opportunities` (spec 7.4) — an adapter is a
 * researcher that happens to be a fetch call. It never carries a score,
 * `date_verified`, or anything else the workflow reserves for a person: the
 * insert this produces always lands in `workflow_status: 'draft'` and cannot
 * reach `published` until a reviewer and an editor have signed off
 * (`missingPublishFields` in `@/lib/opportunities/workflow`).
 */
export interface IngestionCandidate {
  /** Identifier from the source system, used only for logging. */
  externalId: string;
  title: string;
  category: (typeof OPPORTUNITY_CATEGORIES)[number];
  subtype: string;
  summary: string;
  /** Deduplication key: an existing row with this URL is left untouched. */
  originalSourceUrl: string;
  openingDate: string | null;
  closingDate: string | null;
}
