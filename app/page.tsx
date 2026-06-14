import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { AppDownloadBanner } from "@/components/AppDownloadBanner";
import { RoiComparison } from "@/components/RoiComparison";
import { SecurityCompliance } from "@/components/SecurityCompliance";

export const metadata: Metadata = {
  title: "VFetch - AI-Powered Lost Property Management for Venues",
  description:
    "VFetch helps hotels, stadiums, festivals and hospitality venues reduce lost-property workload with AI item logging, secure claims and courier returns.",
  alternates: { canonical: "https://vfetch.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VFetch",
  applicationCategory: "BusinessApplication",
  description:
    "AI-powered lost property management platform for venues. Photo logging, automated matching, secure claims and courier delivery.",
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
      <CategoryGrid />
      <Features />
      <HowItWorks />
      <Stats />
      <RoiComparison />
      <SecurityCompliance />
      <Testimonials />
      <AppDownloadBanner />
    </>
  );
}
