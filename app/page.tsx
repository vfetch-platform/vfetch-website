import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { AppDownloadBanner } from "@/components/AppDownloadBanner";

export const metadata: Metadata = {
  title: "VFetch - AI-Powered Lost & Found for UK Venues",
  description:
    "VFetch reconnects people with their lost belongings at UK venues using AI photo matching and smart search. Free for venues. Small claim fee for owners.",
  alternates: { canonical: "https://vfetch.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VFetch",
  applicationCategory: "UtilitiesApplication",
  description:
    "AI-powered lost and found platform connecting item owners with UK venues. Photo matching, secure claims, courier delivery.",
  offers: {
    "@type": "Offer",
    price: "9",
    priceCurrency: "GBP",
    description: "One-time claim fee per item",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <HowItWorks />
      <Features />
      <CategoryGrid />
      <Stats />
      <Testimonials />
      <AppDownloadBanner />
    </>
  );
}
