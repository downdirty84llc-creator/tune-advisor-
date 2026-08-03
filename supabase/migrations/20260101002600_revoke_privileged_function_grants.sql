-- ---------------------------------------------------------------------------
-- 0026 — Re-revoke privileged function grants
--
-- Recovered from the live database on 2026-07-31; applied there but never
-- committed here.
--
-- This overlaps 0025 on purpose and is kept rather than folded into it, because
-- that is the order the live database actually ran and collapsing the two would
-- make this file a description of history rather than a record of it.
--
-- The one line here that is not a repeat is the `anon` revoke on
-- `log_admin_action`: 0025 grants it to `authenticated` and `service_role`, and
-- this removes any residual signed-out access. The wrapper checks `is_staff()`
-- regardless, so this is defence in depth rather than the control itself.
--
-- `revoke` on an already-revoked privilege is a no-op, so re-running is safe.
-- ---------------------------------------------------------------------------

revoke execute on function public.write_audit_log(text, text, uuid, jsonb, jsonb)
  from anon, authenticated;

revoke execute on function public.check_rate_limit(text, integer, integer)
  from anon, authenticated;

revoke execute on function public.prune_rate_limit_counters()
  from anon, authenticated;

revoke execute on function public.log_admin_action(text, text, uuid, jsonb, jsonb)
  from anon;

revoke execute on function public.effective_access_rank(uuid)
  from anon, authenticated;

revoke execute on function public.subscription_access_rank(uuid)
  from anon, authenticated;
