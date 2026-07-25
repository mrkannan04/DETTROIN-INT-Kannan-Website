import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { featureCardsData } from '../../data/featureCards';

export const FeatureCards = () => {
  const { sectionTitle, cards } = featureCardsData;

  return (
    <section className="py-20 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title={sectionTitle}
          subtitle="Explore Our Pillars"
          centered={true}
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover bg-kis-navy border border-slate-200 transition-all duration-300 flex flex-col h-[380px] sm:h-[400px] hover:-translate-y-1"
            >
              {/* Card Image with Fallback and Balanced Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-kis-navy">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 brightness-95"
                />
                {/* Refined gradient overlay: text remains readable while keeping the image vibrant */}
                <div className="absolute inset-0 bg-gradient-to-t from-kis-navy/95 via-kis-navy/60 to-black/30 group-hover:from-kis-navy/90 group-hover:via-kis-navy/50 transition-colors duration-300" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-kis-gold text-kis-navy text-xs font-black uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  {card.badge}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 mt-auto p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-kis-gold transition-colors font-serif drop-shadow-sm">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-3 mb-6 font-normal leading-relaxed drop-shadow-sm">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 text-sm font-black text-kis-gold hover:text-white uppercase tracking-wider group/btn"
                >
                  <span>Explore now</span>
                  <div className="w-8 h-8 rounded-full bg-kis-gold text-kis-navy flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-kis-navy group-hover/btn:translate-x-1.5 transition-all shadow">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

