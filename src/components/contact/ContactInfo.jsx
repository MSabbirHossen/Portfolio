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
  return (
    <div>
      <Card className="h-full space-y-4">
        <Typography variant="subtitle" className="text-slate-100">
          Contact details
        </Typography>

        <div className="space-y-4 text-slate-400">
          <ContactItem icon={FaEnvelope} title="Email">
            <a href={`mailto:${personalInfo.email}`} className="hover:underline">
              {personalInfo.email}
            </a>
          </ContactItem>
          <ContactItem icon={FaMapMarkerAlt} title="Location">
            {personalInfo.location}
          </ContactItem>
          <ContactItem icon={FaLinkedin} title="Linkedin">
            <a href={personalInfo.linkedin} className="hover:underline" target="_blank">
              {personalInfo.linkedin}
            </a>
          </ContactItem>
          <ContactItem icon={FaGithub} title="GitHub">
            <a href={personalInfo.github} className="hover:underline" target="_blank">
              {personalInfo.github}
            </a>
          </ContactItem>
          <ContactItem icon={FaFacebook} title="Facebook">
            <a href={personalInfo.facebook} className="hover:underline" target="_blank">
              {personalInfo.facebook}
            </a>
          </ContactItem>
          <CollaborationCard />
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;
