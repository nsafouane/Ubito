export function AgentTemplates() {
  const templates = [
    {
      icon: '📱',
      name: 'Social Media Manager',
      desc: 'Schedule posts, reply to comments, monitor engagement across platforms.',
      color: 'from-pink-500/20 to-purple-500/20',
      border: 'border-pink-500/30',
      accent: 'text-pink-400',
      tags: ['Instagram', 'X', 'LinkedIn'],
    },
    {
      icon: '✍️',
      name: 'Content Creator',
      desc: 'Write blog posts, newsletters, ad copy, and SEO content on autopilot.',
      color: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/30',
      accent: 'text-amber-400',
      tags: ['Blog', 'Newsletter', 'SEO'],
    },
    {
      icon: '📈',
      name: 'Trading Assistant',
      desc: 'Monitor markets, scan signals, and draft orders — you decide before anything executes.',
      color: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/30',
      accent: 'text-green-400',
      tags: ['Crypto', 'Stocks', 'Signals'],
    },
    {
      icon: '💻',
      name: 'Coding Agent',
      desc: 'Write code, review PRs, run tests, and push changes on request.',
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30',
      accent: 'text-ubito-cyan',
      tags: ['GitHub', 'Tests', 'Review'],
    },
    {
      icon: '🔍',
      name: 'Research Analyst',
      desc: 'Deep-dive any topic, scrape sources, and deliver structured reports.',
      color: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/30',
      accent: 'text-blue-400',
      tags: ['Web', 'Summarize', 'Reports'],
    },
    {
      icon: '📧',
      name: 'Email Manager',
      desc: 'Triage inbox, draft replies, and follow up — nothing sent without your OK.',
      color: 'from-red-500/20 to-rose-500/20',
      border: 'border-red-400/30',
      accent: 'text-red-400',
      tags: ['Gmail', 'Triage', 'Drafts'],
    },
    {
      icon: '⚙️',
      name: 'Operations Bot',
      desc: 'Automate scheduling, document handling, and recurring business workflows.',
      color: 'from-slate-500/20 to-gray-500/20',
      border: 'border-slate-500/30',
      accent: 'text-slate-400',
      tags: ['Calendar', 'Notion', 'Tasks'],
    },
    {
      icon: '🧩',
      name: 'Custom Agent',
      desc: 'Start from scratch. Give it any goal, install any skills, connect any tools.',
      color: 'from-ubito-purple/20 to-violet-500/20',
      border: 'border-ubito-purple/30',
      accent: 'text-ubito-purple',
      tags: ['Any task', 'Any tool', 'Your rules'],
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-3">
            Ready-to-deploy templates
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            One platform. Any task.
          </h2>
          <p className="text-ubito-muted text-lg max-w-xl mx-auto">
            Pick a template and your agent is set up in minutes — with the right skills, tools,
            and approval rules already configured.
          </p>
        </div>

        {/* Template grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((t) => (
            <div
              key={t.name}
              className={`relative group bg-linear-to-br ${t.color} border ${t.border} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-200 cursor-default overflow-hidden`}
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/2" />

              <div className="relative">
                <span className="text-3xl mb-4 block">{t.icon}</span>
                <h3 className="text-white font-semibold mb-2 text-sm">{t.name}</h3>
                <p className="text-ubito-muted text-xs leading-relaxed mb-4">{t.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 ${t.accent}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-ubito-muted text-sm mt-8">
          Every template is a starting point — add any skill or tool at any time.
        </p>
      </div>
    </section>
  )
}
