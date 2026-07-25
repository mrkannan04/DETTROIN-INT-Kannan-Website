import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export const PageBanner = ({ title, subtitle, breadcrumb = [], bannerImage }) => {
  const defaultBg = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="relative bg-kis-navy text-white overflow-hidden py-14 md:py-20">
      {/* Background Image with Dark Overlay for Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage || defaultBg}
          alt={title}
          className="w-full h-full object-cover opacity-30 scale-105 transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kis-navy/95 via-kis-navy/90 to-kis-navy/85" />
      </div>

      {/* Decorative Gold Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kis-gold via-amber-300 to-kis-gold z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        {/* Breadcrumb navigation */}
        {breadcrumb.length > 0 && (
          <div className="mb-3 flex justify-center md:justify-start">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-kis-gold font-medium max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

