import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/oswald";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bar-for-varonis.vercel.app"),
  title: "Bar Moshe — for Varonis",
  description:
    "Varonis took its engineering org to full AI adoption. I'm Bar, and I build the tooling that makes adoption stick: MCP servers, Claude Code plugins, agents, and the evals to prove they help.",
  // Private, shareable link. Keep it out of search indexes.
  robots: { index: false, follow: false },
  openGraph: {
    title: "I build the tooling AI adoption runs on. For Varonis.",
    description:
      "Bar Moshe — MCP servers, Claude Code plugins, agents and evals, shipped in the open.",
    type: "website",
    siteName: "Bar Moshe × Varonis",
  },
  twitter: {
    card: "summary_large_image",
    title: "I build the tooling AI adoption runs on. For Varonis.",
    description:
      "Bar Moshe — MCP servers, Claude Code plugins, agents and evals, shipped in the open.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
