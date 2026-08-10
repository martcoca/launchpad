import { portfolioCost } from "../../data/cost";
import { pageCopy } from "../../data/pages";

export default function Cost() {
  return (
    <main>
      <section className="cost" aria-labelledby="cost-heading">
        <p className="eyebrow">{pageCopy.cost.eyebrow}</p>
        <h1 id="cost-heading">
          {portfolioCost.monthlyTotal}
          <span> / month</span>
        </h1>
        <p>Includes {portfolioCost.includes}</p>
      </section>
    </main>
  );
}
