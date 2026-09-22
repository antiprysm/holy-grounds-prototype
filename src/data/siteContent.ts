export const basePath = "/holy-grounds-prototype";

export function publicAsset(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteContent = {
  meta: {
    title: "Holy Grounds Coffee Truck | Private Concept Preview",
    description:
      "A private meeting preview for Holy Grounds Coffee Truck. Not an official published website.",
  },
  brand: {
    shortName: "Holy Grounds",
    name: "Holy Grounds Coffee Truck",
    conceptLabel: "Private meeting preview · not published",
    logoBlack: "/brand/holy-grounds-logo-black.webp",
    logoBrown: "/brand/holy-grounds-logo-brown.webp",
    phraseArtwork: "/brand/where-miracles-are-brewing.svg",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story/" },
    { label: "Fall Menu", href: "/menu/" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Business Info", href: "/business-information/" },
  ],
  utilityLabels: {
    skipLink: "Skip to content",
    navigationCta: "Event inquiry",
    backToTop: "Back to top",
  },
  home: {
    hero: {
      eyebrow: "Coffee · Community · Encouragement",
      title: "Holy Grounds Coffee Truck",
      tagline: "Faith, hope and love with every cup",
      taglineLabel: "Draft tagline",
      intro:
        "A mobile coffee gathering place centered on generous hospitality, encouraging words, and meaningful connection.",
      primaryAction: { label: "View the fall menu", href: "/menu/" },
      secondaryAction: { label: "Read our draft story", href: "/our-story/" },
      image: "/images/holy-grounds-truck-hero.webp",
      imageAlt:
        "The brown and cream Holy Grounds Coffee Truck parked outside on a clear day",
      imageCaption: "The Holy Grounds Coffee Truck · private preview image",
      marquee: ["Faith", "Hope", "Love", "Coffee", "Community"],
    },
    announcement: {
      eyebrow: "Coming up",
      title: "We’re headed to Goebbert’s",
      dateLine: "Beginning September 25",
      description:
        "This announcement remains part of the meeting preview. The event details below are intentionally open until Krista confirms them.",
      details: [
        { label: "Event location", value: "Exact Goebbert’s location to be confirmed" },
        { label: "Hours", value: "Service hours to be confirmed" },
        { label: "Dates", value: "Begins September 25 · final dates to be confirmed" },
      ],
    },
    storyPreview: {
      eyebrow: "Our beginning",
      title: "A hopeful idea, carried forward",
      status: "Draft copy · Krista’s approval required",
      description:
        "Holy Grounds began with Olivia’s hope of creating a coffee gathering place rooted in faith and genuine care for people. The full draft story is ready for the family to shape in their own words.",
      action: { label: "Read the draft story", href: "/our-story/" },
      image: "/images/olivia-coffee-truck-portrait.webp",
      imageAlt: "Olivia smiling from the Holy Grounds Coffee Truck service window",
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
    gallery: {
      eyebrow: "Around the truck",
      title: "Coffee, connection, and a place to gather",
      intro:
        "A first look at the truck, the people serving from it, and the community moments taking shape around it.",
      items: [
        {
          src: "/images/team-at-coffee-truck.webp",
          alt: "Holy Grounds team members smiling from the truck service windows",
          caption: "A team welcome",
          layout: "wide",
        },
        {
          src: "/images/team-service-window.webp",
          alt: "Two Holy Grounds team members smiling at a service window",
          caption: "Serving together",
          layout: "standard",
        },
        {
          src: "/images/holiday-coffee-truck.webp",
          alt: "The front of the Holy Grounds truck decorated with Merry Christmas lights",
          caption: "A festive evening",
          layout: "tall",
        },
        {
          src: "/images/coffee-truck-interior.webp",
          alt: "A barista working at the espresso machine inside the coffee truck",
          caption: "Inside the truck",
          layout: "tall",
        },
        {
          src: "/images/serving-coffee-at-event.webp",
          alt: "A cup being passed to a guest at a Holy Grounds event",
          caption: "Hospitality in action",
          layout: "standard",
        },
      ],
    },
    booking: {
      eyebrow: "Gather around",
      title: "Imagine Holy Grounds at your event",
      intro:
        "This previews a future event-inquiry experience. The form is intentionally disabled: nothing entered here is sent, stored, or reserved.",
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
  },
  story: {
    metaTitle: "Our Story | Holy Grounds Coffee Truck",
    eyebrow: "Our story",
    title: "Hope is brewing",
    status: "Draft narrative · every reference to Olivia requires Krista’s approval",
    introduction:
      "This page is a private discussion draft based on the family’s marketing-plan language. It is not approved public copy.",
    chapters: [
      {
        title: "A calling over coffee",
        paragraphs: [
          "Before Holy Grounds had a truck, Olivia carried an idea for a coffee shop where faith, encouragement, and community could meet. The vision was never only about what was in the cup; it was about how people might feel when they gathered around it.",
          "Practical life came first, but the idea stayed with her—waiting for the right season and the support to take shape.",
        ],
      },
      {
        title: "A season that changed everything",
        paragraphs: [
          "An unexpected health crisis interrupted Olivia’s early career and began a demanding season of treatment, rehabilitation, and recovery. Her family describes that chapter through courage, faith, and the care of a far-reaching community.",
          "Health details, dates, and language in this section must be reviewed by Krista and Olivia before any public use.",
        ],
      },
      {
        title: "The truck takes shape",
        paragraphs: [
          "The coffee dream endured. With her family beside her, a truck was purchased and transformed into the mobile gathering place now known as Holy Grounds Coffee Truck.",
          "The draft mission is simple: serve more than coffee by creating moments of welcome, encouragement, and genuine connection—one cup at a time.",
        ],
      },
    ],
    primaryImage: "/images/olivia-coffee-truck-portrait.webp",
    primaryImageAlt: "Olivia smiling from the Holy Grounds Coffee Truck service window",
    secondaryImage: "/images/olivia-truck-behind-scenes.webp",
    secondaryImageAlt: "Olivia seated in the truck during an earlier stage of the project",
    pullQuote: "The final story should sound like the family—honest, hopeful, and full of heart.",
    approvalNote:
      "Editorial note: Krista and Olivia should approve the story’s voice, health references, timeline, and mission language before publication.",
  },
  menu: {
    metaTitle: "Fall Menu | Holy Grounds Coffee Truck",
    eyebrow: "Seasonal offerings",
    title: "Fall Menu",
    intro: "Proudly serving Conscious Cup Coffee Roasters.",
    availabilityNote: "Items, prices, and availability may vary by event.",
    groups: [
      {
        title: "Coffee",
        items: [
          { name: "Latte", price: "$5" },
          { name: "Cappuccino", price: "$5" },
          { name: "Nitro Cold Brew", price: "$6" },
          { name: "Draft Cold Brew", price: "$5" },
          { name: "Espresso", price: "$3" },
          { name: "Americano", price: "$4" },
          { name: "Drip Coffee", price: "$3.50", note: "Decaf or regular" },
        ],
      },
      {
        title: "Non-Coffee",
        items: [
          { name: "Spiced Chai", price: "$6" },
          { name: "Hot Chocolate", price: "$4.50" },
          {
            name: "Babyccino",
            price: "$4.50",
            note: "Steamed milk, caramel, and vanilla",
          },
          { name: "Iced Green Tea", price: "$4" },
          { name: "Lemonade", price: "$4.50" },
          { name: "Apple Juice", price: "$3.50" },
        ],
      },
      {
        title: "Fall Specials",
        featured: true,
        items: [
          { name: "Salted Caramel Pumpkin Spice Latte", price: "$6.50" },
          {
            name: "The Olivia",
            price: "$6.50",
            note: "House-made caramel and vanilla",
          },
          { name: "Pumpkin Cold Foam Cold Brew", price: "$6.50" },
          { name: "Pumpkin Spiced Chai Latte", price: "$6.50" },
          {
            name: "House-Made Syrups",
            price: "",
            note: "Vanilla, caramel, mocha, and pumpkin",
          },
        ],
      },
      {
        title: "Grab & Go",
        items: [
          { name: "Spindrift", price: "$3.50" },
          { name: "Cold Brew", price: "$4.50" },
          { name: "Bottled Water", price: "$3.25" },
        ],
      },
      {
        title: "Add-Ons",
        items: [
          { name: "Extra Espresso", price: "$2" },
          { name: "Extra Sauce", price: "$1" },
          { name: "Add Lemonade", price: "$1" },
          { name: "Add Honey", price: "$1" },
        ],
      },
    ],
    syrupsNote: "House-made syrup options are listed for this fall preview.",
    // TODO(Krista): Confirm this donation statement and any beneficiary details before publication.
    donationStatement: "Proceeds from all sales will be donated.",
    donationStatus: "Draft statement · Krista’s confirmation required",
  },
  business: {
    metaTitle: "Business Information | Holy Grounds Coffee Truck",
    eyebrow: "Business information",
    title: "The practical details",
    intro:
      "This meeting-preview page reserves a clear place for verified business information without inventing license numbers, addresses, service hours, or formal commitments.",
    image: "/images/coffee-truck-interior.webp",
    imageAlt: "The working interior of the Holy Grounds Coffee Truck",
    details: [
      {
        label: "Working business name",
        value: "Holy Grounds Coffee Co., LLC",
        note: "Confirm legal styling and punctuation before publication.",
      },
      {
        label: "Business format",
        value: "Mobile coffee truck",
        note: "Event locations and operating schedules vary.",
      },
      {
        label: "Business license",
        value: "License information placeholder",
        note: "License number, issuing jurisdiction, and status have not been supplied for this preview.",
        placeholder: true,
      },
      {
        label: "Public contact details",
        value: "To be confirmed",
        note: "No address, phone number, or business email is represented in this prototype.",
        placeholder: true,
      },
    ],
    disclaimer:
      "Nothing on this page should be treated as verified licensing, permitting, insurance, or operating information.",
  },
  social: {
    label: "Follow the journey on Instagram",
    handle: "@holygrounds.coffeetruck",
    href: "https://www.instagram.com/holygrounds.coffeetruck/",
  },
  footer: {
    title: "Holy Grounds Coffee Truck",
    statement: "Private concept preview for discussion only.",
    note: "Not the official published website. Copy, prices, events, and business details remain subject to review and approval.",
  },
} as const;
