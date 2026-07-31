'use client';

import { SiteHeader } from '@/components/site/header';
import { useClientSession } from '@/lib/auth/use-session';

/**
 * The header for public pages.
 *
 * Marketing routes declare a `revalidate` because they are the acquisition
 * surface and should be served from cache. Resolving the session on the server
 * to render the header defeated that for every one of them, so the signed-out
 * header is what gets prerendered — correct for the visitor these pages are
 * cached *for* — and a member's view is filled in after hydration.
 *
 * The cost, stated rather than hidden: a signed-in member visiting a marketing
 * page sees the signed-out header for one paint. That is the price of the
 * cache, and it is paid on the pages members visit least. The member area
 * renders its header server-side from a session it has already resolved, so
 * there is no flash where it would actually be noticed.
 */
export function MarketingHeader() {
  const session = useClientSession();

  return (
    <SiteHeader
      session={
        session.authenticated
          ? {
              isStaff: session.isStaff,
              planCode: session.planCode,
              planName: session.planName,
            }
          : null
      }
    />
  );
}
