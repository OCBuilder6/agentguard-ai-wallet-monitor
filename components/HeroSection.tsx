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
    // Scroll to results
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
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-sky-300 mb-8 border border-sky-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-slow" />
          AI Agents are executing on your wallet — are you watching?
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Your AI agents.<br />
          <span className="text-gradient">Your money. Your rules.</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          AgentGuard monitors every on-chain transaction your AI agents make, explains it in plain English, and alerts you the moment something looks wrong.
        </p>

        {/* Wallet Input */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </div>
              <input
                type="text"
                value={wallet}
                onChange={(e) => { setWallet(e.target.value); setError(""); }}
                placeholder="Enter wallet address (0x...)"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105 whitespace-nowrap text-sm shadow-lg shadow-sky-500/25"
            >
              Analyze Wallet →
            </button>
          </div>
          {error && (
            <p className="mt-2 text-red-400 text-sm text-left">{error}</p>
          )}
        </form>

        {/* Demo wallets */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="text-slate-500 text-xs self-center">Try demo:</span>
          {DEMO_WALLETS.map((dw) => (
            <button
              key={dw}
              onClick={() => handleDemo(dw)}
              className="text-xs font-mono text-sky-400/70 hover:text-sky-300 glass px-3 py-1.5 rounded-lg transition-colors border border-white/5 hover:border-sky-500/30"
            >
              {dw.slice(0, 6)}...{dw.slice(-4)}
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "2.4M+", label: "Txns Analyzed" },
            { value: "98.7%", label: "Threat Detection" },
            { value: "14ms", label: "Avg Response Time" },
            { value: "12", label: "Chains Supported" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
