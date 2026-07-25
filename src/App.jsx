import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { CursorFollower } from './components/common/CursorFollower';
import { AiAdmissionsChat } from './components/common/AiAdmissionsChat';
import { AccessibilityToolbar } from './components/common/AccessibilityToolbar';
import { AppRoutes } from './routes/AppRoutes';
import { AppLoadingSplash } from './components/common/AppLoadingSplash';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLoadingSplash>
          <div className="flex flex-col min-h-screen font-sans bg-primary text-body selection:bg-kis-gold selection:text-kis-navy transition-colors duration-300">
            {/* Desktop Cursor Accent */}
            <CursorFollower />

            {/* Accessibility Control Toolbar */}
            <AccessibilityToolbar />

            {/* Sticky Condensing Header */}
            <Header />

            {/* Main Content View */}
            <main className="flex-grow">
              <AppRoutes />
            </main>

            {/* Floating AI Admissions Assistant */}
            <AiAdmissionsChat />

            {/* Footer */}
            <Footer />

            {/* Floating Scroll To Top */}
            <ScrollToTop />
          </div>
        </AppLoadingSplash>
      </Router>
    </ThemeProvider>
  );
}

