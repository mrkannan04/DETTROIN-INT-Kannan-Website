import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const TopHeader = () => {
  return (
    <div className="bg-[#071A32] text-gray-200 text-xs md:text-sm py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left info: CBSE & Location */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-kis-gold font-medium">
            <Award className="w-4 h-4" />
            <span>CBSE Affiliated (No. 2132338)</span>
          </div>
          
          {/* Location opens Google Maps */}
          <a
            href="https://maps.google.com/?q=Krishna+International+School+Aligarh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
            title="Open School Location on Google Maps"
          >
            <MapPin className="w-4 h-4 text-kis-gold" />
            <span>Delhi G.T. Road, Aligarh - 202001 (U.P.)</span>
          </a>
        </div>

        {/* Right info: Phones, Email & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919837050000"
              className="flex items-center gap-1 hover:text-kis-gold transition-colors"
              title="Call School Desk"
            >
              <Phone className="w-3.5 h-3.5 text-kis-gold" />
              <span>+91 983-70-50000</span>
            </a>
            <a
              href="tel:+917351050000"
              className="flex items-center gap-1 hover:text-kis-gold transition-colors"
              title="Call Secondary Desk"
            >
              <span>/ 735-10-50000</span>
            </a>
          </div>

          <a
            href="mailto:info@kisaligarh.com"
            className="flex items-center gap-1 hover:text-kis-gold transition-colors"
            title="Send Email to School Admin"
          >
            <Mail className="w-3.5 h-3.5 text-kis-gold" />
            <span>info@kisaligarh.com</span>
          </a>

          {/* Social Icons opening Official Channels */}
          <div className="flex items-center gap-3 border-l border-white/20 pl-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-kis-gold transition-colors"
              aria-label="Official Facebook Page"
              title="Visit KIS on Facebook"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-kis-gold transition-colors"
              aria-label="Official Instagram Page"
              title="Visit KIS on Instagram"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-kis-gold transition-colors"
              aria-label="Official YouTube Channel"
              title="Visit KIS on YouTube"
            >
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


