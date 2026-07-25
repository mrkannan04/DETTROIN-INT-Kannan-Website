import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MegaMenuLeftPanel } from './MegaMenuLeftPanel';
import { MegaMenuRightPanel } from './MegaMenuRightPanel';
import { MobileMegaMenu } from './MobileMegaMenu';

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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 pt-24 sm:pt-28 z-40 bg-kis-navy/98 backdrop-blur-lg text-white flex flex-col justify-between overflow-hidden"
        >
          {/* Main Overlay Content */}
          <div data-backdrop="true" className="max-w-7xl mx-auto w-full px-6 py-6 flex-grow flex items-center justify-center overflow-y-auto">
            {/* Desktop 2-Panel Layout */}
            <div className="hidden md:flex w-full items-stretch min-h-[420px] bg-[#071F3B]/80 rounded-3xl p-8 border border-white/10 shadow-2xl">
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
            <div className="md:hidden w-full bg-[#071F3B]/90 rounded-2xl p-6 border border-white/10">
              <MobileMegaMenu onClose={onClose} />
            </div>
          </div>

          {/* Bottom Bar inside Overlay */}
          <div className="bg-[#05162B] border-t border-white/10 py-3.5 px-6 shrink-0">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-6 text-gray-300 font-medium">
                <div className="flex items-center gap-1.5 text-kis-gold">
                  <Award className="w-4 h-4" />
                  <span>CBSE Affiliated No. 2132338</span>
                </div>
                <a href="tel:+919837050000" className="hover:text-kis-gold transition-colors hidden sm:flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-kis-gold" />
                  <span>+91 983-70-50000</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/enroll"
                  onClick={onClose}
                  className="px-5 py-2 bg-kis-gold text-kis-navy font-black rounded-full uppercase tracking-wider hover:bg-kis-gold-hover transition-colors shadow"
                >
                  Click to Enroll
                </Link>
                <Link
                  to="/admission/fee-payment"
                  onClick={onClose}
                  className="px-5 py-2 border border-white/30 text-white font-bold rounded-full uppercase tracking-wider hover:bg-white hover:text-kis-navy transition-colors"
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



