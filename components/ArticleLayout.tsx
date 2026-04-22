import Link from "next/link";

interface ArticleLayoutProps {
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author?: string;
  heroImage: string;
  heroImageAlt: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  category,
  categoryColor,
  date,
  readTime,
  title,
  excerpt,
  author = "VFetch Team",
  heroImage,
  heroImageAlt,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="pt-24 pb-24 bg-surface">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors mb-10 group"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className={`${categoryColor} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider`}>
            {category}
          </span>
          <span className="text-xs text-on-surface-variant">{date}</span>
          <span className="text-xs text-outline">·</span>
          <span className="text-xs text-on-surface-variant">{readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight">
          {title}
        </h1>

        <p className="text-on-surface-variant text-xl leading-relaxed mb-8 font-medium">
          {excerpt}
        </p>

        <div className="flex items-center gap-3 pt-6 border-t border-outline-variant/20">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-lg">person</span>
          </div>
          <div>
            <p className="font-bold text-on-surface text-sm">{author}</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-12 md:mb-16">
        <div className="rounded-2xl md:rounded-[2rem] overflow-hidden h-[220px] sm:h-[300px] md:h-[500px] shadow-xl">
          <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
        {children}
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-16 pt-8 border-t border-outline-variant/20 flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all group"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
          All articles
        </Link>
        <Link
          href="/for-venues"
          className="text-sm font-bold bg-primary text-on-primary px-5 py-2.5 rounded-xl hover:bg-[#005049] transition-colors"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
}

/* ── Reusable article content components ─────────────────────────── */

export function ArticleP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-on-surface-variant text-lg leading-[1.85] font-normal">
      {children}
    </p>
  );
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight pt-6">
      {children}
    </h2>
  );
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-on-surface tracking-tight">
      {children}
    </h3>
  );
}

export function ArticleQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative pl-6 py-1 border-l-4 border-primary">
      <p className="text-on-surface text-xl font-semibold leading-relaxed italic">
        {children}
      </p>
    </blockquote>
  );
}

export function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-4">
      <div className="rounded-2xl overflow-hidden h-56 md:h-80">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {caption && (
        <figcaption className="text-xs text-outline text-center mt-3 font-medium">{caption}</figcaption>
      )}
    </figure>
  );
}

export function ArticleCallout({ icon, children }: { icon?: string; children: React.ReactNode }) {
  return (
    <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 flex gap-4 items-start">
      {icon && (
        <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0">{icon}</span>
      )}
      <p className="text-on-surface font-medium leading-relaxed text-base">{children}</p>
    </div>
  );
}

export function ArticleStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className={`grid gap-3 md:gap-4 my-4 ${stats.length === 2 ? "grid-cols-2" : stats.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-surface-container rounded-2xl p-5 text-center">
          <p className="text-3xl font-extrabold text-primary tracking-tight">{s.value}</p>
          <p className="text-xs text-on-surface-variant font-semibold mt-1 leading-snug">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ArticleSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="space-y-4 my-4">
      {steps.map((step, i) => (
        <div key={step.title} className="flex gap-5 items-start">
          <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5">
            {i + 1}
          </div>
          <div>
            <p className="font-bold text-on-surface text-base mb-1">{step.title}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ArticleList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3 my-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="material-symbols-outlined text-primary text-base mt-1 shrink-0">check_circle</span>
          <span className="text-on-surface-variant text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleCTA({ href, label, subtext }: { href: string; label: string; subtext?: string }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-8 text-center my-4">
      {subtext && <p className="text-on-surface-variant text-sm mb-4 font-medium">{subtext}</p>}
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-8 py-3.5 rounded-xl hover:bg-[#005049] transition-colors text-sm"
      >
        {label}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  );
}
