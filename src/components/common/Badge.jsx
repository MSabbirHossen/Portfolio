export default function Badge({
  children,
  variant = 'neutral',
  presentation = 'pill',
  icon: Icon,
  className = '',
  ...props
}) {
  const baseStyle =
    'inline-flex items-center gap-1.5 text-xs font-medium tracking-wide transition-colors';

  const variants = {
    primary:
      'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300 border border-indigo-100/30 dark:border-indigo-900/30',
    secondary:
      'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-300 border border-cyan-100/30 dark:border-cyan-900/30',
    neutral:
      'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/40',
  };

  const presentations = {
    pill: 'rounded-full px-2.5 py-0.5',
    dot: 'rounded-full px-2.5 py-0.5',
  };

  return (
    <span
      className={`${baseStyle} ${presentations[presentation]} ${variants[variant]} ${className}`}
      {...props}
    >
      {presentation === 'dot' && (
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      )}
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
