import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PageBanner } from '../components/common/PageBanner';
import { noticesData } from '../data/noticesData';
import { Calendar, ArrowLeft, Download, Share2, Pin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Toast } from '../components/common/Toast';
import { DocumentDownloadCard } from '../components/common/DocumentDownloadCard';
import { ImageReveal } from '../components/common/ImageReveal';

export const NoticeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toastMsg, setToastMsg] = useState(null);

  // Find target notice or fallback to first
  const notice = noticesData.find((n) => n.id === id) || noticesData[0];
  const relatedNotices = noticesData.filter((n) => n.id !== notice.id).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setToastMsg("Notice link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <PageBanner
        title={notice.title}
        subtitle={`Official Campus Circular • ${notice.category}`}
        breadcrumb={['Home', 'Notices', notice.title.slice(0, 25) + '...']}
        bannerImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/notices')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary hover:bg-bg-accent-section text-body text-xs font-bold rounded-xl border border-border-hairline shadow-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-kis-gold" />
            <span>Back to All Circulars</span>
          </button>
        </div>

        {/* Notice Main Article Container */}
        <ImageReveal>
          <div className="bg-bg-secondary rounded-3xl p-8 sm:p-12 shadow-card border border-border-hairline space-y-8">
            
            {/* Header Information */}
            <div className="border-b border-border-hairline pb-6 space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {notice.isPinned && (
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 bg-kis-gold text-kis-navy font-black text-xs rounded-full uppercase tracking-wider shadow-sm">
                      <Pin className="w-3.5 h-3.5 fill-current" />
                      Pinned Announcement
                    </span>
                  )}
                  <span className="px-3.5 py-1 bg-kis-navy text-kis-gold font-black text-xs rounded-full uppercase tracking-wider">
                    {notice.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-full bg-bg-accent-section hover:bg-kis-gold hover:text-kis-navy text-text-body transition-colors shadow-sm"
                    aria-label="Share Notice Link"
                    title="Share Link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-kis-navy font-serif leading-tight">
                {notice.title}
              </h1>

              <div className="flex items-center gap-2 text-xs font-semibold text-navy-muted">
                <Calendar className="w-4 h-4 text-kis-gold" />
                <span>Published Date: {notice.date}</span>
              </div>

            </div>

            {/* Notice Body Content */}
            <div className="prose max-w-none text-body text-base leading-relaxed whitespace-pre-line text-justify font-sans">
              {notice.detailsContent || notice.description}
            </div>

            {/* PDF Attachment Card */}
            {notice.pdfUrl && (
              <div className="pt-4 border-t border-border-hairline">
                <h4 className="text-sm font-bold text-kis-navy uppercase tracking-wider mb-3 font-serif">Official Document Attachment</h4>
                <DocumentDownloadCard
                  title={notice.fileName || "Download Circular PDF"}
                  description="Official CBSE & School Authority Signed Notification PDF"
                  fileSize="PDF Document • 1.6 MB"
                  href={notice.pdfUrl}
                  fileName={notice.fileName || "notice.pdf"}
                />
              </div>
            )}

          </div>
        </ImageReveal>

        {/* Related Circulars Section */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-kis-navy font-serif">Related Announcements</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNotices.map((rel) => (
              <ImageReveal key={rel.id}>
                <div className="bg-bg-secondary rounded-2xl p-6 border border-border-hairline shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-kis-gold/20 text-kis-navy rounded-full">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-kis-navy font-serif mt-2 mb-2 leading-snug">
                      <Link to={`/notices/${rel.id}`} className="hover:text-kis-gold transition-colors">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-navy-muted line-clamp-2">{rel.description}</p>
                  </div>

                  <Link
                    to={`/notices/${rel.id}`}
                    className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-kis-navy hover:text-kis-gold flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ImageReveal>
            ))}
          </div>
        </div>

      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <Toast
          message={toastMsg}
          type="success"
          onClose={() => setToastMsg(null)}
        />
      )}
    </div>
  );
};
