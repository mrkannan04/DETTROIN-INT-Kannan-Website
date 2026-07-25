import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NoticeTicker = () => {
  const notices = [
    { text: "🔔 Admissions Open for Academic Session 2026-27 (Nursery to Grade XII) — Click to Enroll Online", path: "/enroll" },
    { text: "📢 Parent-Teacher Meeting (PTM) for Mid-Term Progress scheduled for Aug 10, 2026", path: "/notices/notice-102" },
    { text: "🏆 Annual CBSE Inter-School Sports Meet registrations now open — Contact Sports Dept.", path: "/notices/notice-105" },
    { text: "🎓 CBSE Board Examination 2026 Registration & Form Verification Notice", path: "/notices/notice-103" },
    { text: "🚌 New AC Transport Routes introduced for Aligarh & suburban corridors", path: "/admission/fee-payment" }
  ];

  return (
    <div className="bg-bg-secondary text-body border-b border-border-hairline transition-colors duration-300 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Badge Indicator */}
        <Link
          to="/notices"
          className="flex items-center gap-1.5 px-3 py-1 bg-gold-accent hover:bg-gold-accent/90 text-navy-deep rounded-full font-black text-xs uppercase tracking-wider shrink-0 shadow-sm transition-all hover:scale-105"
        >
          <Bell className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Latest Notices</span>
        </Link>

        {/* Marquee Ticker Track */}
        <div className="flex-1 overflow-hidden relative group">
          <div className="whitespace-nowrap inline-flex animate-marquee group-hover:[animation-play-state:paused] py-0.5">
            {[...notices, ...notices, ...notices, ...notices].map((notice, idx) => (
              <Link
                key={idx}
                to={notice.path}
                className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wide px-6 text-navy-deep hover:text-gold-accent transition-colors cursor-pointer"
              >
                <span>{notice.text}</span>
                <span className="ml-6 text-gold-accent font-bold">•</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <Link
          to="/notices"
          className="hidden md:flex items-center gap-1 text-xs font-bold text-gold-accent hover:underline shrink-0 uppercase tracking-wider"
        >
          <span>All Notices</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
