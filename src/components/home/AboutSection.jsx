import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { aboutSectionData } from '../../data/aboutContent';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { ImageReveal } from '../common/ImageReveal';

export const AboutSection = () => {
  const { sectionSubtitle, sectionTitle, motto, paragraphs, collageImages } = aboutSectionData;

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 4-Image Staggered Collage with ImageReveal */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Badge overlay */}
              <div className="absolute -top-4 -left-4 z-20 bg-navy-deep text-white p-4 rounded-2xl shadow-xl border-2 border-gold-accent hidden sm:flex items-center gap-3 max-w-[220px]">
                <ShieldCheck className="w-8 h-8 text-gold-accent shrink-0" />
                <div>
                  <div className="text-[10px] font-black text-gold-accent uppercase tracking-wider">School Motto</div>
                  <div className="text-xs font-semibold text-gray-100">{motto}</div>
                </div>
              </div>

              {collageImages.map((img, index) => (
                <ImageReveal
                  key={img.id}
                  className={`relative rounded-2xl shadow-md border-2 border-border-hairline group ${
                    index % 2 === 1 ? 'mt-6 sm:mt-10' : ''
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{img.alt}</span>
                  </div>
                </ImageReveal>
              ))}

            </div>
          </div>

          {/* Right Column: Copy text */}
          <div className="lg:col-span-6 space-y-6 text-text-body">
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="text-justify font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* Feature Highlights Pill Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-center gap-3 bg-bg-secondary p-3.5 rounded-xl border border-border-hairline shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-kis-gold shrink-0" />
                <span className="text-sm font-semibold text-kis-navy">5 Acres Pollution Free Campus</span>
              </div>
              <div className="flex items-center gap-3 bg-bg-secondary p-3.5 rounded-xl border border-border-hairline shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-kis-gold shrink-0" />
                <span className="text-sm font-semibold text-kis-navy">Equipped Library & Science Labs</span>
              </div>
              <div className="flex items-center gap-3 bg-bg-secondary p-3.5 rounded-xl border border-border-hairline shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-kis-gold shrink-0" />
                <span className="text-sm font-semibold text-kis-navy">Regular Student Counseling</span>
              </div>
              <div className="flex items-center gap-3 bg-bg-secondary p-3.5 rounded-xl border border-border-hairline shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-kis-gold shrink-0" />
                <span className="text-sm font-semibold text-kis-navy">Cultural Heritage & Pride</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

