// Solutions must be derived from delivered capability, never aspirational (product
// spec, "Solutions is the surface most likely to drift into fabrication"). Today no
// product has shipped enough to derive an honest solution from, so this list is empty
// by design — the empty state below is the expected first rendering, not a defect.
export type Solution = {
  name: string;
  problem: string;
  relatedProductName: string;
};

export const solutions: Solution[] = [];

export const solutionsEmptyStateMessage =
  "No solutions are published yet. This surface only describes problems the organization has demonstrably solved, evidenced by a delivered product — not what it could hypothetically do. Check back as products ship.";
