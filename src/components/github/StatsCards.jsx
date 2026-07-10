import AnimatedNumber from './AnimatedNumber';
import { motion } from 'framer-motion';
import { FaCodeBranch, FaGithub, FaStar, FaBook, FaUsers } from 'react-icons/fa';
import Card from '../common/Card';
import Typography from '../common/Typography';

const iconMap = {
  repos: FaBook,
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
            <Card className="h-full p-8 text-center border border-slate-700/40 backdrop-blur-md hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group">
              <div
                className="
      mx-auto
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-primary-500/10
      text-primary-500
      transition-transform
      duration-300
      group-hover:scale-110
  "
              >
                <Icon className="text-xl" />
              </div>

              <Typography variant="body" className="font-medium text-slate-400">
                {card.label}
              </Typography>

              <Typography variant="h2" className="font-extrabold text-primary-500">
                <AnimatedNumber value={card.value} />
              </Typography>
              <div className="mx-auto w-10 border-t border-slate-700"></div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
