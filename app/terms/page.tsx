export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using VFetch, you agree to be bound by these Terms of Service. If you do not agree, you may not use the platform.",
    },
    {
      id: "description",
      title: "2. Service Description",
      content:
        "VFetch is a lost-and-found platform that connects item owners with venues where items have been found. VFetch acts as an intermediary and does not guarantee the recovery of any lost item.",
    },
    {
      id: "accounts",
      title: "3. User Accounts",
      content:
        "You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials. VFetch is not liable for any losses resulting from unauthorised access to your account.",
    },
    {
      id: "claims",
      title: "4. Claims & Fees",
      content:
        "Submitting a claim incurs a small fee, charged via Stripe. This fee is non-refundable if the venue approves your claim. If a claim is rejected, you may appeal via the support process. VFetch does not guarantee claim approval.",
    },
    {
      id: "venues",
      title: "5. Venue Responsibilities",
      content:
        "Venues agree to: log found items promptly and accurately, store found items securely until they are claimed or disposed of according to law, process claims in good faith, and not charge additional fees to item owners outside the VFetch platform.",
    },
    {
      id: "ip",
      title: "6. Intellectual Property",
      content:
        "All content, trademarks, and software associated with VFetch are owned by or licensed to VFetch Ltd. You may not reproduce, distribute, or create derivative works without express written permission.",
    },
    {
      id: "liability",
      title: "7. Limitation of Liability",
      content:
        "VFetch is not liable for: items that are not recovered, damage to items while in venue custody, venue negligence, or any indirect or consequential loss arising from use of the platform.",
    },
    {
      id: "termination",
      title: "8. Termination",
      content:
        "VFetch may suspend or terminate your account for breach of these terms, fraudulent activity, or any conduct harmful to other users or venues.",
    },
    {
      id: "law",
      title: "9. Governing Law",
      content:
        "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    },
    {
      id: "contact",
      title: "10. Contact",
      content: "For queries about these terms: legal@vfetch.app",
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
            Terms of Service
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            The terms that govern your use of the VFetch platform.
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
