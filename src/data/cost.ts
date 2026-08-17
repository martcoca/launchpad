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
//
// How to read them is now constrained, because measuring cost turned out to cost more
// than the thing measured. Two AWS Cost Explorer requests at $0.01 each, against an
// account spending $0.0029 a month, tripped the $0.01 budget alert. Per ADR-0048:
//
//   AWS    `aws budgets describe-budgets` -> CalculatedSpend.ActualSpend. Free.
//          Cost Explorer is FORBIDDEN for routine reads; it bills per request.
//   Azure  Cost Management query REST API via `az rest`. Free. The consumption usage
//          API returns cost unpopulated, which reads as zero rather than unavailable.
//   GCP    No free programmatic path exists. Console read, human-supplied, labelled.
//   Domain Cloudflare registrar; human-supplied until a scoped read token exists.
//
// Read on a schedule, never on a build.
export const portfolioCost: PortfolioCost = {
  monthlyTotal: "[all-in monthly cost]",
  includes:
    "Domain registration, static hosting, content delivery, and TLS certificates."
};
