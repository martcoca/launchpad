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

export const organization: Organization = {
  name: "Martcoca",
  familyFraming:
    "A family company: the name is formed from the Founder's and his wife's family names, and he leads it.",
  tagline: "[One-sentence description of what Martcoca builds]",
  description:
    "[A short paragraph describing the organization's purpose, focus, and what makes its work distinctive]",
  operatingModelSummary:
    "[A short paragraph explaining how an agent-run organization operates, in terms a public reader can follow]"
};
