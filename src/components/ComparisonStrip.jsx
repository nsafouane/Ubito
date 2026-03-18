const COMPARISONS = [
  {
    label: 'Setup',
    oss: 'Terminal + config files required',
    ubito: 'Visual wizard — no code needed',
  },
  {
    label: 'Integrations',
    oss: 'Manage API keys manually',
    ubito: 'OAuth one-click connections',
  },
  {
    label: 'Project isolation',
    oss: 'Single shared workspace for all tasks',
    ubito: 'Per-project isolated agent & workspace',
  },
  {
    label: 'Task tracking',
    oss: 'Black box — no visibility into steps',
    ubito: 'Step-by-step task list, live status',
  },
  {
    label: 'Safety',
    oss: 'Agent acts freely without asking',
    ubito: 'Human-in-the-loop approval for every risky action',
  },
  {
    label: 'Memory',
    oss: 'Flat, unmanaged memory file',
    ubito: 'Project memory + global user memory, dashboard to review & edit',
  },
  {
    label: 'Who can use it',
    oss: 'Technical users only',
    ubito: 'Anyone — plain English, no DevOps',
  },
]

export function ComparisonStrip() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-3">Why Ubito</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            OpenClaw's full power,
            <br />
            <span className="text-ubito-muted font-normal text-3xl sm:text-4xl">without the engineering overhead.</span>
          </h2>
          <p className="text-ubito-muted text-lg max-w-xl mx-auto">
            OpenClaw is one of the most capable open-source agents available. Ubito wraps it in a
            safe, visual, non-technical platform so anyone can use it effectively.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-ubito-dark border-b border-white/5">
            <div className="px-5 py-3.5" />
            <div className="px-5 py-3.5 border-l border-white/5">
              <span className="text-ubito-muted text-sm font-medium">Self-hosted OpenClaw</span>
            </div>
            <div className="px-5 py-3.5 border-l border-white/8 bg-ubito-cyan/4">
              <span className="text-ubito-cyan text-sm font-bold">Ubito</span>
            </div>
          </div>

          {/* Comparison rows */}
          {COMPARISONS.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-white/5 last:border-b-0 ${
                i % 2 === 1 ? 'bg-white/1.5' : ''
              }`}
            >
              <div className="px-5 py-4">
                <span className="text-ubito-muted text-sm font-medium">{item.label}</span>
              </div>
              <div className="px-5 py-4 border-l border-white/5">
                <span className="text-ubito-muted/60 text-sm flex items-start gap-2">
                  <span className="text-red-400/70 mt-0.5 shrink-0">✕</span>
                  <span>{item.oss}</span>
                </span>
              </div>
              <div className="px-5 py-4 border-l border-white/8 bg-ubito-cyan/2">
                <span className="text-ubito-text text-sm flex items-start gap-2">
                  <span className="text-ubito-green mt-0.5 shrink-0">✓</span>
                  <span>{item.ubito}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-ubito-muted/60 text-xs mt-5">
          Ubito uses OpenClaw as the underlying agent runtime. All agent capabilities are fully preserved — Ubito adds isolation, oversight, and accessibility on top.
        </p>
      </div>
    </section>
  )
}
