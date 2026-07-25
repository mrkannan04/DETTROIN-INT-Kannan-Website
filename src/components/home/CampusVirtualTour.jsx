import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Compass, Sparkles, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { fadeUpReveal, EXPO_OUT_EASING } from '../../utils/premiumMotion';

export const campusHotspots = [
  {
    id: 'library',
    name: 'Central Knowledge Library',
    category: 'Academics & Research',
    position: { top: '35%', left: '28%' },
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop',
    panoramaImg: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop',
    specs: ['15,000+ Books & Periodicals', 'Digital E-Resource Hub', 'Quiet Reading Pods'],
    description: 'A state-of-the-art multi-story library housing over 15,000 volumes, international journals, digital subscriptions, and individual study carrels designed for deep academic focus.'
  },
  {
    id: 'stem',
    name: 'STEM & AI Robotics Center',
    category: 'Innovation & Tech',
    position: { top: '25%', left: '60%' },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    panoramaImg: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    specs: ['AI & 3D Printing Labs', 'Physics & Biotech Labs', 'CBSE Science Kits'],
    description: 'Equipped with cutting-edge 3D printers, IoT kits, and robotics workstation platforms where students build real-world automation solutions under expert mentor guidance.'
  },
  {
    id: 'sports',
    name: 'Sports & Aquatic Complex',
    category: 'Athletics & Fitness',
    position: { top: '65%', left: '72%' },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    panoramaImg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    specs: ['Half-Olympic Swimming Pool', 'Turf Football Field', 'Indoor Badminton Courts'],
    description: 'Extensive sports facilities spanning 2 acres including a temperature-controlled swimming pool, professional cricket turf nets, basketball courts, and indoor martial arts arena.'
  },
  {
    id: 'auditorium',
    name: '400-Seat AC Auditorium',
    category: 'Arts & Performing Arts',
    position: { top: '55%', left: '38%' },
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
    panoramaImg: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1200&auto=format&fit=crop',
    specs: ['Acoustic Sound System', 'DMX Stage Lighting', 'Green Room Suites'],
    description: 'A premium auditorium hosting annual theater productions, international MUN conferences, guest lectures, and cultural extravaganzas.'
  },
  {
    id: 'eco',
    name: 'Botanical Eco Gardens',
    category: 'Sustainability',
    position: { top: '75%', left: '20%' },
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
    panoramaImg: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
    specs: ['Solar Array Zone', 'Organic Herb Garden', 'Rainwater Harvesting Pit'],
    description: 'Lush botanical grounds featuring medicinal flora, solar panel arrays, and rainwater harvesting units where students conduct real-world environmental research.'
  }
];

