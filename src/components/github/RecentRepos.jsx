import { motion } from 'framer-motion';
import { FaCodeBranch, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import Card from '../common/Card';
import Typography from '../common/Typography';

export default function RecentRepos({ repos }) {
  if (!repos?.length) return null;

  const colors = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#264de4',
    Python: '#3776ab',
    Java: '#f89820',
  };

  return (
    <div className="mt-10">
      <Typography variant="h3" className="mb-6 text-center text-primary-600 dark:text-primary-400">
        Recent Repositories
      </Typography>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >
            <Card className="h-full p-5 transition hover:-translate-y-1">
              <Typography variant="subtitle">{repo.name}</Typography>

              <Typography variant="body" className="mt-2 line-clamp-2 text-slate-400">
                {repo.description}
              </Typography>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: colors[repo.language] || '#3B82F6',
                      color: '#fff',
                    }}
                  >
                    {repo.language}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaStar />
                    {repo.stars}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaCodeBranch />
                    {repo.forks}
                  </span>
                </div>
                <button className="flex items-center text-right gap-2 mt-4 text-xs text-white transition hover:bg-primary-700 hover:cursor-pointer">
                  View Repository <FaExternalLinkAlt />
                </button>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
