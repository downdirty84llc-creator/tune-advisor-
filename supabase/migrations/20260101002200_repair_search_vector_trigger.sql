-- ---------------------------------------------------------------------------
-- 0022 — Repair the search-vector refresh trigger
--
-- Recovered from the live database on 2026-07-31. This change had been applied
-- to the hosted project but never committed here, so a `supabase db reset` from
-- this repository would have silently reverted it.
--
-- The trigger fires on `opportunities`, `opportunity_industries` and
-- `funding_details`, which do not share a column name for the record being
-- described: the parent table keys on `id`, the child tables on
-- `opportunity_id`. Resolving the target per table is what makes one trigger
-- function serve all three, and DELETE has to read `old` rather than `new`.
-- ---------------------------------------------------------------------------

create or replace function public.refresh_opportunity_search_vector()
returns trigger
language plpgsql
as $$
declare
  target uuid;
begin
  if tg_op = 'DELETE' then
    if tg_table_name = 'opportunities' then
      target := old.id;
    else
      target := old.opportunity_id;
    end if;
  else
    if tg_table_name = 'opportunities' then
      target := new.id;
    else
      target := new.opportunity_id;
    end if;
  end if;

  if target is not null then
    update public.opportunities
    set search_vector = public.build_opportunity_search_vector(target)
    where id = target;
  end if;

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;
