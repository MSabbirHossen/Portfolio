import React from 'react';
import Card from '../common/Card';
import Typography from '../common/Typography';

const ProjectBulletList = ({ title, items, bulletColor = 'bg-indigo-500', columns = false }) => {
  return (
    <Card>
      <Typography variant="subtitle" className="mb-5">
        {title}
      </Typography>
      <ul className={columns ? 'grid gap-3 md:grid-cols-2' : 'space-y-3'}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 mt-1 h-2 w-2 rounded-full ${bulletColor}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProjectBulletList;
