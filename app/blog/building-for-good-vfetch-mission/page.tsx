import type { Metadata } from "next";
import {
  ArticleLayout, ArticleP, ArticleH2, ArticleQuote,
  ArticleImage, ArticleCallout, ArticleList, ArticleCTA,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Building for Good: VFetch's Mission Beyond Lost Items - VFetch Blog",
  description: "How our small team is reducing anxiety for thousands of people every week by making the recovery of personal belongings fast, fair, and human.",
  alternates: { canonical: "https://vfetch.app/blog/building-for-good-vfetch-mission" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Company Culture"
      categoryColor="bg-secondary-container text-on-secondary-container"
      date="December 20, 2023"
      readTime="5 min read"
      title="Building for Good: VFetch's Mission Beyond Lost Items"
      excerpt="How our small team is reducing anxiety for thousands of people every week by making the recovery of personal belongings fast, fair, and human."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSQJLR3n9niB62kLAfPYsy-DhntUqMdokC1TjXag1srdxKldYrklX2K32IZuJlBmVNe8uNWo8TeO1BSKq9rdfKIdaFvzvywcsb_Z81Z7E6DjDFu3o4M3mqROIMo_5DGwPINXL6eaHxSckXdZ6S_sg1aHVBmniCNehDJYYE6YpRy8RLWiOl-8ylFvEc9m0lx05m-a4WfVknh6jhBLltwcEVC445w5x-EUyuSis1lm_42I8hzCFcY21HO5UQzF8EVUXAkR2_aamnMM"
      heroImageAlt="VFetch team and mission"
    >
      <ArticleP>
        We do not talk about lost property the way most people talk about it. For most people - and most businesses - it is a nuisance. An administrative overhead. A liability. A box of unclaimed umbrellas in a hotel corridor.
      </ArticleP>

      <ArticleP>
        For us, it is something else. It is a moment where someone's day - sometimes their week, occasionally their year - can go very differently depending on whether a system works or fails. That is the thing we are building toward.
      </ArticleP>

      <ArticleQuote>
        Every item logged is somebody's thing. Behind every record in the database is a person hoping it still exists somewhere.
      </ArticleQuote>

      <ArticleH2>What Actually Gets Lost</ArticleH2>

      <ArticleP>
        When we started VFetch, we spent a lot of time reading through lost property logs at hotels and venues. What struck us most was not the volume - though the volume is genuinely staggering - but the significance of what gets lost.
      </ArticleP>

      <ArticleImage
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxkpBFZF1pch2FRcqT9C4S3aX8nVmjavh4tjy7TnJhmSzmcnaUScO73K2mHmK18CNdx7Juufv94AJe07EI6QIYO7NOIq1M00DAb8-B1uLkP793BUwbHy8x-sQOWUpFoX0PIw_wNMz4uCcDMmsKpuKeyVHEkIvckq9DgYdYMkJsF8QRe4W0RO84Gh6FIRhic-BRMGDwJpJ9m0COdZ5CnWHcMrD9yyFt7Pv28DDBVV9PnDtH1tAGLOvFSQI3x78vaxgBYEv4WjdsVvI"
        alt="Lost items at a venue"
        caption="Behind every unclaimed item in a back-office storage room is a person hoping it is still there."
      />

      <ArticleP>
        Yes, there are charging cables and umbrellas and paperback novels. But there are also prescription medication, wedding rings, passports, children's toys that cannot be replaced, family photographs, and irreplaceable documents. There are laptops containing someone's entire work project.
      </ArticleP>

      <ArticleCallout icon="favorite">
        Losing something significant is stressful in a way that is hard to quantify. The uncertainty - not knowing whether it is gone for good, not knowing who to call, not knowing how long it will take to find out - is its own particular kind of anxiety. Reducing that anxiety is what motivates how we build.
      </ArticleCallout>

      <ArticleH2>Why Free for Venues</ArticleH2>

      <ArticleP>
        The decision to make VFetch free for venues was not made reluctantly. It was central to the model from the start.
      </ArticleP>

      <ArticleP>
        Venues are the critical infrastructure of the lost property system. If a hotel front-desk team is not logging found items well, no amount of sophisticated matching technology helps the guest who lost something there. We needed a model that gave venues every reason to adopt and no reason to hesitate.
      </ArticleP>

      <ArticleQuote>
        A small claim fee paid by item owners is not just a revenue model. It is also a signal of intent. We charge the people who get the value, not the people who create the infrastructure.
      </ArticleQuote>

      <ArticleH2>Fairness in the Claim Process</ArticleH2>

      <ArticleP>
        One of the things we thought hardest about was: how do you prevent bad actors from claiming items that do not belong to them, without making the process so burdensome that legitimate claimants give up?
      </ArticleP>

      <ArticleList items={[
        "A small claim fee filters for seriousness - someone genuinely interested in an item will pay it without hesitation",
        "Verification requires matching details only the true owner would know",
        "Every claim is reviewed by venue staff before approval - nothing is released automatically",
        "The venue always has the final say",
      ]} />

      <ArticleH2>The Human Side of a Tech Product</ArticleH2>

      <ArticleP>
        VFetch is a technology product. It runs on AI, cloud infrastructure, and API integrations. But the outcomes it produces are deeply human.
      </ArticleP>

      <ArticleImage
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNuagvCM9WksdFV60aI5Ys1ykmnl01wKXxXgR2vKx4rvi4tjU_y-xJhKd9pWjARNsq0BagkcxY8u-nbbFX2XgMnfYQ_0igXf1swxPk3D3hnsDfD2L3XgK4rzsESRR9h9I0M2QvDYx4-lnJdmtPNYvVEblVXspNL8JQlXL0yR4pSWBNxz8r5PuUH14EB7h1oN7fPnXiRvhc3J85Qjmw8Lv2Gti0O1cG2u7tK_8NX9Da0np1Qah5vIdFmvQQmX5pGZ3qtCBpzoNcFZs"
        alt="Person reunited with lost belongings"
        caption="The moments that matter most are the ones where someone gets something important back."
      />

      <ArticleCallout icon="emoji_emotions">
        We have seen the messages that come through when someone gets something important back - a passport found the night before an international flight, a laptop recovered with three years of unbacked-up work intact, a child's beloved toy returned by post. These moments are small in the grand scheme. They are also real, and they matter.
      </ArticleCallout>

      <ArticleH2>What We Are Building Toward</ArticleH2>

      <ArticleP>
        We are a small team. We are not trying to build everything at once. But the direction is clear: every improvement we make should either help venues log items more easily, help guests find their belongings more reliably, or help the two parties connect more quickly. Everything else is a distraction.
      </ArticleP>

      <ArticleP>
        If you work at a venue and are reading this: thank you for being part of the system that makes returns possible. The staff member who takes 45 seconds to photograph and log a found item is the person who makes the reunion happen. We are just the platform that connects the dots.
      </ArticleP>

      <ArticleQuote>
        And if you have ever had something returned to you that you thought was gone for good - you know exactly what we are building toward.
      </ArticleQuote>

      <ArticleCTA
        href="/for-venues"
        label="Join the VFetch Network"
        subtext="Free for all venues. Help us turn lost moments into found ones."
      />
    </ArticleLayout>
  );
}
