import { motion } from 'framer-motion';
import Typography from '../common/Typography';
import Card from '../common/Card';

export default function LanguagesChart({ languages }) {
  const total = languages.reduce((sum, lang) => sum + lang.count, 0);

  return (
    <div className="mt-12">
      <Typography variant="h3" className="mb-6 text-center text-primary-600 dark:text-primary-400">
        Top Languages
      </Typography>

      <Card className="space-y-5">
        {languages.map((lang) => {
          const percent = (lang.count / total) * 100;

          return (
            <div key={lang.name}>
              <div className="mb-2 flex justify-between">
                <span>{lang.name}</span>
                <span>{lang.count}</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  className="h-full rounded-full bg-cyan-500"
                />
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
