-- ---------------------------------------------------------------------------
-- 0024 — Stripe product id on subscription plans
--
-- Recovered from the live database on 2026-07-31; applied there but never
-- committed here.
--
-- The plan already carried its two price ids. Holding the product id as well
-- makes the mapping between a plan row and its Stripe objects complete and
-- checkable in one query, rather than inferable only by following a price.
--
-- Test-mode and live-mode ids differ, which is why this column is populated per
-- environment (see `supabase/stripe-prices.live.sql`) and not from `seed.sql`.
-- ---------------------------------------------------------------------------

alter table public.subscription_plans
  add column if not exists stripe_product_id text;

comment on column public.subscription_plans.stripe_product_id is
  'Stripe product id for this plan in the current environment''s mode. Test and live ids differ; populate per environment rather than from seed.sql.';

-- Partial so the three unpopulated rows in a fresh environment do not collide
-- on null.
create unique index if not exists subscription_plans_stripe_product_idx
  on public.subscription_plans (stripe_product_id)
  where stripe_product_id is not null;
