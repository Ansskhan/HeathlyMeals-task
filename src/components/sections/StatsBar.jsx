import Icon from '../ui/Icon.jsx'
import { STATS } from '../../data/content.js'

/**
 * Trust indicators strip shown under the hero.
 */
export default function StatsBar() {
  return (
    <section aria-label="Key statistics" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-4 ${
              i < STATS.length - 1 ? 'lg:border-r lg:border-forest-100' : ''
            }`}
          >
            <Icon
              name={stat.icon}
              className="h-9 w-9 text-leaf-600"
              strokeWidth={1.25}
            />
            <div>
              <p className="text-2xl font-bold text-forest-900">{stat.value}</p>
              <p className="text-sm text-forest-700">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
