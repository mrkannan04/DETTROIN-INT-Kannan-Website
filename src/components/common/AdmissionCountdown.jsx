import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdmissionCountdown = () => {
  // Set target date 14 days in the future
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-kis-navy text-white rounded-2xl p-6 border-2 border-kis-gold shadow-lg my-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-kis-gold text-kis-navy flex items-center justify-center shrink-0 shadow">
            <Clock className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 justify-center md:justify-start">
              <AlertCircle className="w-4 h-4 text-kis-gold" />
              <span className="text-xs font-black uppercase text-kis-gold tracking-wider">Admission Deadline Alert</span>
            </div>
            <h4 className="text-xl font-bold font-serif text-white">Academic Session 2026-27 Registrations</h4>
          </div>
        </div>

        {/* Timer Box Grid */}
        <div className="flex items-center gap-3 font-mono">
          <div className="bg-white/10 px-3 py-2 rounded-xl border border-white/20 text-center min-w-[60px]">
            <span className="block text-xl font-black text-kis-gold">{timeLeft.days}</span>
            <span className="text-[9px] uppercase tracking-wider text-gray-300 font-sans">Days</span>
          </div>
          <span className="text-kis-gold font-bold text-lg">:</span>
          <div className="bg-white/10 px-3 py-2 rounded-xl border border-white/20 text-center min-w-[60px]">
            <span className="block text-xl font-black text-kis-gold">{timeLeft.hours}</span>
            <span className="text-[9px] uppercase tracking-wider text-gray-300 font-sans">Hours</span>
          </div>
          <span className="text-kis-gold font-bold text-lg">:</span>
          <div className="bg-white/10 px-3 py-2 rounded-xl border border-white/20 text-center min-w-[60px]">
            <span className="block text-xl font-black text-kis-gold">{timeLeft.minutes}</span>
            <span className="text-[9px] uppercase tracking-wider text-gray-300 font-sans">Mins</span>
          </div>
          <span className="text-kis-gold font-bold text-lg">:</span>
          <div className="bg-white/10 px-3 py-2 rounded-xl border border-white/20 text-center min-w-[60px]">
            <span className="block text-xl font-black text-kis-gold">{timeLeft.seconds}</span>
            <span className="text-[9px] uppercase tracking-wider text-gray-300 font-sans">Secs</span>
          </div>
        </div>

        <Link
          to="/enroll"
          className="px-6 py-3 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-xs uppercase tracking-wider rounded-full shadow hover:scale-105 transition-all shrink-0"
        >
          Enroll Student Now
        </Link>

      </div>
    </div>
  );
};
