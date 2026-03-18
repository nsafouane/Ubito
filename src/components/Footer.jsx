import { OctopusIcon } from './icons/OctopusIcon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-ubito-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <OctopusIcon className="w-6 h-6 text-ubito-cyan" />
            <div>
              <span className="font-display font-semibold text-white">Ubito</span>
              <p className="text-xs text-ubito-muted">AI agents that work for you, under your control.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-ubito-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-ubito-muted hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#security" className="text-ubito-muted hover:text-white transition-colors">
              Security
            </a>
            <a href="#contact" className="text-ubito-muted hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social */}
          <a
            href="https://twitter.com/ubito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ubito-muted hover:text-ubito-cyan transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-ubito-muted">
          © {currentYear} Ubito. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
