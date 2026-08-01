import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { OpportunityCard } from '@/components/opportunities/opportunity-card';
import { ButtonLink, SectionHeading } from '@/components/ui/primitives';
import { createPublicSupabaseClient } from '@/lib/db/public';
import {
  loadCountiesWithCounts,
  loadPreviewOpportunities,
} from '@/lib/public-data';

export const revalidate = 900;

type PageProps = { params: Promise<{ county: string }> };

/**
 * Prerender the counties that actually hold published records.
 *
 * Deliberately not all 159. The facet query returns only counties with
 * published records — the same set the sitemap submits — so those get built
 * ahead of time, and the rest stay on-demand with `dynamicParams` doing the
 * work and this file's `revalidate` caching the result. Building 159 pages when
 * most of them say "nothing published here yet" would trade build time for
 * nothing.
 *
 * The loader returns an empty array if the database is unreachable, so a build
 * without one still succeeds and every county simply renders on demand.
 */
export async function generateStaticParams() {
  const counties = await loadCountiesWithCounts();
  return counties.map((county) => ({ county: county.slug }));
}

/**
 * Anonymous, cookie-free client — not the session-bound one.
 *
 * This loader runs twice per request (generateMetadata, then the page). The
 * session client calls cookies(), which opts the whole route out of static
 * rendering, so using it here silently defeated the `revalidate` above and made
 * all 159 county pages render per request. Counties carry no paid content and
 * are already granted to anon, so nothing is weakened by reading them
 * anonymously.
 */
async function loadCounty(slug: string) {
  const supabase = createPublicSupabaseClient();
  const { data } = await supabase
    .from('counties')
    .select('id, name, slug, fips_code, states ( name, abbreviation )')
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();
  return data;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { county: slug } = await params;
  const county = await loadCounty(slug);
  if (!county) return { title: 'County not found' };

  return {
    title: `${county.name} County opportunities`,
    description:
      `Commercial property, business funding and market intelligence for ` +
      `${county.name} County, Georgia — verified, scored and tracked to the deadline.`,
    alternates: { canonical: `/georgia/${slug}` },
  };
}

export default async function CountyPage({ params }: PageProps) {
  const { county: slug } = await params;
  const county = await loadCounty(slug);
  if (!county) notFound();

  const [property, funding] = await Promise.all([
    loadPreviewOpportunities({
      limit: 6,
      countySlug: slug,
      category: 'commercial_property',
    }),
    loadPreviewOpportunities({
      limit: 6,
      countySlug: slug,
      category: 'business_funding',
    }),
  ]);

  const total = property.length + funding.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <a href="/commercial-property" className="hover:underline">
              Georgia
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-ink-800">{county.name} County</li>
        </ol>
      </nav>

      <h1 className="text-3xl sm:text-4xl">
        {county.name} County opportunities
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
        {total > 0
          ? `We are currently tracking ${total} published ${
              total === 1 ? 'record' : 'records'
            } in ${county.name} County across commercial property and business funding.`
          : `We monitor ${county.name} County continuously. There are no published records here right now — new ones appear as sources are checked and verified.`}
      </p>

      {property.length > 0 ? (
        <section className="mt-12">
          <SectionHeading title="Commercial property" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {property.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={{ ...opportunity, isLocked: true }}
              />
            ))}
          </div>
        </section>
      ) : null}

      {funding.length > 0 ? (
        <section className="mt-12">
          <SectionHeading title="Business funding" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {funding.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={{ ...opportunity, isLocked: true }}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* A county with no published records would otherwise be a breadcrumb, a
          heading, one sentence and a sign-up box — 159 of which differ only by
          a place name. That is the shape search engines penalise, and it tells
          a visitor nothing. Say what is actually monitored here instead. The
          sitemap only lists counties that have records, so these pages are
          reached by direct navigation and internal links rather than search. */}
      {total === 0 ? (
        <section className="mt-12 max-w-prose">
          <SectionHeading
            title={`What we monitor in ${county.name} County`}
            description="The same sources and the same method as every other county in Georgia. Coverage does not depend on how much has published here so far."
          />
          <ul className="mt-4 space-y-3 text-ink-700">
            <li>
              <span className="font-medium text-ink-900">
                Commercial property.
              </span>{' '}
              Surplus and disposal notices, development authority listings, tax
              and foreclosure sales, and public solicitations affecting
              commercial sites in {county.name} County.
            </li>
            <li>
              <span className="font-medium text-ink-900">
                Business funding.
              </span>{' '}
              State and federal programmes, local and regional incentives, and
              grant or loan rounds whose eligibility reaches this county.
            </li>
            <li>
              <span className="font-medium text-ink-900">
                Verification and scoring.
              </span>{' '}
              Every record names its source and the date it was last checked,
              and is scored against a published 100-point method before it
              reaches a member.
            </li>
          </ul>
          <p className="mt-5 text-sm text-ink-600">
            No published records here yet is a statement about what has been
            posted, not about how closely the county is watched. We do not
            publish a record until it has been verified, so an empty county is
            an honest one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/how-it-works" variant="secondary">
              How records are verified and scored
            </ButtonLink>
            <ButtonLink href="/commercial-property" variant="ghost">
              Counties with published records
            </ButtonLink>
          </div>
        </section>
      ) : null}

      <section className="mt-14 rounded-xl bg-ink-900 px-6 py-10 text-white sm:px-10">
        <h2 className="text-2xl text-white">
          Get {county.name} County records as they publish
        </h2>
        <p className="mt-3 max-w-2xl text-ink-200">
          Set {county.name} as a preferred county and your dashboard, weekly
          report and alerts weight toward it. Premium members are notified the
          moment a matching record is published.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/register" variant="secondary">
            Create a free account
          </ButtonLink>
          <ButtonLink
            href="/pricing"
            variant="ghost"
            className="text-white hover:bg-ink-800"
          >
            Compare plans
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
