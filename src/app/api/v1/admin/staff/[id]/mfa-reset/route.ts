import type { NextResponse } from 'next/server';
import { z } from 'zod';

import { getViewer } from '@/lib/auth/session';
import { createAdminClient } from '@/lib/db/admin';
import { createServerSupabaseClient } from '@/lib/db/server';
import {
  checkRateLimit,
  rateLimitHeaders,
  rateLimitIdentity,
} from '@/lib/http/rate-limit';
import {
  apiError,
  ok,
  rateLimited,
  validationFailed,
  withErrorHandling,
} from '@/lib/http/responses';

export const dynamic = 'force-dynamic';

type RouteContext = { params: Promise<{ id: string }> };

const bodySchema = z.object({
  /** Why the factor is being removed. Recorded; not optional. */
  reason: z.string().trim().min(10).max(500),
});

/**
 * POST /api/v1/admin/staff/{id}/mfa-reset
 *
 * Removes a staff member's enrolled TOTP factors so they can enrol again on a
 * new device. Until now this needed someone with Supabase dashboard access to
 * delete the factor by hand, which meant the recovery path for a locked-out
 * administrator ran outside the product and outside the audit log.
 *
 * Restricted to **super administrators** — not billing managers, not support,
 * and never by rank. Resetting someone's second factor is the single most
 * sensitive administrative action in the product: it is the step an attacker
 * needs after taking a password, so it carries the narrowest role, a mandatory
 * written reason, and an audit entry naming both parties.
 *
 * Deliberately cannot target your own account. A super administrator who has
 * lost their own authenticator must be reset by another super administrator;
 * self-service would make the second factor optional for exactly the account
 * where it matters most.
 */
export const POST = withErrorHandling(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (request: Request, context: any): Promise<NextResponse> => {
    const { id: targetId } = await (context as RouteContext).params;

    const viewer = await getViewer();
    if (
      !viewer.isAuthenticated ||
      viewer.accountStatus !== 'active' ||
      viewer.role !== 'super_administrator'
    ) {
      return apiError(
        'forbidden',
        'Only a super administrator may reset a second factor.',
      );
    }

    if (targetId === viewer.userId) {
      return apiError(
        'forbidden',
        'You cannot reset your own second factor. Ask another super ' +
          'administrator, so that losing a device never silently removes the ' +
          'protection from the account that most needs it.',
      );
    }

    const parsed = bodySchema.safeParse(await request.json());
    if (!parsed.success) return validationFailed(parsed.error);

    const limit = await checkRateLimit(
      'mfaReset',
      rateLimitIdentity(request, viewer.userId),
    );
    if (!limit.allowed) return rateLimited(limit.resetAt);

    // Read the target through the session client so row-level security
    // confirms the caller may see them at all before anything is changed.
    const supabase = await createServerSupabaseClient();
    const { data: target } = await supabase
      .from('profiles')
      .select('id, role, display_name, account_status')
      .eq('id', targetId)
      .maybeSingle();

    if (!target) {
      return apiError('not_found', 'No such staff account.');
    }

    const targetRole = (target as { role: string }).role;
    const STAFF = [
      'researcher',
      'reviewer',
      'editor',
      'support_representative',
      'billing_manager',
      'super_administrator',
    ];
    if (!STAFF.includes(targetRole)) {
      return apiError(
        'bad_request',
        'That account is a member, and members do not hold an admin factor.',
      );
    }

    // Listing and deleting another user's factors is an Auth admin operation,
    // so this is one of the few legitimate service-role paths. The role check
    // above is the gate; RLS cannot express "may administer another user's
    // auth factors" because the factors do not live in a policy-covered table.
    const admin = createAdminClient();

    const { data: factorList, error: listError } =
      await admin.auth.admin.mfa.listFactors({ userId: targetId });

    if (listError) {
      return apiError('conflict', 'Could not read the enrolled factors.', {
        reason: listError.message,
      });
    }

    const factors = factorList?.factors ?? [];
    if (factors.length === 0) {
      return apiError(
        'not_found',
        'That account has no enrolled factor to reset.',
      );
    }

    const removed: string[] = [];
    for (const factor of factors) {
      const { error } = await admin.auth.admin.mfa.deleteFactor({
        userId: targetId,
        id: factor.id,
      });
      if (error) {
        return apiError('conflict', 'A factor could not be removed.', {
          factorId: factor.id,
          reason: error.message,
          removedSoFar: removed,
        });
      }
      removed.push(factor.id);
    }

    // Written after the factors are actually gone, so the trail never records
    // a reset that did not happen.
    const { error: auditError } = await supabase.rpc('log_admin_action', {
      p_action: 'user.mfa_reset',
      p_entity_type: 'profile',
      p_entity_id: targetId,
      p_previous: { enrolledFactors: factors.length },
      p_new: {
        removedFactorIds: removed,
        targetRole,
        reason: parsed.data.reason,
        resetBy: viewer.userId,
      },
    });

    if (auditError) {
      console.error('[mfa-reset] factors removed but audit entry failed', {
        targetId,
        error: auditError.message,
      });
    }

    return ok(
      {
        userId: targetId,
        removedFactors: removed.length,
        audited: !auditError,
        message:
          'The factor has been removed. They can enrol a new device at ' +
          '/admin/security the next time they open the admin area.',
      },
      undefined,
      { headers: rateLimitHeaders(limit) },
    );
  },
);
