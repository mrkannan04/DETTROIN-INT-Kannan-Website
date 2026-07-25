import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Sun, Moon, Zap, ChevronDown, ExternalLink } from 'lucide-react';
import { MegaMenuOverlay } from './MegaMenuOverlay';
import { TopHeader } from './TopHeader';
import { Logo } from '../common/Logo';
import { useTheme } from '../../context/ThemeContext';
import { quickLinks } from '../../data/navigation';

export const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const quickMenuRef = useRef(null);

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

  // Force close menus on route change
  useEffect(() => {
    setIsOverlayOpen(false);
    setIsQuickLinksOpen(false);
  }, [pathname]);

  // Close Quick Links on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (quickMenuRef.current && !quickMenuRef.current.contains(e.target)) {
        setIsQuickLinksOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOverlay = (e) => {
    e.stopPropagation();
    setIsQuickLinksOpen(false);
    setIsOverlayOpen((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-[60] w-full font-sans transition-all duration-300 shadow-sm">
        {/* Top Metallic Gold Luxury Accent Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Collapsible Top utility bar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
          }`}
        >
          <TopHeader />
        </div>

        {/* Main Header Bar - Luxury Light Coat with Glass Blur */}
        <div
          className={`w-full transition-all duration-300 bg-header-bg/95 backdrop-blur-md border-b border-border-hairline/80 flex items-center justify-between shadow-nav ${
            isScrolled ? 'py-2 sm:py-2.5 shadow-md' : 'py-3 sm:py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between gap-2 min-h-[40px] sm:min-h-[44px]">
              
              {/* Brand Logo Banner */}
              <Logo size={isScrolled ? 'small' : 'normal'} variant="default" showTagline={!isScrolled} />
 
              {/* Right Action Controls - Perfectly Centered Height */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                
                {/* Working Quick Links Dropdown */}
                <div className="relative" ref={quickMenuRef}>
                  <button
                    onClick={() => setIsQuickLinksOpen((prev) => !prev)}
                    className="hidden md:inline-flex items-center gap-1.5 h-10 px-3.5 rounded-xl bg-gold-accent/15 hover:bg-gold-accent text-navy-deep hover:text-white border border-gold-accent/40 font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                    aria-label="Quick Navigation Links"
                    title="Quick Navigation Links"
                  >
                    <Zap className="w-3.5 h-3.5 text-gold-accent group-hover:text-white" />
                    <span>Quick Links</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isQuickLinksOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Quick Links Menu Box */}
                  {isQuickLinksOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-bg-secondary rounded-2xl p-2 border border-border-hairline shadow-2xl z-50 animate-fadeIn">
                      <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-gold-accent border-b border-border-hairline mb-1">
                        Fast Navigation
                      </div>
                      <div className="space-y-1">
                        {quickLinks.map((ql, idx) => (
                          <Link
                            key={idx}
                            to={ql.path}
                            onClick={() => setIsQuickLinksOpen(false)}
                            className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-navy-deep hover:text-gold-accent hover:bg-gold-accent/10 rounded-xl transition-colors"
                          >
                            <span>{ql.name}</span>
                            <ExternalLink className="w-3 h-3 text-gold-accent opacity-70" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sun/Moon Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  className="w-10 h-10 rounded-xl bg-bg-accent-section/50 hover:bg-gold-accent text-navy-deep hover:text-white border border-border-hairline transition-all duration-200 flex items-center justify-center cursor-pointer group focus:outline-none"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-gold-accent group-hover:text-white transition-transform duration-300 rotate-0 hover:rotate-90" />
                  ) : (
                    <Moon className="w-5 h-5 text-navy-deep group-hover:text-white transition-transform duration-300 -rotate-12 hover:rotate-0" />
                  )}
                </button>
 
                {/* Enroll Button */}
                <Link
                  to="/enroll"
                  onClick={() => setIsOverlayOpen(false)}
                  className="hidden sm:inline-flex items-center justify-center h-10 px-4 sm:px-5 bg-gold-accent hover:opacity-90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all border border-[#F3C66B]/30"
                >
                  Click to Enroll
                </Link>
 
                {/* Mega Menu Toggle Button */}
                <button
                  onClick={toggleOverlay}
                  aria-label={isOverlayOpen ? 'Close Menu' : 'Open Menu'}
                  className="h-10 sm:h-11 px-3 sm:px-4 rounded-xl bg-bg-accent-section/50 hover:bg-gold-accent text-navy-deep hover:text-white border border-border-hairline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-accent group flex items-center justify-center gap-2 relative z-[70] cursor-pointer"
                >
                  {isOverlayOpen ? (
                    <X className="w-5 h-5 stroke-[2.5] shrink-0" />
                  ) : (
                    /* 3x3 App Launcher Dot Grid Icon */
                    <div className="grid grid-cols-3 gap-1 w-4 h-4 items-center justify-center shrink-0">
                      {[...Array(9)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-navy-deep group-hover:bg-white transition-colors"
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




