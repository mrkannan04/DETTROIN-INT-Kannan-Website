import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { MegaMenuOverlay } from './MegaMenuOverlay';
import { TopHeader } from './TopHeader';
import { Logo } from '../common/Logo';

export const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // Handle sticky header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force close overlay on route change
  useEffect(() => {
    setIsOverlayOpen(false);
  }, [pathname]);

  const toggleOverlay = (e) => {
    e.stopPropagation();
    setIsOverlayOpen((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-[60] w-full font-sans transition-all duration-300 shadow-nav">
        {/* Collapsible Top utility bar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
          }`}
        >
          <TopHeader />
        </div>

        {/* Main Header Bar - Pixel Perfect Alignment */}
        <div
          className={`w-full transition-all duration-300 bg-kis-navy border-b border-kis-gold/20 flex items-center justify-between ${
            isScrolled ? 'py-2 sm:py-2.5 shadow-lg' : 'py-3 sm:py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between gap-2 min-h-[40px] sm:min-h-[44px]">
              
              {/* Brand Logo Banner */}
              <Logo size={isScrolled ? 'small' : 'normal'} variant="light" showTagline={!isScrolled} />

              {/* Right Action Controls - Perfectly Centered Height */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Link
                  to="/enroll"
                  onClick={() => setIsOverlayOpen(false)}
                  className="hidden sm:inline-flex items-center justify-center h-10 px-4 sm:px-5 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  Click to Enroll
                </Link>

                <button
                  onClick={toggleOverlay}
                  aria-label={isOverlayOpen ? 'Close Menu' : 'Open Menu'}
                  className="h-10 sm:h-11 px-3 sm:px-4 rounded-xl bg-white/10 hover:bg-kis-gold text-white hover:text-kis-navy border border-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kis-gold group flex items-center justify-center gap-2 relative z-[70] cursor-pointer"
                >
                  {isOverlayOpen ? (
                    <X className="w-5 h-5 stroke-[2.5] shrink-0" />
                  ) : (
                    /* 3x3 App Launcher Dot Grid Icon */
                    <div className="grid grid-cols-3 gap-1 w-4 h-4 items-center justify-center shrink-0">
                      {[...Array(9)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white group-hover:bg-kis-navy transition-colors"
                        />
                      ))}
                    </div>
                  )}
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider leading-none">
                    {isOverlayOpen ? 'Close' : 'Menu'}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mega Menu Overlay */}
      <MegaMenuOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
      />
    </>
  );
};




