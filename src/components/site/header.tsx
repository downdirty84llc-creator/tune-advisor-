import Link from 'next/link';

import { HeaderSession } from '@/components/site/header-session';

/**
 * The marketing header: static chrome plus a client island for the parts that
 * depend on who is looking.
 *
 * Deliberately **not** an async server component. Reading the session here
 * calls `cookies()`, which makes every route under the marketing layout render
 * per request — which is exactly what defeated the `revalidate` on seven
 * marketing routes and all 159 county pages. Nothing in this file touches the
 * session, so the layout can be prerendered.
 *
 * The member area uses `MemberHeader` instead, which resolves the session on
 * the server. Member routes are per-user by definition and already send
 * `private, no-store` (see `next.config.mjs`), so there is nothing to gain from
 * a client island there and a needless request to lose.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-ink-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-sm font-bold text-white"
          >
            GA
          </span>
          <span className="text-[15px] leading-tight">
            Georgia
            <br className="hidden sm:block" /> Opportunity Ledger
          </span>
        </Link>

        <HeaderSession />
      </div>
    </header>
  );
}
