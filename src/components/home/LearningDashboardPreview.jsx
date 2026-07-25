import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Award, BookOpen, TrendingUp, Sparkles, Star, CheckCircle2, UserCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { fadeUpReveal } from '../../utils/premiumMotion';

export const LearningDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentInfo = {
    name: 'Aarav Sharma',
    grade: 'Grade X - Section A',
    rollNo: 'KIS-2026-084',
    overallGpa: '9.4 / 10.0',
    attendance: '98.5%',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop'
  };

  const subjects = [
    { name: 'Mathematics & Algebra', score: 96, target: 100, status: 'Mastery' },
    { name: 'Physics & Space Science', score: 92, target: 100, status: 'Advanced' },
    { name: 'Computer Science & AI', score: 98, target: 100, status: 'Mastery' },
    { name: 'English Literature & MUN', score: 88, target: 100, status: 'Proficient' },
    { name: 'Chemistry & Nanotech', score: 94, target: 100, status: 'Advanced' }
  ];

  const badges = [
    { title: 'AI Innovator 2026', icon: '🤖', desc: 'Built top-rated Python automation project' },
    { title: 'National Math Olympiad', icon: '🏆', desc: 'Gold Medalist in CBSE Regional Qualifier' },
    { title: 'Eco Ambassador', icon: '🌱', desc: 'Led 100-Tree Campus Planting Drive' }
  ];

  return (
    <section className="py-24 bg-bg-accent-section relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Adaptive Learning & Student Analytics"
          subtitle="School of the Future • Personalized Dashboard (Preview)"
          centered={true}
        />

        <motion.div
          variants={fadeUpReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl glass-card border border-border-hairline overflow-hidden shadow-2xl bg-bg-secondary p-6 sm:p-10"
        >
          {/* Dashboard Header Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-border-hairline">
            <div className="flex items-center gap-4">
              <img
                src={studentInfo.avatar}
                alt={studentInfo.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-gold-accent shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-deep font-serif">{studentInfo.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-gold-accent/20 text-gold-accent border border-gold-accent/30">
                    Preview Concept
                  </span>
                </div>
                <p className="text-xs text-navy-muted mt-0.5">{studentInfo.grade} • Roll ID: {studentInfo.rollNo}</p>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="px-4 py-2 rounded-2xl bg-bg-primary border border-border-hairline">
                <span className="text-[10px] text-navy-muted uppercase font-black tracking-wider block">Predicted CBSE Grade</span>
                <span className="text-base font-black text-gold-accent">{studentInfo.overallGpa}</span>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-bg-primary border border-border-hairline">
                <span className="text-[10px] text-navy-muted uppercase font-black tracking-wider block">Campus Attendance</span>
                <span className="text-base font-black text-emerald-accent">{studentInfo.attendance}</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Subject Progress & Badges */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            
            {/* Subject Mastery Progress Bars (2 Cols) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-navy-deep font-serif flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gold-accent" />
                  <span>Real-Time Subject Competency</span>
                </h4>
                <span className="text-xs text-emerald-accent font-bold">Updated Today</span>
              </div>

              <div className="space-y-4">
                {subjects.map((subj, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-bg-primary border border-border-hairline">
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="text-navy-deep">{subj.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-accent/15 text-emerald-accent">
                          {subj.status}
                        </span>
                        <span className="text-gold-accent font-black">{subj.score}%</span>
                      </div>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-3 rounded-full bg-bg-secondary overflow-hidden p-0.5 border border-border-hairline">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent transition-all duration-1000"
                        style={{ width: `${subj.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges & Achievements (1 Col) */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-navy-deep font-serif flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-accent" />
                <span>Verified Badges</span>
              </h4>

              <div className="space-y-3">
                {badges.map((badge, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-bg-primary border border-border-hairline flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-accent/15 text-xl flex items-center justify-center shrink-0 border border-gold-accent/30">
                      {badge.icon}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-navy-deep">{badge.title}</h5>
                      <p className="text-[11px] text-navy-muted mt-0.5">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mentor Feedback Box */}
              <div className="p-4 rounded-2xl bg-navy-deep text-white border border-gold-accent/30 shadow-md">
                <div className="flex items-center gap-2 text-gold-accent text-xs font-bold mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>Principal Advisory Note</span>
                </div>
                <p className="text-xs text-gray-200 italic leading-relaxed">
                  "Aarav displays exemplary logical reasoning and leadership in STEM research. Recommended for CBSE National Talent Search."
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
