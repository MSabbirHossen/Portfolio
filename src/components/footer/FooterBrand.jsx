import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const FooterBrand = () => {
    const { personalInfo } = portfolioData;
  return (
    <div>
      {/* Identity & Tagline */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {personalInfo.brandName} (MS's personal Brand)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">
          {personalInfo.brandTagline}
        </p>
      </div>
    </div>
  );
};

export default FooterBrand;
