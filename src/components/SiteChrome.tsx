import Image from "next/image";
import Link from "next/link";
import { publicAsset, siteContent, siteHref } from "@/data/siteContent";

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DraftPill({ children }: Readonly<{ children: React.ReactNode }>) {
  return <p className="draft-pill">{children}</p>;
}

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {siteContent.utilityLabels.skipLink}
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <Link className="wordmark" href="/" aria-label={`${siteContent.brand.name}, home`}>
            <Image
              src={publicAsset(siteContent.brand.headerLockup)}
              alt=""
              width={1211}
              height={557}
              priority
            />
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            {siteContent.navigation.map((item) =>
              item.href.includes("#") ? (
                <a key={item.href} href={siteHref(item.href)}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <a
            className="nav-cta"
            href={siteHref(siteContent.utilityLabels.navigationCtaHref)}
          >
            {siteContent.utilityLabels.navigationCta}
          </a>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <div className="footer-brand-block">
          <Image
            className="footer-lockup"
            src={publicAsset(siteContent.brand.footerLockup)}
            alt={siteContent.footer.title}
            width={1211}
            height={557}
          />
        </div>

        <div className="footer-contact">
          <a href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {siteContent.footer.links.map((item) => (
            item.href.startsWith("http") ? (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer noopener">
                {item.label}
              </a>
            ) : item.href.includes("#") ? (
              <a key={item.href} href={siteHref(item.href)}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="footer-bottom">
          <p>
            {siteContent.footer.copyright} <span aria-hidden="true">·</span>{" "}
            <Link href={siteContent.footer.businessInformation.href}>
              {siteContent.footer.businessInformation.label}
            </Link>
          </p>
          <a className="footer-back-to-top" href="#top">
            {siteContent.utilityLabels.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
