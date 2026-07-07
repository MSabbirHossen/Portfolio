export default function Input({
  label,
  id,
  error,
  helperText,
  multiline = false,
  rows = 4,
  className = '',
  labelClassName = '',
  inputClassName = '',
  required = false,
  ...props
}) {
  const controlId = id || props.name;
  const Control = multiline ? 'textarea' : 'input';

  const baseControlClass =
    'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 dark:bg-dark-surface';

  return (
    <label className={`block space-y-2 ${className}`} htmlFor={controlId}>
      {label && (
        <span className={`text-sm font-medium text-slate-200 ${labelClassName}`}>
          {label}
          {required && <span className="ml-1 text-accent-secondary">*</span>}
        </span>
      )}

      <Control
        id={controlId}
        rows={multiline ? rows : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${controlId}-error` : helperText ? `${controlId}-help` : undefined
        }
        className={`${baseControlClass} ${error ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10'} ${inputClassName}`}
        {...props}
      />

      {helperText && !error && (
        <p id={`${controlId}-help`} className="text-xs text-slate-500">
          {helperText}
        </p>
      )}

      {error && (
        <p id={`${controlId}-error`} className="text-xs font-medium text-red-400">
          {error}
        </p>
      )}
    </label>
  );
}
