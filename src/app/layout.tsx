import type { Metadata } from "next";
import { bricolage, jakarta, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daltinho LLC | Software, AI & Automation",
  description:
    "Daltinho LLC builds premium software, AI applications, and automation tools. Explore our portfolio of beautifully crafted products.",
  keywords: ["software development", "AI applications", "automation tools", "mobile apps", "Daltinho LLC"],
  openGraph: {
    title: "Daltinho LLC | Software, AI & Automation",
    description: "Premium software, AI applications, and automation tools.",
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
      <body
        className={`${bricolage.variable} ${jakarta.variable} ${plexMono.variable} antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
