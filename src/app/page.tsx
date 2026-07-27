import { catalog } from "../data/catalog";
import { portfolioCost } from "../data/cost";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="profile-name">
        <p className="eyebrow">Portfolio / Launchpad</p>
        <h1 id="profile-name">{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="summary">{profile.summary}</p>
        <dl className="profile-details">
          <div><dt>Location</dt><dd>{profile.location}</dd></div>
          <div><dt>Contact</dt><dd>{profile.contact}</dd></div>
        </dl>
        <nav aria-label="Profile links">
          {profile.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
      </section>

      <section className="cost" aria-labelledby="cost-heading">
        <p className="eyebrow">All-in portfolio cost</p>
        <h2 id="cost-heading">{portfolioCost.monthlyTotal}<span> / month</span></h2>
        <p>Includes {portfolioCost.includes}</p>
      </section>

      <section aria-labelledby="catalog-heading">
        <p className="eyebrow">Application catalog</p>
        <h2 id="catalog-heading">What is running</h2>
        <div className="catalog">
          {catalog.map((entry) => (
            <article className="catalog-entry" key={entry.name}>
              <div className="entry-heading">
                <div>
                  <h3>{entry.name}</h3>
                  <p>{entry.description}</p>
                </div>
                <span className="status">{entry.status}</span>
              </div>
              <dl className="stack">
                <div><dt>Cloud</dt><dd>{entry.cloud}</dd></div>
                <div><dt>Language</dt><dd>{entry.language}</dd></div>
                <div><dt>Framework</dt><dd>{entry.framework}</dd></div>
                <div><dt>Infrastructure</dt><dd>{entry.infrastructureTool}</dd></div>
              </dl>
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
