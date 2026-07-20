import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import heroImage from '../../assets/hero.png';
import { portfolioData } from '../../data/portfolioData';
import Typography from '../common/Typography';
import Button from '../common/Button';

const HeroImage = () => {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-primary/30 via-accent-secondary/20 to-transparent blur-2xl" />
      <motion.div
        className="relative glass rounded-[2rem] border border-white/10 p-5 shadow-2xl shadow-black/20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-dark-surface">
          <img
            src={heroImage}
            alt="Md. Sabbir Hossen portrait illustration"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-secondary">
            Currently focused on
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            React, MERN, AI tools and Secure Development.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
