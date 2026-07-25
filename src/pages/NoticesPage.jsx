import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/common/PageBanner';
import { noticesData } from '../data/noticesData';
import { Search, Calendar, FileText, Download, ArrowRight, Pin, Sparkles, Filter } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';
import { ProspectusModal } from '../components/common/ProspectusModal';

export const NoticesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNoticeDoc, setSelectedNoticeDoc] = useState(null);

  const categories = ['All', 'Academic', 'Admission', 'Exam', 'Events', 'Sports', 'Holiday'];

  const filteredNotices = noticesData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <PageBanner
        title="Official Campus Notice Board"
        subtitle="Stay Updated with Academic Announcements, Circulars & Examination Schedules"
        breadcrumb={['Home', 'Notices']}
        bannerImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Category Filter Control Bar */}
        <div className="bg-bg-secondary rounded-3xl p-6 shadow-card border border-border-hairline mb-10 space-y-6">
          
          {/* Top Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars, exam dates, admission notices..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border-hairline focus:ring-2 focus:ring-kis-gold text-sm outline-none font-medium text-navy-deep"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-body"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <Filter className="w-4 h-4 text-kis-gold shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[40px] px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 flex items-center justify-center ${
                  selectedCategory === cat
                    ? 'bg-kis-navy text-kis-gold shadow-md border-2 border-kis-navy'
                    : 'bg-bg-accent-section text-text-body hover:bg-slate-200 border border-border-hairline'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Notices Cards Grid */}
        {filteredNotices.length > 0 ? (
          <div className="space-y-6">
            {filteredNotices.map((notice) => (
              <ImageReveal key={notice.id}>
                <div className={`bg-bg-secondary rounded-3xl p-6 sm:p-8 shadow-card border transition-all duration-300 hover:-translate-y-0.5 ${
                  notice.isPinned ? 'border-gold-accent border-2 bg-gold-accent/5' : 'border-border-hairline'
                }`}>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    
                    <div className="space-y-3 max-w-3xl">
                      {/* Tags & Date */}
                      <div className="flex flex-wrap items-center gap-3">
                        {notice.isPinned && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-accent text-white font-black text-xs rounded-full uppercase tracking-wider shadow-sm">
                            <Pin className="w-3.5 h-3.5 fill-current" />
                            Pinned Circular
                          </span>
                        )}
                        
                        <span className="px-3 py-1 bg-gold-accent/15 text-gold-accent font-black text-xs rounded-full uppercase tracking-wider">
                          {notice.category}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                          <span>{notice.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-deep font-serif leading-snug">
                        <Link to={`/notices/${notice.id}`} className="hover:text-gold-accent transition-colors">
                          {notice.title}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-text-body leading-relaxed">
                        {notice.description}
                      </p>
                    </div>

                    {/* Right CTA Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                      {notice.pdfUrl && (
                        <button
                          onClick={() => setSelectedNoticeDoc({
                            title: notice.title + " (Official Circular PDF)",
                            description: notice.description,
                            fileSize: "PDF Circular • Verified",
                            fileName: notice.fileName || "Notice_Circular.pdf"
                          })}
                          className="px-5 py-3 bg-bg-accent-section hover:bg-gold-accent text-navy-deep hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 border border-border-hairline group cursor-pointer"
                        >
                          <Download className="w-4 h-4 text-gold-accent group-hover:text-white transition-colors" />
                          <span>PDF Circular</span>
                        </button>
                      )}

                      <Link
                        to={`/notices/${notice.id}`}
                        className="px-6 py-3 bg-gold-accent hover:opacity-90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <span>Read Circular</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>

                </div>
              </ImageReveal>
            ))}
          </div>
        ) : (
          <div className="bg-bg-secondary rounded-3xl p-12 text-center border border-border-hairline shadow-sm space-y-4">
            <FileText className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold text-kis-navy font-serif">No Notices Found</h3>
            <p className="text-sm text-navy-muted">No circulars match your search filter "{searchQuery}". Try selecting a different category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 bg-kis-navy text-kis-gold font-bold text-xs uppercase rounded-full shadow"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Notice Circular PDF Modal Overlay */}
      {selectedNoticeDoc && (
        <ProspectusModal
          isOpen={!!selectedNoticeDoc}
          onClose={() => setSelectedNoticeDoc(null)}
          autoPrint={true}
          docInfo={selectedNoticeDoc}
        />
      )}
    </div>
  );
};
