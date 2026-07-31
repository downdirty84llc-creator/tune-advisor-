-- Stripe price ids — LIVE mode, Down Dirty 84 LLC (acct_1QBl8ZINLKqe1c6g)
--
-- Deliberately NOT part of seed.sql.
--
-- seed.sql is environment-neutral reference data that every environment loads.
-- Price ids are not: development, staging and production each use their own
-- Stripe keys, so a live price id loaded into a development database would
-- point that environment at real money. Keeping them here means `supabase db
-- reset` never silently installs live billing into a dev database — you run
-- this file deliberately, against one environment, or not at all.
--
-- The corresponding test-mode file is stripe-prices.test.sql. It does not exist
-- yet; create it from a test-mode price set rather than editing this one.
--
-- Verified against Stripe on 2026-07-31. Amounts match subscription_plans and
-- the published matrix in specification section 6:
--
--   Weekly    $15/mo   $150/yr
--   Detailed  $39/mo   $390/yr
--   Premium   $99/mo   $990/yr
--
-- The Free Preview plan has no Stripe price. It is $0 and never reaches
-- checkout, so both id columns stay null for it on purpose.
--
-- Usage:
--   psql "$DATABASE_URL" -f supabase/stripe-prices.live.sql
--
-- Idempotent: re-running sets the same values.

begin;

update public.subscription_plans set
  stripe_monthly_price_id = 'price_1TzEO3INLKqe1c6gLvq62WD1',  -- $15/mo
  stripe_annual_price_id  = 'price_1TzEO7INLKqe1c6gH20i3Wo2'   -- $150/yr
where code = 'weekly';

update public.subscription_plans set
  stripe_monthly_price_id = 'price_1TzEOAINLKqe1c6ggOvRN5VP',  -- $39/mo
  stripe_annual_price_id  = 'price_1TzEODINLKqe1c6gnKArkYcD'   -- $390/yr
where code = 'detailed';

update public.subscription_plans set
  stripe_monthly_price_id = 'price_1TzEOJINLKqe1c6gYboc5ODU',  -- $99/mo
  stripe_annual_price_id  = 'price_1TzEOMINLKqe1c6ghcReIVhO'   -- $990/yr
where code = 'premium';

commit;

-- Verification. Every paid plan must report ok; free must report
-- 'free plan, no price expected'. Anything else means checkout will still
-- return 409 for that tier.
--
--   select
--     code,
--     monthly_price,
--     annual_price,
--     case
--       when code = 'free' then 'free plan, no price expected'
--       when stripe_monthly_price_id is null then 'MISSING monthly price id'
--       when stripe_annual_price_id is null then 'MISSING annual price id'
--       else 'ok'
--     end as billing_state
--   from public.subscription_plans
--   order by display_order;
