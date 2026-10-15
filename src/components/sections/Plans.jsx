import { ArrowRight, Check, Star } from 'lucide-react'
import SectionTag from '../ui/SectionTag.jsx'
import { PLANS } from '../../data/content.js'

/**
 * Growth/pricing plans: three cards plus a promo card.
 * The middle "Balanced" card is highlighted as most popular.
 */
export default function Plans() {
  return (
    <section id="plans" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 xl:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTag>Growth Plans</SectionTag>
            <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Find the Perfect Plan for You
            </h2>
          </div>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 text-sm font-medium text-forest-800 hover:text-leaf-600"
          >
            View All Plans
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 shadow-sm ${
                plan.featured
                  ? 'border-2 border-forest-600 bg-forest-50/50'
                  : 'bg-cream'
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <span className="absolute -top-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-forest-800 px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3" fill="currentColor" />
                  {plan.badge}
                </span>
              )}

              <span
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${
                  plan.featured ? 'bg-forest-200' : 'bg-forest-100'
                }`}
              >
                <Star
                  className="h-5 w-5 text-forest-800"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <h3 className="font-base text-lg font-semibold text-forest-900">
                {plan.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-forest-700">
                {plan.description}
              </p>

              <p className="mt-4">
                <span className="text-xl font-bold text-forest-900">
                  {plan.price}
                </span>
                <span className="text-xs text-forest-700"> {plan.period}</span>
              </p>

              <ul className="mt-4 flex-1 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-forest-800"
                  >
                    <Check
                      className="h-4 w-4 text-leaf-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-6 rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.featured
                    ? 'bg-forest-800 text-white hover:bg-forest-900'
                    : 'border border-forest-300 bg-white text-forest-800 hover:bg-forest-100'
                }`}
              >
                Get Started
              </a>
            </article>
          ))}

          {/* Promo card */}
          <article className="relative hidden overflow-hidden rounded-2xl lg:block">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=70"
              alt="Healthy meal bowl on a table"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            />
            <p className="absolute left-5 top-1/2 -translate-y-1/2 font-serif text-2xl leading-snug text-white">
              Invest in
              <br />
              a Healthier
              <br />
              You
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
