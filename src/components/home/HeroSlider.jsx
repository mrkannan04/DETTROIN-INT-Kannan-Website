import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { heroSlides } from '../../data/heroSlides';

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload current image and track load state
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = heroSlides[currentIndex].image;
    img.onload = () => setImageLoaded(true);
    // Fallback timer if cached
    const timer = setTimeout(() => setImageLoaded(true), 200);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentIndex];

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] md:h-[620px] bg-kis-navy overflow-hidden">
      
      {/* Background Images Carousel */}
      {heroSlides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            onLoad={() => {
              if (idx === currentIndex) setImageLoaded(true);
            }}
            className="w-full h-full object-cover scale-105"
          />
          {/* Layered dark overlay for crisp high-contrast text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-kis-navy/95 via-kis-navy/70 to-black/40" />
        </div>
      ))}

      {/* Hero Overlay Banner Content - Fades in only when image is ready */}
      <div
        className={`relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 pb-8 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm text-kis-gold font-semibold mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-kis-gold" />
          <span>{slide.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mb-3 font-serif">
          <span>{slide.title} </span>
          <br className="hidden sm:block" />
          <span className="text-kis-gold">
            {slide.highlight}
          </span>
        </h1>

        {/* Subtitle paragraph */}
        <p className="text-xs sm:text-base md:text-lg text-gray-100 max-w-2xl font-normal leading-relaxed mb-6">
          {slide.description}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          
          {/* Button 1: Click to Enroll */}
          <Link
            to="/enroll"
            className="px-6 py-3 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            Click to Enroll
          </Link>

          {/* Button 2: Explore us (Internal Route) */}
          <Link
            to="/about/overview"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm hover:scale-[1.03] active:scale-95 transition-all duration-200 group"
          >
            <div className="w-7 h-7 rounded-full bg-kis-gold text-kis-navy flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Explore us</span>
          </Link>

          {/* Button 3: Pay School Fee */}
          <Link
            to="/admission/fee-payment"
            className="px-6 py-3 rounded-full border-2 border-kis-gold text-white hover:bg-kis-gold hover:text-kis-navy font-black text-xs sm:text-sm uppercase tracking-wider hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-md"
          >
            Pay School Fee
          </Link>

        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-kis-gold text-white hover:text-kis-navy backdrop-blur-sm transition-all hidden sm:block hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-kis-gold text-white hover:text-kis-navy backdrop-blur-sm transition-all hidden sm:block hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-kis-gold' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </div>
  );
};


