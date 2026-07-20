import { portfolioData } from '../../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import FooterBrand from '../footer/FooterBrand';
import FooterSocials from '../footer/FooterSocials';
import FooterBottom from '../footer/FooterBottom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;

  // const socialLinks = [
  //   { icon: <FaGithub className="w-5 h-5" />, href: personalInfo.github, label: 'GitHub' },
  //   { icon: <FaLinkedin className="w-5 h-5" />, href: personalInfo.linkedin, label: 'LinkedIn' },
  //   {
  //     icon: <FaEnvelope className="w-5 h-5" />,
  //     href: `mailto:${personalInfo.email}`,
  //     label: 'Email',
  //   },
  // ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080b13] transition-colors py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & Tagline */}
        <div className="text-center md:text-left">
          <FooterBrand />
        </div>

        {/* Social Icons & Location */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <FooterSocials />
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <FaMapMarkerAlt className="w-3.5 h-3.5" /> {personalInfo.location}
          </span>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}
