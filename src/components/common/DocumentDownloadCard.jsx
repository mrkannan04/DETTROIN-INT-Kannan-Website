import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, Eye } from 'lucide-react';
import { ProspectusModal } from './ProspectusModal';

export const DocumentDownloadCard = ({
  title = "Official School Prospectus (PDF)",
  description = "Download or view the official prospectus & guidelines for Academic Session 2026-27.",
  fileSize = "PDF Document • 1.8 MB",
  href = "/docs/prospectus.pdf",
  fileName = "KIS_Prospectus_2026.pdf"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-6 my-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0 shadow-inner">
            <FileText className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-base font-bold text-kis-navy font-serif">{title}</h4>
            <p className="text-xs text-slate-600 mt-0.5 font-medium">{description}</p>
            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              {fileSize}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow hover:scale-105"
          >
            <Eye className="w-4 h-4" />
            <span>View Prospectus</span>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 bg-kis-navy hover:bg-kis-navy-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow hover:scale-105"
          >
            <Download className="w-4 h-4 text-kis-gold" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Prospectus Modal Overlay */}
      <ProspectusModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

