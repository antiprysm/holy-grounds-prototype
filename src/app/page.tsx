import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, InstagramIcon } from "@/components/SiteChrome";
import { publicAsset, siteContent } from "@/data/siteContent";

export default function Home() {
  const content = siteContent.home;

  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="page-container hero-grid">
          <div className="hero-copy">
            <div className="hero-seal" aria-hidden="true">
              <Image
                src={publicAsset(siteContent.brand.logoBrown)}
                alt=""
                width={88}
                height={85}
                priority
              />
            </div>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <div className="tagline-wrap">
              <span>{content.hero.taglineLabel}</span>
              <p>“{content.hero.tagline}”</p>
            </div>
            <p className="hero-intro">{content.hero.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={content.hero.primaryAction.href}>
                {content.hero.primaryAction.label}
                <ArrowIcon />
              </Link>
              <Link className="text-link" href={content.hero.secondaryAction.href}>
                {content.hero.secondaryAction.label}
              </Link>
            </div>
          </div>

          <figure className="hero-photo">
            <Image
              src={publicAsset(content.hero.image)}
              alt={content.hero.imageAlt}
              fill
              sizes="(min-width: 58rem) 42vw, 100vw"
              priority
            />
            <figcaption>{content.hero.imageCaption}</figcaption>
          </figure>
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

      <section className="story-preview-section" id="story">
        <div className="page-container story-preview-grid">
          <figure className="story-preview-photo">
            <Image
              src={publicAsset(content.storyPreview.image)}
              alt={content.storyPreview.imageAlt}
              fill
              sizes="(min-width: 58rem) 42vw, 100vw"
            />
          </figure>
          <div className="story-preview-copy">
            <p className="eyebrow">{content.storyPreview.eyebrow}</p>
            <h2>{content.storyPreview.title}</h2>
            <p>{content.storyPreview.description}</p>
            <Link className="button button-outline" href={content.storyPreview.action.href}>
              {content.storyPreview.action.label}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="mission-section" id="mission">
        <div className="page-container">
          <div className="mission-heading">
            <div>
              <p className="eyebrow eyebrow-light">{content.mission.eyebrow}</p>
              <h2>{content.mission.title}</h2>
            </div>
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
          <Image
            className="phrase-artwork"
            src={publicAsset(siteContent.brand.phraseArtwork)}
            alt="Where miracles are brewing"
            width={1280}
            height={777}
          />
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="page-container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{content.gallery.eyebrow}</p>
              <h2>{content.gallery.title}</h2>
            </div>
            <p>{content.gallery.intro}</p>
          </div>
          <div className="gallery-grid">
            {content.gallery.items.map((item) => (
              <figure className={`gallery-card gallery-${item.layout}`} key={item.src}>
                <Image
                  src={publicAsset(item.src)}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 64rem) 33vw, (min-width: 42rem) 50vw, 100vw"
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
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
                <span>{siteContent.social.label}</span>
                <a
                  href={siteContent.social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {siteContent.social.handle}
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
              <legend className="sr-only">Event inquiry preview</legend>
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
  );
}
