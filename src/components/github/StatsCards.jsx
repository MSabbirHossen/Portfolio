import AnimatedNumber from './AnimatedNumber';
import { motion } from 'framer-motion';
import { FaCodeBranch, FaGithub, FaStar, FaUsers } from 'react-icons/fa';
import Card from '../common/Card';
import Typography from '../common/Typography';

const iconMap = {
  repos: FaCodeBranch,
  stars: FaStar,
  forks: FaCodeBranch,
  followers: FaUsers,
  following: FaGithub,
};

export default function StatsCards({ stats }) {
  const cards = [
    {
      key: 'repos',
      label: 'Repositories',
      value: stats.publicRepos,
    },
    {
      key: 'stars',
      label: 'Stars',
      value: stats.totalStars,
    },
    {
      key: 'forks',
      label: 'Forks',
      value: stats.totalForks,
    },
    {
      key: 'followers',
      label: 'Followers',
      value: stats.followers,
    },
    {
      key: 'following',
      label: 'Following',
      value: stats.following,
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {cards.map((card, index) => {
        const Icon = iconMap[card.key];

        return (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
          >
            <Card className="p-6 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-primary/10 text-accent-secondary">
                <Icon className="text-xl" />
              </div>

              <Typography variant="subtitle">{card.label}</Typography>

              <Typography variant="h3" className="text-primary-600 dark:text-primary-400">
                <AnimatedNumber value={card.value} />
              </Typography>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
