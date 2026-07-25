import React, { useState } from 'react';
import { MapPin, X, Info, Sparkles } from 'lucide-react';
import { ImageReveal } from '../common/ImageReveal';

export const CampusHotspotTour = () => {
  const hotspots = [
    {
      id: 'lab',
      title: 'Robotics & AI Innovation Lab',
      top: '32%',
      left: '28%',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop',
      description: 'Equipped with 3D printers, IoT kits, and humanoid robotics modules for hands-on STEM learning.'
    },
    {
      id: 'library',
      title: 'Central Digital Library',
      top: '48%',
      left: '52%',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop',
      description: 'Houses 15,000+ physical titles and e-book subscriptions with quiet reading pods.'
    },
    {
      id: 'sports',
      title: 'Multipurpose Sports Complex',
      top: '65%',
      left: '75%',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop',
      description: 'Basketball courts, lawn tennis, badminton arenas, and outdoor cricket pitch.'
    },
    {
      id: 'auditorium',
      title: 'Grand Performing Auditorium',
      top: '25%',
      left: '70%',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
      description: '500-seater air-conditioned auditorium for theatrical productions, debates, and concerts.'
    }
  ];

  const [activeSpot, setActiveSpot] = useState(hotspots[0]);

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 bg-kis-gold/15 text-kis-navy font-black text-xs uppercase tracking-wider rounded-full">
            Virtual Campus Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-kis-navy mt-2 font-serif">
            Interactive Campus Hotspot Tour
          </h2>
          <p className="text-slate-600 mt-2 font-medium">
            Click on any hotspot pin on our 5-acre campus map to explore facilities.
          </p>
        </div>

        <ImageReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F9FC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
            
            {/* Campus Map Hotspots View */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-slate-300 bg-kis-navy">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Campus Map Aerial View"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kis-navy/80 via-transparent to-black/30" />

              {/* Hotspot Pins */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  style={{ top: spot.top, left: spot.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all duration-300 group ${
                    activeSpot.id === spot.id
                      ? 'bg-kis-gold text-kis-navy scale-125 z-20 shadow-lg ring-4 ring-white'
                      : 'bg-kis-navy text-white hover:bg-kis-gold hover:text-kis-navy z-10'
                  }`}
                  aria-label={`Hotspot ${spot.title}`}
                >
                  <MapPin className="w-5 h-5 fill-current" />
                  
                  {/* Tooltip on hover */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 bg-kis-navy text-white text-[11px] font-bold rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {spot.title}
                  </span>
                </button>
              ))}

              <div className="absolute bottom-4 left-4 bg-kis-navy/90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/20 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-kis-gold" />
                <span>Click pins to view facilities</span>
              </div>
            </div>

            {/* Hotspot Detail Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <img
                src={activeSpot.image}
                alt={activeSpot.title}
                className="w-full h-48 rounded-xl object-cover border border-slate-200 shadow-sm"
              />

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-kis-gold/20 text-kis-navy rounded-full">
                  Featured Facility
                </span>
                <h3 className="text-xl font-bold text-kis-navy font-serif mt-2 mb-1">
                  {activeSpot.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeSpot.description}
                </p>
              </div>
            </div>

          </div>
        </ImageReveal>

      </div>
    </section>
  );
};
