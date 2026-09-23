import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/SiteChrome";
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
              className={`business-detail${"href" in detail ? " business-linked-detail" : ""}`}
              key={detail.label}
            >
              <p>{detail.label}</p>
              <h2>
                {"href" in detail ? (
                  detail.href.startsWith("/") ? (
                    <Link href={detail.href}>{detail.value}</Link>
                  ) : (
                    <a href={detail.href}>{detail.value}</a>
                  )
                ) : (
                  detail.value
                )}
              </h2>
              <span>{detail.note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="business-operations-section">
        <div className="page-container business-operations-panel">
          <div className="business-operations-heading">
            <p className="eyebrow eyebrow-light">{content.operations.eyebrow}</p>
            <h2>{content.operations.title}</h2>
            <p>{content.operations.intro}</p>
          </div>

          <div className="business-request-grid">
            {content.operations.items.map((item) => (
              <article className="business-request-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  className="business-request-link"
                  href={item.action.href}
                  {...(item.action.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.action.label}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <p className="business-disclaimer">{content.disclaimer}</p>
        </div>
      </section>
    </main>
  );
}
