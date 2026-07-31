'use client';

import { useEffect, useState } from 'react';

import type { PlanCode } from '@/lib/access/ranks';

/**
 * Client-side session resolution.
 *
 * Public pages are cached, so they cannot read the session while rendering:
 * `cookies()` in a server component opts the whole route out of static
 * rendering, which is what previously made every marketing page dynamic
 * (ARCHITECTURE §15). Components that only need the session to *decorate* a
 * cached page — swapping a "Join now" button for a plan name — resolve it here
 * instead, after hydration.
 *
 * This is presentation only, and deliberately so. Nothing gated is decided in
 * the browser: the member area is guarded by middleware, every API route
 * re-checks entitlements, and row-level security refuses paid rows regardless
 * of what this hook reports. The failure direction matches that — a request
 * that errors leaves the signed-out state in place, which offers sign-in
 * rather than implying access.
 */

export interface ClientSession {
  authenticated: boolean;
  isStaff: boolean;
  planCode: PlanCode;
  planName: string;
}

export const SIGNED_OUT_SESSION: ClientSession = {
  authenticated: false,
  isStaff: false,
  planCode: 'free',
  planName: 'Free Preview',
};

export function useClientSession(): ClientSession {
  // Starts signed-out so the first client render matches the prerendered HTML;
  // anything else is a hydration mismatch.
  const [session, setSession] = useState<ClientSession>(SIGNED_OUT_SESSION);

  useEffect(() => {
    const controller = new AbortController();

    async function resolve() {
      try {
        const response = await fetch('/api/v1/auth/session', {
          signal: controller.signal,
          credentials: 'same-origin',
          headers: { accept: 'application/json' },
        });
        if (!response.ok) return;

        const body: unknown = await response.json();
        const data = (body as { data?: Record<string, unknown> } | null)?.data;
        if (!data || data.authenticated !== true) return;

        setSession({
          authenticated: true,
          isStaff: data.isStaff === true,
          planCode: (data.planCode as PlanCode | undefined) ?? 'free',
          planName: (data.planName as string | undefined) ?? 'Free Preview',
        });
      } catch {
        // Aborted or offline. The signed-out state already in place is correct
        // enough to render, and the next navigation retries.
      }
    }

    void resolve();
    return () => controller.abort();
  }, []);

  return session;
}
