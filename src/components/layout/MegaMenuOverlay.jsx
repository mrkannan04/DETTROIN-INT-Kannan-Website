import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MegaMenuLeftPanel } from './MegaMenuLeftPanel';
import { MegaMenuRightPanel } from './MegaMenuRightPanel';
import { MobileMegaMenu } from './MobileMegaMenu';
import { EXPO_OUT_EASING } from '../../utils/premiumMotion';

/* DESIGN DECISION: MegaMenuOverlay stays an intentional full-screen dark takeover overlay in BOTH Light and Dark site themes to provide an immersive, high-contrast, premium experience consistent with elite international school portals. */

export const MegaMenuOverlay = ({ isOpen, onClose }) => {
  const [activeId, setActiveId] = useState('about');
  const overlayRef = useRef(null);

  // Close on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Close on backdrop click (outside menu cards)
  const handleBackdropClick = (e) => {
    if (overlayRef.current && (e.target === overlayRef.current || e.target.getAttribute('data-backdrop') === 'true')) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleBackdropClick}
          data-backdrop="true"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: EXPO_OUT_EASING }}
          className="fixed inset-0 pt-24 sm:pt-28 z-40 bg-[#06182B]/95 backdrop-blur-xl text-white flex flex-col justify-between overflow-hidden"
        >
          {/* Ambient Animated Radial Gradient Mesh & Floating Dot Motif */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" data-backdrop="true">
            <motion.div
              animate={{
                x: [0, 40, -30, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.15, 0.95, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-amber-400/15 via-amber-500/10 to-transparent blur-[120px]"
            />
            <motion.div
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 40, -20, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-emerald-400/15 via-teal-500/10 to-transparent blur-[130px]"
            />
            <motion.div
              animate={{
                x: [0, 30, -40, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
              className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent blur-[140px]"
            />

            {/* Floating Radial Dot Pattern Motif */}
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:36px_36px] opacity-15" />
          </div>

          {/* Main Overlay Content */}
          <div data-backdrop="true" className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 flex-grow flex items-center justify-center overflow-y-auto">
            {/* Desktop 2-Panel Layout */}
            <div className="hidden md:flex w-full items-stretch min-h-[420px] bg-[#071F3B]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <MegaMenuLeftPanel
                activeId={activeId}
                setActiveId={setActiveId}
                onClose={onClose}
              />
              <MegaMenuRightPanel
                activeId={activeId}
                onClose={onClose}
              />
            </div>

            {/* Mobile Accordion View */}
            <div className="md:hidden w-full bg-[#071F3B]/90 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <MobileMegaMenu onClose={onClose} />
            </div>
          </div>

          {/* Bottom Bar inside Overlay */}
          <div className="relative z-10 bg-[#05162B]/90 border-t border-white/10 py-3.5 px-6 shrink-0 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-6 text-gray-300 font-medium">
                <div className="flex items-center gap-1.5 text-gold-accent">
                  <Award className="w-4 h-4" />
                  <span>CBSE Affiliated No. 2132849</span>
                </div>
                <a href="tel:+919837050000" className="hover:text-gold-accent transition-colors hidden sm:flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-gold-accent" />
                  <span>+91 983-70-50000</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/enroll"
                  onClick={onClose}
                  className="px-5 py-2 bg-gold-accent text-navy-deep font-black rounded-full uppercase tracking-wider hover:bg-gold-accent/90 transition-colors shadow"
                >
                  Click to Enroll
                </Link>
                <Link
                  to="/admission/fee-payment"
                  onClick={onClose}
                  className="px-5 py-2 border border-white/30 text-white font-bold rounded-full uppercase tracking-wider hover:bg-white hover:text-navy-deep transition-colors"
                >
                  Pay School Fee
                </Link>
              </div>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
