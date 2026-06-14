export default function PrivacyPage() {
  const sections = [
    {
      id: "overview",
      title: "1. Overview",
      content:
        "VFetch ('we', 'us', 'our') is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use the VFetch mobile app, web platform, or venue portal.",
    },
    {
      id: "data-collected",
      title: "2. Data We Collect",
      content:
        "We collect information you provide directly (name, email, item descriptions, photos), data generated through app usage (search queries, claim history), location data (for venue proximity features, with your permission), and device information (push notification tokens, operating system).",
    },
    {
      id: "usage",
      title: "3. How We Use Your Data",
      content:
        "Your data is used to: match lost items with found items at venues, process and verify ownership claims, send push notifications about matches and claim status, improve our AI matching algorithms, and comply with legal obligations.",
    },
    {
      id: "sharing",
      title: "4. Data Sharing",
      content:
        "We share your data with: venue staff (only the information necessary to verify your claim), Stripe (for secure payment processing, PCI-DSS compliant), Firebase (for push notifications), and AWS (for secure data storage). We never sell your data.",
    },
    {
      id: "retention",
      title: "5. Data Retention",
      content:
        "We retain your account data for as long as your account is active. Claim records are retained for 2 years for dispute resolution purposes. You may request deletion of your account and associated data at any time.",
    },
    {
      id: "rights",
      title: "6. Your Rights (GDPR)",
      content:
        "Under GDPR, you have the right to: access your personal data, correct inaccurate data, request deletion ('right to be forgotten'), restrict processing, data portability, and object to processing. Contact us at privacy@vfetch.app to exercise these rights.",
    },
    {
      id: "cookies",
      title: "7. Cookies",
      content:
        "Our website uses essential cookies for authentication and analytics cookies (opt-in). You can manage your cookie preferences via the cookie banner.",
    },
    {
      id: "contact",
      title: "8. Contact",
      content:
        "For privacy enquiries: privacy@vfetch.app. For our registered address and Data Controller details, please email the above address.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#FAFBFC] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0D7B6C] mb-4">
            Legal
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#111827] tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            How VFetch collects, uses, and protects your personal data.
          </p>
          <p className="text-[#9CA3AF] text-sm mt-4">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar TOC */}
            <aside className="lg:w-56 shrink-0">
              <nav className="sticky top-24">
                <h2 className="text-xs font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-3">
                  Contents
                </h2>
                <ul className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-[#6B7280] hover:text-[#0D7B6C] transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <article className="flex-1">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="mb-10">
                  <h2 className="text-xl font-bold text-[#111827] mb-3">{s.title}</h2>
                  <p className="text-[#6B7280] leading-relaxed">{s.content}</p>
                </section>
              ))}
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
