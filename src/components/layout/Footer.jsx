import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaAndroid, FaApple } from 'react-icons/fa';
import { mainNavigation } from '../../data/navigation';
import { Logo } from '../common/Logo';

export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-text font-sans border-t-4 border-gold-accent relative overflow-hidden transition-colors duration-300">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Column 1: School Logo & Address */}
          <div className="space-y-4">
            <Logo variant="default" size="normal" showTagline={true} />

            <address className="not-italic text-xs sm:text-sm text-footer-text leading-relaxed space-y-2 pt-2">
              <a
                href="https://maps.google.com/?q=Krishna+International+School+Aligarh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-navy-deep transition-colors cursor-pointer group"
                title="Open Location on Google Maps"
              >
                <MapPin className="w-5 h-5 text-gold-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  Delhi G.T. Road, Aligarh-202001<br />
                  (U.P.) INDIA
                </span>
              </a>
            </address>

            <a
              href="https://maps.google.com/?q=Krishna+International+School+Aligarh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-accent hover:text-navy-deep uppercase tracking-wider group pt-1"
            >
              <span>› View Campus Map on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Column 2: Contact & Social Icons */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-footer-heading uppercase tracking-wider border-b-2 border-gold-accent pb-2 inline-block">
              Contact & Socials
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-footer-text">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-accent shrink-0 mt-1" />
                <div>
                  <a href="tel:+919837050000" className="hover:text-gold-accent transition-colors block">+ (91) 983-70-50000</a>
                  <a href="tel:+917351050000" className="hover:text-gold-accent transition-colors block">+ (91) 735-10-50000</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <a href="mailto:info@kisaligarh.com" className="hover:text-gold-accent transition-colors break-all">
                  info@kisaligarh.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] uppercase font-bold text-navy-muted mb-2">Connect With Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-bg-accent-section flex items-center justify-center text-footer-heading hover:bg-red-600 hover:text-white hover:scale-110 transition-all cursor-pointer border border-border-hairline"
                  aria-label="YouTube Channel"
                  title="Visit YouTube Channel"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-bg-accent-section flex items-center justify-center text-footer-heading hover:bg-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer border border-border-hairline"
                  aria-label="Facebook Page"
                  title="Visit Facebook Page"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-bg-accent-section flex items-center justify-center text-footer-heading hover:bg-pink-600 hover:text-white hover:scale-110 transition-all cursor-pointer border border-border-hairline"
                  aria-label="Instagram Feed"
                  title="Visit Instagram Profile"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-footer-heading uppercase tracking-wider border-b-2 border-gold-accent pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="text-footer-text hover:text-gold-accent transition-colors flex items-center gap-1.5">
                  <span className="text-gold-accent">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about/overview" className="text-footer-text hover:text-gold-accent transition-colors flex items-center gap-1.5">
                  <span className="text-gold-accent">›</span>
                  <span>About KIS</span>
                </Link>
              </li>
              <li>
                <Link to="/admission/overview" className="text-footer-text hover:text-gold-accent transition-colors flex items-center gap-1.5">
                  <span className="text-gold-accent">›</span>
                  <span>Admission</span>
                </Link>
              </li>
              <li>
                <Link to="/academics/overview" className="text-footer-text hover:text-gold-accent transition-colors flex items-center gap-1.5">
                  <span className="text-gold-accent">›</span>
                  <span>Academics</span>
                </Link>
              </li>
              <li>
                <Link to="/co-curricular/overview" className="text-footer-text hover:text-gold-accent transition-colors flex items-center gap-1.5">
                  <span className="text-gold-accent">›</span>
                  <span>Co-Curricular</span>
                </Link>
              </li>
              <li>
                <Link to="/notices" className="text-footer-text hover:text-gold-accent transition-colors flex items-center gap-1.5">
                  <span className="text-gold-accent">›</span>
                  <span>Notice Board</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/enroll"
                  className="text-gold-accent hover:underline font-bold flex items-center gap-1.5 uppercase mt-1"
                >
                  <span className="text-gold-accent">›</span>
                  <span>Online Admission 2026-27</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: School Mobile App & Placeholder QR */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-footer-heading uppercase tracking-wider border-b-2 border-gold-accent pb-2 inline-block">
              School Mobile App
            </h4>
            <p className="text-xs text-footer-text leading-relaxed">
              Download the official student app for attendance, timetable & progress tracking.
            </p>

            {/* App store buttons linking to internal portal page */}
            <div className="flex flex-col xs:flex-row items-stretch gap-2 pt-1">
              <Link
                to="/portal/mobile-app"
                className="flex items-center gap-2 bg-bg-secondary hover:bg-bg-accent-section border border-border-hairline rounded-lg px-3 py-2 text-xs transition-colors flex-1"
              >
                <FaAndroid className="w-5 h-5 text-emerald-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase text-navy-muted leading-none">Get it on</div>
                  <div className="font-bold text-navy-deep leading-tight text-xs sm:text-sm">Google Play</div>
                </div>
              </Link>

              <Link
                to="/portal/mobile-app"
                className="flex items-center gap-2 bg-bg-secondary hover:bg-bg-accent-section border border-border-hairline rounded-lg px-3 py-2 text-xs transition-colors flex-1"
              >
                <FaApple className="w-5 h-5 text-navy-muted shrink-0" />
                <div>
                  <div className="text-[9px] uppercase text-navy-muted leading-none">Download on</div>
                  <div className="font-bold text-navy-deep leading-tight text-xs sm:text-sm">App Store</div>
                </div>
              </Link>
            </div>

            {/* DEMO QR Code & Fictional School Code Box */}
            <div className="bg-bg-secondary border border-border-hairline rounded-xl p-3 flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-bg-primary rounded-lg p-1.5 shrink-0 flex items-center justify-center shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full text-navy-deep fill-current">
                  <path d="M0 0h35v35H0zM5 5v25h25V5zm5 5h15v15H10zm55-10h35v35H65zM70 5v25h25V5zm5 5h15v15H75zM0 65h35v35H0zM5 70v25h25V70zm5 5h15v15H10zm45-10h10v10H55zm15 0h10v10H70zm15 0h10v10H85zm-30 15h10v10H55zm30 0h10v10H85zm-15 15h10v10H70z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-navy-muted block font-medium">Demo App QR • Code:</span>
                <span className="text-xs sm:text-sm font-extrabold text-gold-accent tracking-widest uppercase block">
                  DEMO123
                </span>
                <span className="text-[9px] text-navy-muted block italic">Sample / Demo Code</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright & Policy Links Bar */}
      <div className="bg-bg-accent-section py-4 px-4 border-t border-border-hairline text-xs font-semibold text-navy-muted tracking-wide transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">KRISHNA INTERNATIONAL SCHOOL © 2026. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 text-navy-muted text-[11px] sm:text-xs">
            <Link to="/about/regulations" className="hover:text-gold-accent transition-colors">Privacy Policy</Link>
            <span className="hidden xs:inline">•</span>
            <Link to="/about/regulations" className="hover:text-gold-accent transition-colors">Terms of Service</Link>
            <span className="hidden xs:inline">•</span>
            <Link to="/academics/mandatory-disclosure" className="hover:text-gold-accent transition-colors">Mandatory Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
