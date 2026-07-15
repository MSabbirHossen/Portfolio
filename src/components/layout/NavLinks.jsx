import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../data/navigation';

export default function NavLinks({ activeSection, onNavigate, mobile = false }) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <div className="relative" key={link.name}>
          <a
            href={`#${link.href}`}
            onClick={(e) => onNavigate(e, link.href)}
            aria-current={activeSection === link.href ? 'page' : undefined}
            className={`relative transition-all duration-300 hover:text-accent-primary ${
              mobile
                ? `border-b border-slate-100 py-2 text-base font-medium dark:border-slate-800/50 ${
                    activeSection === link.href
                      ? 'text-accent-primary'
                      : 'text-slate-700 dark:text-slate-300'
                  }`
                : `text-sm font-medium ${
                    activeSection === link.href
                      ? 'text-accent-primary'
                      : 'text-slate-600 dark:text-slate-300'
                  }`
            }`}
          >
            {link.name}
          </a>

          {activeSection === link.href && (
            <motion.div
              layoutId="active-nav-indicator"
              className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent-primary"
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 35,
              }}
            />
          )}
        </div>
      ))}
    </>
  );
}
