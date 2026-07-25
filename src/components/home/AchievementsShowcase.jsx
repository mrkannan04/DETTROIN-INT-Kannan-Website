import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import { ImageReveal } from '../common/ImageReveal';

export const AchievementsShowcase = () => {
  const achievements = [
    {
      id: 1,
      title: "CBSE National Olympiad Gold",
      category: "Academic Excellence",
      year: "2025-26",
      desc: "Rank 1 in CBSE National Science & Mathematics Olympiad among 4,000+ schools.",
      icon: Trophy
    },
    {
      id: 2,
      title: "Inter-School Basketball Champions",
      category: "Sports & Athletics",
      year: "2025",
      desc: "Winners of UP State CBSE Athletic & Basketball Tournament (U-17 Boys).",
      icon: Award
    },
    {
      id: 3,
      title: "100% CBSE Class XII Board Result",
      category: "Board Distinction",
      year: "2025",
      desc: "School topper secured 98.6% aggregate with 45+ students scoring above 90%.",
      icon: Star
    },
    {
      id: 4,
      title: "National Robotics Challenge Winner",
      category: "STEM Innovation",
      year: "2025",
      desc: "First prize in National Young Technocrats Robotics & AI Competition.",
      icon: Medal
    }
  ];

  return (
    <section className="py-16 bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="px-3.5 py-1 bg-kis-gold/15 text-kis-navy font-black text-xs uppercase tracking-wider rounded-full">
              Glory & Recognition
            </span>
            <h2 className="text-3xl font-extrabold text-kis-navy mt-2 font-serif">
              Our Recent Achievements & Awards
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => {
            const IconComponent = item.icon;
            return (
              <ImageReveal key={item.id}>
                <div className="bg-bg-secondary rounded-2xl p-6 border border-border-hairline shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-kis-navy text-kis-gold flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-kis-gold/20 text-kis-navy rounded-full">
                      {item.category} • {item.year}
                    </span>

                    <h3 className="text-lg font-bold text-kis-navy font-serif mt-3 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-text-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-1 text-[11px] font-extrabold text-kis-gold uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Krishna Int'l Proud Moment</span>
                  </div>
                </div>
              </ImageReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
