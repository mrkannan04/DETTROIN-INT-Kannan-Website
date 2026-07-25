import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { eventsData } from '../data/events';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';

export const EventsPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = eventsData.filter((evt) => {
    if (filter === 'all') return true;
    return evt.type === filter;
  });

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <PageBanner
        title="School Events & Celebrations"
        subtitle="Vibrant Campus Life & Milestone Activities"
        breadcrumb={['Home', 'School Events']}
        bannerImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Enlarged Sticky Filter Bar */}
      <div className="sticky top-[60px] sm:top-[70px] z-30 bg-[#F7F9FC]/95 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar justify-start sm:justify-center py-1">
            <button
              onClick={() => setFilter('all')}
              className={`min-h-[44px] px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all shrink-0 flex items-center justify-center ${
                filter === 'all'
                  ? 'bg-kis-navy text-kis-gold shadow-md border-2 border-kis-navy'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              All Events ({eventsData.length})
            </button>

            <button
              onClick={() => setFilter('upcoming')}
              className={`min-h-[44px] px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all shrink-0 flex items-center justify-center ${
                filter === 'upcoming'
                  ? 'bg-kis-navy text-kis-gold shadow-md border-2 border-kis-navy'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Upcoming Events
            </button>

            <button
              onClick={() => setFilter('recent')}
              className={`min-h-[44px] px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all shrink-0 flex items-center justify-center ${
                filter === 'recent'
                  ? 'bg-kis-navy text-kis-gold shadow-md border-2 border-kis-navy'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Recent Events
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <ImageReveal key={evt.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                {/* Event Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-kis-navy/90 backdrop-blur-sm text-kis-gold text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider border border-kis-gold">
                    {evt.category}
                  </div>
                  <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    evt.type === 'upcoming' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200'
                  }`}>
                    {evt.type}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-kis-navy tracking-tight mb-3 group-hover:text-kis-gold transition-colors line-clamp-2 font-serif">
                    {evt.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">
                    {evt.description}
                  </p>

                  {/* Event Metadata Footer */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-kis-gold shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-kis-gold shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-kis-gold shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>

                </div>
              </div>
            </ImageReveal>
          ))}
        </div>

      </div>
    </div>
  );
};

