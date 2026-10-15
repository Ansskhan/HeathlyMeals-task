import { ArrowRight, Check, CircleCheck, Salad, Sparkles, UtensilsCrossed } from 'lucide-react'
import Button from '../ui/Button.jsx'

const BENEFITS = [
  { icon: CircleCheck, label: 'Fresh Ingredients' },
  { icon: Salad, label: 'Nutritionist Approved' },
  { icon: UtensilsCrossed, label: 'Delivered to Your Door' },
]

/**
 * Hero section: split layout with copy on the left and
 * a large food visual with floating badge on the right.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* Soft decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-forest-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 -top-24 h-72 w-72 rounded-full bg-cream-dark blur-2xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-20 lg:pt-16 xl:px-8">
        {/* Left: copy */}
        <div>
          <h1 className="font-serif text-4xl leading-tight font-bold text-forest-900 sm:text-5xl lg:text-6xl">
            Healthy Meals
            <span className="block text-leaf-600">Happier Lives</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-forest-800">
            Fresh. Nutritious. Convenient. Delivered to You.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-forest-700 sm:text-base">
            At Healthify, we make healthy eating simple and enjoyable with
            chef-prepared meals, customized plans and a commitment to your
            wellness goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#plans" variant="primary">
              Explore Meal Plans
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#about" variant="outline">
              Learn More
            </Button>
          </div>

          {/* Benefit indicators */}
          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            {BENEFITS.map(({ icon: Ic, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Ic
                  className="h-5 w-5 text-leaf-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm text-forest-800">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: visual */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=75"
              alt="Bowl of grilled chicken with avocado, tomatoes and fresh greens"
              className="h-72 w-full object-cover sm:h-96 lg:h-[480px]"
              loading="eager"
            />
          </div>

          {/* Floating badge card */}
          <div className="absolute bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md sm:left-6 sm:bottom-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100">
              <Sparkles className="h-5 w-5 text-leaf-600" aria-hidden="true" />
            </span>
            <span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-forest-900">
                Nutritious Meals
                <Check className="h-4 w-4 text-leaf-600" aria-hidden="true" />
              </span>
              <span className="text-xs text-forest-700">A Healthier Tomorrow</span>
            </span>
          </div>

          {/* Handwritten-style accent */}
          <span className="absolute right-4 top-3 hidden -rotate-6 font-serif text-sm italic text-forest-700 sm:block">
            Good Food, Brighter You
          </span>
        </div>
      </div>
    </section>
  )
}
