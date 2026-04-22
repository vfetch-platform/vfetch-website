import type { Metadata } from "next";
import {
  ArticleLayout, ArticleP, ArticleH2, ArticleQuote,
  ArticleImage, ArticleCallout, ArticleStats, ArticleSteps, ArticleList, ArticleCTA,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "VFetch Launches International Courier Coverage - VFetch Blog",
  description: "Item owners anywhere in the world can now have their belongings shipped directly to their door via Royal Mail, DPD, and more.",
  alternates: { canonical: "https://vfetch.app/blog/vfetch-partners-with-parcel2go" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Company News"
      categoryColor="bg-tertiary text-on-tertiary"
      date="January 5, 2024"
      readTime="4 min read"
      title="VFetch Launches International Courier Coverage"
      excerpt="Our courier integration means item owners anywhere in the world can have their belongings shipped directly to their door via Royal Mail, DPD, and more."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB0EKeEVhNgr_WRPdWHpCQlhnyTvNwyU7l4Szvtm2LCjPNFjXBA0g9CfJsmtUS0qGhViG06JxrXwpht_BVpbma-ZqFlJJChGNFcOvEgtJyUwJwVVJatkWS3TOS1G-4B-DxphhVbDjNFjxAlE0CQ9EoWHfnB4ypnsWE--_9H5q7ALS13nDJL5fMETlyN86IR6U86JqGrwdDAp2YVfxZCshfhvP3Bdz4JePH9Z2k8TmV5v8NIi6Cbc-Qbo4UogTVErvcZvwd2ptBEujc"
      heroImageAlt="Courier parcel delivery"
    >
      <ArticleP>
        Today we are announcing our courier integration, bringing seamless international delivery to every VFetch venue.
      </ArticleP>

      <ArticleP>
        This integration solves one of the most persistent pain points in the lost property journey: what happens when the owner cannot collect in person. The answer is simple - we ship it to them, wherever they are in the world.
      </ArticleP>

      <ArticleStats stats={[
        { value: "200+", label: "Countries and territories covered" },
        { value: "£0", label: "Extra cost to venues" },
        { value: "5+", label: "Carrier options (Royal Mail, DPD, Evri...)" },
        { value: "100%", label: "Automatic label generation" },
      ]} />

      <ArticleH2>The Problem We Are Solving</ArticleH2>

      <ArticleP>
        Lost property return rates have always been constrained by geography. A guest who leaves a laptop charger at a London hotel while on a business trip from Edinburgh has a reasonable chance of collecting it. A tourist from Australia has almost no chance under traditional systems.
      </ArticleP>

      <ArticleCallout icon="public">
        International visitors represent a significant proportion of guests at hotels, tourist attractions, and major event venues. For these guests, in-person collection is not an option. Most venues either absorbed the logistics cost themselves, or simply didn't offer it.
      </ArticleCallout>

      <ArticleQuote>
        The result was a category of permanently lost items - not because they were not found, and not because there was no owner, but because the mechanics of return were too difficult to navigate.
      </ArticleQuote>

      <ArticleH2>How It Works</ArticleH2>

      <ArticleImage
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSQJLR3n9niB62kLAfPYsy-DhntUqMdokC1TjXag1srdxKldYrklX2K32IZuJlBmVNe8uNWo8TeO1BSKq9rdfKIdaFvzvywcsb_Z81Z7E6DjDFu3o4M3mqROIMo_5DGwPINXL6eaHxSckXdZ6S_sg1aHVBmniCNehDJYYE6YpRy8RLWiOl-8ylFvEc9m0lx05m-a4WfVknh6jhBLltwcEVC445w5x-EUyuSis1lm_42I8hzCFcY21HO5UQzF8EVUXAkR2_aamnMM"
        alt="VFetch claims and delivery flow"
        caption="Owners choose their carrier and service level at the point of claim - venues just print the label and hand the parcel to the driver."
      />

      <ArticleSteps steps={[
        {
          title: "Owner submits claim",
          body: "When an item is confirmed as found, the owner is presented with two options: collect in person, or have it delivered. If they choose delivery, they enter their address - anywhere in the world.",
        },
        {
          title: "Owner selects carrier",
          body: "Options include Royal Mail, DPD, Evri, Yodel, and more - from standard tracked delivery to express international services. Pricing is transparent and paid by the owner at the point of claim.",
        },
        {
          title: "Label generated automatically",
          body: "A pre-printed shipping label is sent directly to the venue. Staff package the item, attach the label, and hand it to the carrier at next collection. No accounts, no invoices, no logistics knowledge required.",
        },
        {
          title: "Real-time tracking",
          body: "Both the owner and the venue receive live tracking updates. Owners can follow their parcel from the moment the carrier collects to the moment it is delivered - the same experience they expect from any modern e-commerce purchase.",
        },
      ]} />

      <ArticleH2>International Coverage</ArticleH2>

      <ArticleP>
        The integration supports delivery to over 200 countries and territories. For most major destinations - Europe, North America, Australia, the Middle East, East Asia - multiple carrier and service options are available.
      </ArticleP>

      <ArticleList items={[
        "Customs documentation handled automatically based on item category and declared value",
        "Venue staff do not complete customs forms manually",
        "Standard international tracked post via Royal Mail available as a baseline for remote destinations",
        "Express international options available for urgent returns",
      ]} />

      <ArticleH2>What This Means for Venues</ArticleH2>

      <ArticleP>
        For venues, the integration requires no setup and no ongoing administration. It is available to all VFetch venues automatically. No courier accounts, no billing relationships, no per-delivery fees.
      </ArticleP>

      <ArticleCallout icon="check_circle">
        Venues can now confidently tell every guest - regardless of where they are in the world - that if their item is found, it can be returned to them. That is a meaningful service improvement that costs the venue nothing.
      </ArticleCallout>

      <ArticleCTA
        href="/for-venues"
        label="Start Using VFetch for Free"
        subtext="Courier delivery is live for all venues today. No action needed - it appears automatically in the claims flow."
      />
    </ArticleLayout>
  );
}
