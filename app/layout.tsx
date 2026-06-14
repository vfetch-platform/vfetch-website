import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://vfetch.app"),
  title: "VFetch - Lost Property Management Software for Venues",
  description:
    "AI-powered lost property management for hotels, stadiums, festivals and hospitality venues. Reduce staff workload with item logging, secure claims and courier returns.",
  keywords: [
    "lost and found UK",
    "lost property app",
    "AI lost item finder",
    "venue lost and found system",
    "find lost items",
    "AI lost property",
    "hotel lost and found",
    "lost item courier delivery",
    "lost property management software",
    "venue operations platform",
    "hotel lost property software",
  ],
  openGraph: {
    title: "VFetch - Lost Property Management Software for Venues",
    description:
      "Reduce lost-property workload with AI item logging, secure claim workflows and courier returns for venues.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VFetch - Lost Property Management for Venues",
    description: "AI-powered item logging, secure claims and courier returns for venue teams.",
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
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <CalendlyProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#0D7B6C] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </CalendlyProvider>
      </body>
    </html>
  );
}
