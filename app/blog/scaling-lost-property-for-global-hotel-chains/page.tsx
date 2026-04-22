import type { Metadata } from "next";
import {
  ArticleLayout, ArticleP, ArticleH2, ArticleQuote,
  ArticleImage, ArticleCallout, ArticleStats, ArticleList, ArticleCTA,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Scaling Lost Property for Global Hotel Chains - VFetch Blog",
  description: "How VFetch helped a major hotel group reduce unclaimed items by 84% and cut front-desk handling time in half.",
  alternates: { canonical: "https://vfetch.app/blog/scaling-lost-property-for-global-hotel-chains" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Success Stories"
      categoryColor="bg-secondary-container text-on-secondary-container"
      date="March 12, 2024"
      readTime="6 min read"
      title="Scaling Lost Property for Global Hotel Chains"
      excerpt="How our latest implementation helped a major hotel group reduce unclaimed items by 84% and cut front-desk handling time in half."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAxkpBFZF1pch2FRcqT9C4S3aX8nVmjavh4tjy7TnJhmSzmcnaUScO73K2mHmK18CNdx7Juufv94AJe07EI6QIYO7NOIq1M00DAb8-B1uLkP793BUwbHy8x-sQOWUpFoX0PIw_wNMz4uCcDMmsKpuKeyVHEkIvckq9DgYdYMkJsF8QRe4W0RO84Gh6FIRhic-BRMGDwJpJ9m0COdZ5CnWHcMrD9yyFt7Pv28DDBVV9PnDtH1tAGLOvFSQI3x78vaxgBYEv4WjdsVvI"
      heroImageAlt="Modern hotel lobby"
    >
      <ArticleP>
        When a hotel group with over 40 properties across Europe approached us, their lost property problem had reached a scale their existing processes could not handle. They were logging hundreds of found items every week - and returning fewer than one in five.
      </ArticleP>

      <ArticleP>
        Six months after rolling out VFetch across their estate, that number changed dramatically. Here is how it happened.
      </ArticleP>

      <ArticleStats stats={[
        { value: "84%", label: "Reduction in unclaimed items" },
        { value: "51%", label: "Less front-desk handling time" },
        { value: "3.2x", label: "More reunions within 48 hrs" },
        { value: "23", label: "Countries served via courier" },
      ]} />

      <ArticleH2>The Starting Point</ArticleH2>

      <ArticleP>
        Before VFetch, the group relied on property-level spreadsheets and a shared email inbox. Each hotel maintained independent records. There was no centralised search, no consistent format, and no way for a guest at one property to check if their item had been found at another.
      </ArticleP>

      <ArticleCallout icon="error_outline">
        Items were logged with varying detail. Searches were slow and manual. Guests were put on hold while staff physically checked a storage cupboard. High-value items were occasionally returned; low-value ones rarely were.
      </ArticleCallout>

      <ArticleQuote>
        "We knew the system was broken, but the scale of the problem only became clear when we looked at the data. We were sitting on hundreds of items with no realistic path back to their owners."
      </ArticleQuote>

      <ArticleH2>The Rollout</ArticleH2>

      <ArticleP>
        Implementation began with a two-week pilot across three properties - a city-centre business hotel, a large resort, and a boutique property. The goal was to understand how staff in different environments interacted with the platform.
      </ArticleP>

      <ArticleImage
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAng0m8TWCrNZxg1vt8GX_Bzuy9Lt-I0hZK23f8vAV-kB3rKYQ-kxqywingVVqRO6r44zuC7NnF4avImG66J5Xwtyfjg2Q7nz0hpbS9TMFw-5Veyc236zPuEdfs4C429CUyLcTr-gmNC-qGOBhlVdM79ZNh63jQ9dFdrJDYmn-aseejDO3BBSv-qFN3ozuLwHBE5vhVZERAPsRvDtajWSKx1WXdor-FZEYOj99CYDKQDmgI_lVia7brmoOtCij8MZhgwKzTqrT58Z8"
        alt="Hotel staff using VFetch on a mobile device"
        caption="The photo-first logging flow was the feature staff found most impactful during the pilot."
      />

      <ArticleP>
        The feedback was consistent: the photo-first logging flow made the biggest difference. Staff no longer needed to think about how to describe an item. They took a photo, confirmed the AI-generated description, added a location note, and moved on. Average logging time dropped from around four minutes to under 45 seconds.
      </ArticleP>

      <ArticleStats stats={[
        { value: "45s", label: "New average logging time" },
        { value: "4 min", label: "Previous average" },
      ]} />

      <ArticleP>
        By week three, pilot properties were logging items at twice the rate of the control group - not because more items were being found, but because low friction meant staff actually logged things they would previously have set aside.
      </ArticleP>

      <ArticleH2>Results at Six Months</ArticleH2>

      <ArticleList items={[
        <><strong>84% reduction in unclaimed items</strong> - the largest single improvement across any metric</>,
        <><strong>51% reduction in front-desk handling time</strong> per lost property enquiry</>,
        <><strong>3.2x increase in successful reunions</strong> within 48 hours of an item being found</>,
        <><strong>International delivery fulfilled</strong> for guests from 23 countries via courier</>,
        <><strong>Zero additional cost to the group</strong> - venues use VFetch free; owners pay a small claim fee</>,
      ]} />

      <ArticleH2>What Drove the Improvement</ArticleH2>

      <ArticleP>
        The reduction in unclaimed items came from two directions simultaneously. More items were being logged accurately and quickly, making more items searchable. And guests found it easier to search and claim, meaning more logged items had an active claimant.
      </ArticleP>

      <ArticleCallout icon="connecting_airports">
        Cross-property search proved especially valuable. Several reunions involved items found at one property being claimed by guests who had left them at a different hotel in the group - something effectively impossible under the old system.
      </ArticleCallout>

      <ArticleQuote>
        "It stopped being a problem we managed and started being a service we offered."
        - Head of Guest Experience
      </ArticleQuote>

      <ArticleCTA
        href="/for-venues"
        label="See How It Works for Your Venue"
        subtext="Free for all venues, regardless of size. Onboarding takes less than a day."
      />
    </ArticleLayout>
  );
}
