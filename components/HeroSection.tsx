"use client";

import { useState } from "react";

interface HeroSectionProps {
  onAnalyze: (wallet: string) => void;
}

const DEMO_WALLETS = [
  "0x742d35Cc6634C0532925a3b8D4C9E5D6B4e12345",
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
];

export default function HeroSection({ onAnalyze }: HeroSectionProps) {
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = wallet.trim();
    if (!trimmed) {
      setError("Please enter a wallet address");
      return;
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(trimmed)) {
      setError("Invalid Ethereum address format");
      return;
    }
    setError("");
    onAnalyze(trimmed);
    setTimeout(() => {
      document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleDemo = (demoWallet: string) => {
    setWallet(demoWallet);
    setError("");
    onAnalyze(demoWallet);
    setTimeout(() => {
      document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="pt-28 pb-20 px-4 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Top layout: text left, mock dashboard right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left: headline + form */}
          <div className="flex-1 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-slow" />
              AI Wallet Intelligence — Built for the Agentic Era
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">
              Monitor every move<br />
              your <span className="text-gradient">AI agents</span> make.
            </h1>

            <p className="text-lg text-slate-500 max-w-lg mb-10 leading-relaxed">
              AgentGuard scans your wallet in real time, explains every AI agent transaction in plain English, and fires an alert the moment something looks wrong.
            </p>

            {/* Wallet Input */}
            <form onSubmit={handleSubmit} className="mb-5">
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={wallet}
                    onChange={(e) => { setWallet(e.target.value); setError(""); }}
                    placeholder="0x... wallet address"
                    className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors whitespace-nowrap text-sm"
                >
                  Analyze →
                </button>
              </div>
              {error && (
                <p className="mt-2 text-red-600 text-sm">{error}</p>
              )}
            </form>

            {/* Demo wallets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 text-xs">Try demo:</span>
              {DEMO_WALLETS.map((dw) => (
                <button
                  key={dw}
                  onClick={() => handleDemo(dw)}
                  className="text-xs font-mono text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors border border-blue-100"
                >
                  {dw.slice(0, 6)}...{dw.slice(-4)}
                </button>
              ))}
            </div>
          </div>

          {/* Right: mock security dashboard card */}
          <div className="flex-shrink-0 w-full lg:w-[380px]">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              {/* Card header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="text-sm font-semibold text-slate-700">Wallet Monitor — Live</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">0x742d...2345</span>
              </div>

              {/* Trust score row */}
              <div className="px-5 py-5 border-b border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Trust Score</span>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Moderate Risk</span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-slate-900">62</span>
                  <span className="text-slate-400 text-sm mb-1.5">/ 100</span>
                </div>
                <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>

              {/* Mini tx list */}
              <div className="px-5 py-4 space-y-3">
                {[
                  { type: "Swap", agent: "AutoYield Bot", risk: "safe", label: "✓ Safe", color: "text-green-600 bg-green-50 border-green-100" },
                  { type: "Approval", agent: "AutoYield Bot", risk: "danger", label: "🚨 Danger", color: "text-red-600 bg-red-50 border-red-100" },
                  { type: "Stake", agent: "GovernanceAI", risk: "caution", label: "⚡ Caution", color: "text-amber-600 bg-amber-50 border-amber-100" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-slate-800">{tx.type}</span>
                      <div className="text-xs text-slate-400 mt-0.5">🤖 {tx.agent}</div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tx.color}`}>{tx.label}</span>
                  </div>
                ))}
              </div>

              <div className="px-5 py-3 bg-red-50 border-t border-red-100">
                <p className="text-xs text-red-600 font-medium">⚠️ 1 critical alert — Unlimited approval to unverified contract</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-slate-100 text-center">
          {[
            { value: "2.4M+", label: "Transactions Analyzed" },
            { value: "98.7%", label: "Threat Detection Rate" },
            { value: "14ms", label: "Avg Response Time" },
            { value: "12", label: "Chains Supported" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
