-- ---------------------------------------------------------------------------
-- 0027 — Pin search_path on the remaining functions
--
-- Recovered from the live database on 2026-07-31; applied there but never
-- committed here. **Security hardening — losing it would be a regression.**
--
-- A function without a pinned `search_path` resolves unqualified names using
-- the caller's. For a `SECURITY DEFINER` function that is a privilege-escalation
-- route: create a table or operator earlier in your own path and the function
-- may call yours with the definer's authority. Pinning to `public, extensions`
-- closes it.
--
-- The functions listed here are the ones that were still unpinned. The
-- access-control and audit functions were already pinned when they were
-- written; this migration finishes the job for the lifecycle, formatting and
-- trigger helpers.
--
-- Verify with:
--   select proname, proconfig from pg_proc p
--   join pg_namespace n on n.oid = p.pronamespace
--   where n.nspname = 'public' and proconfig is null;
-- ---------------------------------------------------------------------------

alter function public.apply_source_check() set search_path = public, extensions;
alter function public.attach_updated_at(target regclass) set search_path = public, extensions;
alter function public.build_opportunity_search_vector(target_id uuid) set search_path = public, extensions;
alter function public.closing_soon_window() set search_path = public, extensions;
alter function public.derive_indicator_movement() set search_path = public, extensions;
alter function public.maintain_opportunity_lifecycle() set search_path = public, extensions;
alter function public.opportunity_change_is_material(old_row opportunities, new_row opportunities) set search_path = public, extensions;
alter function public.past_due_grace_period() set search_path = public, extensions;
alter function public.refresh_opportunity_search_vector() set search_path = public, extensions;
alter function public.reverification_interval() set search_path = public, extensions;
alter function public.set_updated_at() set search_path = public, extensions;
alter function public.slugify(input text) set search_path = public, extensions;
alter function public.staff_access_rank() set search_path = public, extensions;

-- Recorded on the table itself so the next person to run the security linter
-- does not "fix" a deliberate configuration. RLS with no policy denies every
-- API role, which is exactly what this table wants.
comment on table public.rate_limit_counters is
  'Row-level security is enabled with no policy on purpose: that denies every API role. Only the service role touches this table, and it bypasses RLS.';
