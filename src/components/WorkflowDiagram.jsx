import { OctopusIcon } from './icons/OctopusIcon'

const STEPS = [
  {
    num: '01',
    title: 'Create a Project',
    desc: 'Pick a template or describe your goal. Name the project.',
    color: 'text-ubito-cyan',
    bg: 'bg-ubito-cyan/10',
    border: 'border-ubito-cyan/25',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v4m-2-2h4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Agent Deployed',
    desc: 'Ubito provisions an isolated OpenClaw agent just for this project.',
    color: 'text-ubito-purple',
    bg: 'bg-ubito-purple/10',
    border: 'border-ubito-purple/25',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m-6-6h18m-6-6h6m-6 6h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Assign a Task',
    desc: 'Describe what you need done in plain English. No commands.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/25',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Agent Plans Steps',
    desc: 'A numbered task list is generated. You review and approve before it starts.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/25',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Ubito Tracks Progress',
    desc: 'Every step is logged and monitored. You see exactly what\'s happening.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/25',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'You Approve Actions',
    desc: 'High-risk actions pause for your OK. Results and memory saved per project.',
    color: 'text-ubito-green',
    bg: 'bg-ubito-green/10',
    border: 'border-ubito-green/25',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const PROJECTS = [
  {
    name: 'Social Media Manager',
    emoji: '📱',
    border: 'border-pink-500/30',
    accent: 'text-pink-400',
    dotBg: 'bg-pink-500',
    tasks: [
      { label: 'Schedule this week\'s posts', state: 'done' },
      { label: 'Draft Sunday reel caption', state: 'active' },
      { label: 'Reply to 8 pending comments', state: 'pending' },
    ],
    memories: 12,
  },
  {
    name: 'Trading Assistant',
    emoji: '📈',
    border: 'border-green-500/30',
    accent: 'text-green-400',
    dotBg: 'bg-green-500',
    tasks: [
      { label: 'Scan morning signals', state: 'done' },
      { label: 'Analyse BTC resistance levels', state: 'active' },
      { label: 'Prepare daily summary report', state: 'pending' },
    ],
    memories: 8,
  },
  {
    name: 'Coding Agent',
    emoji: '💻',
    border: 'border-ubito-cyan/30',
    accent: 'text-ubito-cyan',
    dotBg: 'bg-ubito-cyan',
    tasks: [
      { label: 'Review auth module PR', state: 'done' },
      { label: 'Write endpoint unit tests', state: 'active' },
      { label: 'Refactor rate limiter', state: 'pending' },
    ],
    memories: 24,
  },
]

const TASK_STATE = {
  done:    { symbol: '✓', textColor: 'text-ubito-green', lineThrough: true },
  active:  { symbol: '◉', textColor: 'text-ubito-cyan',  lineThrough: false },
  pending: { symbol: '○', textColor: 'text-ubito-muted', lineThrough: false },
}

function ProjectCard({ project }) {
  return (
    <div className={`bg-ubito-surface border ${project.border} rounded-2xl p-5 flex flex-col gap-4`}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0">
          {project.emoji}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{project.name}</p>
          <p className={`text-xs ${project.accent} flex items-center gap-1.5 mt-0.5`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.dotBg}`} />
            OpenClaw agent · Active
          </p>
        </div>
      </div>

      {/* Task list */}
      <div className="bg-ubito-dark rounded-xl p-3.5">
        <p className="text-ubito-muted text-[10px] uppercase tracking-widest mb-2.5">Task list</p>
        <div className="space-y-2">
          {project.tasks.map((task, i) => {
            const cfg = TASK_STATE[task.state]
            return (
              <div key={i} className="flex items-center gap-2.5">
                <span className={`text-xs font-mono shrink-0 ${cfg.textColor}`}>{cfg.symbol}</span>
                <span className={`text-xs leading-snug ${cfg.lineThrough ? 'line-through text-ubito-muted/40' : 'text-ubito-text'}`}>
                  {task.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer metadata */}
      <div className="flex items-center justify-between text-ubito-muted">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-xs">{project.memories} project memories</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-xs">Fully isolated</span>
        </div>
      </div>
    </div>
  )
}

export function WorkflowDiagram() {
  return (
    <section className="py-24 px-6 bg-ubito-surface/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-ubito-purple/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-3">
            Platform workflow
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            From goal to done — every step tracked.
          </h2>
          <p className="text-ubito-muted text-lg max-w-2xl mx-auto">
            Every project in Ubito follows the same lifecycle. Ubito is your AI project manager —
            it handles deployment, planning, tracking, and oversight so you never lose sight of what your agents are doing.
          </p>
        </div>

        {/* 6-step workflow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {STEPS.map((step, i) => (
            <div key={i} className={`relative bg-ubito-surface border ${step.border} rounded-2xl p-5 flex flex-col items-center text-center hover:border-opacity-60 transition-all duration-300`}>
              {/* Arrow connector on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 items-center justify-center">
                  <svg className="w-4 h-4 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center ${step.color} mb-3`}>
                {step.icon}
              </div>
              <span className={`font-mono text-xs font-bold ${step.color} opacity-40 mb-1.5`}>{step.num}</span>
              <h3 className="text-white font-semibold text-xs mb-1.5 leading-snug">{step.title}</h3>
              <p className="text-ubito-muted text-[11px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Isolation divider label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/5 hidden sm:block" />
          <div className="flex items-center gap-2 bg-ubito-surface border border-white/10 rounded-2xl sm:rounded-full px-4 py-2.5 w-full sm:w-auto justify-center text-center">
            <svg className="w-3.5 h-3.5 text-ubito-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-ubito-muted leading-snug">
              Each project has its own isolated OpenClaw agent,
              <span className="hidden sm:inline"> separate memory &amp; separate workspace</span>
              <span className="sm:hidden"><br />separate memory &amp; workspace</span>
            </span>
          </div>
          <div className="flex-1 h-px bg-white/5 hidden sm:block" />
        </div>

        {/* Project isolation cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* Ubito platform strip */}
        <div className="bg-ubito-dark border border-white/5 rounded-2xl p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-ubito-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                <OctopusIcon className="w-5 h-5 text-ubito-cyan" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Ubito Platform</p>
                <p className="text-ubito-muted text-xs">
                  Shared dashboard for all projects · Global user memory · All controls in one place
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Approvals Center',
                'Memory Dashboard',
                'Skills Marketplace',
                'Credentials Manager',
                'Cost Tracking',
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs bg-white/5 border border-white/8 text-ubito-muted px-2.5 py-1 rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Memory clarification */}
          <div className="mt-4 pt-4 border-t border-white/5 grid sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 bg-white/2 rounded-xl p-3">
              <svg className="w-4 h-4 text-ubito-purple mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <p className="text-white text-xs font-semibold mb-0.5">Project Memory</p>
                <p className="text-ubito-muted text-xs leading-relaxed">
                  Each agent remembers everything about its own project — your preferences, clients, tone, context. Isolated. Editable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/2 rounded-xl p-3">
              <svg className="w-4 h-4 text-ubito-cyan mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-white text-xs font-semibold mb-0.5">Global User Memory</p>
                <p className="text-ubito-muted text-xs leading-relaxed">
                  Your identity, preferences, and high-level context available across all projects. You control what agents can see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
