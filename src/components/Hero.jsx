import { useState, useEffect } from 'react'
import { OctopusIcon } from './icons/OctopusIcon'

const AGENT_EXAMPLES = [
  { agent: 'Social Media Manager', task: 'Drafted 5 posts for this week. Ready to schedule?' },
  { agent: 'Research Analyst', task: 'Finished competitor report. Want me to summarize key insights?' },
  { agent: 'Trading Assistant', task: 'Spotted 3 signals matching your strategy. Review before placing orders?' },
  { agent: 'Coding Agent', task: 'Refactored the auth module and wrote tests. Ready to push?' },
  { agent: 'Email Manager', task: "Drafted replies to 4 client emails. Ready to send?" },
  { agent: 'Content Creator', task: 'Blog post draft is ready. Want to review before publishing?' },
]

export function Hero() {
  const [exampleIndex, setExampleIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setExampleIndex((i) => (i + 1) % AGENT_EXAMPLES.length)
        setFading(false)
      }, 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const current = AGENT_EXAMPLES[exampleIndex]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-150 bg-ubito-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-100 h-100 bg-ubito-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            {/* OpenClaw badge */}
            <div className="inline-flex items-center gap-2 bg-ubito-purple/10 border border-ubito-purple/25 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 bg-ubito-purple rounded-full animate-pulse" />
              <span className="text-ubito-purple text-xs font-medium tracking-wide">Powered by OpenClaw agents</span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Your AI project manager.
              <br />
              <span className="text-ubito-cyan" style={{ textShadow: '0 0 60px rgba(0,212,255,0.4)' }}>
                Real agents. Real actions.
              </span>
            </h1>

            <p className="text-lg text-ubito-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Ubito deploys a dedicated{' '}
              <span className="text-white font-medium">OpenClaw agent</span> for every project — capable of
              writing code, managing social media, trading, researching, automating operations, and more.
              Every step is tracked. Every risky action needs your approval.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {[
                { icon: '⚡', label: 'Full agent capabilities' },
                { icon: '✋', label: 'Human-in-the-loop' },
                { icon: '🔒', label: 'Per-project isolation' },
                { icon: '✨', label: 'Zero technical setup' },
              ].map((d) => (
                <span key={d.label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <span className="text-xs">{d.icon}</span>
                  <span className="text-ubito-muted text-xs">{d.label}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <button
                onClick={() => {
                  if (window.Tally) {
                    window.Tally.openPopup('7RZ459', { layout: 'modal', width: 480, autoClose: 3000 })
                  } else {
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-ubito-cyan hover:bg-ubito-cyan/90 text-ubito-dark font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] whitespace-nowrap text-sm"
              >
                Join Waitlist
              </button>
              <button
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-xl border border-white/10 text-ubito-muted hover:text-white hover:border-white/20 transition-all text-sm"
              >
                Learn more
              </button>
            </div>

            <p className="text-ubito-muted/60 text-xs mt-4 text-center lg:text-left">
              No credit card required · 14-day free trial
            </p>
          </div>

          {/* Right — Animated approval card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-ubito-cyan/8 rounded-3xl blur-3xl" />
              <div
                className={`relative bg-ubito-surface border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-sm transition-opacity duration-500 ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {/* Agent header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-ubito-cyan/20 flex items-center justify-center shrink-0">
                    <OctopusIcon className="w-5 h-5 text-ubito-cyan" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{current.agent}</p>
                    <p className="text-ubito-green text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-ubito-green rounded-full" />
                      Task complete
                    </p>
                  </div>
                  <span className="ml-auto text-xs bg-yellow-500/15 text-yellow-400 border border-yellow-400/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                    Awaiting approval
                  </span>
                </div>

                {/* Message */}
                <div className="bg-white/5 rounded-xl p-4 mb-4">
                  <p className="text-ubito-text text-sm leading-relaxed">{current.task}</p>
                </div>

                {/* Draft preview */}
                <div className="bg-ubito-dark/60 rounded-lg p-3 mb-4 border border-white/5">
                  <p className="text-ubito-muted text-xs mb-2">Preview</p>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-white/10 rounded w-full" />
                    <div className="h-2 bg-white/10 rounded w-4/5" />
                    <div className="h-2 bg-white/10 rounded w-3/5" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-ubito-green/20 hover:bg-ubito-green/30 text-ubito-green font-semibold py-2.5 rounded-xl border border-ubito-green/30 transition-all text-sm flex items-center justify-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Approve
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-ubito-muted font-medium py-2.5 rounded-xl border border-white/10 transition-all text-sm">
                    Review
                  </button>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-4">
                {AGENT_EXAMPLES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setFading(true); setTimeout(() => { setExampleIndex(i); setFading(false) }, 500) }}
                    className={`rounded-full transition-all duration-300 ${
                      i === exampleIndex
                        ? 'w-5 h-1.5 bg-ubito-cyan'
                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Floating dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-ubito-cyan/8 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-ubito-purple/8 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
