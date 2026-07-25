import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AppRoutes } from './routes/AppRoutes';
import { AppLoadingSplash } from './components/common/AppLoadingSplash';

export default function App() {
  return (
    <Router>
      <AppLoadingSplash>
        <div className="flex flex-col min-h-screen font-sans bg-[#F7F9FC] selection:bg-kis-gold selection:text-kis-navy">
          {/* Sticky Condensing Header */}
          <Header />

          {/* Main Content View */}
          <main className="flex-grow">
            <AppRoutes />
          </main>

          {/* Light Navy Footer */}
          <Footer />

          {/* Floating Scroll To Top */}
          <ScrollToTop />
        </div>
      </AppLoadingSplash>
    </Router>
  );
}

