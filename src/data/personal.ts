// Personal applications are admitted for their user, not for portfolio proof
// (ADR-0036), so they carry different fields than src/data/catalog.ts: no unique-proof
// or stack-as-evidence framing. `listed` lets an individual application opt out of
// public display while still existing in the data model — at least one entry below
// demonstrates that opt-out.
export type PersonalApplication = {
  name: string;
  description: string;
  status: "Live" | "In progress" | "Planned";
  listed: boolean;
  repositoryUrl?: string;
  liveSiteUrl?: string;
};

export const personalApplications: PersonalApplication[] = [
  {
    name: "[Personal application name]",
    description: "[What this application does and who it's for]",
    status: "Planned",
    listed: true
  },
  {
    name: "[Unlisted personal application name]",
    description: "[Not shown publicly — an application its owner has opted out of listing]",
    status: "Planned",
    listed: false
  }
];
