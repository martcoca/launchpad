export type Organization = {
  name: string;
  /**
   * A settled fact, not invented copy: the organization's name and family framing are
   * fixed by the product decision record, not by this packet. See
   * docs/decisions/0037-launchpad-presents-the-organization.md.
   */
  familyFraming: string;
  tagline: string;
  description: string;
  operatingModelSummary: string;
};

// DRAFT for Founder confirmation. Every claim below is checked against what the
// portfolio can actually demonstrate today, per ADR-0008's bar: "and it is true."
//
// Deliberately absent, because they would be invented: team size, clients, funding,
// incorporation, delivery record, and any product described as finished. Four of the
// five products have no code, so the copy describes intent and method, never scale.
export const organization: Organization = {
  name: "Martcoca",
  familyFraming:
    "A family company: the name is formed from the Founder's and his wife's family names, and he leads it.",
  tagline:
    "Software built by an engineering organization that is run by AI agents, with its architecture and its real costs published in the open.",
  description:
    "Martcoca builds a small portfolio of software products, each deliberately on a different cloud and in a different language. The variety is the point: it is how the organization finds out whether agent-led delivery holds up across genuinely different stacks, rather than in one comfortable corner of the industry. Every product is designed to cost nothing when nobody is using it, and the running total is published rather than estimated.",
  operatingModelSummary:
    "One person sets direction and holds the decisions that cannot be delegated: identity, money, credentials, and anything irreversible. Everything else is carried out by AI agents working from written doctrine, with each significant choice recorded as a decision document and each piece of work gated by a check that can actually fail. The intent, the architecture, and the reasoning behind both are kept in the open, including the parts that turned out to be wrong."
};
