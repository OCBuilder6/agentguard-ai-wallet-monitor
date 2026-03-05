"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import WalletAnalyzer from "@/components/WalletAnalyzer";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeWallet, setActiveWallet] = useState<string>("");

  return (
    <div className="min-h-screen bg-[#050a14] text-slate-100">
      <Navbar />
      <HeroSection onAnalyze={setActiveWallet} />
      {activeWallet && <WalletAnalyzer wallet={activeWallet} />}
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
