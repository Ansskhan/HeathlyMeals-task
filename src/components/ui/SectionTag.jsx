/**
 * Small uppercase label used above section titles,
 * e.g. "OUR SERVICES", "GROWTH PLANS".
 */
export default function SectionTag({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? 'text-forest-200' : 'text-leaf-600'
      }`}
    >
      {children}
    </p>
  )
}
