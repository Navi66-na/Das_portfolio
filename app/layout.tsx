import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Das — Creative Developer",
  description: "Das is a Computer Science student and developer exploring web experiences, cybersecurity and digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
