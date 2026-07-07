export default function Typography({
  variant = 'body',
  as,
  gradient = false,
  children,
  className = '',
  ...props
}) {
  const styles = {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white',
    h2: 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100',
    h3: 'text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100',
    h4: 'text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100',
    h5: 'text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100',
    h6: 'text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400',
    body: 'text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed',
    subtitle: 'text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300',
    caption: 'text-xs text-slate-500 dark:text-slate-500',
    eyebrow: 'text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary',
    lead: 'text-lg sm:text-xl text-slate-500 dark:text-slate-300 leading-relaxed',
  };

  const semanticTag = as || (variant in styles ? variant : 'p');
  const Tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(semanticTag) ? semanticTag : 'p';
  const toneClass = gradient ? 'gradient-text' : '';

  return (
    <Tag className={`${styles[variant] || styles.body} ${toneClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
