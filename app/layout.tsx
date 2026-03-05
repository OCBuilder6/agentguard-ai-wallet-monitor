import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgentGuard — AI Wallet Shield for the Agentic Era",
  description: "Monitor, decode, and risk-score every transaction your AI agents make on-chain. Built for the era where AI executes on your behalf.",
  keywords: "AI agents, blockchain, wallet security, DeFi, transaction monitoring, Web3",
  openGraph: {
    title: "AgentGuard — AI Wallet Shield",
    description: "AI-powered transaction monitoring & trust scoring for wallets interacting with AI agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
