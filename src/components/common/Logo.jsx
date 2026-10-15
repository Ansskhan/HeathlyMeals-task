/** Brand mark used in the navbar and footer. */
export default function Logo({ light = false }) {
  const textColor = light ? 'text-white' : 'text-forest-900'
  const subColor = light ? 'text-forest-200' : 'text-forest-700'
  return (
    <a href="#home" className={`inline-flex items-center gap-2 ${textColor}`}>
      {/* Leaf + fork monogram */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M17 3c5 4.5 7 8.5 7 12.5A7 7 0 0 1 17 22.5 7 7 0 0 1 10 15.5C10 11.5 12 7.5 17 3Z"
          fill={light ? '#e5ede3' : '#2f442b'}
        />
        <path
          d="M17 22.5V31M17 26c-2-.5-3.5-1.5-4.5-3M17 28c2-.5 3.5-1.5 4.5-3"
          stroke={light ? '#e5ede3' : '#2f442b'}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-tight">
        <span
          className={`block font-serif text-lg font-semibold tracking-wide ${textColor}`}
        >
          Healthify
        </span>
        <span
          className={`block text-[8px] font-semibold uppercase tracking-[0.35em] ${subColor}`}
        >
          Nutrition
        </span>
      </span>
    </a>
  )
}
