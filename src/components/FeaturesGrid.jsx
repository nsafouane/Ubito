export function FeaturesGrid() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Isolated Workspaces',
      desc: 'Each agent lives in its own walled environment. Your email agent never sees your code repo. Isolation is enforced at the infrastructure level — not a setting.',
      accent: 'text-ubito-cyan',
      accentBg: 'bg-ubito-cyan/10',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Approval Center',
      desc: 'High-risk actions — sending email, pushing code, posting publicly — pause for your review. You click Approve or Deny. Nothing consequential happens without you.',
      accent: 'text-ubito-green',
      accentBg: 'bg-ubito-green/10',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      title: 'Skills Marketplace',
      desc: 'Browse and install agent capabilities per-project — web research, email triage, code review, data analysis, content writing. One click. No terminal.',
      accent: 'text-ubito-purple',
      accentBg: 'bg-ubito-purple/10',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      title: 'Workspace Visibility',
      desc: 'Every file, report, and artifact your agent creates is visible in a live browser. Download anything. No black boxes.',
      accent: 'text-amber-400',
      accentBg: 'bg-amber-400/10',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'One-Click Integrations',
      desc: 'Connect Gmail, GitHub, Google Calendar, Notion, Telegram and more via standard OAuth — no API keys, no config files. Ubito handles everything.',
      accent: 'text-blue-400',
      accentBg: 'bg-blue-400/10',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Predictable Credit Usage',
      desc: 'Ubito manages all API configurations and infrastructure costs. Your subscription includes a monthly credit allowance — every action shows its credit cost in real time. No API bills. No surprise charges. Ever.',
      accent: 'text-rose-400',
      accentBg: 'bg-rose-400/10',
    },
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-ubito-cyan/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-3">
            Everything you need
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            Powerful by default.
            <br />
            <span className="text-ubito-muted font-normal text-3xl sm:text-4xl">Safe by design.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-ubito-surface border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:bg-ubito-surface/80"
            >
              <div className={`w-10 h-10 rounded-xl ${f.accentBg} flex items-center justify-center ${f.accent} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-ubito-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
