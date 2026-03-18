export function TrustStrip() {
  const pillars = [
    {
      icon: '🔒',
      title: 'Hard Isolation',
      desc: 'Each agent runs in a physically separated environment. Email agent, code agent — they cannot see each other\'s data. This is infrastructure, not a setting.',
      accent: 'border-ubito-cyan/20',
    },
    {
      icon: '✋',
      title: 'Human-in-the-Loop',
      desc: 'Every consequential action requires your explicit approval. You control the autonomy dial — from full supervision to semi-auto for routine tasks.',
      accent: 'border-ubito-green/20',
    },
    {
      icon: '🧠',
      title: 'Transparent Memory',
      desc: "Your agent's memory is visible, editable, and deletable. Every file it creates is in a browser you can open. No hidden learning. No black boxes.",
      accent: 'border-ubito-purple/20',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Trust pillars */}
        <div className="text-center mb-14">
          <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-3">Our philosophy</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Fully capable. Fully controllable.
          </h2>
          <p className="text-ubito-muted text-lg max-w-2xl mx-auto">
            Ubito is a project-manager-level AI agent platform — powerful enough to run real workflows,
            safe enough to trust completely, and simple enough that no technical knowledge is required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`bg-ubito-surface border ${p.accent} rounded-2xl p-7`}
            >
              <span className="text-4xl mb-5 block">{p.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-ubito-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Guided rollout banner */}
        <div className="relative bg-linear-to-br from-ubito-surface to-ubito-dark border border-ubito-cyan/15 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ubito-cyan/4 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-ubito-cyan/10 border border-ubito-cyan/20 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 bg-ubito-green rounded-full animate-pulse" />
                <span className="text-ubito-cyan text-xs font-medium">Early access · Founder-led onboarding</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Rolled out carefully</h3>
              <p className="text-ubito-muted text-sm leading-relaxed max-w-xl">
                We're onboarding early users by hand — configuring agents carefully, monitoring closely, and shaping
                the product with direct feedback. This is a controlled launch built around trust, not a mass rollout.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              {['Setup with you', 'Approval rules configured', 'First workflow launched'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-ubito-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-ubito-text text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
