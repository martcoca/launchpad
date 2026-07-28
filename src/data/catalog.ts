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
