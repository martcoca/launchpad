import { profile } from "../../data/profile";
import { organization } from "../../data/organization";
import { pageCopy } from "../../data/pages";

export default function About() {
  return (
    <main>
      <section className="hero" aria-labelledby="about-heading">
        <p className="eyebrow">{pageCopy.about.eyebrow}</p>
        <h1 id="about-heading">{pageCopy.about.heading}</h1>
        <h2>{profile.name}</h2>
        <p className="headline">{profile.headline}</p>
        <p className="summary">{profile.summary}</p>
        <dl className="profile-details">
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{profile.contact}</dd>
          </div>
        </dl>
        <nav aria-label="Profile links">
          {profile.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      <section aria-labelledby="organization-heading">
        <p className="eyebrow">{pageCopy.about.organizationHeading}</p>
        <h2 id="organization-heading">{organization.name}</h2>
        <p className="summary">{organization.familyFraming}</p>
      </section>
    </main>
  );
}
