import React from 'react';

import Card from '../common/Card';
import Typography from '../common/Typography';

const ProjectApiEndpoints = ({ endpoints }) => {
  if (!endpoints?.length) return null;
  return (
    <div>
      {endpoints && (
        <Card>
          <Typography variant="subtitle" className="mb-5">
            API Endpoints
          </Typography>
          <div className="space-y-3">
            {endpoints.map((endpoint) => (
              <pre
                key={endpoint}
                className="overflow-x-auto rounded-lg bg-slate-100 p-3 dark:bg-slate-800"
              >
                <code>{endpoint}</code>
              </pre>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProjectApiEndpoints;
