import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroSlides } from '../../data/heroSlides';
import { EXPO_OUT_EASING } from '../../utils/premiumMotion';

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 100]);
  const parallaxScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  // Video source (high-definition campus b-roll loop fallback)
  const sampleVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-walking-together-at-school-42939-large.mp4";

  // Auto rotate slides every 6 seconds when not in video mode
  useEffect(() => {
    if (isVideoMode) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isVideoMode]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextSlide = () => {
    setIsVideoMode(false);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setIsVideoMode(false);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentIndex];

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] md:h-[700px] bg-bg-primary overflow-hidden transition-colors duration-300">
      
      {/* Background Media with Framer Motion Parallax */}
      <motion.div 
        style={{ y: parallaxY, scale: parallaxScale }}
        className="absolute inset-0 z-0"
      >
        {isVideoMode ? (
          <video
            ref={videoRef}
            src={sampleVideoUrl}
            poster={slide.image}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onError={() => setIsVideoMode(false)}
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
          />
        ) : (
          <div className="relative w-full h-full">
            {heroSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Deep Multi-stop Dark Vignette Gradient Overlay for Guaranteed Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071522]/95 via-[#071522]/65 to-black/40 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,21,34,0.5)_0%,transparent_85%)] pointer-events-none z-10" />
      </motion.div>

      {/* Hero Banner Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 pb-12 flex flex-col justify-center items-center text-center">
        
        {/* Floating Eyebrow Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO_OUT_EASING }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-[#F3C66B]/40 text-xs md:text-sm text-[#F3C66B] font-bold tracking-wide mb-6 shadow-xl"
        >
          <Sparkles className="w-4 h-4 text-[#F3C66B]" />
          <span className="uppercase tracking-widest text-[11px] sm:text-xs">
            {isVideoMode ? "Campus Life Experience • 2026-27" : slide.badge}
          </span>
        </motion.div>

        {/* Main Headline (Prestige Serif) */}
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EXPO_OUT_EASING }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-5xl mb-4 font-serif text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
        >
          <span>{isVideoMode ? "Empowering Young Minds for " : slide.title} </span>
          <br className="hidden sm:block" />
          <span className="text-[#F3C66B] italic font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {isVideoMode ? "Global Excellence" : slide.highlight}
          </span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EXPO_OUT_EASING }}
          className="text-sm sm:text-base md:text-xl text-slate-100 font-medium max-w-3xl leading-relaxed mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
        >
          {isVideoMode 
            ? "Krishna International School, Aligarh — A premier CBSE institution dedicated to intellectual rigor, holistic growth, and world-class innovation across 5 acres of eco-friendly campus." 
            : slide.description}
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EXPO_OUT_EASING }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          
          {/* Button 1: Click to Enroll */}
          <Link
            to="/enroll"
            className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#c49f2f] text-[#091724] font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-xl border border-[#F3C66B] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Click to Enroll
          </Link>

          {/* Button 2: Explore us */}
          <Link
            to="/about/overview"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 border border-white/30 text-white font-bold text-xs sm:text-sm backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-[#091724] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Explore Campus</span>
          </Link>

          {/* Button 3: Pay School Fee */}
          <Link
            to="/admission/fee-payment"
            className="px-7 py-3.5 rounded-full border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#091724] font-black text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
          >
            Pay School Fee
          </Link>

        </motion.div>
      </div>

      {/* Video Audio & Playback Controls */}
      {isVideoMode && (
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-slate-900/70 backdrop-blur-md p-1.5 rounded-full border border-white/20">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-900/70 hover:bg-[#D4AF37] text-white hover:text-[#091724] backdrop-blur-md transition-all hidden sm:block hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-900/70 hover:bg-[#D4AF37] text-white hover:text-[#091724] backdrop-blur-md transition-all hidden sm:block hover:scale-110 border border-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Mode Switch Pills */}
      <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsVideoMode(true)}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            isVideoMode ? 'bg-[#D4AF37] text-[#091724] shadow-md' : 'bg-slate-900/60 text-white hover:bg-slate-900/80 border border-white/20'
          }`}
        >
          Video Mode
        </button>
        <button
          onClick={() => setIsVideoMode(false)}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            !isVideoMode ? 'bg-[#D4AF37] text-[#091724] shadow-md' : 'bg-slate-900/60 text-white hover:bg-slate-900/80 border border-white/20'
          }`}
        >
          Slideshow Mode
        </button>
      </div>

    </div>
  );
};
