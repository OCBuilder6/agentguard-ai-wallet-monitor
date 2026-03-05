export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-white">AgentGuard</span>
              <p className="text-xs text-slate-500">AI Wallet Shield for the Agentic Era</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy", "Terms", "Docs", "Blog", "Twitter", "Discord"].map((link) => (
              <a key={link} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>

          <p className="text-slate-600 text-xs">
            © 2026 AgentGuard. Built for the agentic era.
          </p>
        </div>
      </div>
    </footer>
  );
}
