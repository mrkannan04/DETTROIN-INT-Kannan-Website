import React from 'react';
import { NoticeTicker } from '../components/home/NoticeTicker';
import { HeroSlider } from '../components/home/HeroSlider';
import { StatsCounter } from '../components/home/StatsCounter';
import { AboutSection } from '../components/home/AboutSection';
import { FeatureCards } from '../components/home/FeatureCards';
import { StudentShowcase } from '../components/home/StudentShowcase';
import { SchoolDashboardWidget } from '../components/home/SchoolDashboardWidget';
import { CampusVirtualTour } from '../components/home/CampusVirtualTour';
import { LearningDashboardPreview } from '../components/home/LearningDashboardPreview';
import { SustainabilityWidget } from '../components/home/SustainabilityWidget';
import { AchievementsShowcase } from '../components/home/AchievementsShowcase';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-primary text-body">
      {/* 1. Scrolling Marquee Notice Ticker */}
      <NoticeTicker />

      {/* 2. Hero Slider Banner */}
      <HeroSlider />

      {/* 3. Stats Counter Strip */}
      <StatsCounter />

      {/* 4. About Us Section */}
      <AboutSection />

      {/* 5. Feature Cards Grid */}
      <FeatureCards />

      {/* 6. School Info Dashboard Widget */}
      <SchoolDashboardWidget />

      {/* 7. Interactive Virtual Campus Tour */}
      <CampusVirtualTour />

      {/* 8. Adaptive Learning Dashboard Concept */}
      <LearningDashboardPreview />

      {/* 9. Student Showcase */}
      <StudentShowcase />

      {/* 10. Green Campus Sustainability Dashboard */}
      <SustainabilityWidget />

      {/* 9. Achievements & Awards Showcase */}
      <AchievementsShowcase />

      {/* 10. Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 11. Final Call to Action Banner Strip */}
      <section className="bg-kis-navy py-16 text-white relative overflow-hidden border-t-4 border-kis-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-serif">
            Begin Your Child's Journey to Excellence Today
          </h2>
          <p className="text-sm sm:text-base text-kis-gold max-w-2xl mx-auto mb-8 font-medium">
            Admissions open for Academic Session 2026-27 from Nursery to Class XII.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/enroll"
              className="px-8 py-3.5 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black uppercase tracking-wider rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Fill Online Admission Form
            </Link>
            <a
              href="tel:+919837050000"
              className="px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-kis-navy font-extrabold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-kis-gold" />
              <span>Call Admission Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

