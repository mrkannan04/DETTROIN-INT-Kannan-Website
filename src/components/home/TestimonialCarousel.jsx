import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageReveal } from '../common/ImageReveal';

export const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Krishna International School has transformed my daughter's confidence. The balance between academic discipline, sports, and robotics labs is unparalleled in Aligarh.",
      author: "Mr. Alok Verma",
      role: "Parent of Ananya Verma (Grade VIII)",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "The faculty here takes genuine care of every student's individual learning pace. My son won gold in the Inter-CBSE Science Olympiad thanks to their guidance!",
      author: "Mrs. Meenakshi Sharma",
      role: "Parent of Aarav Sharma (Grade X)",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "Studying at KIS equipped me with strong analytical skills and sportsmanship. The 5-acre campus and smart classrooms made high school memorable.",
      author: "Rohan Gupta",
      role: "Alumni • IIT Delhi Batch 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <section className="py-16 bg-bg-secondary border-t border-b border-border-hairline">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 bg-kis-gold/15 text-kis-navy font-black text-xs uppercase tracking-wider rounded-full">
            Parents & Alumni Speak
          </span>
          <h2 className="text-3xl font-extrabold text-kis-navy mt-2 font-serif">
            Voices of Our School Community
          </h2>
        </div>

        <ImageReveal>
          <div className="glass-card bg-bg-secondary rounded-3xl p-8 sm:p-12 border border-border-hairline relative overflow-hidden transition-colors duration-300">
            <Quote className="absolute top-6 left-6 w-20 h-20 text-navy-deep/10 stroke-1" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 text-kis-gold">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-xl md:text-2xl text-kis-navy font-serif leading-relaxed italic mb-8">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-kis-gold shadow"
                />
                <div className="text-left">
                  <h4 className="text-base font-bold text-kis-navy font-serif">{t.author}</h4>
                  <p className="text-xs text-navy-muted font-semibold">{t.role}</p>
                </div>
              </div>

            </div>

            {/* Slider Nav Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white hover:bg-kis-gold text-kis-navy shadow-md border border-border-hairline transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white hover:bg-kis-gold text-kis-navy shadow-md border border-border-hairline transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </ImageReveal>

      </div>
    </section>
  );
};
