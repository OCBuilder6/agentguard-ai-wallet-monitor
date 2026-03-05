"use client";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5" />
      </svg>
    ),
    iconBg: "bg-blue-100 text-blue-600",
    title: "AI Transaction Explainer",
    description: "Every transaction decoded in plain English. No more wondering what your AI agent just did — we explain it like you're 12.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    iconBg: "bg-red-100 text-red-600",
    title: "Real-Time Risk Alerts",
    description: "Get notified the moment an AI agent does something suspicious — unlimited approvals, flash loans, rug-adjacent contracts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    iconBg: "bg-violet-100 text-violet-600",
    title: "AI Agent Identity",
    description: "We fingerprint and track which AI agents touched your wallet — AutoYield, LeverageBot, GovernanceAI — and build trust scores for each.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    iconBg: "bg-green-100 text-green-600",
    title: "Portfolio Risk Scoring",
    description: "One wallet trust score that summarizes your exposure — liquidation risk, unlocked approvals, AI agent permissions — across all 12 chains.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    iconBg: "bg-amber-100 text-amber-600",
    title: "Telegram & Email Alerts",
    description: "Instant notifications when your AI agents take high-risk actions. Get the alert before the damage is done.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    iconBg: "bg-slate-100 text-slate-600",
    title: "One-Click Revoke",
    description: "Spotted a dangerous approval? Revoke it in one click — we generate the transaction, you sign it. No Etherscan hunting required.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6">
            Built for the Agentic Era
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            AI agents are powerful.<br />
            <span className="text-gradient">Power needs oversight.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            By 2026, AI agents execute 60%+ of DeFi transactions. AgentGuard is the missing safety layer — the difference between &ldquo;set and forget&rdquo; and &ldquo;set and lose everything.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 pt-10 border-t border-slate-200 flex flex-wrap justify-center items-center gap-8">
          {[
            { label: "SOC 2 Type II", icon: "🔒" },
            { label: "No private key access", icon: "🛡️" },
            { label: "Read-only analysis", icon: "👁️" },
            { label: "Open source core", icon: "🔓" },
            { label: "12 chains supported", icon: "⛓️" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
