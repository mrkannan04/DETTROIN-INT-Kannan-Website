import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Type, Contrast, Sparkles, X, Check, Accessibility } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { EXPO_OUT_EASING } from '../../utils/premiumMotion';

export const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontSize, 
    setFontSize, 
    highContrast, 
    toggleHighContrast, 
    dyslexiaFont, 
    toggleDyslexiaFont 
  } = useTheme();

  return (
    <>
      {/* Floating Left Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Options"
        title="Accessibility Settings"
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-navy-deep text-gold-accent hover:bg-gold-accent hover:text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-gold-accent/40 flex items-center gap-2 group"
      >
        <Accessibility className="w-6 h-6 shrink-0" />
        <span className="hidden sm:inline text-xs font-black uppercase tracking-wider pr-1">
          Accessibility
        </span>
      </button>

      {/* Accessibility Controls Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.92 }}
            transition={{ duration: 0.35, ease: EXPO_OUT_EASING }}
            className="fixed bottom-20 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[340px] bg-bg-secondary rounded-3xl overflow-hidden shadow-2xl border border-border-hairline p-6 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gold-accent/15 text-gold-accent flex items-center justify-center border border-gold-accent/30">
                  <Accessibility className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-deep font-serif">Inclusive Accessibility</h4>
                  <span className="text-[10px] text-navy-muted block">WCAG AA Compliant Controls</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-bg-primary hover:bg-gold-accent text-navy-deep flex items-center justify-center transition-colors border border-border-hairline"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-navy-deep flex items-center gap-2">
                <Type className="w-4 h-4 text-gold-accent" />
                <span>Text Sizing</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'normal', label: 'Normal' },
                  { id: 'large', label: 'Large' },
                  { id: 'xlarge', label: 'X-Large' }
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setFontSize(size.id)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      fontSize === size.id
                        ? 'bg-gold-accent text-navy-deep border-gold-accent shadow-md'
                        : 'bg-bg-primary text-navy-muted border-border-hairline hover:border-gold-accent'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast Mode Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-bg-primary border border-border-hairline">
              <div className="flex items-center gap-2.5">
                <Contrast className="w-5 h-5 text-gold-accent shrink-0" />
                <div>
                  <span className="text-xs font-bold text-navy-deep block">High Contrast Mode</span>
                  <span className="text-[10px] text-navy-muted block">OLED High Visibility Colors</span>
                </div>
              </div>
              <button
                onClick={toggleHighContrast}
                className={`w-12 h-6 rounded-full transition-colors duration-300 relative p-0.5 border ${
                  highContrast ? 'bg-gold-accent border-gold-accent' : 'bg-bg-secondary border-border-hairline'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-navy-deep transition-transform duration-300 ${
                    highContrast ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Dyslexia Friendly Font Option */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-bg-primary border border-border-hairline">
              <div className="flex items-center gap-2.5">
                <Eye className="w-5 h-5 text-emerald-accent shrink-0" />
                <div>
                  <span className="text-xs font-bold text-navy-deep block">Dyslexia-Friendly Font</span>
                  <span className="text-[10px] text-navy-muted block">Enhanced Letter Spacing</span>
                </div>
              </div>
              <button
                onClick={toggleDyslexiaFont}
                className={`w-12 h-6 rounded-full transition-colors duration-300 relative p-0.5 border ${
                  dyslexiaFont ? 'bg-emerald-accent border-emerald-accent' : 'bg-bg-secondary border-border-hairline'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-navy-deep transition-transform duration-300 ${
                    dyslexiaFont ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
