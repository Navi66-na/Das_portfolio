import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://das-personal-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Das | Web Developer & Digital Creator", template: "%s | Das" },
  description: "Explore Das's web development, UI/UX, cybersecurity and digital product projects. View selected work and get in touch about a new project.",
  applicationName: "Das Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Das | Web Developer & Digital Creator",
    description: "Selected projects, creative development and digital experiences by Das.",
    siteName: "Das Portfolio",
    locale: "en_IN",
  },
  twitter: { card: "summary", title: "Das | Web Developer & Digital Creator", description: "Explore projects and creative development by Das." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
