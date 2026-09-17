export const siteContent = {
  meta: {
    title: "Holy Grounds Coffee Truck | Concept Preview",
    description:
      "A private discussion prototype for Holy Grounds Coffee Truck. Not a published website.",
  },
  brand: {
    shortName: "Holy Grounds",
    name: "Holy Grounds Coffee Truck",
    monogram: "HG",
    conceptLabel: "Private concept preview",
  },
  navigation: [
    { label: "Visit", href: "#visit" },
    { label: "Our story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Mission", href: "#mission" },
  ],
  utilityLabels: {
    skipLink: "Skip to content",
    navigationCta: "Event inquiry",
    formLegend: "Event inquiry preview",
    backToTop: "Back to top",
  },
  hero: {
    eyebrow: "Coffee · Community · Encouragement",
    title: "Holy Grounds Coffee Truck",
    tagline: "Faith, hope and love with every cup",
    taglineLabel: "Draft tagline",
    intro:
      "A mobile coffee gathering place centered on simple hospitality, encouraging words, and meaningful connection.",
    primaryAction: { label: "See where we’ll be", href: "#visit" },
    secondaryAction: { label: "Explore the mission", href: "#mission" },
    visualLabel: "A warm welcome is brewing",
    visualNote: "Concept artwork · no photography",
    marquee: ["Faith", "Hope", "Love", "Coffee", "Community"],
  },
  announcement: {
    eyebrow: "Coming up",
    title: "We’re headed to Goebbert’s",
    dateLine: "Beginning September 25",
    description:
      "This announcement is part of the discussion prototype. Event details below remain intentionally open until they are confirmed.",
    details: [
      {
        label: "Event location",
        value: "Exact Goebbert’s location to be confirmed",
      },
      { label: "Hours", value: "Service hours to be confirmed" },
      {
        label: "Dates",
        value: "Begins September 25 · final dates to be confirmed",
      },
    ],
  },
  story: {
    eyebrow: "Our beginning",
    title: "A story taking shape",
    status: "Draft copy · Family review required",
    paragraphs: [
      "Holy Grounds Coffee Truck is being shaped as a place where coffee and connection can meet—one cup, one conversation, and one act of welcome at a time.",
      "Olivia’s place in the Holy Grounds story will be shared here in the family’s own words. This is placeholder language only and must be reviewed and approved by Krista before it is used anywhere beyond this concept preview.",
    ],
    pullQuote:
      "The final story should sound like the family—honest, hopeful, and full of heart.",
    approvalNote:
      "Editorial note: Do not publish language concerning Olivia without Krista’s approval.",
  },
  menu: {
    eyebrow: "What we’ll serve",
    title: "The menu is still brewing",
    intro:
      "These cards reserve space for the real menu without inventing offerings, availability, or pricing before those decisions are made.",
    items: [
      {
        number: "01",
        title: "Menu placeholder",
        description: "Confirmed items will be added here after the meeting.",
      },
      {
        number: "02",
        title: "Menu placeholder",
        description: "Confirmed items will be added here after the meeting.",
      },
      {
        number: "03",
        title: "Menu placeholder",
        description: "Confirmed items will be added here after the meeting.",
      },
    ],
    note: "No products or prices are represented in this preview.",
  },
  mission: {
    eyebrow: "Why Holy Grounds",
    title: "A cup can be a starting place",
    intro:
      "Four possible pillars for the conversation. Each is framed as a direction to explore, not a finalized commitment.",
    cards: [
      {
        number: "01",
        title: "Hospitality",
        description:
          "How might every guest feel seen, welcomed, and cared for from the moment they arrive?",
      },
      {
        number: "02",
        title: "Words to Live By",
        description:
          "What words could offer a little hope, courage, or encouragement alongside each cup?",
      },
      {
        number: "03",
        title: "Future Leaders",
        description:
          "How could the truck create meaningful opportunities for young people to learn and grow?",
      },
      {
        number: "04",
        title: "Coffee With Purpose",
        description:
          "How might everyday coffee moments become part of a larger story of generosity and service?",
      },
    ],
  },
  booking: {
    eyebrow: "Gather around",
    title: "Imagine Holy Grounds at your event",
    intro:
      "This section previews a future event-inquiry experience. The form is intentionally disabled: nothing entered here is sent, stored, or reserved.",
    prototypeLabel: "Nonfunctional prototype form",
    fields: [
      { label: "Name or organization", placeholder: "Enter a name" },
      { label: "Email", placeholder: "Enter an email address" },
      { label: "Desired date", placeholder: "Select a date" },
      { label: "Event location", placeholder: "Enter a location" },
    ],
    messageLabel: "Tell us about the gathering",
    messagePlaceholder: "Add event details",
    buttonLabel: "Preview only — form disabled",
    disclaimer: "No booking request will be submitted.",
  },
  social: {
    label: "Follow the journey on Instagram",
    handle: "@holygrounds.coffeetruck",
    href: "https://www.instagram.com/holygrounds.coffeetruck/",
  },
  footer: {
    title: "Holy Grounds Coffee Truck",
    statement:
      "Concept preview for discussion only. Not the official published website.",
    note: "Details, language, offerings, and availability are subject to review and approval.",
  },
} as const;
