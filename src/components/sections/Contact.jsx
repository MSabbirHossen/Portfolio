import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import Typography from '../common/Typography';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';
import emailjs from '@emailjs/browser';
import Reveal from '../animations/Reveal';
import ContactForm from '../contact/ContactForm';
import SectionWrapper from '../common/SectionWrapper';
import ContactInfo from '../contact/ContactInfo';
import CollaborationCard from '../contact/CollaborationCard';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent! Thank you for reaching out.');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Get In Touch"
      title="Contact Me"
      description="Whether you have a project, an opportunity, or just want to connect, I'd love to hear from you."
      className="py-20 bg-gray-50 dark:bg-gray-900 glass"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal y={18}>
            <ContactForm />
          </Reveal>

          <Reveal y={18} duration={0.5} delay={0.08} amount={0.2}>
            <ContactInfo />
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
