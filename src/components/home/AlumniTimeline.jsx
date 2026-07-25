import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Building2, Globe, Sparkles, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { fadeUpReveal, EXPO_OUT_EASING } from '../../utils/premiumMotion';

export const alumniMilestones = [
  {
    year: '2024 - 2025',
    name: 'Dr. Priya Sharma',
    batch: 'Class of 2016',
    role: 'AI Researcher at Cambridge University',
    achievement: 'Published landmark paper on Quantum Machine Learning algorithms; awarded Gates Cambridge Scholarship.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    quote: 'Krishna International School laid the foundation for my mathematical curiosity and research rigor.'
  },
  {
    year: '2022 - 2023',
    name: 'Rohan Verma',
    batch: 'Class of 2018',
    role: 'Founder & CEO of EcoTech Innovations',
    achievement: 'Secured $5M Series A funding for solar microgrid hardware deployed across 40+ rural districts.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    quote: 'The entrepreneurship mentorship and robotics lab at KIS gave me the confidence to build.'
  },
  {
    year: '2020 - 2021',
    name: 'Ananya Gupta',
    batch: 'Class of 2015',
    role: 'IAS Officer (AIR 14, UPSC)',
    achievement: 'Cleared UPSC Civil Services Exam in first attempt; currently serving as Additional District Magistrate.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    quote: 'The value system, debate culture, and ethical grounding from KIS guide my public service every day.'
  },
  {
    year: '2018 - 2019',
    name: 'Vikramaditya Singh',
    batch: 'Class of 2014',
    role: 'Senior Software Engineer at Google HQ',
    achievement: 'Lead architect on Android OS core framework; mentor for global competitive coding competitions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    quote: 'From my first line of C++ code in KIS computer lab to Google Mountain View, the journey started here.'
  }
];

export const AlumniTimeline = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeAlumni = alumniMilestones[selectedIdx];

  return (
    <section className="py-24 bg-bg-accent-section relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Shaping Tomorrow's Global Leaders"
          subtitle="Alumni Excellence & Legacy Timeline"
          centered={true}
        />

        {/* Timeline Year Filter Pills */}
        <div className="flex items-center justify-center gap-3 mb-12 overflow-x-auto no-scrollbar pb-2">
          {alumniMilestones.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 border shrink-0 ${
                selectedIdx === idx
                  ? 'bg-gold-accent text-navy-deep border-gold-accent shadow-lg scale-105'
                  : 'bg-bg-secondary text-navy-muted border-border-hairline hover:border-gold-accent hover:text-navy-deep'
              }`}
            >
              {m.year}
            </button>
          ))}
        </div>

        {/* Main Alumni Card & Showcase */}
        <motion.div
          variants={fadeUpReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl glass-card border border-border-hairline p-6 sm:p-10 bg-bg-secondary shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: EXPO_OUT_EASING }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Alumni Photo */}
              <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-xl aspect-square max-w-sm mx-auto lg:max-w-none border-2 border-gold-accent/40">
                <img
                  src={activeAlumni.image}
                  alt={activeAlumni.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-gold-accent text-navy-deep text-[10px] font-black uppercase tracking-widest inline-block mb-1">
                    {activeAlumni.batch}
                  </span>
                  <h4 className="text-lg font-bold font-serif">{activeAlumni.name}</h4>
                </div>
              </div>

              {/* Alumni Details & Quote */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-black text-gold-accent uppercase tracking-widest mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{activeAlumni.year} Milestone</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep font-serif">
                    {activeAlumni.role}
                  </h3>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-border-hairline">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-deep mb-1">
                    <Award className="w-4 h-4 text-gold-accent" />
                    <span>Key Milestone & Impact</span>
                  </div>
                  <p className="text-sm text-text-body leading-relaxed font-normal">
                    {activeAlumni.achievement}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <div className="relative p-6 rounded-2xl bg-navy-deep text-white border border-gold-accent/30 shadow-lg">
                  <Quote className="w-8 h-8 text-gold-accent/40 absolute top-4 right-4" />
                  <p className="text-sm text-gray-200 italic font-serif leading-relaxed relative z-10">
                    "{activeAlumni.quote}"
                  </p>
                  <span className="text-xs font-bold text-gold-accent block mt-3">— {activeAlumni.name}, {activeAlumni.batch}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
