import type { Metadata } from "next";
import Image from "next/image";
import { publicAsset, siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.business.metaTitle,
  description: siteContent.business.intro,
};

export default function BusinessInformationPage() {
  const content = siteContent.business;

  return (
    <main id="main-content">
      <section className="page-hero business-page-hero">
        <div className="page-container page-hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="page-intro">{content.intro}</p>
          </div>
          <figure className="page-hero-photo business-photo">
            <Image
              src={publicAsset(content.image)}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 58rem) 42vw, 100vw"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="business-details-section">
        <div className="page-container business-details-grid">
          {content.details.map((detail) => (
            <article
              className={`business-detail${"placeholder" in detail && detail.placeholder ? " business-placeholder" : ""}`}
              key={detail.label}
            >
              <p>{detail.label}</p>
              <h2>{detail.value}</h2>
              <span>{detail.note}</span>
            </article>
          ))}
        </div>
        <p className="page-container business-disclaimer">{content.disclaimer}</p>
      </section>
    </main>
  );
}
