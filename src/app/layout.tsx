
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supriya | Freelance Web Developer",
  description:
    "Explore Supriya's web development portfolio, projects and services. Get in touch to discuss a modern, responsive website for your business.",
  applicationName: "Supriya Portfolio",
  openGraph: {
    title: "Supriya | Freelance Web Developer",
    description:
      "Modern websites, thoughtful design and creative web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
