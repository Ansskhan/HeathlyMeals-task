import { ArrowRight, Star } from 'lucide-react'
import SectionTag from '../ui/SectionTag.jsx'
import { TESTIMONIALS } from '../../data/content.js'

function Stars() {
  return (
    <div
      className="flex gap-1 text-amber-400"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

/**
 * Customer reviews section with three cards.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 xl:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTag>Customer Stories</SectionTag>
            <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-forest-800 hover:text-leaf-600"
          >
            View More Reviews
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => {
            const initials = t.name
              .split(' ')
              .map((p) => p[0])
              .join('')
              .replace('.', '')
              .toUpperCase()
            return (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl bg-forest-50/70 p-6"
              >
                <blockquote className="text-sm leading-relaxed text-forest-800">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-200 text-sm font-semibold text-forest-900"
                      aria-hidden="true"
                    >
                      {initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-forest-900">
                        {t.name}
                      </span>
                      <span className="block text-xs text-forest-700">
                        {t.location}
                      </span>
                    </span>
                  </div>
                  <Stars />
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
