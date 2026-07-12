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
        {/* <Typography
          variant="h2"
          className="mb-8 text-center text-primary-600 dark:text-primary-400"
        >
          Contact Me
        </Typography> */}

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* <Reveal y={18} duration={0.5} amount={0.2}>
            <Card className="h-full space-y-6">
              <div>
                <Typography variant="subtitle" className="text-slate-100">
                  Send a message
                </Typography>
                <Typography variant="body" className="mt-2 text-slate-400">
                  For collaboration, feedback, or opportunities, use the form below.
                </Typography>
              </div>


              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Your full name"
                  error={errors.name?.message}
                  required
                  {...register('name', { required: 'Name is required' })}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  helperText="I’ll reply directly to this address."
                  required
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                />

                <Input
                  label="Message"
                  placeholder="Tell me about your idea, project, or question."
                  error={errors.message?.message}
                  multiline
                  rows={5}
                  required
                  {...register('message', { required: 'Message is required' })}
                />

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  icon={FaPaperPlane}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </Reveal> */}
          <Reveal y={18}>
            <ContactForm />
          </Reveal>

          <Reveal y={18} duration={0.5} delay={0.08} amount={0.2}>
            {/* <Reveal y={18} delay={0.08}> */}
            <ContactInfo />
            {/* </Reveal> */}
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
