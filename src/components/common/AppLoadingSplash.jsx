import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const AppLoadingSplash = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum splash screen display time to avoid layout flicker
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-kis-navy font-sans select-none">
        <div className="animate-pulse flex flex-col items-center gap-6 p-6 rounded-3xl">
          <Logo size="large" showTagline={true} />
          
          {/* Subtle Progress Bar */}
          <div className="w-48 h-1 bg-bg-accent-section rounded-full overflow-hidden mt-4">
            <div className="w-full h-full bg-gradient-to-r from-kis-navy via-kis-gold to-kis-navy animate-gradient-shift" />
          </div>
          
          <span className="text-xs font-semibold text-kis-navy-text uppercase tracking-widest animate-fade">
            Loading Excellence...
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
