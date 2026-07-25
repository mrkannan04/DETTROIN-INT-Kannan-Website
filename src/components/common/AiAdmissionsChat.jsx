import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageSquare, X, Send, Sparkles, User, HelpCircle } from 'lucide-react';
import { EXPO_OUT_EASING } from '../../utils/premiumMotion';

const FAQ_DATA = [
  {
    keywords: ['fee', 'tuition', 'cost', 'payment', 'charge'],
    answer: "Our tuition fee structure ranges from ₹12,500/quarter for Foundational stage to ₹22,500/quarter for Senior Secondary. You can download the full Fee Structure PDF in our Admission section!"
  },
  {
    keywords: ['admission', 'apply', 'enroll', 'process', 'form', 'eligibility'],
    answer: "Admissions for Academic Session 2026-27 are currently OPEN! You can fill the online application form by clicking 'Click to Enroll' at the top of the page, or visit our campus Admission Cell."
  },
  {
    keywords: ['curriculum', 'board', 'cbse', 'subject', 'stream'],
    answer: "Krishna International School is affiliated with CBSE (Affiliation No. 2132849). We offer Science, Commerce, and Humanities streams in Grade XI & XII with integrated JEE/NEET/CUET coaching."
  },
  {
    keywords: ['transport', 'bus', 'route', 'pickup'],
    answer: "We operate a fleet of GPS-tracked AC buses covering Zone A (within 5km - ₹2,200/mo) and Zone B (5-15km - ₹3,100/mo) across Aligarh city."
  },
  {
    keywords: ['hostel', 'boarding', 'stay', 'residential'],
    answer: "We offer air-conditioned hostel facilities for boys and girls from Grade VI onwards, including nutritious mess meals, laundry, and 24/7 warden supervision."
  },
  {
    keywords: ['contact', 'phone', 'email', 'address', 'location'],
    answer: "You can reach our Admission Desk at +91 94127 30005 or info@krishnainternationalschool.in. Our campus is located at NH-91, GT Road, Aligarh, UP."
  }
];

export const AiAdmissionsChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am your AI Admissions Assistant (Preview). Ask me anything about fees, admission deadlines, CBSE curriculum, or campus life!'
    }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    // Add User Message
    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking & matching
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const matched = FAQ_DATA.find((faq) =>
        faq.keywords.some((kw) => lowerQuery.includes(kw))
      );

      const botReply = matched
        ? matched.answer
        : "Thank you for asking! For specific inquiries regarding " +
          query +
          ", please call our Admission Counselor directly at +91 94127 30005.";

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Admissions Assistant"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gold-accent hover:bg-gold-accent/90 text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-navy-deep" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-accent border-2 border-navy-deep animate-ping" />
        </div>
        <span className="hidden sm:inline text-xs font-black uppercase tracking-wider pr-1">
          AI Assistant <span className="opacity-75 text-[10px]">(Preview)</span>
        </span>
      </button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.35, ease: EXPO_OUT_EASING }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] bg-bg-secondary rounded-3xl overflow-hidden shadow-2xl border border-border-hairline flex flex-col h-[500px]"
          >
            {/* Chat Header */}
            <div className="bg-navy-deep text-white p-4 flex items-center justify-between border-b border-border-hairline shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gold-accent/20 border border-gold-accent/40 flex items-center justify-center text-gold-accent">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold font-serif text-white">Admission AI Helper</h4>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-gold-accent text-navy-deep">Preview</span>
                  </div>
                  <span className="text-[10px] text-emerald-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-pulse" />
                    Active FAQ Dataset
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-accent text-white hover:text-navy-deep flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Questions Pills */}
            <div className="p-2.5 bg-bg-accent-section border-b border-border-hairline flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
              {['Fee Structure', 'Admission Process', 'CBSE Curriculum', 'Hostel Info'].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-bg-secondary hover:bg-gold-accent text-navy-deep hover:text-navy-deep border border-border-hairline text-[11px] font-bold whitespace-nowrap transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="p-4 flex-grow overflow-y-auto space-y-3.5 bg-bg-primary">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-xl bg-gold-accent text-navy-deep flex items-center justify-center text-xs shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed font-normal shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-navy-deep text-white rounded-tr-none'
                        : 'bg-bg-secondary text-navy-deep border border-border-hairline rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-navy-deep text-gold-accent flex items-center justify-center text-xs shrink-0 mt-0.5 border border-gold-accent/30">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-navy-muted text-xs italic p-2">
                  <Bot className="w-4 h-4 text-gold-accent animate-spin" />
                  <span>AI Assistant is typing...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-bg-secondary border-t border-border-hairline flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about fees, curriculum, admissions..."
                className="flex-grow text-xs px-3.5 py-2.5 rounded-xl bg-bg-primary text-navy-deep border border-border-hairline focus:outline-none focus:border-gold-accent"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gold-accent hover:bg-gold-accent/90 text-navy-deep font-bold transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
