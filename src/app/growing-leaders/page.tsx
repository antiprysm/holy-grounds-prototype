import type { Metadata } from "next";
import { ArrowIcon } from "@/components/SiteChrome";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.growingLeaders.metaTitle,
  description: siteContent.growingLeaders.paragraphs[0],
};

export default function GrowingLeadersPage() {
  const content = siteContent.growingLeaders;

  return (
    <main id="main-content">
      <section className="growing-leaders-page-section">
        <div className="page-container">
          <section
            className="leadership-cohort growing-leaders-cohort"
            id={content.id}
            aria-labelledby="growing-leaders-title"
          >
            <div className="leadership-cohort-copy">
              <p className="eyebrow">{content.eyebrow}</p>
              <h1 className="growing-leaders-title" id="growing-leaders-title">
                {content.title}
              </h1>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="leadership-cohort-details">
              <dl className="cohort-schedule">
                {content.schedule.map((detail) => (
                  <div key={detail.label}>
                    <dt>{detail.label}:</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="cohort-interest">
                {content.invitation.prompt}{" "}
                <a href={`mailto:${content.invitation.email}`}>
                  {content.invitation.email}
                </a>{" "}
                {content.invitation.suffix}
              </p>

              <div className="cohort-action">
                <a className="button button-primary" href={content.action.href}>
                  {content.action.label}
                  <ArrowIcon />
                </a>
                <p>{content.followUp}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
