function normalizeBasePath(value: string | undefined) {
  const trimmed = (value ?? "").trim();

  if (!trimmed || trimmed === "/") {
    return "";
  }

  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

export const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export function withBasePath(path: string) {
  if (!basePath || !path.startsWith("/")) {
    return path;
  }

  if (
    path === basePath ||
    path.startsWith(`${basePath}/`) ||
    path.startsWith(`${basePath}#`) ||
    path.startsWith(`${basePath}?`)
  ) {
    return path;
  }

  return `${basePath}${path}`;
}

export function publicAsset(path: string) {
  const absolutePath = path.startsWith("/") ? path : `/${path}`;
  return withBasePath(absolutePath);
}

export const siteHref = withBasePath;

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
    headerLockup: "/brand/holy-grounds-lockup-black.svg",
    footerLockup: "/brand/holy-grounds-lockup-light.svg",
    badgeBlack: "/brand/holy-grounds-badge-black.webp",
    badgeBrown: "/brand/holy-grounds-badge-brown.webp",
    wordmarkBlack: "/brand/holy-grounds-wordmark-black.svg",
    wordmarkBrown: "/brand/holy-grounds-wordmark-brown.svg",
    mottoArtworkDark: "/brand/where-miracles-are-brewing-stacked-dark.svg",
    mottoArtworkLight: "/brand/where-miracles-are-brewing-stacked-light.svg",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story/" },
    { label: "Seasonal Menu", href: "/menu/" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Business Info", href: "/business-information/" },
  ],
  utilityLabels: {
    skipLink: "Skip to content",
    navigationCta: "Event inquiry",
    navigationCtaHref: "/#event-inquiry",
    backToTop: "Back to top",
  },
  home: {
    hero: {
      eyebrow: "Coffee · Community · Excellence",
      title: "Holy Grounds Coffee Truck",
      tagline: "Faith, hope and love with every cup",
      intro:
        "A mobile coffee gathering place serving craft coffee with genuine hospitality, bringing people together through faith, hope, and meaningful connection.",
      primaryAction: { label: "View the Seasonal Menu", href: "/menu" },
      secondaryAction: { label: "Read Our Story", href: "/our-story" },
      image: "/images/holy-grounds-truck-hero.webp",
      imageAlt:
        "The brown and cream Holy Grounds Coffee Truck parked outside on a clear day",
      imageCaption: "The Holy Grounds Coffee Truck",
      marquee: ["Faith", "Hope", "Love", "Coffee", "Community"],
    },
    announcement: {
      eyebrow: "Find the Truck",
      title: "Meet us at Goebbert’s",
      dateLine: "September 25–October 25, 2026",
      description:
        "Join us for craft coffee, seasonal favorites, and genuine hospitality at Goebbert’s in South Barrington. We’ll be serving Fridays, Saturdays, and Sundays from 9 AM to 4 PM. Stop by for a cup and a warm welcome!",
      details: [
        {
          label: "Event Location",
          lines: [
            "Goebbert’s Farm, South Barrington",
            "40 W Higgins Rd",
            "South Barrington, IL 60010",
          ],
        },
        {
          label: "Coffee Truck Hours",
          lines: ["9:00 AM–4:00 PM Central", "Fridays, Saturdays & Sundays"],
        },
        {
          label: "Dates",
          lines: ["September 25–October 25, 2026", "Fridays, Saturdays & Sundays"],
        },
      ],
      directions: {
        label: "Get Directions",
        href: "https://www.google.com/maps/search/?api=1&query=Goebberts+Farm+40+W+Higgins+Rd+South+Barrington+IL+60010",
      },
      visitorNote: {
        beforeLink: "Goebbert’s hosts ticketed attractions. Please check",
        linkLabel: "the farm’s website",
        href: "https://goebbertspumpkinfarm.com/",
        afterLink: "for admission details.",
      },
    },
    storyPreview: {
      eyebrow: "Our Beginning",
      title: "Olivia’s vision, carried forward",
      description:
        "Olivia founded Holy Grounds Coffee Truck with a faith-inspired mission: to honor God through craft coffee and genuine hospitality. She envisioned a gathering place where people felt seen, known, and welcomed. Today, we carry her vision forward, sharing faith, hope, and connection, one cup at a time.",
      action: { label: "Read Our Story", href: "/our-story" },
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
      id: "event-inquiry",
      eyebrow: "Gather around",
      title: "Imagine Holy Grounds at your event",
      intro:
        "Tell us about your gathering, and we’ll follow up to discuss availability, service details, and next steps.",
      endpoint: "https://formspree.io/f/xrpbqnqy",
      fields: [
        {
          id: "event-inquiry-name",
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Enter your name",
          autoComplete: "name",
          required: true,
        },
        {
          id: "event-inquiry-email",
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
          autoComplete: "email",
          required: true,
        },
        {
          id: "event-inquiry-phone",
          name: "phone",
          label: "Phone",
          type: "tel",
          placeholder: "Enter a phone number",
          autoComplete: "tel",
          required: false,
        },
        {
          id: "event-inquiry-date",
          name: "event_date",
          label: "Event date",
          type: "date",
          placeholder: "",
          autoComplete: "off",
          required: false,
        },
        {
          id: "event-inquiry-location",
          name: "event_location",
          label: "Event location",
          type: "text",
          placeholder: "Enter the city or venue",
          autoComplete: "off",
          required: false,
        },
        {
          id: "event-inquiry-guests",
          name: "estimated_guest_count",
          label: "Estimated guest count",
          type: "number",
          placeholder: "Enter an estimate",
          autoComplete: "off",
          required: false,
          min: 1,
          inputMode: "numeric",
        },
      ],
      message: {
        id: "event-inquiry-details",
        name: "event_details",
        label: "Event details",
        placeholder: "Tell us about your event and what you have in mind",
        required: true,
      },
      fieldStatus: {
        required: "Required",
        optional: "Optional",
      },
      buttonLabel: "Send Event Inquiry",
      sendingLabel: "Sending…",
      successMessage:
        "Thank you! Your event inquiry has been sent. We’ll be in touch to discuss the details. Your booking is not confirmed until you hear from us.",
      errorMessage: "We couldn’t send your inquiry. Please try again or email",
      fallbackEmail: "holygroundscoffeetruck@gmail.com",
    },
  },
  story: {
    metaTitle: "Our Story | Holy Grounds Coffee Truck",
    eyebrow: "Our story",
    title: "Rooted in faith. Gathered over coffee.",
    introduction:
      "Olivia founded Holy Grounds Coffee Truck with a faith-inspired mission: to honor God through craft coffee and genuine hospitality. She envisioned a gathering place where people felt seen, known, and welcomed. From ethically sourced beans to house-made syrups and carefully poured latte art, every detail reflected her care for others. Today, we carry her vision forward through community and connection, one cup at a time.",
    chapters: [
      {
        title: "A calling over coffee",
        date: "April 20, 2024",
        paragraphs: [
          "Our Queen Bean and founder, Olivia Budzisz, journaled about a dream God had placed on her heart: a faith-based coffee shop and bookstore. She envisioned a space where people could gather, find peace, and build community, trusting God to bring that dream to life.",
        ],
      },
      {
        title: "Faith through an unexpected season",
        date: null,
        paragraphs: [
          "Four months later, shortly after graduating from Hope College and celebrating her 22nd birthday, Olivia was diagnosed with Diffuse Midline Glioma, a rare and aggressive brain tumor. Through treatment and clinical trials, she continued pursuing her calling to make God’s name known.",
        ],
      },
      {
        title: "The dream takes shape",
        date: null,
        paragraphs: [
          "Alongside her dad, Brian, Olivia brought that vision to life through Holy Grounds Coffee Truck. Craft coffee and genuine hospitality became a way to share her faith, encourage others, and help people feel seen, welcomed, and connected.",
        ],
      },
      {
        title: "Her calling continues",
        date: null,
        paragraphs: [
          "Though Olivia is no longer physically with us, her family and community continue the work she began. Her dream lives on through every cup, every conversation, and every connection, sharing the faith, hope, love, and kindness she poured into",
        ],
      },
    ],
    leadershipCohort: {
      id: "leadership-cohort",
      title: "Growing the next generation of leaders",
      paragraphs: [
        "Olivia’s vision for community extended beyond the coffee truck. She created the Holy Grounds Women’s Global Leadership Cohort to encourage young women to grow as leaders through thoughtful conversations and meaningful connections.",
        "Krista and Andrea are continuing that vision with monthly online gatherings featuring leadership talks and discussion. Come ready to listen, share, and connect. No preparation required.",
      ],
      schedule: [
        { label: "First gathering", value: "Thursday, October 1, 2026" },
        { label: "Time", value: "7:00–8:30 PM Central" },
        {
          label: "Ongoing",
          value: "First Thursday of each month, online through Google Meet",
        },
        { label: "October topic", value: "Technology in modern life" },
      ],
      invitation: {
        prompt: "Interested, even if you’re unsure you can attend? Email",
        email: "holygroundscoffeetruck@gmail.com",
        suffix: "to receive a meeting invitation.",
      },
      action: {
        label: "Request a meeting invitation",
        href: "mailto:holygroundscoffeetruck@gmail.com?subject=Leadership%20Cohort%20Meeting%20Invitation",
      },
      followUp: "Krista or Andrea will email you the Google Meet invitation.",
    },
    primaryImage: "/images/olivia-coffee-truck-portrait.webp",
    primaryImageAlt: "Olivia smiling from the Holy Grounds Coffee Truck service window",
    secondaryImage: "/images/olivia-truck-behind-scenes.webp",
    secondaryImageAlt: "Olivia seated in the truck during an earlier stage of the project",
    secondaryImageCaption: "Behind the scenes.",
    pullQuote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    quoteAttribution: "Commonly attributed to Maya Angelou",
  },
  menu: {
    metaTitle: "Seasonal Menu | Holy Grounds Coffee Truck",
    eyebrow: "Seasonal offerings",
    title: "Seasonal Menu",
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
            name: "House-made Syrups",
            price: "",
            note: "Vanilla, caramel, mocha, and pumpkin",
          },
          {
            name: "Milk Options",
            price: "",
            options: "Whole · Oat · Almond",
            note: "Your choice of milk at no extra charge.",
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
    customization: {
      title: "Make it yours",
      description:
        "Have a favorite combination? Ask your barista! We’re happy to customize your drink with our available ingredients. Listed specials include their featured flavors. Additional sauces are $1.",
    },
    // INTERNAL CONTENT NOTE: The donation recipient and donation basis—revenue, profit, or a portion of sales—remain pending.
  },
  business: {
    metaTitle: "Business Information | Holy Grounds Coffee Truck",
    eyebrow: "Holy Grounds Coffee Truck",
    title: "Business information",
    intro:
      "Practical details for contacting Holy Grounds Coffee Truck, understanding how the mobile business operates, and requesting documentation.",
    image: "/images/coffee-truck-interior.webp",
    imageAlt: "The working interior of the Holy Grounds Coffee Truck",
    details: [
      {
        label: "Working business name",
        value: "Holy Grounds Coffee Co., LLC",
        note: "Public-facing name: Holy Grounds Coffee Truck. Legal styling remains subject to confirmation.",
      },
      {
        label: "Service model",
        value: "Mobile coffee truck",
        note: "Event locations, dates, and operating schedules vary.",
      },
      {
        label: "Business license",
        value: "Provided upon request",
        note: "We can provide the business license upon request.",
      },
      {
        label: "Public contact details",
        value: "holygroundscoffeetruck@gmail.com",
        note: "Bookings, event questions, and Leadership Cohort invitations.",
        href: "mailto:holygroundscoffeetruck@gmail.com",
      },
      {
        label: "Public social channel",
        value: "@holygrounds.coffeetruck",
        note: "Verified Holy Grounds Coffee Truck Instagram account.",
        href: "https://www.instagram.com/holygrounds.coffeetruck/",
      },
    ],
    operations: {
      eyebrow: "How to connect",
      title: "Clear paths for practical questions",
      intro:
        "Holy Grounds operates as a mobile coffee truck rather than a fixed-location café. Use the confirmed public channels below to find updates, discuss a gathering, or request business documentation.",
      items: [
        {
          title: "Find the truck",
          description:
            "Event locations and service times vary. Use the verified Instagram account for public truck updates.",
          action: {
            label: "View Instagram",
            href: "https://www.instagram.com/holygrounds.coffeetruck/",
          },
        },
        {
          title: "Plan a gathering",
          description:
            "When emailing, include your name or organization, desired date, event location, and a few details about the gathering.",
          action: {
            label: "Email about an event",
            href: "mailto:holygroundscoffeetruck@gmail.com?subject=Event%20Inquiry",
          },
        },
        {
          title: "Request documentation",
          description: "We can provide the business license upon request.",
          action: {
            label: "Request the license",
            href: "mailto:holygroundscoffeetruck@gmail.com?subject=Business%20License%20Request",
          },
        },
      ],
    },
    disclaimer:
      "No public street address, fixed daily hours, or phone number has been confirmed for this preview.",
  },
  social: {
    label: "Follow the journey on Instagram",
    handle: "@holygrounds.coffeetruck",
    href: "https://www.instagram.com/holygrounds.coffeetruck/",
  },
  footer: {
    title: "Holy Grounds Coffee Truck",
    motto: "Where Miracles Are Brewing",
    contactLabel: "Bookings & cohort invitations.",
    email: "holygroundscoffeetruck@gmail.com",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Menu", href: "/menu" },
      { label: "Find the Truck", href: "/#visit" },
      { label: "Event Inquiry", href: "/#event-inquiry" },
      { label: "Leadership Cohort", href: "/our-story#leadership-cohort" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/holygrounds.coffeetruck/",
      },
    ],
    copyright: "© 2026 Holy Grounds Coffee Truck",
    businessInformation: {
      label: "Business Information",
      href: "/business-information",
    },
  },
} as const;
