import React, { useState, useEffect } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { galleryCategories, galleryItems } from '../data/gallery';
import { X, ZoomIn, Search, ChevronLeft, ChevronRight, Filter, Sparkles, Image as ImageIcon } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';
import { FilterTabs } from '../components/common/FilterTabs';

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter items dynamically by Category and Search Query
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'Kids Activities' && item.category === 'Kids Corner');

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Calculate category counts
  const getCategoryCount = (cat) => {
    if (cat === 'All') return galleryItems.length;
    return galleryItems.filter(
      (item) =>
        item.category.toLowerCase() === cat.toLowerCase() ||
        (cat === 'Kids Activities' && item.category === 'Kids Corner')
    ).length;
  };

  const galleryTabs = galleryCategories.map(cat => ({
    id: cat,
    label: cat,
    count: getCategoryCount(cat)
  }));

  // Keyboard navigation for Lightbox (Left / Right / Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrevImage = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setIsZoomed(false);
  };

  const handleNextImage = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    setIsZoomed(false);
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <PageBanner
        title="Campus Life & Photo Gallery"
        subtitle="Memories, Celebrations, Academic Labs & Athletic Triumphs at KIS"
        breadcrumb={['Home', 'Gallery']}
        bannerImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Filter & Search Toolbar Bar */}
      <div className="sticky top-[60px] sm:top-[70px] z-30 bg-bg-primary/95 backdrop-blur-md py-4 border-b border-border-hairline shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Top Search Input & Info Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-navy-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(8);
                }}
                placeholder="Search photos, labs, events..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-bg-secondary border border-border-hairline text-xs font-medium text-navy-deep focus:outline-none focus:border-gold-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-navy-muted hover:text-navy-deep font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            <span className="text-xs font-bold text-navy-muted">
              Showing <span className="text-gold-accent font-black">{filteredItems.length}</span> photos
            </span>
          </div>

          {/* Category Tabs Pill Bar */}
          <FilterTabs
            tabs={galleryTabs}
            activeTab={selectedCategory}
            onTabChange={(catId) => {
              setSelectedCategory(catId);
              setVisibleCount(8);
            }}
            containerClassName="justify-start sm:justify-center"
          />

        </div>
      </div>

      {/* Main Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-bg-secondary rounded-3xl border border-border-hairline p-8 space-y-4">
            <ImageIcon className="w-12 h-12 text-gold-accent mx-auto" />
            <h3 className="text-xl font-bold text-navy-deep font-serif">No Photos Found</h3>
            <p className="text-xs text-navy-muted max-w-sm mx-auto">
              No gallery items match your search criteria "{searchQuery}". Try selecting another category or clearing your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-gold-accent text-navy-deep text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.slice(0, visibleCount).map((item, idx) => (
                <ImageReveal key={item.id}>
                  <div
                    onClick={() => {
                      const itemIdx = filteredItems.findIndex((i) => i.id === item.id);
                      setLightboxIndex(itemIdx !== -1 ? itemIdx : idx);
                      setIsZoomed(false);
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open image ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        const itemIdx = filteredItems.findIndex((i) => i.id === item.id);
                        setLightboxIndex(itemIdx !== -1 ? itemIdx : idx);
                      }
                    }}
                    className="group relative h-64 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-border-hairline bg-navy-deep transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold-accent"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Card Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                      <div className="w-10 h-10 rounded-full bg-gold-accent text-navy-deep flex items-center justify-center mb-3 self-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-tight leading-snug">{item.title}</h4>
                      <p className="text-xs text-gold-accent font-bold mt-1 uppercase tracking-wider">{item.category}</p>
                    </div>
                  </div>
                </ImageReveal>
              ))}
            </div>

            {/* Load More Pagination Button */}
            {visibleCount < filteredItems.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="px-8 py-3.5 rounded-full bg-gold-accent hover:bg-gold-accent/90 text-navy-deep font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  Load More Photos ({filteredItems.length - visibleCount} Remaining)
                </button>
              </div>
            )}
          </>
        )}

      </div>

      {/* Lightbox Modal with Next / Prev / Zoom / Keyboard Nav */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-gold-accent text-white hover:text-navy-deep transition-all duration-200"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-gold-accent text-white hover:text-navy-deep backdrop-blur-md transition-all duration-200 hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-gold-accent text-white hover:text-navy-deep backdrop-blur-md transition-all duration-200 hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Box */}
          <div className="max-w-4xl w-full bg-bg-secondary border-2 border-gold-accent/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            
            {/* Image Container with Zoom Toggle */}
            <div 
              onClick={() => setIsZoomed(!isZoomed)}
              className="relative flex-grow overflow-hidden bg-navy-deep cursor-zoom-in flex items-center justify-center min-h-[320px] max-h-[60vh]"
            >
              <img
                src={currentLightboxItem.url}
                alt={currentLightboxItem.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop";
                }}
                className={`w-full h-full object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
              <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-6 text-center bg-bg-secondary border-t border-border-hairline shrink-0">
              <span className="inline-block px-3 py-1 bg-gold-accent/20 text-gold-accent text-xs font-black uppercase tracking-wider rounded-full mb-2 border border-gold-accent/30">
                {currentLightboxItem.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-deep font-serif">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-body mt-1 font-normal max-w-xl mx-auto">
                {currentLightboxItem.caption}
              </p>
            </div>

          </div>

        </div>
      )}
    </div>
  );
};
