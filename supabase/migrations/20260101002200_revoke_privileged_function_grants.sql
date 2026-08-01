-- ---------------------------------------------------------------------------
-- 0022 — Close the privileged-function grants that `revoke ... from public`
-- did not actually close.
--
-- Migration 0017 revoked EXECUTE on `write_audit_log` from PUBLIC, on the
-- reasoning in ARCHITECTURE §9: a SECURITY DEFINER function is granted to
-- PUBLIC by default, which would let any signed-in member forge audit entries.
-- Migration 0020 did the same for `check_rate_limit`.
--
-- On Supabase that revoke is not sufficient. Supabase ships
--
--   alter default privileges in schema public
--     grant all on functions to anon, authenticated, service_role;
--
-- so every function created in `public` also receives an *explicit* grant to
-- each of those three roles. `revoke ... from public` removes only the implicit
-- PUBLIC grant and leaves the explicit ones untouched — so both functions
-- remained callable with nothing but the anon key, which is published in the
-- browser bundle.
--
-- Two concrete consequences, both verified against a live project:
--
--   * `write_audit_log` — anyone could insert rows into the append-only audit
--     trail with an arbitrary action, entity_type and entity_id. The actor is
--     stamped from auth.uid(), so entries cannot be attributed to someone else,
--     but the trail could be flooded with fabricated events. That defeats the
--     point of keeping it append-only.
--   * `check_rate_limit` — anyone could increment any bucket. Calling it with
--     another visitor's key (`login:ip:…`) exhausts their window and locks them
--     out of signing in. A rate limiter that anyone can drive is a denial of
--     service, not a control.
--
-- The fix is to revoke from the roles by name. Nothing legitimate breaks:
-- both functions are SECURITY DEFINER and are called either by SECURITY
-- DEFINER triggers and wrappers (which run with the owner's privileges) or by
-- the application through the service-role key.
-- ---------------------------------------------------------------------------

revoke execute on function public.write_audit_log(text, text, uuid, jsonb, jsonb)
  from anon, authenticated;

revoke execute on function public.check_rate_limit(text, integer, integer)
  from anon, authenticated;

revoke execute on function public.prune_rate_limit_counters()
  from anon, authenticated;

-- `log_admin_action` stays available to authenticated because it is the
-- guarded entry point and checks is_staff() itself. An anonymous caller can
-- never satisfy that check, so the grant is only noise.
revoke execute on function public.log_admin_action(text, text, uuid, jsonb, jsonb)
  from anon;

-- These take an arbitrary user id and answer "what is this account's access
-- rank". Policies never call them directly — they go through
-- `my_access_rank()`, which is SECURITY DEFINER and so keeps working — but
-- left exposed they let anyone holding a user's uuid learn whether that
-- account is paid, or staff (rank 100).
revoke execute on function public.effective_access_rank(uuid)
  from anon, authenticated;

revoke execute on function public.subscription_access_rank(uuid)
  from anon, authenticated;

-- Deliberately left executable by anon and authenticated: `is_staff`,
-- `has_role`, `account_is_active`, `current_user_role`,
-- `current_account_status`, `my_access_rank` and `can_view_opportunity` are
-- all called from row-level security policy expressions, which are evaluated
-- with the *querying* role's function privileges. Revoking any of them would
-- make every policy that references it raise a permission error instead of
-- filtering.
