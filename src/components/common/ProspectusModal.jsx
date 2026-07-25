import React, { useEffect } from 'react';
import { X, Printer, Download, Award, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const ProspectusModal = ({ isOpen, onClose, autoPrint = false }) => {
  useEffect(() => {
    if (isOpen && autoPrint) {
      const timer = setTimeout(() => {
        window.print();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoPrint]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-bg-secondary rounded-3xl max-w-4xl w-full max-h-[88vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gold-accent relative animate-fadeIn my-auto">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="sticky top-0 bg-[#091724] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b-2 border-gold-accent print:hidden z-20 shadow-md">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gold-accent shrink-0" />
            <span className="font-serif font-bold text-xs sm:text-base text-gold-accent truncate">Official School Prospectus 2026-27</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="px-3 sm:px-4 py-2 bg-gold-accent hover:opacity-90 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Prospectus"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* 1-Page Prospectus Printable Content */}
        <div className="p-8 sm:p-12 space-y-8 font-sans text-navy-deep bg-bg-secondary" id="printable-prospectus">
          
          {/* Header Banner */}
          <div className="border-b-4 border-gold-accent pb-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div>
              <div className="inline-block px-3 py-1 bg-gold-accent text-white font-black text-[10px] uppercase tracking-widest rounded-full mb-2">
                CBSE Affiliated School • Affiliation No. 2132338
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-navy-deep font-serif">
                KRISHNA INTERNATIONAL SCHOOL
              </h1>
              <p className="text-xs sm:text-sm font-bold text-gold-accent uppercase tracking-widest mt-1">
                Dedicated to Excellence • Delhi G.T. Road, Aligarh (U.P.)
              </p>
            </div>
            <div className="shrink-0 bg-[#091724] p-4 rounded-2xl border-2 border-gold-accent text-white text-center">
              <span className="text-[10px] font-black uppercase text-gray-300 block">Session</span>
              <span className="text-xl font-extrabold text-gold-accent font-serif">2026-27</span>
              <span className="text-[9px] text-emerald-400 font-bold block mt-0.5">Admissions Open</span>
            </div>
          </div>

          {/* Section 1: Overview */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-navy-deep font-serif border-b border-border-hairline pb-1">
              1. Institutional Profile & Vision
            </h2>
            <p className="text-xs sm:text-sm text-text-body leading-relaxed text-justify">
              Set amidst 5 acres of eco-friendly green land away from urban noise, Krishna International School provides an optimal environment for intellectual, moral, and physical growth. Affiliated to CBSE, New Delhi, KIS integrates NEP 2020 guidelines with modern STEM education, robotics, digital classrooms, and comprehensive sports training.
            </p>
          </div>

          {/* Section 2: Infrastructure & Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-bg-accent-section p-5 rounded-2xl border border-border-hairline space-y-2">
              <h3 className="text-sm font-bold text-navy-deep font-serif">Academic Streams Offered (Class XI & XII)</h3>
              <ul className="text-xs space-y-1.5 text-text-body font-medium">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>Science (PCM / PCB + IP / CS / PE)</span></li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>Commerce (Accountancy, Business, Economics, Math)</span></li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>Humanities (Pol. Science, History, Psychology, Econ)</span></li>
              </ul>
            </div>

            <div className="bg-bg-accent-section p-5 rounded-2xl border border-border-hairline space-y-2">
              <h3 className="text-sm font-bold text-navy-deep font-serif">Campus Infrastructure Highlights</h3>
              <ul className="text-xs space-y-1.5 text-text-body font-medium">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>Air-Conditioned Smart Classrooms</span></li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>Advanced Physics, Chem, Bio & AI Robotics Labs</span></li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>5-Acre Sports Complex (Basketball, Tennis, Football)</span></li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" /> <span>GPS & Camera Equipped School Buses</span></li>
              </ul>
            </div>
          </div>

          {/* Section 3: Admission & Fee Outline */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-navy-deep font-serif border-b border-border-hairline pb-1">
              2. Admission Guidelines & Schedule
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-text-body font-medium">
              <div className="p-3 bg-bg-accent-section rounded-xl border border-border-hairline">
                <span className="font-bold text-navy-deep block">Step 01: Form</span>
                <span>Online / Offline Registration Form</span>
              </div>
              <div className="p-3 bg-bg-accent-section rounded-xl border border-border-hairline">
                <span className="font-bold text-navy-deep block">Step 02: Assessment</span>
                <span>Interaction & Aptitude Test</span>
              </div>
              <div className="p-3 bg-bg-accent-section rounded-xl border border-border-hairline">
                <span className="font-bold text-navy-deep block">Step 03: Verification</span>
                <span>Birth Cert, Aadhaar & Report Card</span>
              </div>
              <div className="p-3 bg-bg-accent-section rounded-xl border border-border-hairline">
                <span className="font-bold text-navy-deep block">Step 04: Confirmation</span>
                <span>Fee Deposit & Seat Allocation</span>
              </div>
            </div>
          </div>

          {/* Footer Contact Info */}
          <div className="bg-[#091724] text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif font-bold text-gold-accent text-sm">Admission Enquiry Desk</h4>
              <p className="text-gray-300">Delhi G.T. Road, Aligarh - 202001 (U.P.) INDIA</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-gray-200 font-medium">
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-gold-accent" /> +91 98370-50000</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-gold-accent" /> info@kisaligarh.com</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
