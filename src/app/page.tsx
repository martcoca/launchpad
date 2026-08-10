import Link from "next/link";
import { organization } from "../data/organization";
import { catalog } from "../data/catalog";
import { pageCopy } from "../data/pages";

export default function Home() {
  const shipped = catalog.filter((entry) => entry.status === "Live");

  return (
    <main>
      <section className="hero" aria-labelledby="org-name">
        <p className="eyebrow">{pageCopy.home.eyebrow}</p>
        <h1 id="org-name">{organization.name}</h1>
        <p className="headline">{organization.tagline}</p>
        <p className="summary">{organization.description}</p>
        <p className="summary">{organization.familyFraming}</p>
        <nav aria-label="Home links">
          <Link href="/products">{pageCopy.home.productsCta}</Link>
          <Link href="/about">{pageCopy.home.aboutCta}</Link>
        </nav>
      </section>

      <section aria-labelledby="shipped-heading">
        <p className="eyebrow">{pageCopy.products.eyebrow}</p>
        <h2 id="shipped-heading">{pageCopy.home.shippedHeading}</h2>
        <div className="catalog">
          {shipped.map((entry) => (
            <article className="catalog-entry" key={entry.name}>
              <div className="entry-heading">
                <div>
                  <h3>{entry.name}</h3>
                  <p>{entry.description}</p>
                </div>
                <span className="status">{entry.status}</span>
              </div>
              {(entry.repositoryUrl || entry.liveSiteUrl) && (
                <p className="entry-links">
                  {entry.repositoryUrl && <a href={entry.repositoryUrl}>Repository</a>}
                  {entry.liveSiteUrl && <a href={entry.liveSiteUrl}>Live site</a>}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
