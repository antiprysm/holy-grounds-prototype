import type { Metadata } from "next";
import Image from "next/image";
import { ArrowIcon } from "@/components/SiteChrome";
import { publicAsset, siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.story.metaTitle,
  description: siteContent.story.introduction,
};

export default function OurStoryPage() {
  const content = siteContent.story;
  const cohort = content.leadershipCohort;

  return (
    <main id="main-content">
      <section className="page-hero story-page-hero">
        <div className="page-container page-hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="story-page-title">{content.title}</h1>
            <p className="page-intro">{content.introduction}</p>
          </div>
          <figure className="page-hero-photo story-primary-photo">
            <Image
              src={publicAsset(content.primaryImage)}
              alt={content.primaryImageAlt}
              fill
              sizes="(min-width: 58rem) 42vw, 100vw"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="story-detail-section">
        <div className="page-container story-detail-grid">
          <div className="story-chapters">
            {content.chapters.map((chapter, index) => (
              <article className="story-chapter" key={chapter.title}>
                <span>{String(index + 1).padStart(2, "0")} ·</span>
                <div>
                  <h2>{chapter.title}</h2>
                  {chapter.date ? (
                    <p className="story-chapter-date">{chapter.date}</p>
                  ) : null}
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section
            className="leadership-cohort"
            id={cohort.id}
            aria-labelledby="leadership-cohort-title"
          >
            <div className="leadership-cohort-copy">
              <h2 id="leadership-cohort-title">{cohort.title}</h2>
              {cohort.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="leadership-cohort-details">
              <dl className="cohort-schedule">
                {cohort.schedule.map((detail) => (
                  <div key={detail.label}>
                    <dt>{detail.label}:</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="cohort-interest">
                {cohort.invitation.prompt}{" "}
                <a href={`mailto:${cohort.invitation.email}`}>
                  {cohort.invitation.email}
                </a>{" "}
                {cohort.invitation.suffix}
              </p>

              <div className="cohort-action">
                <a className="button button-primary" href={cohort.action.href}>
                  {cohort.action.label}
                  <ArrowIcon />
                </a>
                <p>{cohort.followUp}</p>
              </div>
            </div>
          </section>

          <aside className="story-aside">
            <figure className="story-secondary-photo">
              <Image
                src={publicAsset(content.secondaryImage)}
                alt={content.secondaryImageAlt}
                fill
                sizes="(min-width: 58rem) 34vw, 100vw"
              />
              <figcaption>{content.secondaryImageCaption}</figcaption>
            </figure>
            <blockquote>
              <p>“{content.pullQuote}”</p>
              <footer>{content.quoteAttribution}</footer>
            </blockquote>
          </aside>
        </div>
      </section>
    </main>
  );
}
