import Link from 'next/link';

import { ButtonLink } from '@/components/ui/primitives';
import type { PlanCode } from '@/lib/access/ranks';

/**
 * Site header.
 *
 * Deliberately takes the session as a **prop** rather than resolving it with
 * `getSessionContext()`. Reading the session calls `cookies()`, and a layout
 * that does so forces every route beneath it to render per request — which is
 * how the whole marketing surface became dynamic despite each page declaring
 * its own `revalidate` (ARCHITECTURE §15).
 *
 * The member area already resolves the session for its own redirect, so it
 * passes what it has. The marketing layout renders the signed-out header at
 * build time and swaps in the member view from the browser — see
 * `marketing-header.tsx`.
 */

export interface HeaderSession {
  isStaff: boolean;
  planCode: PlanCode;
  planName: string;
}

const PUBLIC_LINKS = [
  { href: '/commercial-property', label: 'Commercial Property' },
  { href: '/funding', label: 'Funding' },
  { href: '/pricing-reports', label: 'Pricing Reports' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/insights', label: 'Free Insights' },
];

const MEMBER_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/reports', label: 'Reports' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/saved', label: 'Saved' },
  { href: '/account', label: 'Account' },
];

export function SiteHeader({ session }: { session: HeaderSession | null }) {
  const links = session ? MEMBER_LINKS : PUBLIC_LINKS;

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

        <nav
          aria-label="Primary"
          className="order-last w-full overflow-x-auto sm:order-none sm:w-auto sm:flex-1"
        >
          <ul className="flex items-center gap-1 whitespace-nowrap text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-2.5 py-1.5 text-ink-700 hover:bg-ink-100 hover:text-ink-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {session?.isStaff ? (
              <li>
                <Link
                  href="/admin"
                  className="rounded-md bg-clay-50 px-2.5 py-1.5 font-medium text-clay-800 hover:bg-clay-100"
                >
                  Admin
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {session ? (
            <>
              <span className="hidden text-xs text-ink-500 sm:inline">
                {session.planName}
              </span>
              {session.planCode !== 'premium' && !session.isStaff ? (
                <ButtonLink href="/pricing" variant="secondary" className="py-2">
                  Upgrade
                </ButtonLink>
              ) : null}
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md px-2.5 py-1.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                Log in
              </Link>
              <ButtonLink href="/register" className="py-2">
                Join now
              </ButtonLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
