import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Typography from '../common/Typography';
import { FaCheckCircle, FaHandHolding, FaHandshake, FaPaperPlane } from 'react-icons/fa';

const CollaborationCard = () => {
  const { preferredCollaboration } = portfolioData;
  return (
    <div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <Typography variant="subtitle" className="flex items-center gap-4 text-sm font-medium ">
          <FaHandshake
            className="mt-1
    h-5
    w-5
    text-accent-secondary
    transition-transform
    duration-300
    group-hover:scale-110"
          />
          Preferred Collaboration
        </Typography>
        <ul className="mt-2 text-sm text-slate-400">
          {preferredCollaboration.map((item, index) => (
            <li
              className="flex items-center gap-2 break-all
transition-colors
hover:text-accent-secondary
"
              key={index}
            >
              {' '}
              <FaCheckCircle
                className="mt-1
    h-5
    w-5
  
    transition-transform
    duration-300
    group-hover:scale-110"
              />{' '}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollaborationCard;
