import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vfetch.app"),
  title: "VFetch - AI-Powered Lost & Found for UK Venues",
  description:
    "VFetch reconnects people with their lost belongings at UK venues using AI photo matching and smart search. Pricing scales with your venue capacity.",
  keywords: [
    "lost and found UK",
    "lost property app",
    "AI lost item finder",
    "venue lost and found system",
    "find lost items",
    "AI lost property",
    "hotel lost and found",
    "lost item courier delivery",
  ],
  openGraph: {
    title: "VFetch - AI Lost & Found",
    description:
      "Find your lost items at UK venues. AI-powered search. Secure claim process. Courier delivery available.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VFetch - AI Lost & Found",
    description: "Find your lost items at UK venues - AI-powered matching.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#00685f] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
