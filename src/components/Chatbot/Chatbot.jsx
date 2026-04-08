import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm an AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's interesting! I'm currently just a simulated bot for this portfolio, but Abdul is always exploring NLP and AI to make bots smarter.",
        "Please feel free to use the contact form to reach out to Abdul directly.",
        "You can find Abdul's projects in the 'Projects' section above.",
        "I'm programmed to be helpful, but I'm limited right now. Maybe check out Abdul's GitHub?",
        "Great question! Contacting Abdul might give you a better answer."
      ];
      const botMsg = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        isBot: true 
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <FaRobot className="chatbot-header-icon" />
          <h3>AI Assistant</h3>
          <button className="chatbot-close" onClick={toggleChat}><FaTimes /></button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={!input.trim()}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
}
