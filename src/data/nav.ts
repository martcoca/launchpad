export type NavItem = {
  label: string;
  href: string;
  /**
   * Primary nav peers render prominently. Non-prominent items (Personal) are still
   * present on every page, in a secondary position, per the attribution/reachability
   * requirement — never a primary nav peer, never a hidden link.
   */
  prominent: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", prominent: true },
  { label: "Products", href: "/products", prominent: true },
  { label: "Solutions", href: "/solutions", prominent: true },
  { label: "How it works", href: "/how-it-works", prominent: true },
  { label: "About", href: "/about", prominent: true },
  { label: "Cost", href: "/cost", prominent: true },
  { label: "Personal", href: "/personal", prominent: false }
];
