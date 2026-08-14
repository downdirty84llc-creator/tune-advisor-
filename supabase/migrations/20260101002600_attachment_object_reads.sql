-- ---------------------------------------------------------------------------
-- 0026 — Let a member's own session sign an attachment download
--
-- `GET /api/v1/attachments/{id}` reads the attachment row through the
-- session-bound client so row-level security decides visibility, then asks
-- storage for a short-lived signed URL. Signing is itself a `select` against
-- `storage.objects`, and migration `...001800` gave the `attachments` bucket
-- only a staff manage policy — so with no policy for members the signing step
-- failed for exactly the people the endpoint exists for.
--
-- The alternative was to mint the URL with the service-role key, as the
-- exports path does. That is rejected here: the service role bypasses
-- row-level security entirely, and this is a member-facing route, so the one
-- layer that cannot be forgotten in application code would have been the layer
-- removed. A policy keeps the database in the decision.
--
-- Two conditions, and the second is the one worth reading twice:
--
--   * the caller can already see the matching `public.attachments` row, which
--     is `attachments_read` doing the entitlement work — the subquery is
--     evaluated as the querying role, so that policy filters it;
--   * the row's `scan_status` is `clean`.
--
-- The scan condition is redundant with `canServeAttachment` in the route, and
-- deliberately so. Without it a member holding a bucket path could ask storage
-- for the object directly and step around the malware gate; the API check
-- would still be there and would still be useless. Redundancy across layers is
-- the design (see CLAUDE.md, "the access model"), not something to tidy away.
--
-- Note what this does *not* change: staff keep the existing manage policy from
-- `...001800`, which is not scan-gated because staff must be able to replace a
-- file that came back infected. Their download route is still gated —
-- `canServeAttachment` has no staff exemption, on purpose.
-- ---------------------------------------------------------------------------

-- The storage policy joins on `file_path`, and so does the scan job's lookup.
-- Without this the join is a sequential scan on every signed URL.
create index if not exists attachments_file_path_idx
  on public.attachments (file_path);

drop policy if exists "members read servable attachment objects"
  on storage.objects;

create policy "members read servable attachment objects"
  on storage.objects for select
  using (
    bucket_id = 'attachments'
    and public.account_is_active()
    and exists (
      select 1
      from public.attachments a
      where a.file_path = storage.objects.name
        and a.scan_status = 'clean'
    )
  );
