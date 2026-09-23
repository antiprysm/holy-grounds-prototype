import type { Metadata } from "next";
import Image from "next/image";
import { publicAsset, siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.menu.metaTitle,
  description: `${siteContent.menu.title}. ${siteContent.menu.availabilityNote}`,
};

export default function MenuPage() {
  const content = siteContent.menu;

  return (
    <main id="main-content">
      <section className="menu-page-hero page-hero">
        <div className="page-container menu-page-heading">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="page-intro">{content.intro}</p>
          </div>
          <Image
            className="menu-logo"
            src={publicAsset(siteContent.brand.badgeBrown)}
            alt="Holy Grounds monogram"
            width={230}
            height={222}
            priority
          />
        </div>
        <div className="page-container availability-banner">
          <span aria-hidden="true">✦</span>
          <strong>{content.availabilityNote}</strong>
        </div>
      </section>

      <section className="menu-board-section">
        <div className="page-container menu-board">
          {content.groups.map((group) => (
            <section
              className={`menu-group${"featured" in group && group.featured ? " menu-group-featured" : ""}`}
              key={group.title}
            >
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="menu-item-line">
                      <strong>{item.name}</strong>
                      <span aria-hidden="true" />
                      {item.price && <b>{item.price}</b>}
                    </div>
                    {"options" in item && item.options && (
                      <p className="menu-item-options">{item.options}</p>
                    )}
                    {"note" in item && item.note && <p>{item.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="page-container menu-customization">
          <h2>{content.customization.title}</h2>
          <p>{content.customization.description}</p>
        </section>
      </section>
    </main>
  );
}
