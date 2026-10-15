import { MoveRight } from 'lucide-react'
import SectionTag from '../ui/SectionTag.jsx'
import Icon from '../ui/Icon.jsx'
import { STEPS } from '../../data/content.js'

/**
 * "How it works" — three numbered steps connected by arrows.
 */
export default function Steps() {
  return (
    <section id="steps" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 xl:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTag>How It Works</SectionTag>
            <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Healthy Eating in 3 Simple Steps
            </h2>
          </div>
          <span className="text-sm text-forest-700">It&rsquo;s Easy to Get Started</span>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative flex items-start gap-4 md:pr-6"
            >
              {/* Number circle */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-100 text-lg font-semibold text-forest-900">
                {step.number}
              </span>

              <div className="flex items-start gap-4">
                <Icon
                  name={step.icon}
                  className="mt-1 h-9 w-9 text-forest-800"
                  strokeWidth={1.25}
                />
                <div>
                  <h3 className="text-sm font-semibold text-forest-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-forest-700">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps (desktop) */}
              {i < STEPS.length - 1 && (
                <MoveRight
                  className="absolute right-0 top-1 hidden h-6 w-6 text-leaf-600 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
