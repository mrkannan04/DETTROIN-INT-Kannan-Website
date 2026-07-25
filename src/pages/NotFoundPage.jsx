import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/common/PageBanner';
import { Home, Bell, Phone, Search } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <PageBanner
        title="404 — Page Not Found"
        subtitle="The page you requested could not be found or has been moved."
        breadcrumb={['Home', '404 Error']}
        bannerImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ImageReveal>
          <div className="bg-white rounded-3xl p-10 sm:p-16 shadow-card border border-slate-200 space-y-6">
            
            <div className="text-6xl sm:text-8xl font-black text-kis-gold font-serif tracking-tight">
              404
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-kis-navy font-serif">
              Oops! Page Does Not Exist
            </h2>

            <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              We couldn't find the page you were looking for. Please check the URL or return to our homepage.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/"
                className="px-6 py-3.5 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold font-black text-xs uppercase tracking-wider rounded-full shadow hover:scale-105 transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Back Home</span>
              </Link>

              <Link
                to="/notices"
                className="px-6 py-3.5 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-xs uppercase tracking-wider rounded-full shadow hover:scale-105 transition-all flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>View Campus Notices</span>
              </Link>
            </div>

          </div>
        </ImageReveal>
      </div>
    </div>
  );
};
