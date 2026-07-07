import React from 'react';
import { FaGlobeAsia, FaRegLightbulb, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import Card from '../common/Card';
import Typography from '../common/Typography';

const Vison = () => {
  const { personalInfo } = portfolioData;
  const { mission, languages, values, vision, journey } = personalInfo;

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid gap-6">
      <motion.div variants={itemVariants}>
        <Card className="space-y-4">
          <div className="flex items-center gap-3 text-accent-secondary">
            <FaRegLightbulb />
            <Typography variant="subtitle" className="text-slate-100">
              Core Values
            </Typography>
          </div>
          <ul className="space-y-3 text-slate-400">
            {values.map((val) => (
              <li key={val.title}>
                <strong className="text-slate-100">{val.title}:</strong> {val.desc}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="space-y-4">
          <div className="flex items-center gap-3 text-accent-primary">
            <FaGlobeAsia />
            <Typography variant="subtitle" className="text-slate-100">
              Vision
            </Typography>
          </div>
          <ul className="space-y-3 text-slate-400">
            {vision.map((item) => (
              <li key={item} className="flex gap-3">
                <FaUsers className="mt-1 shrink-0 text-accent-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </div>
  );
};

export default Vison;
