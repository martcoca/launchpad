import { personalApplications } from "../../data/personal";
import { pageCopy } from "../../data/pages";

export default function Personal() {
  const listed = personalApplications.filter((app) => app.listed);

  return (
    <main>
      <section aria-labelledby="personal-heading">
        <p className="eyebrow">{pageCopy.personal.eyebrow}</p>
        <h1 id="personal-heading">{pageCopy.personal.heading}</h1>
        <p className="summary">{pageCopy.personal.subheading}</p>
        <div className="catalog">
          {listed.map((app) => (
            <article className="catalog-entry" key={app.name}>
              <div className="entry-heading">
                <div>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                </div>
                <span className="status">{app.status}</span>
              </div>
              {(app.repositoryUrl || app.liveSiteUrl) && (
                <p className="entry-links">
                  {app.repositoryUrl && <a href={app.repositoryUrl}>Repository</a>}
                  {app.liveSiteUrl && <a href={app.liveSiteUrl}>Live site</a>}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
