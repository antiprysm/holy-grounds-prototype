import type { Metadata } from "next";
import Image from "next/image";
import { LegacyLeadershipCohortRedirect } from "@/components/LegacyLeadershipCohortRedirect";
import { publicAsset, siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.story.metaTitle,
  description: siteContent.story.introduction,
};

export default function OurStoryPage() {
  const content = siteContent.story;

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

          <LegacyLeadershipCohortRedirect />

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
