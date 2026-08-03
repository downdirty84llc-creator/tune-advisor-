-- ---------------------------------------------------------------------------
-- 0023 — Attachment scan lifecycle
--
-- Recovered from the live database on 2026-07-31; applied there but never
-- committed here.
--
-- `docs/MILESTONES.md` lists virus scanning as outstanding. This migration is
-- the database half: the columns, constraints and read policy a scanner needs.
-- **No scanner is wired to it** — nothing moves a row out of `pending` — so the
-- milestone item is still open. What this buys is that the gate exists and
-- fails closed: until something marks a file `clean` or `skipped`, no member
-- can read it.
--
-- Staff deliberately see every status. A quarantined file is exactly the file
-- somebody has to look at, and hiding it from the people who deal with it would
-- make the quarantine unmanageable.
-- ---------------------------------------------------------------------------

alter table public.attachments
  add column if not exists scanned_at timestamptz,
  add column if not exists scan_detail text,
  add column if not exists scanner text,
  add column if not exists scan_attempts integer not null default 0;

-- Anything already carrying an unrecognised status is returned to `pending`
-- before the constraint below is added, so the constraint cannot fail on
-- existing rows.
update public.attachments
set scan_status = 'pending'
where scan_status not in
  ('pending', 'scanning', 'clean', 'infected', 'failed', 'skipped');

alter table public.attachments
  drop constraint if exists attachment_scan_status_known;

alter table public.attachments
  add constraint attachment_scan_status_known check (
    scan_status in
      ('pending', 'scanning', 'clean', 'infected', 'failed', 'skipped')
  );

-- An infected verdict without a reason is not actionable by whoever has to
-- decide what happens to the file.
alter table public.attachments
  drop constraint if exists attachment_infected_has_detail;

alter table public.attachments
  add constraint attachment_infected_has_detail check (
    scan_status <> 'infected' or scan_detail is not null
  );

create index if not exists attachments_scan_pending_idx
  on public.attachments (uploaded_at)
  where scan_status in ('pending', 'scanning', 'failed');

comment on column public.attachments.scan_status is
  'pending -> scanning -> clean | infected | failed | skipped. Members may read only clean and skipped; staff see everything so a quarantined file is visible to whoever has to deal with it.';

drop policy if exists attachments_read on public.attachments;

create policy attachments_read on public.attachments
  for select using (
    public.is_staff()
    or (
      scan_status in ('clean', 'skipped')
      and public.my_access_rank() >= minimum_access_rank
      and (
        opportunity_id is null
        or exists (
          select 1 from public.opportunities o
          where o.id = attachments.opportunity_id
            and public.can_view_opportunity(o.workflow_status, o.is_restricted,
                                            o.minimum_access_rank)
        )
      )
      and (
        report_id is null
        or exists (
          select 1 from public.reports r
          where r.id = attachments.report_id
            and r.status = 'published'
            and public.my_access_rank() >= r.minimum_access_rank
        )
      )
    )
  );
