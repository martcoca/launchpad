export type Profile = {
  name: string;
  headline: string;
  summary: string;
  location: string;
  contact: string;
  links: Array<{ label: string; href: string }>;
};

export const profile: Profile = {
  name: "[Your Name]",
  headline: "[Your professional headline]",
  summary: "[Add a short, first-person summary of your work and the problems you enjoy solving.]",
  location: "[Your location]",
  contact: "[Your contact email]",
  links: [
    { label: "[LinkedIn]", href: "https://example.com/your-linkedin" },
    { label: "[GitHub]", href: "https://example.com/your-github" }
  ]
};
