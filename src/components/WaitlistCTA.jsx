import { useState, useEffect } from 'react'

export function WaitlistCTA() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [tallyReady, setTallyReady] = useState(false)

  useEffect(() => {
    // Wait for Tally embed script to be ready
    const check = setInterval(() => {
      if (window.Tally) {
        setTallyReady(true)
        clearInterval(check)
      }
    }, 100)
    return () => clearInterval(check)
  }, [])

  const openTally = () => {
    if (window.Tally) {
      window.Tally.openPopup('7RZ459', {
        layout: 'modal',
        width: 480,
        autoClose: 3000,
        onSubmit: () => setIsSuccess(true),
      })
    } else {
      // Fallback: open form directly in new tab
      window.open('https://tally.so/r/7RZ459', '_blank')
    }
  }

  return (
    <section id="waitlist" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-ubito-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        {isSuccess ? (
          <div className="bg-ubito-surface border border-ubito-green/30 rounded-2xl p-12">
            <div className="w-16 h-16 bg-ubito-green/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-ubito-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-3xl text-white mb-3">You're on the list.</h2>
            <p className="text-ubito-muted">We'll reach out personally when your spot is ready.</p>
          </div>
        ) : (
          <>
            <p className="text-ubito-cyan text-sm font-medium uppercase tracking-widest mb-4">Join the waitlist</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
              We're onboarding our first users by hand.
            </h2>
            <p className="text-ubito-muted text-lg leading-relaxed mb-10">
              The first people who join will work directly with us to set up their agents and shape the product.
              If that sounds like something you'd value, claim your spot.
            </p>

            <button
              onClick={openTally}
              className="bg-ubito-cyan hover:bg-ubito-cyan/90 text-ubito-dark font-bold px-10 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] text-sm"
            >
              Join the Waitlist
            </button>

            <p className="text-ubito-muted text-sm mt-5">
              No spam. We'll reach out personally when your spot is ready.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
