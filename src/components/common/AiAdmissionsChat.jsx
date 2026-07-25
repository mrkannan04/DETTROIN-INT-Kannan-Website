import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, HelpCircle, Paperclip, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
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

const QUICK_ACTIONS = [
  { title: "Fee Structure PDF", query: "What is the fee structure?", icon: FileText },
  { title: "Online Registration", query: "How do I apply for admission?", icon: CheckCircle2 },
  { title: "CBSE Curriculum", query: "Tell me about CBSE streams and subjects", icon: Sparkles },
  { title: "Transport Routes", query: "What bus routes are available?", icon: HelpCircle }
];

const SUGGESTED_QUESTIONS = [
  "What is the fee structure?",
  "How to apply online?",
  "CBSE Streams & Subjects?",
  "School bus facilities?"
];

export const AiAdmissionsChat = ({ customPositionClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Close on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const matched = FAQ_DATA.find((faq) =>
        faq.keywords.some((kw) => lowerQuery.includes(kw))
      );

      const botReply = matched
        ? matched.answer
        : `Thank you for asking! For specific inquiries regarding "${query}", please call our Admission Desk directly at +91 94127 30005.`;

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDownInput = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Compact Circular Trigger Button (56px desktop / 52px tablet / 48px mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Admissions Assistant"
        aria-expanded={isOpen}
        className={
          customPositionClass ||
          "fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gold-accent hover:bg-gold-accent/90 text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-gold-accent cursor-pointer"
        }
      >
        <div className="relative flex items-center justify-center">
          <Bot className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-navy-deep transform group-hover:rotate-12 transition-transform" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-navy-deep animate-pulse" />
          )}
        </div>
      </button>

      {/* Chat Panel: Capped Height Window (Desktop) / Bottom Sheet (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: EXPO_OUT_EASING }}
            style={{ transformOrigin: 'bottom right' }}
            role="dialog"
            aria-label="AI Admissions Assistant Chat"
            className="fixed z-[9999] flex flex-col bg-bg-secondary border border-border-hairline shadow-2xl overflow-hidden
                       max-sm:inset-x-0 max-sm:bottom-0 max-sm:h-[82vh] max-sm:rounded-t-[28px] max-sm:border-t-2 max-sm:border-gold-accent
                       sm:bottom-20 sm:right-6 sm:w-[380px] md:w-[400px] sm:h-[480px] md:h-[500px] sm:max-h-[calc(100vh-110px)] sm:rounded-[24px]"
          >
            {/* Header */}
            <div className="bg-navy-deep text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-accent/20 border border-gold-accent/40 flex items-center justify-center shrink-0">
                  <img src="/school-logo.png" alt="KIS Logo" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 font-serif">
                    <span>AI Assistant</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider border border-emerald-500/30">
                      Online
                    </span>
                  </h3>
                  <p className="text-[11px] text-gray-300">Krishna International School</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Area - Auto Resizing, Capped Height, Curation Card for Empty State */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 text-xs sm:text-sm bg-bg-primary/40">
              
              {/* Empty / Welcome State Card (Populates initial UI with zero giant blank gaps) */}
              {messages.length === 0 && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Welcome Card */}
                  <div className="bg-bg-secondary border border-border-hairline rounded-2xl p-4 shadow-sm space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gold-accent/20 text-gold-accent flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-deep font-serif">Welcome to KIS Admissions AI</h4>
                        <p className="text-[11px] text-navy-muted">Instant responses for fees, CBSE streams & campus info.</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Topics Action Grid */}
                  <div>
                    <p className="text-[10px] uppercase font-bold text-navy-muted mb-2 px-1">Quick Topics:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {QUICK_ACTIONS.map((action, idx) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSend(action.query)}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-secondary hover:bg-gold-accent/15 border border-border-hairline hover:border-gold-accent/40 text-left transition-all group cursor-pointer"
                          >
                            <Icon className="w-4 h-4 text-gold-accent shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-[11px] font-semibold text-navy-deep leading-tight">{action.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Suggested Question Pills */}
                  <div>
                    <p className="text-[10px] uppercase font-bold text-navy-muted mb-2 px-1">Suggested Questions:</p>
                    <div className="flex flex-col gap-1.5">
                      {SUGGESTED_QUESTIONS.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(q)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-bg-secondary hover:bg-bg-accent-section border border-border-hairline text-left text-xs font-medium text-navy-deep transition-colors group cursor-pointer"
                        >
                          <span>{q}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-navy-muted group-hover:text-gold-accent transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Message Stream */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-gold-accent text-navy-deep flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gold-accent text-navy-deep font-medium rounded-br-xs'
                        : 'bg-bg-secondary text-navy-deep border border-border-hairline rounded-bl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-navy-deep text-gold-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Inline Typing Indicator strictly below latest message */}
              {isTyping && (
                <div className="flex gap-2.5 items-center justify-start text-navy-muted">
                  <div className="w-7 h-7 rounded-full bg-gold-accent text-navy-deep flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-bg-secondary border border-border-hairline px-3.5 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 bg-gold-accent rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gold-accent rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-gold-accent rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-bg-secondary border-t border-border-hairline shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 bg-bg-primary rounded-full p-1.5 border border-border-hairline focus-within:border-gold-accent transition-colors"
              >
                <button
                  type="button"
                  title="Attach file (Optional)"
                  className="p-1.5 text-navy-muted hover:text-gold-accent transition-colors cursor-pointer shrink-0"
                >
                  <Paperclip className="w-4 h-4" />
                </button>

                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDownInput}
                  placeholder="Ask a question..."
                  className="flex-grow bg-transparent px-2 py-1 text-xs sm:text-sm text-navy-deep focus:outline-none"
                />
                
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="w-8 h-8 rounded-full bg-gold-accent text-navy-deep flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-40 transition-all cursor-pointer shrink-0"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
