"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-slate-900">Agent<span className="text-blue-600">Guard</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Pricing</a>
            <a href="#docs" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Docs</a>
            <a href="#blog" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Blog</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors px-3 py-2">
              Sign in
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
              Start Free →
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-3">
          <a href="#features" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Features</a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Pricing</a>
          <a href="#docs" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Docs</a>
          <button className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg">
            Start Free →
          </button>
        </div>
      )}
    </nav>
  );
}
