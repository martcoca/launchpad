import Link from "next/link";
import { navItems } from "../data/nav";

// Shared across every route via the root layout. Personal is present but rendered in
// a secondary nav — reachable from anywhere, never a primary nav peer.
export function Nav() {
  const primary = navItems.filter((item) => item.prominent);
  const secondary = navItems.filter((item) => !item.prominent);

  return (
    <header className="site-nav">
      <nav aria-label="Primary" className="site-nav-primary">
        {primary.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      {secondary.length > 0 && (
        <nav aria-label="Secondary" className="site-nav-secondary">
          {secondary.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
