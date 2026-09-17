import { siteContent } from "@/data/siteContent";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-rays" />
      <span className={compact ? "brand-cup brand-cup-compact" : "brand-cup"}>
        <span className="brand-steam brand-steam-one" />
        <span className="brand-steam brand-steam-two" />
        {!compact && <span className="brand-monogram">{siteContent.brand.monogram}</span>}
      </span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  const content = siteContent;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {content.utilityLabels.skipLink}
      </a>

      <header className="site-header">
        <div className="preview-bar">
          <span className="preview-dot" aria-hidden="true" />
          {content.brand.conceptLabel}
        </div>
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label={`${content.brand.name}, home`}>
            <BrandMark compact />
            <span>{content.brand.shortName}</span>
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            {content.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#book">
            {content.utilityLabels.navigationCta}
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="page-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <div className="tagline-wrap">
                <span>{content.hero.taglineLabel}</span>
                <p>“{content.hero.tagline}”</p>
              </div>
              <p className="hero-intro">{content.hero.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={content.hero.primaryAction.href}>
                  {content.hero.primaryAction.label}
                  <ArrowIcon />
                </a>
                <a className="text-link" href={content.hero.secondaryAction.href}>
                  {content.hero.secondaryAction.label}
                </a>
              </div>
            </div>

            <div className="hero-art" aria-label={content.hero.visualNote}>
              <div className="hero-art-border" aria-hidden="true">
                <span className="orbit orbit-one" />
                <span className="orbit orbit-two" />
                <span className="spark spark-one">✦</span>
                <span className="spark spark-two">✦</span>
                <span className="bean bean-one" />
                <span className="bean bean-two" />
              </div>
              <BrandMark />
              <p>{content.hero.visualLabel}</p>
              <span className="art-note">{content.hero.visualNote}</span>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            {content.hero.marquee.map((item) => (
              <span className="marquee-item" key={item}>
                <span>{item}</span>
                <i>✦</i>
              </span>
            ))}
          </div>
        </section>

        <section className="announcement-section" id="visit">
          <div className="page-container announcement-wrap">
            <div className="announcement-heading">
              <p className="eyebrow eyebrow-light">{content.announcement.eyebrow}</p>
              <h2>{content.announcement.title}</h2>
              <p className="announcement-date">{content.announcement.dateLine}</p>
              <p className="announcement-description">{content.announcement.description}</p>
            </div>
            <dl className="event-details">
              {content.announcement.details.map((detail, index) => (
                <div className="event-detail" key={detail.label}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="page-container story-grid">
            <div className="story-heading">
              <p className="eyebrow">{content.story.eyebrow}</p>
              <h2>{content.story.title}</h2>
              <div className="draft-pill">{content.story.status}</div>
            </div>
            <div className="story-copy">
              {content.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote>{content.story.pullQuote}</blockquote>
              <p className="approval-note">{content.story.approvalNote}</p>
            </div>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="page-container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">{content.menu.eyebrow}</p>
                <h2>{content.menu.title}</h2>
              </div>
              <p>{content.menu.intro}</p>
            </div>
            <div className="menu-grid">
              {content.menu.items.map((item) => (
                <article className="menu-card" key={item.number}>
                  <div className="menu-card-top">
                    <span>{item.number}</span>
                    <div className="placeholder-lines" aria-hidden="true">
                      <i /><i /><i />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <p className="section-note">{content.menu.note}</p>
          </div>
        </section>

        <section className="mission-section" id="mission">
          <div className="page-container">
            <div className="section-heading mission-heading">
              <p className="eyebrow eyebrow-light">{content.mission.eyebrow}</p>
              <h2>{content.mission.title}</h2>
              <p>{content.mission.intro}</p>
            </div>
            <div className="mission-grid">
              {content.mission.cards.map((card) => (
                <article className="mission-card" key={card.title}>
                  <span className="mission-number">{card.number}</span>
                  <div className="mission-rule" aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-section" id="book">
          <div className="page-container booking-grid">
            <div className="booking-copy">
              <p className="eyebrow">{content.booking.eyebrow}</p>
              <h2>{content.booking.title}</h2>
              <p>{content.booking.intro}</p>
              <div className="social-card">
                <InstagramIcon />
                <div>
                  <span>{content.social.label}</span>
                  <a href={content.social.href} target="_blank" rel="noreferrer noopener">
                    {content.social.handle}
                  </a>
                </div>
              </div>
            </div>

            <form className="booking-form" aria-describedby="prototype-form-note">
              <div className="prototype-label">
                <span aria-hidden="true" />
                {content.booking.prototypeLabel}
              </div>
              <fieldset disabled>
                <legend className="sr-only">{content.utilityLabels.formLegend}</legend>
                <div className="form-grid">
                  {content.booking.fields.map((field) => (
                    <label key={field.label}>
                      <span>{field.label}</span>
                      <input type="text" placeholder={field.placeholder} />
                    </label>
                  ))}
                </div>
                <label>
                  <span>{content.booking.messageLabel}</span>
                  <textarea placeholder={content.booking.messagePlaceholder} rows={4} />
                </label>
                <button type="button">{content.booking.buttonLabel}</button>
              </fieldset>
              <p id="prototype-form-note">{content.booking.disclaimer}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-grid">
          <div className="footer-brand">
            <BrandMark compact />
            <span>{content.footer.title}</span>
          </div>
          <div>
            <strong>{content.footer.statement}</strong>
            <p>{content.footer.note}</p>
          </div>
          <a href="#top" aria-label="Back to the top of the page">
            {content.utilityLabels.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
