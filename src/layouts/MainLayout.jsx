import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AIChatButton from '../components/common/AIChatButton';
import AIChatModal from '../components/common/AIChatModal';
import useAIChat from '../hooks/useAIChat';

export default function MainLayout() {
  const chat = useAIChat();

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
      {/* <AIChatButton onClick={chat.toggleChat} isOpen={chat.isOpen} /> */}
      <AIChatModal
        isOpen={chat.isOpen}
        messages={chat.messages}
        input={chat.input}
        isTyping={chat.isTyping}
        quickPrompts={chat.quickPrompts}
        onClose={chat.closeChat}
        onChange={chat.setInput}
        onSend={chat.sendMessage}
      />
    </div>
  );
}
