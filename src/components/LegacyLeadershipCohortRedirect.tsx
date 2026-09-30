"use client";

import { useEffect } from "react";
import { siteHref } from "@/data/siteContent";

const legacyHash = "#leadership-cohort";
const destination = "/growing-leaders#leadership-cohort";

export function LegacyLeadershipCohortRedirect() {
  const destinationHref = siteHref(destination);

  useEffect(() => {
    function redirectLegacyCohortLink() {
      if (window.location.hash === legacyHash) {
        window.location.replace(destinationHref);
      }
    }

    redirectLegacyCohortLink();
    window.addEventListener("hashchange", redirectLegacyCohortLink);

    return () => window.removeEventListener("hashchange", redirectLegacyCohortLink);
  }, [destinationHref]);

  return <span hidden id="leadership-cohort" />;
}
