"use client";

import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "For wallet owners just getting started",
    highlight: false,
    cta: "Start Free",
    ctaStyle: "border border-white/20 text-white hover:bg-white/5",
    features: [
      { text: "1 wallet monitored", included: true },
      { text: "Last 7 days of transactions", included: true },
      { text: "AI explanations (50/month)", included: true },
      { text: "Basic risk score", included: true },
      { text: "Real-time alerts", included: false },
      { text: "Multiple wallets", included: false },
      { text: "AI agent identity tracking", included: false },
      { text: "Telegram/email notifications", included: false },
      { text: "One-click token revoke", included: false },
      { text: "Monthly risk report", included: false },
    ],
  },
  {
    name: "Pro",
    price: { monthly: 19, annual: 15 },
    description: "For active DeFi users with AI agents",
    highlight: true,
    badge: "Most Popular",
    cta: "Start 7-Day Free Trial",
    ctaStyle: "bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white shadow-lg shadow-sky-500/25",
    features: [
      { text: "10 wallets monitored", included: true },
      { text: "Full transaction history (90 days)", included: true },
      { text: "Unlimited AI explanations", included: true },
      { text: "Advanced risk scoring", included: true },
      { text: "Real-time alerts", included: true },
      { text: "AI agent identity tracking", included: true },
      { text: "Telegram & email notifications", included: true },
      { text: "One-click token revoke", included: true },
      { text: "Monthly risk report PDF", included: true },
      { text: "API access (1k calls/mo)", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annual: 79 },
    description: "For funds, DAOs & multi-sig teams",
    highlight: false,
    cta: "Contact Sales",
    ctaStyle: "border border-white/20 text-white hover:bg-white/5",
    features: [
      { text: "Unlimited wallets", included: true },
      { text: "Full transaction history (all time)", included: true },
      { text: "Unlimited AI explanations", included: true },
      { text: "Custom risk models", included: true },
      { text: "Real-time alerts (multi-sig)", included: true },
      { text: "AI agent identity tracking", included: true },
      { text: "Slack, Telegram, email & webhook", included: true },
      { text: "One-click revoke (batch)", included: true },
      { text: "Weekly risk reports + briefings", included: true },
      { text: "Unlimited API access", included: true },
    ],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-purple-300 mb-6 border border-purple-500/20">
            Simple, transparent pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Protect your <span className="text-gradient">DeFi portfolio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            One critical alert pays for a lifetime subscription. AI agents can drain wallets in seconds.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-xl">
            <button
              onClick={() => setAnnual(false)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${!annual ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Annual
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 ${plan.highlight
                ? 'bg-gradient-to-b from-sky-500/10 to-indigo-500/10 border border-sky-500/30 ring-1 ring-sky-500/20'
                : 'glass'}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-slate-400 text-sm mb-1.5">/month</span>
                  )}
                </div>
                {annual && plan.price.monthly > 0 && (
                  <p className="text-slate-500 text-xs mt-1">
                    Billed ${(annual ? plan.price.annual : plan.price.monthly) * 12}/year
                    {" "}<span className="text-emerald-400">Save ${(plan.price.monthly - plan.price.annual) * 12}/year</span>
                  </p>
                )}
              </div>

              <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 mb-6 ${plan.ctaStyle}`}>
                {plan.cta}
              </button>

              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ mini */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              q: "Do you need my private key?",
              a: "Absolutely not. AgentGuard is 100% read-only. We only analyze public on-chain data. Your keys, your crypto.",
            },
            {
              q: "How do you detect AI agents?",
              a: "We fingerprint agent wallets by analyzing transaction patterns, known agent contract interactions, and on-chain signatures.",
            },
            {
              q: "What chains are supported?",
              a: "Ethereum, Arbitrum, Optimism, Base, Polygon, Avalanche, BNB Chain, Solana, and 4 more. Multi-chain by default.",
            },
          ].map((item) => (
            <div key={item.q} className="glass rounded-2xl p-6">
              <h4 className="font-semibold text-white text-sm mb-2">{item.q}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
