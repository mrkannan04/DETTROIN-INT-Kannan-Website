import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { galleryCategories, galleryItems } from '../data/gallery';
import { X, ZoomIn } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <PageBanner
        title="Photo Gallery"
        subtitle="Capturing Moments of Learning, Joy & Achievement"
        breadcrumb={['Home', 'Gallery']}
        bannerImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Enlarged Sticky Filter Bar */}
      <div className="sticky top-[60px] sm:top-[70px] z-30 bg-[#F7F9FC]/95 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar justify-start sm:justify-center py-1">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[44px] px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all shrink-0 flex items-center justify-center ${
                  selectedCategory === cat
                    ? 'bg-kis-navy text-kis-gold shadow-md border-2 border-kis-navy'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ImageReveal key={item.id}>
              <div
                onClick={() => setLightboxImage(item)}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-slate-200 bg-kis-navy transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-kis-gold text-kis-navy flex items-center justify-center mb-3 self-center shadow-lg">
                    <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-xs text-kis-gold font-bold mt-0.5 uppercase tracking-wider">{item.category}</p>
                </div>
              </div>
            </ImageReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-kis-gold text-white hover:text-kis-navy transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-white border-2 border-kis-gold rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="w-full max-h-[70vh] object-contain bg-slate-900"
            />
            <div className="p-6 text-kis-navy text-center bg-white">
              <span className="inline-block px-3.5 py-1 bg-kis-gold text-kis-navy text-xs font-black uppercase rounded-full mb-2 shadow-sm">
                {lightboxImage.category}
              </span>
              <h3 className="text-xl font-bold text-kis-navy font-serif">{lightboxImage.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

