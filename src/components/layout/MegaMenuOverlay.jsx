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
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: EXPO_OUT_EASING }}
          className="fixed inset-x-0 top-[60px] sm:top-[72px] bottom-0 z-40 bg-black/40 backdrop-blur-sm text-navy-deep flex flex-col justify-start pt-3 pb-6 px-4 overflow-y-auto"
        >
          {/* Main Popover Container */}
          <div data-backdrop="true" className="relative z-10 max-w-6xl mx-auto w-full">
            {/* Desktop 2-Panel Layout */}
            <div className="hidden md:flex w-full items-stretch bg-bg-secondary rounded-3xl p-6 border border-border-hairline shadow-2xl transition-colors duration-300">
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
            <div className="md:hidden w-full bg-bg-secondary rounded-2xl p-5 border border-border-hairline shadow-2xl transition-colors duration-300">
              <MobileMegaMenu onClose={onClose} />
            </div>

            {/* Bottom Bar inside Overlay */}
            <div className="mt-3 bg-bg-secondary border border-border-hairline rounded-2xl py-3 px-6 shrink-0 shadow-lg transition-colors duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-6 text-navy-muted font-medium">
                  <div className="flex items-center gap-1.5 text-gold-accent font-bold">
                    <Award className="w-4 h-4" />
                    <span>CBSE Affiliated No. 2132338</span>
                  </div>
                  <a href="tel:+919837050000" className="hover:text-gold-accent transition-colors hidden sm:flex items-center gap-1 text-navy-muted">
                    <Phone className="w-3.5 h-3.5 text-gold-accent" />
                    <span>+91 983-70-50000</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/enroll"
                    onClick={onClose}
                    className="px-5 py-2 bg-gold-accent text-white font-black rounded-full uppercase tracking-wider hover:opacity-90 transition-colors shadow"
                  >
                    Click to Enroll
                  </Link>
                  <Link
                    to="/admission/fee-payment"
                    onClick={onClose}
                    className="px-5 py-2 border border-border-hairline text-navy-deep font-bold rounded-full uppercase tracking-wider hover:bg-gold-accent hover:text-white transition-colors"
                  >
                    Pay School Fee
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
