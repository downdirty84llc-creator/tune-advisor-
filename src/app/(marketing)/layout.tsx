import { SiteFooter } from '@/components/site/footer';
import { MarketingHeader } from '@/components/site/marketing-header';

/**
 * Public shell.
 *
 * Nothing in this layout may read the session: `cookies()` here opts every
 * marketing route out of static rendering, regardless of the `revalidate` each
 * page declares. The header resolves its own session in the browser instead.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
