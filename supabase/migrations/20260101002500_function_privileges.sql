-- ---------------------------------------------------------------------------
-- 0025 — Function execute privileges
--
-- Recovered from the live database on 2026-07-31; applied there but never
-- committed here. **This is security hardening, and losing it would be a
-- regression rather than an inconvenience.**
--
-- Postgres grants EXECUTE on new functions to PUBLIC by default. For a
-- `SECURITY DEFINER` function exposed through PostgREST that means any
-- signed-in member — and for `anon`, anyone at all — can call it with the
-- definer's authority. `docs/ARCHITECTURE.md` §9 makes the point about
-- `write_audit_log` specifically: left as-is, a member could forge audit
-- entries. The same reasoning applies to the rate limiter and to the
-- access-rank resolvers, which answer questions about *other* users' accounts
-- when handed a uuid.
--
-- Trigger functions are revoked too. They are invoked by the trigger, never by
-- a client, so there is no reason for them to be callable over the API.
--
-- What is deliberately left callable:
--   `log_admin_action` — the guarded wrapper. It checks `is_staff()` itself, so
--   a member calling it gets nothing. This is the only sanctioned way to write
--   the audit log.
--   `opportunity_facets` — public aggregate counts, used by the sitemap and the
--   county pages. It exposes nothing a visitor cannot already see.
-- ---------------------------------------------------------------------------

revoke all on function public.write_audit_log(text, text, uuid, jsonb, jsonb)
  from public, anon, authenticated;

revoke all on function public.check_rate_limit(text, integer, integer)
  from public, anon, authenticated;

revoke all on function public.prune_rate_limit_counters()
  from public, anon, authenticated;

revoke all on function public.effective_access_rank(uuid)
  from public, anon, authenticated;

revoke all on function public.subscription_access_rank(uuid)
  from public, anon, authenticated;

-- Trigger functions: fired by the database, never called by a client.
revoke all on function public.handle_new_auth_user() from public, anon, authenticated;
revoke all on function public.ensure_free_subscription() from public, anon, authenticated;
revoke all on function public.guard_profile_privilege_changes() from public, anon, authenticated;
revoke all on function public.record_opportunity_version() from public, anon, authenticated;
revoke all on function public.audit_opportunity_changes() from public, anon, authenticated;
revoke all on function public.audit_profile_changes() from public, anon, authenticated;
revoke all on function public.audit_source_deletion() from public, anon, authenticated;
revoke all on function public.audit_correction_publication() from public, anon, authenticated;

grant execute on function public.log_admin_action(text, text, uuid, jsonb, jsonb)
  to authenticated, service_role;

grant execute on function public.opportunity_facets()
  to anon, authenticated, service_role;
