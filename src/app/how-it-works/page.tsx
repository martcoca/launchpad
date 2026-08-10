import { organization } from "../../data/organization";
import { pageCopy } from "../../data/pages";

export default function HowItWorks() {
  return (
    <main>
      <section aria-labelledby="how-it-works-heading">
        <p className="eyebrow">{pageCopy.howItWorks.eyebrow}</p>
        <h1 id="how-it-works-heading">{pageCopy.howItWorks.heading}</h1>
        <p className="summary">{organization.operatingModelSummary}</p>
      </section>
    </main>
  );
}
