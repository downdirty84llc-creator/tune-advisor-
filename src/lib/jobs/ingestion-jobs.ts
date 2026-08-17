import { createAdminClient } from '@/lib/db/admin';
import { fetchGrantsGovCandidates } from '@/lib/ingestion/grants-gov';
import { checkReachability } from '@/lib/ingestion/reachability';
import type { JobDefinition } from '@/lib/jobs/runner';
import { dailyKey } from '@/lib/jobs/runner';

/**
 * Source ingestion (spec 1, 7.4).
 *
 * Two jobs, split because they carry different authority:
 *
 *   - `checkSourcesJob` only ever writes a `source_checks` row recording that
 *     a URL answered. It runs against every automatable source and never
 *     creates or changes an opportunity.
 *   - `ingestGrantsGovJob` is the one adapter with somewhere real to write
 *     opportunity drafts to. Everything it creates lands in
 *     `workflow_status: 'draft'`, `verification_status: 'unverified'`, with no
 *     score and no `date_verified` — a human researcher, reviewer and editor
 *     still have to move it through the same workflow a manually entered
 *     record goes through (`@/lib/opportunities/workflow`) before it can
 *     appear in a published report or reach a member's inbox.
 *
 * Both respect `sources.automation_allowed` /
 * `sources.scraping_review_status`: the database constraint
 * `automation_requires_review` already refuses to let `automation_allowed`
 * be true without a recorded, permissive review, so a source with automation
 * off is simply left for `staleSourceRemindersJob` to remind a human about.
 */

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90);
}

export const checkSourcesJob: JobDefinition = {
  name: 'check-sources',
  description:
    'Records a reachability check for every automatable source that is due.',
  handler: async ({ now, note }) => {
    const supabase = createAdminClient();

    const { data: sources, error } = await supabase
      .from('sources')
      .select('id, name, website_url')
      .eq('is_active', true)
      .eq('automation_allowed', true)
      .in('scraping_review_status', ['permitted', 'permitted_with_limits'])
      .or(`next_check_at.lte.${now.toISOString()},next_check_at.is.null`)
      .limit(100);

    if (error) throw new Error(error.message);

    let processed = 0;
    let failed = 0;
    const outcomes: Record<string, number> = {};

    for (const source of sources ?? []) {
      try {
        const result = await checkReachability(source.website_url);
        const { error: insertError } = await supabase
          .from('source_checks')
          .insert({
            source_id: source.id,
            status: result.status,
            records_found: 0,
            notes: result.notes,
          });
        if (insertError) throw new Error(insertError.message);

        processed += 1;
        outcomes[result.status] = (outcomes[result.status] ?? 0) + 1;
      } catch (checkError) {
        failed += 1;
        console.error('[jobs] source check failed', {
          sourceId: source.id,
          name: source.name,
          message:
            checkError instanceof Error
              ? checkError.message
              : String(checkError),
        });
      }
    }

    note('outcomes', outcomes);
    return {
      processed,
      failed,
      detail: { outcomes, checked: sources?.length ?? 0 },
    };
  },
};

export const ingestGrantsGovJob: JobDefinition = {
  name: 'ingest-grants-gov',
  description: 'Drafts opportunities from new Grants.gov listings.',
  idempotencyKey: dailyKey,
  handler: async ({ now }) => {
    const supabase = createAdminClient();

    const { data: source, error: sourceError } = await supabase
      .from('sources')
      .select('id, automation_allowed, scraping_review_status')
      .ilike('website_url', '%grants.gov%')
      .eq('is_active', true)
      .limit(1)
      .maybeSingle();

    if (sourceError) throw new Error(sourceError.message);

    if (
      !source ||
      !source.automation_allowed ||
      !['permitted', 'permitted_with_limits'].includes(
        source.scraping_review_status,
      )
    ) {
      // Automation is a deliberate, reviewed decision recorded on the source
      // row (`automation_requires_review`) — this job will not create one or
      // flip the flag itself.
      return {
        processed: 0,
        failed: 0,
        skipped: true,
        detail: {
          reason: source
            ? 'grants_gov_source_not_cleared_for_automation'
            : 'grants_gov_source_not_configured',
        },
      };
    }

    const { candidates, hitCount } = await fetchGrantsGovCandidates({
      keyword: 'Georgia',
      rows: 50,
    });

    let created = 0;
    let failed = 0;
    const skippedExisting: string[] = [];

    for (const candidate of candidates) {
      try {
        const { data: existing } = await supabase
          .from('opportunities')
          .select('id')
          .eq('original_source_url', candidate.originalSourceUrl)
          .maybeSingle();

        if (existing) {
          skippedExisting.push(candidate.externalId);
          continue;
        }

        const baseSlug = slugify(candidate.title) || 'opportunity';
        let slug = baseSlug;
        for (let attempt = 2; attempt <= 20; attempt += 1) {
          const { data: clash } = await supabase
            .from('opportunities')
            .select('id')
            .eq('slug', slug)
            .maybeSingle();
          if (!clash) break;
          slug = `${baseSlug}-${attempt}`;
        }

        const { error: insertError } = await supabase
          .from('opportunities')
          .insert({
            title: candidate.title,
            slug,
            category: candidate.category,
            subtype: candidate.subtype,
            summary: candidate.summary,
            source_id: source.id,
            original_source_url: candidate.originalSourceUrl,
            opening_date: candidate.openingDate,
            closing_date: candidate.closingDate,
            date_discovered: now.toISOString().slice(0, 10),
            minimum_access_rank: 20,
            risk_summary:
              'Automatically collected from Grants.gov and not yet ' +
              'verified by a researcher. Confirm eligibility, the deadline ' +
              'and funding figures against the source before this leaves draft.',
            recommended_next_action:
              'Assign to a researcher for verification against the ' +
              'original Grants.gov listing.',
            verification_status: 'unverified',
            workflow_status: 'draft',
            status: 'under_review',
            created_by: null,
          });

        if (insertError) throw new Error(insertError.message);
        created += 1;
      } catch (candidateError) {
        failed += 1;
        console.error('[jobs] grants.gov candidate failed', {
          externalId: candidate.externalId,
          message:
            candidateError instanceof Error
              ? candidateError.message
              : String(candidateError),
        });
      }
    }

    await supabase.from('source_checks').insert({
      source_id: source.id,
      status: 'ok',
      records_found: candidates.length,
      notes: `${created} drafted, ${skippedExisting.length} already existed, ${hitCount} total hits for keyword "Georgia".`,
    });

    return {
      processed: created,
      failed,
      detail: {
        candidatesFound: candidates.length,
        alreadyExisted: skippedExisting.length,
        hitCount,
      },
    };
  },
};
