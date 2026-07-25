import React, { useState, useEffect } from 'react';
import { AiAdmissionsChat } from '../common/AiAdmissionsChat';
import { ScrollToTop } from '../common/ScrollToTop';
import { AccessibilityToolbar } from '../common/AccessibilityToolbar';

export const FloatingWidgetManager = () => {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 380;
      setIsNearFooter(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute non-overlapping positions based on footer clearance
  const aiButtonClass = isNearFooter
    ? "fixed bottom-24 right-6 z-40 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gold-accent hover:bg-gold-accent/90 text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-gold-accent cursor-pointer"
    : "fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gold-accent hover:bg-gold-accent/90 text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-gold-accent cursor-pointer";

  const scrollTopClass = isNearFooter
    ? "fixed bottom-40 right-6 z-40 p-3 bg-navy-deep text-gold-accent border-2 border-gold-accent rounded-full shadow-xl hover:bg-gold-accent hover:text-navy-deep hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer"
    : "fixed bottom-24 right-6 z-40 p-3 bg-navy-deep text-gold-accent border-2 border-gold-accent rounded-full shadow-xl hover:bg-gold-accent hover:text-navy-deep hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer";

  const accessibilityClass = isNearFooter
    ? "fixed bottom-24 left-6 z-40 p-3.5 rounded-full bg-navy-deep text-gold-accent hover:bg-gold-accent hover:text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-gold-accent/40 flex items-center gap-2 group cursor-pointer"
    : "fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-navy-deep text-gold-accent hover:bg-gold-accent hover:text-navy-deep shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-gold-accent/40 flex items-center gap-2 group cursor-pointer";

  return (
    <div className="floating-widget-manager pointer-events-none [&>*]:pointer-events-auto">
      {/* Accessibility Toolbar on Bottom Left */}
      <AccessibilityToolbar customPositionClass={accessibilityClass} />

      {/* AI Assistant Chat on Bottom Right */}
      <AiAdmissionsChat customPositionClass={aiButtonClass} />

      {/* Scroll To Top Stacked Above AI Assistant on Bottom Right */}
      <ScrollToTop customPositionClass={scrollTopClass} />
    </div>
  );
};
