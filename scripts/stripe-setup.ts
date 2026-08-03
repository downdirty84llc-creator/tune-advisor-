/* eslint-disable no-console */
/**
 * Stripe product and price setup.
 *
 * Creates the four plan products and the six recurring prices the Ledger
 * sells, then optionally writes the resulting price ids onto
 * `subscription_plans`. Run it against a **test** key to build the environment
 * the tier-by-tier payment matrix in RUNBOOK.md needs:
 *
 *     STRIPE_SECRET_KEY=sk_test_... npm run stripe:setup
 *
 * Live mode already has all of this — it was created by hand — so the script
 * exists mainly to make test mode a single command, and to give live mode a
 * repeatable definition rather than one that lives only in the dashboard.
 *
 * Idempotent in both directions. Products are matched on the `plan_code`
 * metadata field and prices on their `lookup_key`, so re-running reconciles
 * rather than duplicating. Prices are immutable in Stripe: if an amount has
 * changed, the script reports the mismatch and leaves the existing price
 * alone rather than quietly creating a second one and leaving you to guess
 * which is live.
 *
 * Amounts here are the published tier prices (spec 6, operating system §16.1).
 * Changing one is an owner decision, not a code change — see CLAUDE.md.
 */

import Stripe from 'stripe';

const SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY must be set.');
  process.exit(1);
}

const LIVE = SECRET_KEY.startsWith('sk_live_');

/** Also write the price ids onto subscription_plans when the DB is reachable. */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

interface PlanDefinition {
  code: string;
  name: string;
  description: string;
  accessRank: number;
  /** Amounts in cents. A plan with no prices is never charged for. */
  monthly: number | null;
  annual: number | null;
}

const PLANS: readonly PlanDefinition[] = [
  {
    code: 'free',
    name: 'Georgia Opportunity Ledger — Free Preview',
    description:
      'Free access: limited previews, the public weekly summary and market indicators.',
    accessRank: 0,
    monthly: null,
    annual: null,
  },
  {
    code: 'weekly',
    name: 'Georgia Opportunity Ledger — Weekly',
    description:
      'The full weekly report, searchable database access and the deadline calendar.',
    accessRank: 10,
    monthly: 1500,
    annual: 15000,
  },
  {
    code: 'detailed',
    name: 'Georgia Opportunity Ledger — Detailed',
    description:
      'Everything in Weekly plus detailed record analysis, saved searches and CSV export.',
    accessRank: 20,
    monthly: 3900,
    annual: 39000,
  },
  {
    code: 'premium',
    name: 'Georgia Opportunity Ledger — Premium',
    description:
      'Everything in Detailed plus immediate alerts, premium briefings and the full archive.',
    accessRank: 30,
    monthly: 9900,
    annual: 99000,
  },
];

const stripe = new Stripe(SECRET_KEY, { typescript: true });

function lookupKey(code: string, interval: 'monthly' | 'annual'): string {
  return `gol_${code}_${interval}`;
}

async function findProduct(code: string): Promise<Stripe.Product | null> {
  // Metadata is not directly filterable on the list endpoint, so search where
  // it is available and fall back to a scan of active products.
  try {
    const found = await stripe.products.search({
      query: `metadata['plan_code']:'${code}'`,
      limit: 1,
    });
    if (found.data[0]) return found.data[0];
  } catch {
    // Search is not enabled on every account; fall through to the scan.
  }

  for await (const product of stripe.products.list({ limit: 100 })) {
    if (product.metadata?.plan_code === code) return product;
  }
  return null;
}

async function ensureProduct(plan: PlanDefinition): Promise<Stripe.Product> {
  const existing = await findProduct(plan.code);
  if (existing) {
    console.log(`  product  ${plan.code.padEnd(9)} exists  ${existing.id}`);
    return existing;
  }

  const created = await stripe.products.create({
    name: plan.name,
    description: plan.description,
    type: 'service',
    metadata: {
      plan_code: plan.code,
      access_rank: String(plan.accessRank),
      product_line: 'georgia_opportunity_ledger',
    },
  });
  console.log(`  product  ${plan.code.padEnd(9)} created ${created.id}`);
  return created;
}

