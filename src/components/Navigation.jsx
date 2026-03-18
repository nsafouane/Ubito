import { OctopusIcon } from './icons/OctopusIcon'

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity">
            <OctopusIcon className="w-8 h-8 text-ubito-cyan" />
            <span className="font-display font-semibold text-xl tracking-tight">Ubito</span>
          </a>

          <a
            href="#waitlist"
            className="bg-ubito-cyan hover:bg-ubito-cyan/90 text-ubito-dark font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.35)] text-sm"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </nav>
  )
}

