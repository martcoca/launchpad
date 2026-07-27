export type PortfolioCost = {
  monthlyTotal: string;
  includes: string;
};

// The headline is total all-in monthly cost, including the domain — not a cloud-only
// zero. An unqualified "$0.00" would be type-checked rather than true: the cost guard
// denies resource *types*, while hosting and delivery bill on *usage*, and domain
// registration sits outside the cloud account entirely.
//
// The figure below is a deliberate placeholder, and replacing it with an estimate is the
// exact error this design corrects. Read the real amounts from the accounts that hold
// them; a later task replaces this with a computed value.
export const portfolioCost: PortfolioCost = {
  monthlyTotal: "[all-in monthly cost]",
  includes:
    "Domain registration, static hosting, content delivery, and TLS certificates."
};
