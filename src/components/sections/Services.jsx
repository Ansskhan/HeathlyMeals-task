import { ArrowRight, CircleArrowRight } from 'lucide-react'
import SectionTag from '../ui/SectionTag.jsx'
import { SERVICES } from '../../data/content.js'

/**
 * Meal plan / service cards grid.
 */
export default function Services() {
  return (
    <section id="services" className="bg-forest-50/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTag>Our Services</SectionTag>
            <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Healthy Meal Plans for Every Lifestyle
            </h2>
          </div>
          <a
            href="#plans"
            className="group inline-flex items-center gap-2 text-sm font-medium text-forest-800 hover:text-leaf-600"
          >
            View All Services
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-forest-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-700">
                  {service.description}
                </p>
                <CircleArrowRight
                  className="mt-4 ml-auto h-6 w-6 text-leaf-600 transition-colors group-hover:text-forest-800"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
