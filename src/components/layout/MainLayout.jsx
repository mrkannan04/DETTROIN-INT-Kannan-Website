import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { CursorFollower } from '../common/CursorFollower';
import { AiAdmissionsChat } from '../common/AiAdmissionsChat';
import { AccessibilityToolbar } from '../common/AccessibilityToolbar';

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-primary text-body selection:bg-kis-gold selection:text-kis-navy transition-colors duration-300 relative">
      {/* Desktop Cursor Accent */}
      <CursorFollower />

      {/* Accessibility Control Toolbar */}
      <AccessibilityToolbar />

      {/* Sticky Condensing Header */}
      <Header />

      {/* Main Content Area - Starts Cleanly Below Header in Normal Document Flow */}
      <main className="flex-grow w-full relative z-10">
        {children}
      </main>

      {/* Floating AI Admissions Assistant */}
      <AiAdmissionsChat />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
};
