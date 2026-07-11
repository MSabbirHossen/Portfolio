import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

export default function ProjectMeta({ project }) {
  const { year, role, duration } = project;

  return (
    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
      {year && (
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
          <FaCalendarAlt aria-hidden="true" />
          {year}
        </span>
      )}

      {role && (
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
          <FaUser aria-hidden="true" />
          {role}
        </span>
      )}

      {duration && (
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
          <FaClock aria-hidden="true" />
          {duration}
        </span>
      )}
    </div>
  );
}