async function ensurePrice(
  product: Stripe.Product,
  plan: PlanDefinition,
  interval: 'monthly' | 'annual',
  amount: number,
): Promise<string> {
  const key = lookupKey(plan.code, interval);

  const existing = await stripe.prices.list({
    lookup_keys: [key],
    limit: 1,
    active: true,
  });

  const found = existing.data[0];
  if (found) {
    if (found.unit_amount !== amount) {
      // Prices are immutable. Creating a second one silently would leave two
      // plausible prices and no indication which the application charges.
      console.warn(
        `  price    ${key.padEnd(22)} MISMATCH: Stripe has ` +
          `${found.unit_amount}, definition says ${amount}. Left unchanged — ` +
          `a price change is an owner decision, and the old price must be ` +
          `deactivated deliberately.`,
      );
    } else {
      console.log(`  price    ${key.padEnd(22)} exists  ${found.id}`);
    }
    return found.id;
  }

  const created = await stripe.prices.create({
    product: product.id,
    currency: 'usd',
    unit_amount: amount,
    recurring: { interval: interval === 'annual' ? 'year' : 'month' },
    lookup_key: key,
    nickname: `${plan.code} — ${interval}`,
    metadata: { plan_code: plan.code, billing_interval: interval },
  });
  console.log(`  price    ${key.padEnd(22)} created ${created.id}`);
  return created.id;
}

async function writePriceIdsToDatabase(
  priceIds: Map<string, { monthly: string | null; annual: string | null }>,
): Promise<void> {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    console.log(
      '\nSkipping subscription_plans update: NEXT_PUBLIC_SUPABASE_URL and ' +
        'SUPABASE_SERVICE_ROLE_KEY are not both set.',
    );
    return;
  }

  const { createClient } = await import('@supabase/supabase-js');
  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  console.log('\nWriting price ids onto subscription_plans');
  for (const [code, ids] of priceIds) {
    if (!ids.monthly && !ids.annual) continue;

    const { error } = await admin
      .from('subscription_plans')
      .update({
        stripe_monthly_price_id: ids.monthly,
        stripe_annual_price_id: ids.annual,
      })
      .eq('code', code);

    if (error) {
      console.error(`  ${code.padEnd(9)} failed: ${error.message}`);
      process.exitCode = 1;
    } else {
      console.log(`  ${code.padEnd(9)} updated`);
    }
  }
}

async function main(): Promise<void> {
  // The live guard runs before any network call, so a key pasted in by mistake
  // is refused on the spot rather than after a round trip.
  if (LIVE && process.env.STRIPE_SETUP_ALLOW_LIVE !== '1') {
    console.error(
      'Refusing to run against a LIVE key.\n\n' +
        'Existing products and prices are reused, never duplicated or ' +
        'repriced, but anything missing would be created for real. If that is ' +
        'genuinely what you want, set STRIPE_SETUP_ALLOW_LIVE=1.',
    );
    process.exit(1);
  }

  const account = await stripe.accounts.retrieve();
  console.log(
    `Stripe account ${account.id} (${account.settings?.dashboard?.display_name ?? 'unnamed'})`,
  );
  console.log(`Mode: ${LIVE ? 'LIVE' : 'test'}\n`);

  const priceIds = new Map<
    string,
    { monthly: string | null; annual: string | null }
  >();

  for (const plan of PLANS) {
    console.log(plan.code);
    const product = await ensureProduct(plan);

    const monthly = plan.monthly
      ? await ensurePrice(product, plan, 'monthly', plan.monthly)
      : null;
    const annual = plan.annual
      ? await ensurePrice(product, plan, 'annual', plan.annual)
      : null;

    priceIds.set(plan.code, { monthly, annual });
  }

  await writePriceIdsToDatabase(priceIds);

  console.log('\nDone.');
  if (!LIVE) {
    console.log(
      'Test mode is ready. Run the tier-by-tier payment matrix in ' +
        'docs/RUNBOOK.md with card 4242 4242 4242 4242 before touching live.',
    );
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
