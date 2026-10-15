const VARIANTS = {
  primary:
    'bg-forest-700 text-white hover:bg-forest-800 focus-visible:outline-forest-700',
  outline:
    'border border-forest-300 text-forest-800 bg-white hover:bg-forest-50 focus-visible:outline-forest-600',
  light: 'bg-white text-forest-800 hover:bg-cream focus-visible:outline-white',
}

/**
 * Shared button styles for every CTA on the page.
 * Renders as <a> when href is given, otherwise <button>.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
  const classes = `${base} ${VARIANTS[variant] || VARIANTS.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
