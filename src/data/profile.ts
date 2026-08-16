export type Profile = {
  name: string;
  headline: string;
  summary: string;
  location: string;
  contact: string;
  links: Array<{ label: string; href: string }>;
};

// Confirmed by the Founder. headline and summary are drafted from what this repository
// demonstrably contains: three cloud landing zones with keyless federation, a published
// site, an agent operating model with recorded decisions, and cost controls that are
// enforced rather than intended. Nothing here claims a title, employer, tenure, or
// credential, because none of those is evidenced here and ADR-0008's "and it is true"
// governs every claim.
export const profile: Profile = {
  name: "Luis Martinez",

  headline:
    "Building and running a multi-cloud software portfolio delivered by an agent-run engineering organization",

  summary:
    "I design and run an engineering organization staffed by AI agents, and I build a portfolio of products through it. The work is deliberately spread across three clouds and five languages, because the interesting question is not whether an agent can write code in one familiar stack but whether the practice holds up when the stack keeps changing. I care most about the parts that are easy to skip: decisions written down at the time they are made, guardrails that have been proven capable of failing, and costs reported from the invoice rather than the plan.",

  location: "Boston, Massachusetts",

  // Filled with the organization address, which was the proposed default. Substitute a
  // different address or a contact form if you would rather not publish this one.
  contact: "luis@martcoca.com",

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/luis-martinez-13a920412/" },
    { label: "GitHub", href: "https://github.com/martcoca" }
  ]
};
