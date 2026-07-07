import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    content:
      'As a portfolio assistant stub, I can guide visitors through your projects, skills, and contact options.',
  },
];

function buildReply(message) {
  const normalized = message.toLowerCase();

  if (normalized.includes('project')) {
    return 'Your projects highlight a strong focus on React, MERN, and AI experimentation. Try the Projects section for a deeper look.';
  }

  if (normalized.includes('skill')) {
    return 'The portfolio emphasizes React, Tailwind CSS, Node.js, Express, MongoDB, AI integration, and secure coding.';
  }

  if (normalized.includes('contact') || normalized.includes('email')) {
    return 'Use the contact form to send a message directly. You can also reach out through the footer links.';
  }

  if (normalized.includes('github')) {
    return 'GitHub stats are wired into the portfolio, and the assistant can be extended to surface repo highlights here.';
  }

  return 'I am a mock assistant for now, but this UI is ready for real AI integration later.';
}

export default function useAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);

  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((value) => !value);

  const sendMessage = (messageText) => {
    const text = (messageText ?? input).trim();
    if (!text || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: text,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput('');
    setIsTyping(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content: buildReply(text),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const quickPrompts = useMemo(
    () => [
      'What projects should I view first?',
      'What are the main skills highlighted here?',
      'How can I contact Sabbir?',
    ],
    []
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeChat();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isOpen,
    messages,
    input,
    isTyping,
    quickPrompts,
    closeChat,
    toggleChat,
    setInput,
    sendMessage,
  };
}
