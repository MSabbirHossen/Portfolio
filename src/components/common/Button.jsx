import { forwardRef } from 'react';

/**
 * Reusable Button component with variant, size, icon, and loading support.
 * Fully custom Tailwind — no external UI library.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    loading = false,
    icon: Icon,
    iconPosition = 'left',
    as: Component = 'button',
    href,
    ariaLabel,
    ...props
  },
  ref
) {
  const baseStyle =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary:
      'bg-accent-primary hover:bg-accent-primary-dark active:bg-accent-primary-dark text-white shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-accent-secondary hover:bg-accent-secondary-dark active:bg-accent-secondary-dark text-white shadow-lg shadow-accent-secondary/20 hover:shadow-accent-secondary/30 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border border-dark-border hover:border-accent-primary/50 text-slate-300 hover:text-accent-primary-light bg-transparent hover:bg-accent-primary/5',
    ghost:
      'text-slate-400 hover:text-accent-primary-light hover:bg-accent-primary/5 bg-transparent',
    danger:
      'bg-accent-danger hover:bg-red-600 active:bg-red-700 text-white shadow-lg shadow-red-500/20',
  };

  /* Light mode overrides */
  const lightVariants = {
    outline: 'light:border-light-border light:text-slate-600 light:hover:text-accent-primary',
    ghost: 'light:text-slate-500 light:hover:text-accent-primary light:hover:bg-accent-primary/5',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3',
    icon: 'p-2.5',
  };

  const Tag = href ? 'a' : Component;
  const isExternalLink = href ? /^https?:\/\//.test(href) : false;
  const tagProps = href
    ? {
        href: disabled || loading ? undefined : href,
        target: isExternalLink ? '_blank' : undefined,
        rel: isExternalLink ? 'noopener noreferrer' : undefined,
        'aria-disabled': disabled || loading,
        tabIndex: disabled || loading ? -1 : undefined,
      }
    : { type };

  const accessibleLabel = ariaLabel || (typeof children === 'string' ? children : undefined);
  const computedAriaLabel = !children ? accessibleLabel : undefined;
  const handleClick = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  return (
    <Tag
      ref={ref}
      className={`${baseStyle} ${variants[variant]} ${lightVariants[variant] || ''} ${sizes[size]} ${className}`}
      onClick={handleClick}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      aria-label={computedAriaLabel}
      {...tagProps}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className="w-4 h-4" />}
      {children}
      {loading && <span className="sr-only">Loading</span>}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </Tag>
  );
});

export default Button;
