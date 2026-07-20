import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
      <p>
        &copy; {currentYear} {personalInfo.brandName}. All rights reserved.
      </p>
      <p>Built with React 19, Vite, and Tailwind CSS</p>
    </div>
  );
};

export default FooterBottom;
