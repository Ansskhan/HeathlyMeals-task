import { ArrowRight } from 'lucide-react'
import SectionTag from '../ui/SectionTag.jsx'

/**
 * Bottom call-to-action banner with a background photo.
 */
export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1512003867696-6d5a68e1c6a2?auto=format&fit=crop&w=1600&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-950/40"
      />

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div>
          <SectionTag light>Ready to Start?</SectionTag>
          <h2 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl">
            Transform Your Health, One Meal At A Time
          </h2>
          <p className="mt-3 text-sm text-forest-100 sm:text-base">
            Fresh. Nutritious. Convenient. Join thousands of happy customers
            today.
          </p>
        </div>

        <a
          href="#plans"
          className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-medium text-forest-900 transition-colors hover:bg-white"
        >
          Get Started Today
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
