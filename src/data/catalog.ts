export type CatalogEntry = {
  name: string;
  description: string;
  cloud: string;
  language: string;
  framework: string;
  infrastructureTool: string;
  status: "Live" | "In progress" | "Planned";
  repositoryUrl?: string;
  liveSiteUrl?: string;
};

// The catalog's existing `status` field already distinguishes delivered from intended
// work; this derives the visible label from it rather than adding a redundant field.
export function deliveryStatus(entry: CatalogEntry): "Delivered" | "Intended" {
  return entry.status === "Live" ? "Delivered" : "Intended";
}

export const catalog: CatalogEntry[] = [
  {
    name: "Launchpad",
    description: "The portfolio's static front door and application catalog.",
    cloud: "AWS",
    language: "TypeScript",
    framework: "Next.js",
    infrastructureTool: "OpenTofu",
    status: "Live",
    repositoryUrl: "https://github.com/martcoca/launchpad",
    liveSiteUrl: "https://martcoca.com"
  }
];
