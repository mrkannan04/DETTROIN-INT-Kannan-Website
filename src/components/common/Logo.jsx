import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ variant = 'default', size = 'normal', showTagline = true }) => {
  const isLight = variant === 'light';

  const logoHeightClass = 
    size === 'small' 
      ? 'h-9 sm:h-10' 
      : size === 'large' 
      ? 'h-14 sm:h-18' 
      : 'h-10 sm:h-12 md:h-13';

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none shrink-0 max-w-[85%] sm:max-w-none">
      {/* Official School Shield Emblem */}
      <div className="relative shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
        <img 
          src="/school-logo.png" 
          alt="Krishna International School Emblem" 
          className={`${logoHeightClass} w-auto object-contain filter drop-shadow-md`}
        />
      </div>

      {/* Wordmark Typography with Responsive Scaling */}
      <div className="flex flex-col justify-center min-w-0">
        <h1 className={`text-[11px] min-[360px]:text-xs min-[390px]:text-sm sm:text-base md:text-xl font-black tracking-tight uppercase font-serif leading-tight truncate ${isLight ? 'text-white' : 'text-navy-deep'} group-hover:text-gold-accent transition-colors`}>
          KRISHNA <span className="text-gold-accent">INT.</span> <span className="hidden min-[360px]:inline">SCHOOL</span>
        </h1>
        {showTagline && (
          <span className={`text-[8px] min-[375px]:text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase truncate ${isLight ? 'text-gray-300' : 'text-navy-muted'}`}>
            Aligarh • Dedicated to Excellence
          </span>
        )}
      </div>
    </Link>
  );
};

