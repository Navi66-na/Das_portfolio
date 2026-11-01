import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://das-personal-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Das | Web Developer & Digital Creator", template: "%s | Das" },
  description: "Personal portfolio of Das, showcasing web development, UI/UX design, digital projects and interests in cybersecurity and emerging technology. Explore selected work and get in touch.",
  applicationName: "Das Portfolio",
  verification: { google: "wZTLXaEv0YUd5ZNa3yb5oCjG6IffsN4IQc8EoB2-HNk" },
  authors: [{ name: "Das" }],
  creator: "Das",
  category: "technology",
  keywords: ["Das", "web developer", "frontend developer", "UI UX", "cybersecurity", "web projects", "portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Das | Web Developer & Digital Creator",
    description: "Web development, UI/UX experiments and digital projects by Das.",
    siteName: "Das Portfolio",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Das | Web Developer & Digital Creator", description: "Explore projects and creative development by Das." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
