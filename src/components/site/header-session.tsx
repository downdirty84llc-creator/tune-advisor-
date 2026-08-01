'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ButtonLink } from '@/components/ui/primitives';

/**
 * The session-dependent part of the marketing header.
 *
 * This exists so the marketing layout can be statically rendered. Reading the
 * session on the server calls `cookies()`, which opts every route under the
 * layout out of static rendering — that single call was defeating the
 * `revalidate` declared on seven marketing routes and all 159 county pages.
 *
 * A client component is still server-rendered for the initial HTML, so the
 * prerendered markup contains the signed-out state: the public nav is present
 * for crawlers, and no member data is baked into a page a shared cache may
 * hold. That second point is the security half of the argument — it is what
 * makes caching these routes safe rather than merely faster.
 *
 * Failure is deliberately silent and falls back to signed-out. The header is
 * navigation, not authorisation: middleware guards protected routes, every API
 * route re-checks entitlements, and RLS refuses paid rows regardless of what
 * is drawn here.
 */

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

interface SessionState {
  authenticated: boolean;
  planCode?: string;
  planName?: string;
  isStaff?: boolean;
}

export function HeaderSession() {
  const [session, setSession] = useState<SessionState>({
    authenticated: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    // One request per marketing page view, including for visitors who will
    // never have a session. Supabase's auth cookies are httpOnly, so the client
    // cannot cheaply tell whether asking is worthwhile. The fix is a
    // non-identifying hint cookie set in middleware — deferred, because a new
    // cookie has to be listed in the cookie policy and that document is inside
    // the pending legal review.
    fetch('/api/v1/auth/session', {
      signal: controller.signal,
      credentials: 'same-origin',
      headers: { accept: 'application/json' },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((body) => {
        const data = body?.data;
        if (data?.authenticated) {
          setSession({
            authenticated: true,
            planCode: data.planCode,
            planName: data.planName,
            isStaff: Boolean(data.isStaff),
          });
        }
      })
      .catch(() => {
        // Aborted, offline, or the endpoint is unhappy. Stay signed out.
      });

    return () => controller.abort();
  }, []);

  const links = session.authenticated ? MEMBER_LINKS : PUBLIC_LINKS;

  return (
    <>
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
          {session.isStaff ? (
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

      {/*
        Minimum width reserves room for whichever cluster wins, so resolving the
        session swaps the contents without shifting the logo or the nav beside
        it. The swap is instant and unanimated — there is nothing here for
        prefers-reduced-motion to suppress.
      */}
      <div className="ml-auto flex min-w-[164px] items-center justify-end gap-3">
        {session.authenticated ? (
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
    </>
  );
}
