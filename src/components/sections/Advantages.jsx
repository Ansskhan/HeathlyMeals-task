import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button.jsx'
import SectionTag from '../ui/SectionTag.jsx'
import Icon from '../ui/Icon.jsx'
import { ADVANTAGES } from '../../data/content.js'

/**
 * "Why Choose Healthify" section: copy on left, four
 * icon advantage cards on the right.
 */
export default function Advantages() {
  return (
    <section id="advantages" className="bg-forest-100/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_2fr] lg:gap-12 lg:py-20 xl:px-8">
        {/* Copy */}
        <div>
          <SectionTag>Our Advantages</SectionTag>
          <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
            Why Choose Healthify
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-700 sm:text-base">
            More than just meals - we deliver a healthier, happier you with
            benefits that fit your lifestyle.
          </p>
          <Button href="#plans" variant="primary" className="mt-8">
            Discover All Advantages
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Advantage cards */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className="rounded-2xl bg-white/80 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                <Icon
                  name={adv.icon}
                  className="h-8 w-8 text-forest-800"
                  strokeWidth={1.25}
                />
              </span>
              <h3 className="text-sm font-semibold text-forest-900">
                {adv.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-forest-700">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
