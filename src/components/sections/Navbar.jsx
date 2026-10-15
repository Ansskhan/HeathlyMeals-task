import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import { NAV_LINKS } from '../../data/content.js'

/**
 * Top navigation header. Collapses to a hamburger menu on mobile.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses =
    'text-sm text-forest-800 transition-colors hover:text-leaf-600 focus-visible:text-leaf-600'

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-cream/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={linkClasses}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#plans"
            className="hidden items-center gap-2 rounded-full bg-forest-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-900 sm:inline-flex"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded-md p-2 text-forest-800 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="space-y-1 border-t border-forest-100 bg-cream px-4 py-3 lg:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block rounded-md px-3 py-2 text-sm text-forest-800 hover:bg-forest-100"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#plans"
              className="mt-1 block rounded-full bg-forest-800 px-5 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