export const CampusVirtualTour = () => {
  const [selectedSpot, setSelectedSpot] = useState(campusHotspots[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [is360Mode, setIs360Mode] = useState(false);

  const openSpotDetail = (spot) => {
    setSelectedSpot(spot);
    setIsModalOpen(true);
    setIs360Mode(false);
  };

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="Explore Our 5-Acre Eco-Friendly Campus"
          subtitle="Interactive Virtual Campus Tour"
          centered={true}
        />

        {/* Hotspot Location Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {campusHotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => openSpotDetail(spot)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                selectedSpot.id === spot.id
                  ? 'bg-gold-accent text-navy-deep border-gold-accent shadow-md scale-105'
                  : 'bg-bg-secondary text-navy-muted border-border-hairline hover:border-gold-accent hover:text-navy-deep'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-gold-accent" />
              <span>{spot.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Campus Map Container */}
        <motion.div 
          variants={fadeUpReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass-card border border-border-hairline shadow-2xl h-[420px] sm:h-[520px] bg-navy-deep"
        >
          {/* Base Campus Architectural Map Background */}
          <img
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1600&auto=format&fit=crop"
            alt="Krishna International School Campus Map"
            className="w-full h-full object-cover opacity-60 brightness-90 contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-black/30 pointer-events-none" />

          {/* Map Title Overlay Badge */}
          <div className="absolute top-6 left-6 z-20 bg-bg-secondary/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-border-hairline shadow-lg flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-gold-accent animate-spin-slow" />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-accent font-black block">Interactive Map</span>
              <span className="text-xs font-bold text-navy-deep block">Click Hotspots to Tour</span>
            </div>
          </div>

          {/* Interactive Map Hotspot Pins */}
          {campusHotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => openSpotDetail(spot)}
              aria-label={`Open ${spot.name} virtual tour`}
              style={{ top: spot.position.top, left: spot.position.left }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
            >
              {/* Pulsing Outer Ring */}
              <span className="absolute -inset-2 rounded-full bg-gold-accent/40 animate-ping group-hover:bg-gold-accent/60" />
              
              {/* Pin Button */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bg-secondary border-2 border-gold-accent shadow-xl flex items-center justify-center text-navy-deep group-hover:scale-110 group-hover:bg-gold-accent group-hover:text-navy-deep transition-all duration-300">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold-accent group-hover:text-navy-deep transition-colors" />
              </div>

              {/* Tooltip Label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-navy-deep text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl border border-gold-accent/30">
                {spot.name}
              </div>
            </button>
          ))}

          {/* Bottom Callout Banner */}
          <div className="absolute bottom-6 right-6 z-20 bg-bg-secondary/95 backdrop-blur-md p-4 rounded-2xl border border-border-hairline shadow-xl max-w-sm hidden sm:block">
            <div className="flex items-center gap-3">
              <img 
                src={selectedSpot.image} 
                alt={selectedSpot.name}
                className="w-14 h-14 rounded-xl object-cover border border-border-hairline shrink-0" 
              />
              <div className="min-w-0">
                <span className="text-[10px] text-gold-accent font-black uppercase tracking-wider block">{selectedSpot.category}</span>
                <h4 className="text-sm font-bold text-navy-deep truncate">{selectedSpot.name}</h4>
                <button
                  onClick={() => openSpotDetail(selectedSpot)}
                  className="text-xs text-gold-accent font-bold hover:underline inline-flex items-center gap-1 mt-0.5"
                >
                  <span>Take 360° Tour</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Detail Modal Drawer */}
      <AnimatePresence>
        {isModalOpen && selectedSpot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: EXPO_OUT_EASING }}
              className="relative w-full max-w-3xl bg-bg-secondary rounded-3xl overflow-hidden shadow-2xl border border-border-hairline max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-gold-accent text-white hover:text-navy-deep flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header / 360 Preview */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-navy-deep shrink-0">
                <img
                  src={is360Mode ? selectedSpot.panoramaImg : selectedSpot.image}
                  alt={selectedSpot.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${is360Mode ? 'scale-110 contrast-[1.05]' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-black/30" />

                {/* 360 Toggle Button */}
                <button
                  onClick={() => setIs360Mode(!is360Mode)}
                  className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full bg-gold-accent text-navy-deep text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>{is360Mode ? 'View HD Photo' : 'Simulate 360° Panorama'}</span>
                </button>

                {is360Mode && (
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-bold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-gold-accent animate-spin-slow" />
                    <span>360° Interactive Panoramic View</span>
                  </div>
                )}
              </div>

              {/* Modal Content Details */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-accent/15 text-gold-accent text-xs font-black uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    {selectedSpot.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep font-serif">
                    {selectedSpot.name}
                  </h3>
                  <p className="text-sm text-text-body mt-2 leading-relaxed font-normal">
                    {selectedSpot.description}
                  </p>
                </div>

                {/* Key Specifications Grid */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-navy-muted mb-3">Facility Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedSpot.specs.map((spec, i) => (
                      <div key={i} className="p-3 rounded-xl bg-bg-accent-section border border-border-hairline flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-accent shrink-0" />
                        <span className="text-xs font-bold text-navy-deep">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
