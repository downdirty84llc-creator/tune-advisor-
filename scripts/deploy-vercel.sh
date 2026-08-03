#!/usr/bin/env bash
#
# One-shot Vercel setup: project, environment, production deploy, custom domain.
#
# Everything here can be done from the dashboard; this exists so it is one
# command, repeatable, and identical across environments — and so the exact set
# of variables is recorded in the repository rather than in someone's memory.
#
# Usage:
#
#   export SUPABASE_SERVICE_ROLE_KEY=...   # Supabase → Settings → API
#   export STRIPE_SECRET_KEY=sk_live_...   # Stripe → Developers → API keys
#   ./scripts/deploy-vercel.sh
#
# The three secrets above are the only things this script cannot supply for
# itself. STRIPE_WEBHOOK_SECRET is set later, once the endpoint exists — the
# webhook cannot be created until the domain resolves, so it is a second pass.
#
# Safe to re-run. Environment variables are replaced rather than duplicated,
# and adding a domain that is already attached is a no-op.

set -euo pipefail

PROJECT_NAME="${VERCEL_PROJECT_NAME:-georgia-opportunity-ledger}"
DOMAIN="${LEDGER_DOMAIN:-ledger.downdirty84llc.com}"
SUPABASE_URL="${NEXT_PUBLIC_SUPABASE_URL:-https://bbgikfblcahhvrpxiqnd.supabase.co}"
SUPABASE_ANON_KEY="${NEXT_PUBLIC_SUPABASE_ANON_KEY:-}"

say()  { printf '\n\033[1m%s\033[0m\n' "$*"; }
fail() { printf '\033[31m%s\033[0m\n' "$*" >&2; exit 1; }

# --- Preconditions ----------------------------------------------------------

command -v vercel >/dev/null 2>&1 || fail \
  'Vercel CLI not found. Install it with: npm i -g vercel'

vercel whoami >/dev/null 2>&1 || fail \
  'Not signed in to Vercel. Run: vercel login'

[ -n "${SUPABASE_SERVICE_ROLE_KEY:-}" ] || fail \
  'SUPABASE_SERVICE_ROLE_KEY is not set. Supabase dashboard → Settings → API.
Note it must NOT be exported with a NEXT_PUBLIC_ prefix anywhere — that would
ship a row-level-security bypass to every browser.'

[ -n "${STRIPE_SECRET_KEY:-}" ] || fail \
  'STRIPE_SECRET_KEY is not set. Stripe dashboard → Developers → API keys.'

[ -n "$SUPABASE_ANON_KEY" ] || fail \
  'NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Supabase dashboard → Settings → API.'

# Generated rather than prompted for: nothing else needs to know them, and a
# value someone invents by hand is usually weaker than this.
CRON_SECRET="${CRON_SECRET:-$(openssl rand -base64 48 | tr -d '\n=+/' | cut -c1-64)}"
EMAIL_UNSUBSCRIBE_SECRET="${EMAIL_UNSUBSCRIBE_SECRET:-$(openssl rand -base64 48 | tr -d '\n=+/' | cut -c1-64)}"

# --- Project ----------------------------------------------------------------

say "Linking project '$PROJECT_NAME'"
if [ ! -f .vercel/project.json ]; then
  # `link` succeeds on its own when the project already exists; when it does
  # not, create it first and link again. Written as an explicit branch because
  # `a || b && c` parses as `(a || b) && c`, which is not what it looks like.
  if ! vercel link --yes --project "$PROJECT_NAME"; then
    vercel project add "$PROJECT_NAME"
    vercel link --yes --project "$PROJECT_NAME"
  fi
fi

# --- Environment ------------------------------------------------------------

set_env() {
  local name="$1" value="$2" target="${3:-production}"
  # `env rm` fails when the variable is absent, which is the normal first-run
  # case, so its failure is expected and ignored.
  vercel env rm "$name" "$target" --yes >/dev/null 2>&1 || true
  printf '%s' "$value" | vercel env add "$name" "$target" >/dev/null
  printf '  %s\n' "$name"
}

say 'Setting production environment variables'
set_env NEXT_PUBLIC_SITE_URL            "https://${DOMAIN}"
set_env NEXT_PUBLIC_ENVIRONMENT         production
set_env NEXT_PUBLIC_SUPABASE_URL        "$SUPABASE_URL"
set_env NEXT_PUBLIC_SUPABASE_ANON_KEY   "$SUPABASE_ANON_KEY"
set_env SUPABASE_SERVICE_ROLE_KEY       "$SUPABASE_SERVICE_ROLE_KEY"
set_env STRIPE_SECRET_KEY               "$STRIPE_SECRET_KEY"
set_env CRON_SECRET                     "$CRON_SECRET"
set_env EMAIL_UNSUBSCRIBE_SECRET        "$EMAIL_UNSUBSCRIBE_SECRET"

# Optional — set only when supplied, so a missing analytics key does not become
# the literal string "null" in production.
for optional in \
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY \
  STRIPE_WEBHOOK_SECRET \
  EMAIL_PROVIDER EMAIL_API_KEY EMAIL_FROM EMAIL_REPLY_TO \
  SENTRY_DSN NEXT_PUBLIC_POSTHOG_KEY NEXT_PUBLIC_POSTHOG_HOST
do
  value="${!optional:-}"
  # An `if` rather than `[ … ] && …`: the latter returns non-zero for every
  # unset variable, and under `set -e` that would end the script on the first
  # optional value nobody supplied.
  if [ -n "$value" ]; then
    set_env "$optional" "$value"
  fi
done

# --- Deploy -----------------------------------------------------------------

say 'Deploying to production'
vercel --prod --yes

# --- Domain -----------------------------------------------------------------

say "Attaching $DOMAIN"
vercel domains add "$DOMAIN" "$PROJECT_NAME" || \
  echo '  (already attached, or needs verification — see the inspection below)'

say "DNS record required for $DOMAIN"
vercel domains inspect "$DOMAIN" || true

cat <<EOF

Next, and in this order:

  1. Create the DNS record printed above, wherever downdirty84llc.com is
     managed. It must be an EXPLICIT record for the 'ledger' host. A wildcard
     *.downdirty84llc.com already answers for this name and points at the
     marketing site, so the subdomain will appear to work before it is
     configured. Confirm the app is what answers, not the marketing site.

  2. Once https://${DOMAIN} serves the app, create the Stripe webhook against
     https://${DOMAIN}/api/v1/webhooks/stripe subscribed to
     checkout.session.completed,
     customer.subscription.created|updated|deleted and
     invoice.payment_failed.

  3. Put its signing secret in STRIPE_WEBHOOK_SECRET and re-run this script so
     the value reaches production. Until then Checkout will charge cards
     without granting access — do not take a live payment first.

CRON_SECRET and EMAIL_UNSUBSCRIBE_SECRET were generated for this deployment.
They are stored in Vercel and are not printed here; re-running regenerates them
unless you export the values you want to keep.
EOF
