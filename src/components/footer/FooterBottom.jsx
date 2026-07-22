import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import FooterSocials from './FooterSocials';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
      <div>
        <p>
          Designed & Developed by{' '}
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
          >
            {personalInfo.name}
          </a>
          <br /> &copy; {currentYear} {personalInfo.brandName}. All rights reserved.
        </p>
      </div>
      <div>
        <FooterSocials />

        {/* <p>Built with React 19, Vite, and Tailwind CSS</p> */}
      </div>
    </div>
  );
};

export default FooterBottom;
