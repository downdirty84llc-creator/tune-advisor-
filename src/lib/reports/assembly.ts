/**
 * Weekly report assembly (fills the gap noted in `docs/ARCHITECTURE.md` §11:
 * "reports are created and published through the API" — nothing selected
 * candidates for one automatically).
 *
 * This only picks candidates and never publishes: the row it produces has
 * `status: 'draft'`, so it is inert until an editor reviews it, writes the
 * executive summary and commentary the auto-draft cannot supply, and calls
 * the existing publish/schedule endpoints. `distributeWeeklyReportJob` only
 * ever sends a report that has already reached `published` by that human
 * path, so a week with no editor action simply sends nothing rather than
 * sending an unreviewed draft.
 */

export interface ReportCandidateOpportunity {
  id: string;
  score: number | null;
  minimumAccessRank: number;
}

export interface SelectedReportEntry {
  opportunityId: string;
  displayOrder: number;
  minimumAccessRank: number;
}

/**
 * Highest-scored eligible opportunities, in report order.
 *
 * Pure so the ranking can be tested without a database: sorts by score
 * descending (unscored records — score null or 0 — sort last, since a
 * machine-drafted record with no reviewer score yet is not something to lead
 * the week's report with), ties broken by id for a stable order.
 */
export function selectWeeklyReportCandidates(
  opportunities: readonly ReportCandidateOpportunity[],
  limit: number,
): SelectedReportEntry[] {
  const ranked = [...opportunities].sort((a, b) => {
    const scoreDiff = (b.score ?? 0) - (a.score ?? 0);
    if (scoreDiff !== 0) return scoreDiff;
    return a.id.localeCompare(b.id);
  });

  return ranked.slice(0, limit).map((opportunity, index) => ({
    opportunityId: opportunity.id,
    displayOrder: index,
    minimumAccessRank: opportunity.minimumAccessRank,
  }));
}

/** `reports.title` for the ISO week a draft is assembled in. */
export function weeklyReportTitle(periodStart: Date, periodEnd: Date): string {
  const format = (date: Date) =>
    date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
  return `Weekly Ledger — ${format(periodStart)} to ${format(periodEnd)}, ${periodEnd.getUTCFullYear()}`;
}
