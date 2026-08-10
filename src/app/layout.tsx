import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "../components/Nav";
import { organization } from "../data/organization";

export const metadata: Metadata = {
  title: organization.name,
  description: `${organization.name}: products, solutions, how it works, and cost.`
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
