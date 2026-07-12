import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import Typography from '../common/Typography';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';
import emailjs from '@emailjs/browser';
import Reveal from '../animations/Reveal';
import ContactItem from './ContactItem';
import CollaborationCard from './CollaborationCard';

const ContactInfo = () => {
  const { personalInfo } = portfolioData;
  const contactItems = [
    {
      title: 'Email',
      icon: FaEnvelope,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      title: 'GitHub',
      icon: FaGithub,
      value: personalInfo.github,
      href: personalInfo.github,
    },
    {
      title: 'LinkedIn',
      icon: FaLinkedin,
      value: personalInfo.linkedin,
      href: personalInfo.linkedin,
    },
    // {
    //   title: 'Facebook',
    //   icon: FaFacebook,
    //   value: personalInfo.facebook,
    //   href: personalInfo.facebook,
    // },
    // {
    //   title: 'Location',
    //   icon: FaMapMarkerAlt,
    //   value: personalInfo.location,
    // },
  ];
  return (
    <div>
      <Card className="h-full space-y-4">
        <Typography variant="subtitle" className="text-slate-100">
          Contact details
        </Typography>

        <div className="space-y-4 text-slate-400">
          {contactItems.map(({ title, icon, value, href }) => (
            <ContactItem key={title} icon={icon} title={title} href={href}>
              {value}
            </ContactItem>
          ))}

          <CollaborationCard />
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;
