import type { Metadata } from "next";
import {
  ArticleLayout, ArticleP, ArticleH2, ArticleH3, ArticleQuote,
  ArticleImage, ArticleCallout, ArticleStats, ArticleSteps, ArticleCTA,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "AI Vision Update: Smarter Item Recognition - VFetch Blog",
  description: "Deep dive into the AI improvements that allow VFetch to identify items from blurry or partial photos with 40% higher accuracy.",
  alternates: { canonical: "https://vfetch.app/blog/ai-vision-update-smarter-item-recognition" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Tech News"
      categoryColor="bg-secondary-container text-on-secondary-container"
      date="February 28, 2024"
      readTime="7 min read"
      title="AI Vision Update: Smarter Item Recognition"
      excerpt="Deep dive into the AI improvements that allow VFetch to identify items from blurry or partial photos with 40% higher accuracy."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAng0m8TWCrNZxg1vt8GX_Bzuy9Lt-I0hZK23f8vAV-kB3rKYQ-kxqywingVVqRO6r44zuC7NnF4avImG66J5Xwtyfjg2Q7nz0hpbS9TMFw-5Veyc236zPuEdfs4C429CUyLcTr-gmNC-qGOBhlVdM79ZNh63jQ9dFdrJDYmn-aseejDO3BBSv-qFN3ozuLwHBE5vhVZERAPsRvDtajWSKx1WXdor-FZEYOj99CYDKQDmgI_lVia7brmoOtCij8MZhgwKzTqrT58Z8"
      heroImageAlt="AI item recognition technology"
    >
      <ArticleP>
        Lost property photography is rarely ideal. Items are found in storerooms, handed over at busy front desks, or discovered by cleaners mid-shift. Photos get taken quickly, under fluorescent lighting, against cluttered backgrounds, and sometimes out of focus. The real world is messy - and our AI has to work in it.
      </ArticleP>

      <ArticleP>
        This month we shipped a significant update to VFetch's vision pipeline. Here is a plain-language breakdown of what changed, why it matters, and what it means for venues and guests.
      </ArticleP>

      <ArticleStats stats={[
        { value: "40%", label: "Improvement in attribute extraction" },
        { value: "61%", label: "Better on low-quality photos" },
        { value: "89%", label: "Brand ID accuracy (up from 67%)" },
        { value: "34%", label: "Richer descriptions on average" },
      ]} />

      <ArticleH2>The Challenge: Real-World Photos Are Imperfect</ArticleH2>

      <ArticleP>
        When we first built VFetch's item recognition system, we trained and tested it against relatively clean product photography. A clear photo of a black Sony headphone on a white surface is easy to analyse. But that is not what most found-item photos look like.
      </ArticleP>

      <ArticleCallout icon="photo_camera">
        Early venue feedback revealed a consistent pattern: accuracy dropped when photos were taken at an angle, in low light, with part of the item obscured, or against a patterned background. A wallet photographed half-open on a patterned carpet would return less detail than we needed for a reliable match.
      </ArticleCallout>

      <ArticleImage
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNuagvCM9WksdFV60aI5Ys1ykmnl01wKXxXgR2vKx4rvi4tjU_y-xJhKd9pWjARNsq0BagkcxY8u-nbbFX2XgMnfYQ_0igXf1swxPk3D3hnsDfD2L3XgK4rzsESRR9h9I0M2QvDYx4-lnJdmtPNYvVEblVXspNL8JQlXL0yR4pSWBNxz8r5PuUH14EB7h1oN7fPnXiRvhc3J85Qjmw8Lv2Gti0O1cG2u7tK_8NX9Da0np1Qah5vIdFmvQQmX5pGZ3qtCBpzoNcFZs"
        alt="Real-world found item photography challenges"
        caption="70% of found-item photos fall into the 'messy middle' - not terrible, but not clean product shots either."
      />

      <ArticleP>
        We needed the model to perform well in that messy middle - the 70% of photos that are not terrible but are not pristine either.
      </ArticleP>

      <ArticleH2>What We Changed</ArticleH2>

      <ArticleP>
        The update covers three areas of the recognition pipeline:
      </ArticleP>

      <ArticleSteps steps={[
        {
          title: "Contextual inference",
          body: "The model now draws on contextual signals to supplement what it can directly observe. A partial label, a distinctive strap, or a specific hardware detail is used to make probabilistic inferences about brand, model, and category - rather than returning a generic low-confidence description.",
        },
        {
          title: "Multi-angle prompt structuring",
          body: "We restructured how we prompt the vision model. Instead of asking for a single description, the pipeline now runs structured extraction - separating object type, colour analysis, brand identification, condition assessment, and distinguishing features as discrete steps. This produces richer, more consistent output even when individual signals are weak.",
        },
        {
          title: "Confidence-weighted descriptions",
          body: "The model now flags each attribute by confidence level. High-confidence attributes are displayed prominently. Lower-confidence inferences (e.g. 'possibly Mulberry, stitching consistent with premium brand') are surfaced separately. Staff get a clearer picture of what the AI is certain about vs. what it is inferring.",
        },
      ]} />

      <ArticleH2>The Results</ArticleH2>

      <ArticleP>
        We measured the update against a benchmark of 4,000 real found-item photos submitted by venues over three months - manually reviewed and tagged to establish ground truth.
      </ArticleP>

      <ArticleStats stats={[
        { value: "40%", label: "Overall accuracy improvement" },
        { value: "61%", label: "Improvement on worst-quality photos" },
        { value: "67→89%", label: "Brand ID accuracy" },
        { value: "+34%", label: "Average description length" },
      ]} />

      <ArticleH2>Why This Matters for Matching</ArticleH2>

      <ArticleP>
        Better descriptions directly improve match rates. The VFetch matching engine compares guest search queries against logged item descriptions using semantic similarity. The more detail in a description, the more surface area for a match to connect.
      </ArticleP>

      <ArticleQuote>
        A wallet logged as "brown leather wallet" will match a handful of queries. A wallet logged as "bifold, dark tan leather, brass zip coin compartment, visible corner wear, possible Fossil branding" will match far more - and with far higher confidence.
      </ArticleQuote>

      <ArticleH3>What stays the same</ArticleH3>

      <ArticleP>
        The logging flow for venue staff is unchanged. Staff take a photo and confirm the description - the AI handles the analysis silently in the background. The only visible difference is that descriptions are richer and more detailed than before.
      </ArticleP>

      <ArticleCallout icon="upcoming">
        The next update to the vision pipeline focuses on document and ID recognition - specifically, improving how the platform handles found passports, driving licences, and bank cards, where the right balance between useful identification and privacy protection requires careful design.
      </ArticleCallout>

      <ArticleCTA
        href="/for-venues"
        label="Try VFetch at Your Venue"
        subtext="Free to use. No contracts. Staff training takes under 20 minutes."
      />
    </ArticleLayout>
  );
}
