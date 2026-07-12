import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Typography from '../common/Typography';
import { FaPaperPlane } from 'react-icons/fa';

const CollaborationCard = () => {
  const { preferredCollaboration } = portfolioData;
  return (
    <div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <Typography
          variant="title"
          className="flex items-center gap-4 text-sm font-medium text-slate-100"
        >
          <FaPaperPlane className="mt-1 h-4 w-4 text-accent-secondary" />
          Preferred collaboration
        </Typography>
        <ul className="mt-2 text-sm text-slate-400">
          {preferredCollaboration.map((item, index) => (
            <li className="pl-6" key={index}>
              {' '}
              - {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollaborationCard;
