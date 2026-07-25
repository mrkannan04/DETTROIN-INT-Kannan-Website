import React, { useEffect } from 'react';
import { X, Printer, Download, Award, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const ProspectusModal = ({ isOpen, onClose, autoPrint = false, docInfo = null }) => {
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

  const docTitle = docInfo?.title || "Official School Prospectus 2026-27";
  const isFeeDoc = docTitle.toLowerCase().includes('fee');
  const isDisclosureDoc = docTitle.toLowerCase().includes('mandatory') || docTitle.toLowerCase().includes('cbse');

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-bg-secondary rounded-3xl max-w-4xl w-full max-h-[88vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gold-accent relative animate-fadeIn my-auto">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="sticky top-0 bg-[#091724] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b-2 border-gold-accent print:hidden z-20 shadow-md">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gold-accent shrink-0" />
            <span className="font-serif font-bold text-xs sm:text-base text-gold-accent truncate">{docTitle}</span>
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
              aria-label="Close Document"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Page-Specific Printable Content */}
        <div className="p-8 sm:p-12 space-y-8 font-sans text-navy-deep bg-bg-secondary" id="printable-prospectus">
          
          {/* Header Banner */}
          <div className="border-b-4 border-gold-accent pb-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div>
              <div className="inline-block px-3 py-1 bg-gold-accent text-white font-black text-[10px] uppercase tracking-widest rounded-full mb-2">
                CBSE Affiliated School • Affiliation No. 2132338
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-navy-deep font-serif">
                KRISHNA INTERNATIONAL SCHOOL
              </h1>
              <p className="text-xs sm:text-sm font-bold text-gold-accent uppercase tracking-widest mt-1">
                {docTitle}
              </p>
            </div>
            <div className="shrink-0 bg-[#091724] p-4 rounded-2xl border-2 border-gold-accent text-white text-center">
              <span className="text-[10px] font-black uppercase text-gray-300 block">Session</span>
              <span className="text-xl font-extrabold text-gold-accent font-serif">2026-27</span>
              <span className="text-[9px] text-emerald-400 font-bold block mt-0.5">Verified Document</span>
            </div>
          </div>

          {/* Conditional Unique Document Body Rendering */}
          {isFeeDoc ? (
            /* Unique Fee Structure Content */
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-navy-deep font-serif border-b border-border-hairline pb-1">
                Class-Wise Annual Tuition & Composite Fee Schedule
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border-hairline">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#091724] text-white uppercase text-[10px] font-bold">
                    <tr>
                      <th className="p-3">Class Group</th>
                      <th className="p-3">Admission Fee (One-Time)</th>
                      <th className="p-3">Quarterly Tuition Fee</th>
                      <th className="p-3">Annual Composite Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-hairline text-text-body">
                    <tr><td className="p-3 font-bold text-navy-deep">Nursery to UKG</td><td className="p-3">₹ 5,000</td><td className="p-3">₹ 6,500</td><td className="p-3 font-bold text-gold-accent">₹ 31,000</td></tr>
                    <tr><td className="p-3 font-bold text-navy-deep">Class I to V</td><td className="p-3">₹ 6,000</td><td className="p-3">₹ 7,800</td><td className="p-3 font-bold text-gold-accent">₹ 37,200</td></tr>
                    <tr><td className="p-3 font-bold text-navy-deep">Class VI to VIII</td><td className="p-3">₹ 7,500</td><td className="p-3">₹ 9,200</td><td className="p-3 font-bold text-gold-accent">₹ 44,300</td></tr>
                    <tr><td className="p-3 font-bold text-navy-deep">Class IX to X</td><td className="p-3">₹ 9,000</td><td className="p-3">₹ 11,500</td><td className="p-3 font-bold text-gold-accent">₹ 55,000</td></tr>
                    <tr><td className="p-3 font-bold text-navy-deep">Class XI & XII (Science/Comm)</td><td className="p-3">₹ 11,000</td><td className="p-3">₹ 14,000</td><td className="p-3 font-bold text-gold-accent">₹ 67,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-navy-muted italic">Note: Fee payable in 4 installments (April, July, October, January). Transport charges vary by distance.</p>
            </div>
          ) : isDisclosureDoc ? (
            /* Unique CBSE Mandatory Public Disclosure Content */
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-navy-deep font-serif border-b border-border-hairline pb-1">
                Mandatory General & Safety Disclosures (CBSE Compliance)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-bg-accent-section rounded-xl border border-border-hairline space-y-1">
                  <span className="font-bold text-navy-deep block">1. CBSE Affiliation Status</span>
                  <span className="text-text-body">Affiliated up to Senior Secondary level (Affiliation No. 2132338).</span>
                </div>
                <div className="p-4 bg-bg-accent-section rounded-xl border border-border-hairline space-y-1">
                  <span className="font-bold text-navy-deep block">2. Building Safety Certificate</span>
                  <span className="text-text-body">Verified by PWD / Competent Authority (Valid till 2029).</span>
                </div>
                <div className="p-4 bg-bg-accent-section rounded-xl border border-border-hairline space-y-1">
                  <span className="font-bold text-navy-deep block">3. Fire Safety Certificate</span>
                  <span className="text-text-body">Issued by Chief Fire Officer Aligarh (Valid till Dec 2026).</span>
                </div>
                <div className="p-4 bg-bg-accent-section rounded-xl border border-border-hairline space-y-1">
                  <span className="font-bold text-navy-deep block">4. Safe Drinking Water & Sanitation</span>
                  <span className="text-text-body">Certified by Chief Medical Officer / Water Testing Lab.</span>
                </div>
              </div>
            </div>
          ) : (
            /* Default School Prospectus Content */
            <>
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
            </>
          )}

          {/* Footer Contact Info */}
          <div className="bg-[#091724] text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif font-bold text-gold-accent text-sm">Admission & Administrative Helpdesk</h4>
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
