import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, UserCheck, Award, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { ImageReveal } from '../common/ImageReveal';

export const SchoolDashboardWidget = () => {
  const [activeTab, setActiveTab] = useState('teachers');

  const teachers = [
    {
      name: 'Mrs. Sunita Sharma',
      role: 'Class Teacher • Grade V-A',
      subject: 'Mathematics & Science',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      experience: '12 Years Experience'
    },
    {
      name: 'Mr. Rajesh Verma',
      role: 'Class Teacher • Grade IX-B',
      subject: 'Physics & Robotics',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      experience: '10 Years Experience'
    },
    {
      name: 'Mrs. Anjali Gupta',
      role: 'Class Teacher • Grade I-C',
      subject: 'English & Primary Arts',
      image: 'https://images.unsplash.com/photo-1580894732413-a70d2a840e6c?q=80&w=400&auto=format&fit=crop',
      experience: '8 Years Experience'
    },
    {
      name: 'Mr. Vikram Singh',
      role: 'Class Teacher • Grade XI Science',
      subject: 'Chemistry & Lab Incharge',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      experience: '14 Years Experience'
    }
  ];

  const notices = [
    { title: 'CBSE Board Examination Date Sheet 2026 Released', date: 'Aug 05, 2026', tag: 'Academic' },
    { title: 'Annual Inter-House Debate Competition Final Round', date: 'Aug 12, 2026', tag: 'Co-Curricular' },
    { title: 'Independence Day Flag Hoisting & Cultural Event', date: 'Aug 15, 2026', tag: 'Celebration' },
    { title: 'Second Term Tuition Fee Submission Deadline', date: 'Aug 25, 2026', tag: 'Notice' }
  ];

  return (
    <section className="py-16 bg-bg-accent-section transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kis-gold/15 text-kis-navy text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-kis-gold" />
            <span>School Info Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-kis-navy font-serif">
            Faculty Spotlight & Live School Updates
          </h2>
          <p className="text-text-body mt-2 font-medium">
            Explore our experienced educators and upcoming campus events at Krishna International School.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Principal Spotlight Card */}
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="bg-bg-secondary rounded-3xl p-6 sm:p-8 shadow-card border border-border-hairline relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-kis-gold/10 rounded-full blur-2xl -mr-10 -mt-10" />

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                      alt="Principal"
                      className="w-32 h-32 rounded-full object-cover border-4 border-kis-gold shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 bg-kis-navy text-kis-gold p-2 rounded-full shadow border border-kis-gold">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="px-3 py-1 bg-kis-navy text-white text-xs font-black uppercase tracking-wider rounded-full mb-2">
                    Principal's Desk
                  </span>
                  <h3 className="text-2xl font-bold text-kis-navy font-serif">Dr. R. K. Sharma</h3>
                  <p className="text-xs text-kis-gold font-black uppercase tracking-wider mb-4">M.Sc., Ph.D., B.Ed. • Principal</p>

                  <blockquote className="text-sm text-text-body italic leading-relaxed bg-bg-accent-section p-4 rounded-2xl border-l-4 border-kis-gold mb-6 text-justify">
                    "Education is not merely the accumulation of facts, but the training of the mind to think independently and lead with integrity."
                  </blockquote>

                  <Link
                    to="/about/principals-message"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold text-xs font-black uppercase tracking-wider rounded-full shadow hover:scale-105 transition-all"
                  >
                    <span>Read Full Message</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Class Teachers Spotlight & Notice Board */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Controls */}
            <div className="flex items-center gap-3 bg-bg-secondary p-2 rounded-2xl border border-border-hairline shadow-sm">
              <button
                onClick={() => setActiveTab('teachers')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'teachers'
                    ? 'bg-kis-navy text-kis-gold shadow-md'
                    : 'text-text-body hover:bg-bg-accent-section'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Class Facilitators</span>
              </button>
              
              <button
                onClick={() => setActiveTab('notices')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'notices'
                    ? 'bg-kis-navy text-kis-gold shadow-md'
                    : 'text-text-body hover:bg-bg-accent-section'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Campus Notice Board</span>
              </button>
            </div>

            {/* Content Views */}
            {activeTab === 'teachers' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teachers.map((t, idx) => (
                  <ImageReveal key={idx}>
                    <div className="bg-bg-secondary rounded-2xl p-5 border border-border-hairline shadow-sm hover:shadow-card-hover transition-all flex items-center gap-4 group">
                      <img
                        src={t.image}
                        alt={t.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop";
                        }}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-kis-gold shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <h4 className="text-base font-bold text-kis-navy font-serif">{t.name}</h4>
                        <p className="text-xs text-kis-gold font-extrabold">{t.role}</p>
                        <p className="text-xs text-navy-muted mt-1">{t.subject}</p>
                        <span className="inline-block px-2 py-0.5 bg-bg-accent-section text-text-body text-[10px] font-bold rounded mt-1">
                          {t.experience}
                        </span>
                      </div>
                    </div>
                  </ImageReveal>
                ))}
              </div>
            ) : (
              <div className="bg-bg-secondary rounded-2xl p-6 border border-border-hairline shadow-sm space-y-4">
                {notices.map((n, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 bg-kis-gold/20 text-kis-navy text-[10px] font-black uppercase rounded-full">
                        {n.tag}
                      </span>
                      <h4 className="text-sm font-bold text-kis-navy leading-snug">{n.title}</h4>
                    </div>
                    <span className="text-xs font-bold text-navy-muted whitespace-nowrap shrink-0">{n.date}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
