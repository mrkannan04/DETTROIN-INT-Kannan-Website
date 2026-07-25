import React from 'react';

export const SectionHeading = ({ title, subtitle, centered = true, dark = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-3 text-sm uppercase tracking-widest font-bold mb-2 ${dark ? 'text-kis-gold' : 'text-kis-gold'}`}>
          <span className="h-[2px] w-8 bg-kis-gold rounded-full" />
          <span>{subtitle}</span>
          <span className="h-[2px] w-8 bg-kis-gold rounded-full" />
        </div>
      )}
      <h2 className={`text-2xl md:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-kis-navy-dark'}`}>
        {title}
      </h2>
      <div className={`mt-3 h-1 w-24 bg-gradient-to-r from-kis-gold to-kis-gold-hover rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
