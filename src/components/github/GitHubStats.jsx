import { useEffect, useState } from 'react';
import Typography from '../common/Typography';
import Card from '../common/Card';
import { formatDistanceToNow } from 'date-fns';

import StatsCards from './StatsCards';
import LanguagesChart from './LanguagesChart';
import RecentRepos from './RecentRepos';
import { FaGithub } from 'react-icons/fa';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}stats.json`);

        if (!res.ok) {
          throw new Error('Failed to load GitHub statistics.');
        }

        const data = await res.json();

        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return (
      <section id="github-stats" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Typography variant="h2" className="text-center">
            GitHub Analytics
          </Typography>

          <Card className="mt-8 p-8 text-center">Loading GitHub statistics...</Card>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-stats" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Typography variant="h2" className="text-center">
            GitHub Analytics
          </Typography>

          <Card className="mt-8 p-8 text-center">{error}</Card>
        </div>
      </section>
    );
  }

  return (
    <section id="github-stats" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <Typography
          variant="h2"
          className="mb-10 text-center text-primary-600 dark:text-primary-400"
        >
          GitHub Analytics
        </Typography>

        <StatsCards stats={stats} />

        <LanguagesChart languages={stats.topLanguages} />

        <RecentRepos repos={stats.recentRepos} />

        {/* Contribution Snake */}

        <div className="mt-12">
          <Typography
            variant="h3"
            className="mb-8 text-center text-primary-600 dark:text-primary-400"
          >
            🐍 Contribution Snake
          </Typography>
          <Card className="mt-12 p-8">
            <img
              className="mx-auto w-full max-w-5xl"
              src="https://raw.githubusercontent.com/MSabbirHossen/MSabbirHossen/output/github-contribution-grid-snake-dark.svg"
              alt="Contribution Snake"
            />
          </Card>
        </div>

        {/* Profile Views */}

        <div className="mt-8 flex justify-center">
          <img
            src="https://komarev.com/ghpvc/?username=MSabbirHossen&label=Profile%20Views&color=3B82F6&style=for-the-badge"
            alt="Profile Views"
          />
        </div>

        {/* Last Updated */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Last updated{' '}
          {formatDistanceToNow(new Date(stats.updatedAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </section>
  );
}
