import type { Metadata } from "next";
import { bricolage, jakarta, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daltinho LLC | SwiftUI Mobile Apps",
  description:
    "Daltinho LLC builds premium SwiftUI mobile applications for iOS. Explore our portfolio of beautifully crafted apps.",
  keywords: ["SwiftUI", "iOS apps", "mobile development", "Daltinho LLC"],
  openGraph: {
    title: "Daltinho LLC | SwiftUI Mobile Apps",
    description: "Premium SwiftUI mobile applications for iOS.",
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
