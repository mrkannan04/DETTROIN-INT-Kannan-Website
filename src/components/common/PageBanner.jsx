import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export const PageBanner = ({ title, subtitle, breadcrumb = [], bannerImage }) => {
  const defaultBg = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="relative bg-bg-accent-section text-navy-deep overflow-hidden py-14 md:py-20 transition-colors duration-300">
      {/* Background Image with Theme-Aware Overlay for Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage || defaultBg}
          alt={title}
          className="w-full h-full object-cover opacity-20 scale-105 transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/90 to-bg-primary/85 transition-colors duration-300" />
      </div>

      {/* Decorative Gold Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-accent via-yellow-500/50 to-gold-accent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        {/* Breadcrumb navigation */}
        {breadcrumb.length > 0 && (
          <div className="mb-3 flex justify-center md:justify-start">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-navy-deep mb-2 font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gold-accent font-semibold max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

