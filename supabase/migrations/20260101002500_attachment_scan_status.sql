-- ---------------------------------------------------------------------------
-- 0025 — Constrain attachment scan status
--
-- `attachments.scan_status` was declared `text not null default 'pending'`
-- with nothing restricting the value, at a time when no code read it. It is
-- now the input to the download gate in `src/lib/attachments/scanning.ts`,
-- which serves a file only when the status is exactly `clean`.
--
-- The gate already refuses anything it does not recognise, so a typo here
-- fails closed rather than open. This constraint is the second half of that:
-- it stops the typo being written in the first place, so a file is never
-- stranded in a state no code can move it out of.
-- ---------------------------------------------------------------------------

update public.attachments
set scan_status = 'pending'
where scan_status is null
   or scan_status not in
      ('pending', 'scanning', 'clean', 'infected', 'failed', 'skipped');

alter table public.attachments
  drop constraint if exists attachment_scan_status_known;

alter table public.attachments
  add constraint attachment_scan_status_known
  check (scan_status in
    ('pending', 'scanning', 'clean', 'infected', 'failed', 'skipped'));

comment on column public.attachments.scan_status is
  'Malware scan result. Only `clean` is served; every other value, including '
  'an unrecognised one, is withheld by canServeAttachment().';

-- Lets the scan job find its queue without a sequential scan once the table
-- has grown.
create index if not exists attachments_scan_status_idx
  on public.attachments (scan_status, uploaded_at)
  where scan_status in ('pending', 'scanning');
