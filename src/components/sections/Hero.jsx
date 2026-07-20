import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import heroImage from '../../assets/hero.png';
import { portfolioData } from '../../data/portfolioData';
import Typography from '../common/Typography';
import Button from '../common/Button';

import HeroActions from '../hero/HeroActions';
import HeroImage from '../hero/HeroImage';

export default function Hero() {
  const { personalInfo } = portfolioData;
  const { name, title, secondaryTitle, tagline, github, linkedin, facebook, resumeUrl } =
    personalInfo;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[calc(100vh-6rem)] flex items-center py-16"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="space-y-7 text-center lg:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <Typography
              variant="body"
              className="font-semibold uppercase tracking-[0.3em] text-accent-secondary"
            >
              {secondaryTitle}
            </Typography>
            <Typography variant="h1" gradient className="max-w-3xl text-balance">
              {name}
            </Typography>
            <Typography variant="subtitle" className="max-w-2xl text-slate-300">
              {title}
            </Typography>
            {/* <Typography variant="body" className="max-w-2xl text-slate-400">
              {tagline}
            </Typography> */}
          </div>

          <HeroActions
            github={github}
            linkedin={linkedin}
            facebook={facebook}
            resumeUrl={resumeUrl}
            onContact={scrollToContact}
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button variant="outline" size="lg" href={resumeUrl} icon={FaDownload}>
              Download Resume
            </Button>
            <Button variant="primary" size="lg" onClick={scrollToContact} icon={FaArrowDown}>
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <HeroImage
          image={heroImage}
          focusTitle="Currently focused on"
          focusText="React, MERN, AI tools and Secure Development."
        />
      </div>
    </section>
  );
}
