-- ---------------------------------------------------------------------------
-- 0023 — Analytics consent
--
-- The Privacy Policy and the Cookie Policy both told members they could opt out
-- of product analytics from their account, and no such control existed: there
-- was no flag to set, and `track()` recorded every event regardless. A policy
-- that promises a right the software does not implement is an affirmative
-- misstatement, which is a worse position than saying nothing.
--
-- Default is `true`, matching the policy's wording — analytics is on and the
-- member may switch it off — and matching the behaviour every existing account
-- has had until now. Changing the default to `false` would be a stricter
-- privacy posture, but it is a product and revenue decision rather than a
-- correction, so it is not made here.
-- ---------------------------------------------------------------------------

alter table public.user_preferences
  add column if not exists analytics_enabled boolean not null default true;

comment on column public.user_preferences.analytics_enabled is
  'Member consent for product analytics. Enforced in track(); when false, no '
  'analytics_events row is written and nothing is forwarded to the vendor.';
