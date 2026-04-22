"use client";
import { useState } from "react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "Success Stories",
    categoryColor: "bg-secondary-container text-on-secondary-container",
    date: "March 12, 2024",
    title: "Scaling Lost Property for Global Hotel Chains",
    excerpt:
      "How our latest implementation helped a major hotel group reduce unclaimed items by 84% and cut front-desk handling time in half.",
    cta: "Read Story",
    href: "/blog/scaling-lost-property-for-global-hotel-chains",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxkpBFZF1pch2FRcqT9C4S3aX8nVmjavh4tjy7TnJhmSzmcnaUScO73K2mHmK18CNdx7Juufv94AJe07EI6QIYO7NOIq1M00DAb8-B1uLkP793BUwbHy8x-sQOWUpFoX0PIw_wNMz4uCcDMmsKpuKeyVHEkIvckq9DgYdYMkJsF8QRe4W0RO84Gh6FIRhic-BRMGDwJpJ9m0COdZ5CnWHcMrD9yyFt7Pv28DDBVV9PnDtH1tAGLOvFSQI3x78vaxgBYEv4WjdsVvI",
    span: 1,
  },
  {
    id: 2,
    category: "Tech News",
    categoryColor: "bg-secondary-container text-on-secondary-container",
    date: "February 28, 2024",
    title: "AI Vision Update: Smarter Item Recognition",
    excerpt:
      "Deep dive into the AI improvements that allow VFetch to identify items from blurry or partial photos with 40% higher accuracy.",
    cta: "Deep Dive",
    href: "/blog/ai-vision-update-smarter-item-recognition",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAng0m8TWCrNZxg1vt8GX_Bzuy9Lt-I0hZK23f8vAV-kB3rKYQ-kxqywingVVqRO6r44zuC7NnF4avImG66J5Xwtyfjg2Q7nz0hpbS9TMFw-5Veyc236zPuEdfs4C429CUyLcTr-gmNC-qGOBhlVdM79ZNh63jQ9dFdrJDYmn-aseejDO3BBSv-qFN3ozuLwHBE5vhVZERAPsRvDtajWSKx1WXdor-FZEYOj99CYDKQDmgI_lVia7brmoOtCij8MZhgwKzTqrT58Z8",
    span: 1,
  },
  {
    id: 3,
    category: "Industry Trends",
    categoryColor: "bg-secondary-container text-on-secondary-container",
    date: "January 15, 2024",
    title: "The Future of Lost Property in UK Venues",
    excerpt:
      "Analysing the shift toward proactive digital logging in stadiums, airports, and luxury hotels across the UK.",
    cta: "Read Analysis",
    href: "/blog/the-future-of-lost-property-in-uk-venues",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNuagvCM9WksdFV60aI5Ys1ykmnl01wKXxXgR2vKx4rvi4tjU_y-xJhKd9pWjARNsq0BagkcxY8u-nbbFX2XgMnfYQ_0igXf1swxPk3D3hnsDfD2L3XgK4rzsESRR9h9I0M2QvDYx4-lnJdmtPNYvVEblVXspNL8JQlXL0yR4pSWBNxz8r5PuUH14EB7h1oN7fPnXiRvhc3J85Qjmw8Lv2Gti0O1cG2u7tK_8NX9Da0np1Qah5vIdFmvQQmX5pGZ3qtCBpzoNcFZs",
    span: 1,
  },
  {
    id: 4,
    category: "Company News",
    categoryColor: "bg-tertiary text-on-tertiary",
    date: "January 05, 2024",
    title: "VFetch Launches International Courier Coverage",
    excerpt:
      "Our courier integration means item owners anywhere in the world can have their belongings shipped directly to their door via Royal Mail, DPD, and more.",
    cta: "Full Article",
    href: "/blog/vfetch-partners-with-parcel2go",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0EKeEVhNgr_WRPdWHpCQlhnyTvNwyU7l4Szvtm2LCjPNFjXBA0g9CfJsmtUS0qGhViG06JxrXwpht_BVpbma-ZqFlJJChGNFcOvEgtJyUwJwVVJatkWS3TOS1G-4B-DxphhVbDjNFjxAlE0CQ9EoWHfnB4ypnsWE--_9H5q7ALS13nDJL5fMETlyN86IR6U86JqGrwdDAp2YVfxZCshfhvP3Bdz4JePH9Z2k8TmV5v8NIi6Cbc-Qbo4UogTVErvcZvwd2ptBEujc",
    span: 2,
  },
  {
    id: 5,
    category: "Company Culture",
    categoryColor: "bg-secondary-container text-on-secondary-container",
    date: "December 20, 2023",
    title: "Building for Good: VFetch's Mission Beyond Lost Items",
    excerpt:
      "How our small team is reducing anxiety for thousands of people every week by making the recovery of personal belongings fast, fair, and human.",
    cta: "Our Mission",
    href: "/blog/building-for-good-vfetch-mission",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzSQJLR3n9niB62kLAfPYsy-DhntUqMdokC1TjXag1srdxKldYrklX2K32IZuJlBmVNe8uNWo8TeO1BSKq9rdfKIdaFvzvywcsb_Z81Z7E6DjDFu3o4M3mqROIMo_5DGwPINXL6eaHxSckXdZ6S_sg1aHVBmniCNehDJYYE6YpRy8RLWiOl-8ylFvEc9m0lx05m-a4WfVknh6jhBLltwcEVC445w5x-EUyuSis1lm_42I8hzCFcY21HO5UQzF8EVUXAkR2_aamnMM",
    span: 1,
  },
];

const categories = ["All Stories", "Success Stories", "Tech News", "Industry Trends", "Company News", "Company Culture"];

export function BlogGrid() {
  const [active, setActive] = useState("All Stories");

  const filtered = active === "All Stories"
    ? posts
    : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-12 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-colors cursor-pointer ${
              active === cat
                ? "bg-primary text-on-primary shadow-lg shadow-primary/10"
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) =>
          post.span === 2 && filtered.length > 1 ? (
            <article
              key={post.id}
              className="group flex flex-col bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 lg:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${post.categoryColor} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col">
                  <time className="text-xs font-bold text-outline uppercase tracking-widest mb-3">{post.date}</time>
                  <Link href={post.href}>
                    <h3 className="text-3xl font-extrabold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium opacity-70">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={post.href}
                      className="flex items-center gap-2 text-primary font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                    >
                      {post.cta}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <article
              key={post.id}
              className="group flex flex-col bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${post.categoryColor} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <time className="text-xs font-bold text-outline uppercase tracking-widest mb-3">{post.date}</time>
                <Link href={post.href}>
                  <h3 className="text-2xl font-bold text-on-surface mb-4 leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow font-medium opacity-70">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="flex items-center gap-2 text-primary font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                >
                  {post.cta}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          )
        )}

        {filtered.length === 0 && (
          <div className="col-span-3 py-20 text-center text-on-surface-variant font-medium">
            No articles in this category yet.
          </div>
        )}
      </div>
    </>
  );
}
