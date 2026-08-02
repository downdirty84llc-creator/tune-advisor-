import type { Metadata } from 'next';
import Link from 'next/link';

import { PlanGrid } from '@/components/pricing/plan-grid';
import { SectionHeading } from '@/components/ui/primitives';
import { track } from '@/lib/analytics/events';
import { isUpgradeSource } from '@/lib/analytics/upgrade-source';
import { getSessionContext } from '@/lib/auth/session';
import {
  PLAN_CODES,
  PLAN_FEATURE_DEFAULTS,
  type PlanCode,
} from '@/lib/access/ranks';
import { loadPlans } from '@/lib/public-data';

export const metadata: Metadata = {
  title: 'Membership plans',
  description:
    'Four membership tiers, from a free weekly preview to the complete ' +
    'property and funding database with immediate alerts and CSV export.',
  alternates: { canonical: '/pricing' },
};

const COMPARISON_ROWS: ReadonlyArray<{
  label: string;
  render: (code: PlanCode) => string;
}> = [
  {
    label: 'Opportunity detail',
    render: (code) =>
      ({
        preview: 'Preview only',
        summary: 'Summary',
        complete: 'Complete analysis',
      })[PLAN_FEATURE_DEFAULTS[code].opportunityDetail],
  },
  {
    label: 'Score explanation',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].opportunityDetail === 'complete'
        ? 'Yes'
        : 'No',
  },
  {
    label: 'Saved opportunities',
    render: (code) => {
      const limit = PLAN_FEATURE_DEFAULTS[code].savedOpportunityLimit;
      return limit === null ? 'Unlimited' : String(limit);
    },
  },
  {
    label: 'Saved searches',
    render: (code) => {
      const limit = PLAN_FEATURE_DEFAULTS[code].savedSearchLimit;
      if (limit === null) return 'Unlimited';
      return limit === 0 ? 'No' : String(limit);
    },
  },
  {
    label: 'Immediate alerts',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].immediateAlerts ? 'Yes' : 'No',
  },
  {
    label: 'CSV export',
    render: (code) => (PLAN_FEATURE_DEFAULTS[code].csvExport ? 'Yes' : 'No'),
  },
  {
    label: 'Weekly report',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].weeklyReports ? 'Yes' : 'Preview',
  },
  {
    label: 'Report archive',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].reportArchive === 'full'
        ? 'Full archive'
        : 'Recent only',
  },
  {
    label: 'Deadline calendar',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].deadlineCalendar ? 'Yes' : 'No',
  },
  {
    label: 'Pricing dashboard',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].pricingDashboard === 'complete'
        ? 'Complete'
        : 'Preview',
  },
  {
    label: 'Advanced filters',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].advancedFilters ? 'Yes' : 'No',
  },
  {
    label: 'Custom alert preferences',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].customAlertPreferences ? 'Yes' : 'No',
  },
  {
    label: 'Premium briefing',
    render: (code) =>
      PLAN_FEATURE_DEFAULTS[code].premiumBriefing ? 'Yes' : 'No',
  },
  {
    label: 'Results per page',
    render: (code) => String(PLAN_FEATURE_DEFAULTS[code].maxPageSize),
  },
];

const BILLING_FAQ = [
  {
    question: 'Can I change plans later?',
    answer:
      'Yes. Upgrades take effect immediately and are prorated, so you only pay ' +
      'the difference for the rest of the period. Downgrades take effect at the ' +
      'end of the period you have already paid for.',
  },
  {
    question: 'What happens if a payment fails?',
    answer:
      'We keep your access while the card is retried, plus a three-day grace ' +
      'period, and email you a link to update your payment method. After that ' +
      'the account returns to the free tier. Nothing you have saved is deleted.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Cancel any time and your access continues to the end of the period you ' +
      'have paid for. If something has gone wrong — a record we got badly ' +
      'wrong, a billing error — contact support and we will make it right.',
  },
  {
    question: 'Is my payment information stored here?',
    answer:
      'No. Checkout, card storage and invoices are handled entirely by Stripe. ' +
      'This application never receives a card number.',
  },
];

/**
 * `searchParams` keeps this route dynamic, which it already was — the plan grid
 * needs to know which tier the viewer is on, so this page was never one of the
 * seven that declare `revalidate`. No caching is given up here.
 */
export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [plans, session, params] = await Promise.all([
    loadPlans(),
    getSessionContext(),
    searchParams,
  ]);
  const codes: PlanCode[] = ['free', 'weekly', 'detailed', 'premium'];

  // `upgrade_button_clicked` is recorded here rather than from a click handler,
  // matching the server-side analytics decision in ARCHITECTURE.md §12. The
  // source is validated against a fixed list first, so a hand-edited URL cannot
  // write arbitrary strings into `analytics_events`.
  const from = params.from;
  if (isUpgradeSource(from)) {
    const requiredPlan = params.plan;
    await track('upgrade_button_clicked', {
      userId: session.viewer.userId,
      properties: {
        source: from,
        requiredPlan:
          typeof requiredPlan === 'string' &&
          PLAN_CODES.includes(requiredPlan as PlanCode)
            ? requiredPlan
            : null,
        plan: session.planCode,
      },
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl">Membership plans</h1>
        <p className="mt-4 text-lg text-ink-700">
          Start free. Move up when the deadlines start mattering to you.
        </p>
      </div>

      {/* Paid checkout cannot complete until the plans carry their Stripe price
          ids, and a visitor who clicks through to a failure trusts us less than
          one who was told. Says nothing about when — we do not know, and a
          missed date costs more than no date. Remove this notice in the same
          change that opens paid billing. */}
      <div
        role="note"
        className="surface mx-auto mt-8 max-w-2xl border-l-4 border-l-signal-investigate px-5 py-4 text-sm"
      >
        <p className="font-semibold">Paid memberships are not open yet.</p>
        <p className="mt-1 text-ink-700">
          The tiers below are the plan, priced as they will launch. Free
          membership is open now and everything you save on it carries over, so
          the fastest way to be ready is to{' '}
          <Link href="/register" className="underline underline-offset-2">
            create a free account
          </Link>{' '}
          and start marking the counties and industries you follow.
        </p>
      </div>

      <div className="mt-10">
        <PlanGrid
          plans={plans}
          isAuthenticated={session.viewer.isAuthenticated}
          currentPlanCode={session.planCode}
        />
      </div>

      <section className="mt-16">
        <SectionHeading
          title="Feature comparison"
          description="Every capability, per tier. These are the same limits the application enforces on the server."
        />
        <div className="surface overflow-x-auto">
          <table className="min-w-[720px] text-sm">
            <caption className="sr-only">
              Comparison of features across the four membership tiers
            </caption>
            <thead>
              <tr className="border-b border-ink-200 bg-ink-50">
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  Feature
                </th>
                {codes.map((code) => (
                  <th
                    key={code}
                    scope="col"
                    className="px-4 py-3 text-left font-semibold capitalize"
                  >
                    {code === 'free'
                      ? 'Free'
                      : code === 'weekly'
                        ? 'Weekly'
                        : code === 'detailed'
                          ? 'Detailed'
                          : 'Premium'}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-ink-100 last:border-0"
                >
                  <th scope="row" className="px-4 py-3 text-left font-medium">
                    {row.label}
                  </th>
                  {codes.map((code) => (
                    <td key={code} className="px-4 py-3 text-ink-700">
                      {row.render(code)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <SectionHeading title="Billing questions" />
        <dl className="divide-y divide-ink-200">
          {BILLING_FAQ.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-semibold">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
