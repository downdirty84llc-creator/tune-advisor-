import { createAdminClient } from '@/lib/db/admin';
import type { JobDefinition } from '@/lib/jobs/runner';
import { weeklyKey } from '@/lib/jobs/runner';
import {
  selectWeeklyReportCandidates,
  weeklyReportTitle,
} from '@/lib/reports/assembly';

/**
 * Weekly report assembly (spec 7.12 gap noted in `docs/ARCHITECTURE.md` §11:
 * report composition is API-only, and nothing selected candidates for one).
 *
 * Deliberately runs days before `distributeWeeklyReportJob` (Monday morning
 * against a Thursday-noon send) so an editor has the week to open the draft,
 * write the executive summary and commentary an automated pass cannot
 * supply, adjust scores, and publish or schedule it. If nobody does, the
 * report simply stays `draft` and the Thursday send finds nothing to
 * distribute — the same outcome as today, when no report was assembled at
 * all.
 */

const HIGHLIGHT_LIMIT = 12;
const PERIOD_DAYS = 7;

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90);
}

export const draftWeeklyReportJob: JobDefinition = {
  name: 'draft-weekly-report',
  description:
    'Assembles a draft weekly report from the best-scored recent records.',
  idempotencyKey: weeklyKey,
  handler: async ({ now }) => {
    const supabase = createAdminClient();

    const periodStart = new Date(
      now.getTime() - PERIOD_DAYS * 24 * 60 * 60 * 1000,
    );

    const { data: opportunities, error } = await supabase
      .from('opportunities')
      .select('id, score, minimum_access_rank')
      .eq('workflow_status', 'published')
      .or(
        `published_at.gte.${periodStart.toISOString()},is_closing_soon.eq.true`,
      )
      .limit(500);

    if (error) throw new Error(error.message);

    const candidates = (opportunities ?? []).map((row) => ({
      id: row.id,
      score: row.score,
      minimumAccessRank: row.minimum_access_rank,
    }));

    if (candidates.length === 0) {
      return {
        processed: 0,
        failed: 0,
        skipped: true,
        detail: { reason: 'no_published_records_this_period' },
      };
    }

    const selected = selectWeeklyReportCandidates(candidates, HIGHLIGHT_LIMIT);

    const title = weeklyReportTitle(periodStart, now);
    const baseSlug = slugify(title) || 'weekly-report';
    let slug = baseSlug;
    for (let attempt = 2; attempt <= 20; attempt += 1) {
      const { data: clash } = await supabase
        .from('reports')
        .select('id')
        .eq('slug', slug)
        .maybeSingle();
      if (!clash) break;
      slug = `${baseSlug}-${attempt}`;
    }

    const { data: report, error: reportError } = await supabase
      .from('reports')
      .insert({
        title,
        slug,
        report_type: 'weekly',
        reporting_period_start: periodStart.toISOString().slice(0, 10),
        reporting_period_end: now.toISOString().slice(0, 10),
        status: 'draft',
        created_by: null,
      })
      .select('id, slug')
      .single();

    if (reportError) throw new Error(reportError.message);

    const { error: entriesError } = await supabase
      .from('report_opportunities')
      .insert(
        selected.map((entry) => ({
          report_id: report.id,
          opportunity_id: entry.opportunityId,
          display_order: entry.displayOrder,
          minimum_access_rank: entry.minimumAccessRank,
        })),
      );

    if (entriesError) throw new Error(entriesError.message);

    return {
      processed: selected.length,
      failed: 0,
      detail: { report: report.slug, candidatesConsidered: candidates.length },
    };
  },
};
