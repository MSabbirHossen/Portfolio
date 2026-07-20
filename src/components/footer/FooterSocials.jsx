import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const FooterSocials = () => {
  const { personalInfo } = portfolioData;
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: personalInfo.linkedin, label: 'LinkedIn' },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-4">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-accent-primary dark:text-slate-400 dark:hover:text-accent-primary transition-colors p-2 border border-slate-200 dark:border-slate-800 rounded-full"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
