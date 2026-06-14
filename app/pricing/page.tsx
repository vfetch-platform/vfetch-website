import type { Metadata } from "next";
import { Pricing } from "@/components/Pricing";
import { AppDownloadBanner } from "@/components/AppDownloadBanner";

export const metadata: Metadata = {
  title: "Pricing - VFetch",
  description:
    "Simple VFetch pricing for venues: free setup, no software subscription, and owner-paid recovery fees when items are claimed.",
  alternates: { canonical: "https://vfetch.app/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#FAFBFC] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0D7B6C] mb-4">
            Pricing
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#111827] tracking-tight mb-6">
            Simple pricing for venue teams
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            Start without a subscription. Guests pay a small recovery fee when they
            claim an item, with courier costs handled separately at checkout.
          </p>
        </div>
      </section>
      <Pricing />
      <AppDownloadBanner />
    </>
  );
}
