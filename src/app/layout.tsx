import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GreenBytes Ghana | Climate-Smart Rabbit Feed",
    template: "%s | GreenBytes Ghana",
  },
  description:
    "GreenBytes Ghana produces affordable, locally sourced, organic and climate-smart rabbit feed designed for Ghanaian farmers. 40% cheaper than imports. Year-round availability.",
  keywords: [
    "rabbit feed Ghana",
    "rabbit farming Ghana",
    "rabbit feed supplier Ghana",
    "climate-smart rabbit feed",
    "organic rabbit feed",
    "affordable rabbit feed Ghana",
    "livestock feed Ghana",
    "sustainable livestock feed",
    "rabbit farming feed",
    "agricultural feed Ghana",
    "rabbit feed Accra",
    "rabbit feed Cape Coast",
    "sustainable agriculture Ghana",
    "climate-smart agriculture Ghana",
    "GreenBytes Ghana",
  ],
  authors: [{ name: "GreenBytes Ghana" }],
  creator: "GreenBytes Ghana",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://greenbytesghana.com",
    siteName: "GreenBytes Ghana",
    title: "GreenBytes Ghana | Climate-Smart Rabbit Feed",
    description:
      "Affordable, locally produced and climate-smart rabbit feed designed for Ghanaian farmers. Sustainable • Affordable • Accessible.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenBytes Ghana | Climate-Smart Rabbit Feed",
    description:
      "Affordable, locally produced and climate-smart rabbit feed designed for Ghanaian farmers.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
