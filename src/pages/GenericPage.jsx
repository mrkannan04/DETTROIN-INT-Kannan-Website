import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageBanner } from '../components/common/PageBanner';
import { pagesData } from '../data/pagesData';
import { CheckCircle2, FileText, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';
import { DocumentDownloadCard } from '../components/common/DocumentDownloadCard';

export const GenericPage = () => {
  const { pathname } = useLocation();
  
  // Find page config from dictionary or construct fallback
  const page = pagesData[pathname] || {
    title: pathname.split('/').pop().replace(/-/g, ' ').toUpperCase(),
    subtitle: 'Krishna International School, Aligarh',
    breadcrumb: ['Home', 'Pages', pathname.split('/').pop()],
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop',
    content: [
      {
        type: 'heading',
        text: 'Overview & Details'
      },
      {
        type: 'paragraph',
        text: 'Krishna International School is committed to offering a world-class academic environment, nurturing intellectual curiosity and moral leadership in every student.'
      }
    ]
  };

  // Determine downloadable document based on pathname
  const getPdfDoc = () => {
    if (pathname.includes('fee-structure')) {
      return {
        title: "Official Fee Structure 2026-27 (PDF)",
        description: "Comprehensive class-wise tuition fee breakdown and transport charges.",
        fileSize: "PDF Document • 1.2 MB",
        href: "/docs/fee-structure.pdf",
        fileName: "KIS_Fee_Structure_2026.pdf"
      };
    }
    if (pathname.includes('mandatory-disclosure')) {
      return {
        title: "CBSE Mandatory Public Disclosure 2026 (PDF)",
        description: "Official CBSE affiliation certificates, NOC, society registration, and safety disclosures.",
        fileSize: "PDF Document • 2.4 MB",
        href: "/docs/mandatory-disclosure.pdf",
        fileName: "CBSE_Mandatory_Disclosure.pdf"
      };
    }
    if (pathname.includes('admission')) {
      return {
        title: "School Admission Prospectus & Brochure (PDF)",
        description: "Complete guide to admission procedures, eligibility criteria, and campus facilities.",
        fileSize: "PDF Document • 3.1 MB",
        href: "/docs/admission-brochure.pdf",
        fileName: "KIS_Admission_Brochure_2026.pdf"
      };
    }
    return {
      title: "Official School Prospectus (PDF)",
      description: "Download the complete prospectus and guidelines for Academic Session 2026-27.",
      fileSize: "PDF Document • 1.8 MB",
      href: "/docs/prospectus.pdf",
      fileName: "KIS_Prospectus_2026.pdf"
    };
  };

  const pdfDoc = getPdfDoc();

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      {/* Page Banner */}
      <PageBanner
        title={page.title}
        subtitle={page.subtitle}
        breadcrumb={page.breadcrumb}
        bannerImage={page.bannerImage}
      />

      {/* Page Body Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Leadership Profile Box if available */}
        {page.profile && (
          <ImageReveal>
            <div className="mb-12 bg-bg-secondary rounded-2xl p-6 sm:p-8 shadow-card border border-border-hairline flex flex-col md:flex-row items-center gap-8">
              <img
                src={page.profile.image}
                alt={page.profile.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-kis-gold shadow-md shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-kis-navy font-serif">{page.profile.name}</h3>
                <p className="text-sm font-black text-kis-gold uppercase tracking-wider mb-2">{page.profile.role}</p>
                <p className="text-xs text-navy-muted font-semibold">Krishna International School, Aligarh</p>
              </div>
            </div>
          </ImageReveal>
        )}

        {/* Dynamic Blocks Renderer */}
        <div className="space-y-8">
          {page.content.map((block, idx) => {
            switch (block.type) {
              case 'heading':
                return (
                  <div key={idx} className="border-b-2 border-kis-gold/40 pb-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-kis-navy tracking-tight font-serif">
                      {block.text}
                    </h2>
                  </div>
                );

              case 'paragraph':
                return (
                  <p key={idx} className="text-body text-base md:text-lg leading-relaxed text-justify">
                    {block.text}
                  </p>
                );

              case 'quote':
                return (
                  <blockquote key={idx} className="p-6 sm:p-8 bg-kis-navy text-white rounded-2xl border-l-8 border-kis-gold italic text-lg font-serif shadow-md leading-relaxed">
                    {block.text}
                  </blockquote>
                );

              case 'features':
                return (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                    {block.items.map((item, fIdx) => (
                      <div key={fIdx} className="bg-bg-secondary p-6 rounded-xl border border-border-hairline shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-kis-gold shrink-0" />
                          <h4 className="font-bold text-lg text-kis-navy font-serif">{item.title}</h4>
                        </div>
                        <p className="text-sm text-text-body pl-8 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                );

              case 'grid':
                return (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                    {block.items.map((item, gIdx) => (
                      <div key={gIdx} className="bg-bg-secondary p-6 rounded-xl border-t-4 border-kis-gold border-x border-b border-border-hairline shadow-sm">
                        <h4 className="font-bold text-lg text-kis-navy mb-2 font-serif">{item.title}</h4>
                        <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                );

              case 'steps':
                return (
                  <div key={idx} className="space-y-4 my-8">
                    {block.items.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-4 p-5 bg-bg-secondary rounded-xl border border-border-hairline shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-kis-navy text-kis-gold font-black flex items-center justify-center text-sm shrink-0 border border-kis-gold">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-kis-navy">{step.title}</h4>
                          <p className="text-sm text-text-body mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );

              case 'table':
                return (
                  <div key={idx} className="overflow-x-auto rounded-xl border border-border-hairline shadow-sm my-8">
                    <table className="w-full text-left text-sm text-body">
                      <thead className="bg-kis-navy text-kis-gold uppercase text-xs font-black tracking-wider">
                        <tr>
                          {block.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-4 px-6">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-bg-secondary font-medium">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-bg-accent-section transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-4 px-6">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              case 'cta-box':
                return (
                  <div key={idx} className="bg-kis-navy p-8 rounded-2xl text-white text-center shadow-lg border-2 border-kis-gold/40 my-8">
                    <h3 className="text-2xl font-bold text-kis-gold mb-2 font-serif">{block.title}</h3>
                    <p className="text-sm text-gray-200 mb-6">{block.desc}</p>
                    {block.btnUrl?.startsWith('/') ? (
                      <Link
                        to={block.btnUrl}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-kis-gold text-kis-navy font-black rounded-full uppercase tracking-wider shadow hover:bg-kis-gold-hover hover:scale-105 transition-all"
                      >
                        <span>{block.btnText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        to="/enroll"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-kis-gold text-kis-navy font-black rounded-full uppercase tracking-wider shadow hover:bg-kis-gold-hover hover:scale-105 transition-all"
                      >
                        <span>{block.btnText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Downloadable PDF Document Card */}
        <div className="mt-12">
          <DocumentDownloadCard
            title={pdfDoc.title}
            description={pdfDoc.description}
            fileSize={pdfDoc.fileSize}
            href={pdfDoc.href}
            fileName={pdfDoc.fileName}
          />
        </div>

      </div>
    </div>
  );
};


