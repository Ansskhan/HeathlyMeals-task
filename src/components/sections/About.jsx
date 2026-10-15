import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button.jsx'
import SectionTag from '../ui/SectionTag.jsx'
import { CircleCheck } from 'lucide-react'
import { ABOUT_POINTS } from '../../data/content.js'

/**
 * About / brand introduction with collage of two photos
 * and a floating "Nourishing Lives Daily" card.
 */
export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 xl:px-8">
        {/* Image collage */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1000&q=70"
            alt="Fresh salad bowl with avocado, tomatoes and greens"
            className="h-72 w-full rounded-2xl object-cover shadow-md sm:h-96"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=70"
            alt="Chef preparing a healthy meal in the kitchen"
            className="absolute -bottom-8 -left-2 h-40 w-40 rounded-2xl border-4 border-cream object-cover shadow-lg sm:h-48 sm:w-48 sm:left-6"
            loading="lazy"
          />
          {/* Floating card */}
          <div className="absolute -bottom-10 right-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg sm:right-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100">
              <CircleCheck className="h-5 w-5 text-leaf-600" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-forest-900">
                Nourishing
              </span>
              <span className="block text-sm font-semibold text-forest-900">
                Lives Daily
              </span>
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:pl-8">
          <SectionTag>About Healthify</SectionTag>
          <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
            Your Trusted Healthy
            <span className="block">Food Partner</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-forest-700 sm:text-base">
            At Healthify, we believe healthy eating should be convenient,
            affordable, and enjoyable. Based in Dubai, we prepare fresh,
            balanced meals using high-quality ingredients to help individuals
            and families achieve their health goals without sacrificing taste.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CircleCheck
                  className="h-5 w-5 text-leaf-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm text-forest-800">{point}</span>
              </li>
            ))}
          </ul>

          <Button href="#services" variant="primary" className="mt-9">
            More About Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
