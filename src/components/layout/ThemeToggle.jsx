import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        rounded-full
        border
        border-slate-200
        p-2
        text-slate-800
        transition-all
        duration-300
        hover:scale-105
        hover:bg-slate-100
        dark:border-slate-800
        dark:text-slate-200
        dark:hover:bg-slate-800
      "
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
    </button>
  );
}
