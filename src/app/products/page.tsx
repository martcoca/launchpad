import { catalog, deliveryStatus } from "../../data/catalog";
import { pageCopy } from "../../data/pages";

export default function Products() {
  return (
    <main>
      <section aria-labelledby="products-heading">
        <p className="eyebrow">{pageCopy.products.eyebrow}</p>
        <h1 id="products-heading">{pageCopy.products.heading}</h1>
        <div className="catalog">
          {catalog.map((entry) => {
            const delivery = deliveryStatus(entry);
            const deliveryLabel =
              delivery === "Delivered" ? pageCopy.products.deliveredLabel : pageCopy.products.intendedLabel;
            return (
              <article className="catalog-entry" key={entry.name}>
                <div className="entry-heading">
                  <div>
                    <h3>{entry.name}</h3>
                    <p>{entry.description}</p>
                  </div>
                  <span className="status">
                    {deliveryLabel} &middot; {entry.status}
                  </span>
                </div>
                <dl className="stack">
                  <div>
                    <dt>Cloud</dt>
                    <dd>{entry.cloud}</dd>
                  </div>
                  <div>
                    <dt>Language</dt>
                    <dd>{entry.language}</dd>
                  </div>
                  <div>
                    <dt>Framework</dt>
                    <dd>{entry.framework}</dd>
                  </div>
                  <div>
                    <dt>Infrastructure</dt>
                    <dd>{entry.infrastructureTool}</dd>
                  </div>
                </dl>
                {(entry.repositoryUrl || entry.liveSiteUrl) && (
                  <p className="entry-links">
                    {entry.repositoryUrl && <a href={entry.repositoryUrl}>Repository</a>}
                    {entry.liveSiteUrl && <a href={entry.liveSiteUrl}>Live site</a>}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
