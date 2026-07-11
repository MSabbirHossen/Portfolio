import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

export default function ProjectMeta({ project }) {
  const { year, role, duration } = project;

  return (
    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
      <span className="flex items-center gap-2">
        <FaCalendarAlt aria-hidden="true" />
        {year}
      </span>

      <span className="flex items-center gap-2">
        <FaUser aria-hidden="true" />
        {role}
      </span>

      <span className="flex items-center gap-2">
        <FaClock aria-hidden="true" />
        {duration}
      </span>
    </div>
  );
}
