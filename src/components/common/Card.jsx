/**
 * Reusable Card component with glassmorphism, gradient-border, and hover effects.
 * Fully custom Tailwind — no external UI library.
 */
export default function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  gradient = false,
  padding = 'p-6',
  as: Tag = 'div',
  ...props
}) {
  const base = 'rounded-2xl transition-all duration-300 overflow-hidden';

  const surface = glass ? 'glass' : 'bg-dark-card border border-dark-border';

  const lightSurface = glass ? '' : 'light:bg-light-card light:border-light-border';

  const hoverStyle = hover
    ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-primary/5 hover:border-dark-border-hover light:hover:border-light-border-hover light:hover:shadow-lg'
    : '';

  const gradientBorder = gradient ? 'gradient-border' : '';

  return (
    <Tag
      className={`${base} ${surface} ${lightSurface} ${hoverStyle} ${gradientBorder} ${padding} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
