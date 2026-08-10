// Structural section labels for every route. These are neutral, factual labels — not
// brand voice or narrative copy — kept here so editing text never requires touching a
// component (Done-when requirement).
export const pageCopy = {
  home: {
    eyebrow: "Agentic Engineering organization",
    shippedHeading: "What has shipped",
    productsCta: "See all products",
    aboutCta: "About & contact"
  },
  products: {
    eyebrow: "Products",
    heading: "What the organization builds",
    deliveredLabel: "Delivered",
    intendedLabel: "Intended"
  },
  solutions: {
    eyebrow: "Solutions",
    heading: "Problems the organization can address"
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "How an agent-run organization operates"
  },
  about: {
    eyebrow: "About",
    heading: "Who is behind this",
    contactHeading: "Contact",
    organizationHeading: "The organization"
  },
  cost: {
    eyebrow: "All-in portfolio cost",
    heading: "What the whole portfolio costs to run"
  },
  personal: {
    eyebrow: "Personal",
    heading: "What else has been built",
    subheading:
      "Applications built outside the engineering portfolio. These are not engineering-evidence products and do not appear in the catalog."
  }
} as const;
