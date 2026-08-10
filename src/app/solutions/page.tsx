import { solutions, solutionsEmptyStateMessage } from "../../data/solutions";
import { pageCopy } from "../../data/pages";

export default function Solutions() {
  return (
    <main>
      <section aria-labelledby="solutions-heading">
        <p className="eyebrow">{pageCopy.solutions.eyebrow}</p>
        <h1 id="solutions-heading">{pageCopy.solutions.heading}</h1>
        {solutions.length === 0 ? (
          <p className="empty-state">{solutionsEmptyStateMessage}</p>
        ) : (
          <div className="catalog">
            {solutions.map((solution) => (
              <article className="catalog-entry" key={solution.name}>
                <h3>{solution.name}</h3>
                <p>{solution.problem}</p>
                <p className="entry-links">Evidenced by: {solution.relatedProductName}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
