import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CursorFollower } from '../common/CursorFollower';
import { FloatingWidgetManager } from './FloatingWidgetManager';

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-primary text-body selection:bg-kis-gold selection:text-kis-navy transition-colors duration-300 relative">
      {/* Desktop Cursor Accent */}
      <CursorFollower />

      {/* Sticky Condensing Header */}
      <Header />

      {/* Main Content Area - Starts Cleanly Below Header in Normal Document Flow */}
      <main className="flex-grow w-full relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Centralized Floating Widget Manager (AI Assistant, ScrollToTop, Accessibility Toolbar) */}
      <FloatingWidgetManager />
    </div>
  );
};
