import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { Search, FileText, Download, ShieldCheck, CheckCircle2, Lock, KeyRound, Award, User, Calendar, Sparkles, RefreshCw, Printer } from 'lucide-react';
import { ImageReveal } from '../components/common/ImageReveal';
import { ProspectusModal } from '../components/common/ProspectusModal';

export const TransferCertificatePage = () => {
  const [academicYear, setAcademicYear] = useState('2025-26');
  const [selectedClass, setSelectedClass] = useState('Class X');
  const [selectedSection, setSelectedSection] = useState('Section A');
  const [studentName, setStudentName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [tcData, setTcData] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sample student database for demo verification
  const demoStudents = [
    {
      name: 'Aarav Sharma',
      fatherName: 'Rajesh Sharma',
      motherName: 'Sunita Sharma',
      year: '2025-26',
      classGrade: 'Class X',
      section: 'Section A',
      admissionNo: 'KIS-2025-084',
      tcNo: 'KIS/TC/2026/0491',
      dob: '14-08-2010',
      doa: '05-04-2016',
      dateOfIssue: '24-03-2026',
      reason: 'Passed Class X Examination (Higher Studies)',
      conduct: 'Exemplary',
      pass: 'DEMO123'
    },
    {
      name: 'Ananya Gupta',
      fatherName: 'Alok Gupta',
      motherName: 'Meenakshi Gupta',
      year: '2024-25',
      classGrade: 'Class XII',
      section: 'Section B',
      admissionNo: 'KIS-2024-112',
      tcNo: 'KIS/TC/2025/0388',
      dob: '22-11-2007',
      doa: '02-04-2014',
      dateOfIssue: '28-05-2025',
      reason: 'Passed Class XII Board Exam (University Admission)',
      conduct: 'Excellent',
      pass: 'DEMO123'
    },
    {
      name: 'Rohan Verma',
      fatherName: 'Sanjay Verma',
      motherName: 'Priya Verma',
      year: '2023-24',
      classGrade: 'Class VIII',
      section: 'Section C',
      admissionNo: 'KIS-2023-045',
      tcNo: 'KIS/TC/2024/0219',
      dob: '03-02-2012',
      doa: '10-04-2018',
      dateOfIssue: '30-03-2024',
      reason: 'Parents Relocation / Transfer to Delhi NCR',
      conduct: 'Very Good',
      pass: 'DEMO123'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      // Match query or fallback to matching demo student
      const matched = demoStudents.find(
        (s) =>
          s.year === academicYear &&
          s.classGrade === selectedClass &&
          s.section === selectedSection &&
          (studentName.trim() === '' || s.name.toLowerCase().includes(studentName.toLowerCase()))
      ) || {
        name: studentName || 'Aarav Sharma',
        fatherName: 'Rajesh Sharma',
        motherName: 'Sunita Sharma',
        year: academicYear,
        classGrade: selectedClass,
        section: selectedSection,
        admissionNo: `KIS-${academicYear.split('-')[0]}-084`,
        tcNo: `KIS/TC/${academicYear.split('-')[0]}/0512`,
        dob: '14-08-2010',
        doa: '05-04-2016',
        dateOfIssue: '25-03-2026',
        reason: 'Passed Annual Examination & Promoted',
        conduct: 'Exemplary',
        pass: password || 'DEMO123'
      };

      setTcData(matched);
    }, 600);
  };

  const handleQuickFill = (sample) => {
    setAcademicYear(sample.year);
    setSelectedClass(sample.classGrade);
    setSelectedSection(sample.section);
    setStudentName(sample.name);
    setPassword(sample.pass);
    setTcData(sample);
  };

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <PageBanner
        title="Transfer Certificate (TC) Portal"
        subtitle="Search, Verify & Download Official Student Transfer Certificates Online"
        breadcrumb={['Home', 'Admission', 'Transfer Certificate']}
        bannerImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Top Feature Highlights Box */}
        <div className="bg-bg-secondary rounded-3xl p-6 sm:p-8 shadow-card border border-border-hairline flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gold-accent/15 text-gold-accent flex items-center justify-center shrink-0 border border-gold-accent/30 shadow-inner">
              <ShieldCheck className="w-7 h-7 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-deep font-serif">CBSE Digital TC Verification Module</h2>
              <p className="text-xs sm:text-sm text-text-body mt-0.5 font-medium">
                As per CBSE guidelines, all Transfer Certificates issued by KIS are digitized with unique QR & verification codes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 bg-emerald-500/15 text-emerald-600 font-extrabold text-xs rounded-full uppercase tracking-wider border border-emerald-500/30">
              CBSE Compliant
            </span>
          </div>
        </div>

        {/* Search & Verification Form Card */}
        <ImageReveal>
          <div className="bg-bg-secondary rounded-3xl p-6 sm:p-10 shadow-2xl border border-border-hairline space-y-8">
            <div className="border-b border-border-hairline pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-navy-deep font-serif flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-gold-accent" />
                  <span>Student TC Search & Authentication</span>
                </h3>
                <p className="text-xs text-navy-muted mt-1">Select academic session, class, section, student name, and password to verify.</p>
              </div>

              {/* Demo Fill Pill Buttons */}
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase font-black text-gold-accent self-center mr-1">Demo Quick-Fill:</span>
                {demoStudents.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickFill(s)}
                    className="px-3 py-1 rounded-full bg-bg-accent-section hover:bg-gold-accent hover:text-white border border-border-hairline text-[11px] font-bold text-navy-deep transition-all shadow-sm cursor-pointer"
                  >
                    {s.name} ({s.classGrade})
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Field 1: Academic Year */}
              <div>
                <label className="block text-xs font-extrabold text-navy-deep uppercase mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Academic Session Year *</span>
                </label>
                <select
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-hairline bg-bg-primary text-navy-deep font-medium text-sm focus:ring-2 focus:ring-gold-accent outline-none"
                >
                  <option value="2025-26">2025 - 2026 Session</option>
                  <option value="2024-25">2024 - 2025 Session</option>
                  <option value="2023-24">2023 - 2024 Session</option>
                  <option value="2022-23">2022 - 2023 Session</option>
                </select>
              </div>

              {/* Field 2: Class Grade */}
              <div>
                <label className="block text-xs font-extrabold text-navy-deep uppercase mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Select Class *</span>
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-hairline bg-bg-primary text-navy-deep font-medium text-sm focus:ring-2 focus:ring-gold-accent outline-none"
                >
                  <option value="Class X">Class X (Secondary)</option>
                  <option value="Class XII">Class XII (Senior Secondary)</option>
                  <option value="Class IX">Class IX</option>
                  <option value="Class VIII">Class VIII</option>
                  <option value="Class V">Class V</option>
                </select>
              </div>

              {/* Field 3: Section */}
              <div>
                <label className="block text-xs font-extrabold text-navy-deep uppercase mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Select Section *</span>
                </label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-hairline bg-bg-primary text-navy-deep font-medium text-sm focus:ring-2 focus:ring-gold-accent outline-none"
                >
                  <option value="Section A">Section A</option>
                  <option value="Section B">Section B</option>
                  <option value="Section C">Section C</option>
                </select>
              </div>

              {/* Field 4: Student Name / Roll ID */}
              <div>
                <label className="block text-xs font-extrabold text-navy-deep uppercase mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Student Full Name / Admission ID *</span>
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Aarav Sharma or KIS-2025-084"
                  className="w-full px-4 py-3 rounded-xl border border-border-hairline bg-bg-primary text-navy-deep font-medium text-sm focus:ring-2 focus:ring-gold-accent outline-none"
                />
              </div>

              {/* Field 5: Security Password */}
              <div className="relative">
                <label className="block text-xs font-extrabold text-navy-deep uppercase mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Security Password *</span>
                  </span>
                  <span className="text-[10px] text-gold-accent font-bold">Default: DEMO123</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter security access password"
                  className="w-full px-4 py-3 rounded-xl border border-border-hairline bg-bg-primary text-navy-deep font-medium text-sm focus:ring-2 focus:ring-gold-accent outline-none pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-[10px] font-black uppercase text-gold-accent hover:underline"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {/* Search Submit Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full py-3.5 bg-gold-accent hover:opacity-90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isSearching ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Record...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>Search & Generate TC</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </ImageReveal>

        {/* Official Mock Transfer Certificate (TC) Result Box */}
        {tcData && (
          <ImageReveal>
            <div className="bg-bg-secondary rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-gold-accent relative space-y-8 animate-fadeIn" id="printable-prospectus">
              
              {/* TC Document Header Banner */}
              <div className="border-b-4 border-gold-accent pb-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-accent text-white font-black text-[10px] uppercase tracking-widest rounded-full mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Official Document • CBSE Affiliation No. 2132338</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-deep font-serif">
                    KRISHNA INTERNATIONAL SCHOOL
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-gold-accent uppercase tracking-widest mt-1">
                    Delhi G.T. Road, Aligarh-202001 (U.P.) INDIA • School Code: 60882
                  </p>
                </div>

                <div className="shrink-0 bg-[#091724] p-4 rounded-2xl border-2 border-gold-accent text-white text-center shadow-md">
                  <span className="text-[10px] font-black uppercase text-gray-300 block">Certificate Serial No.</span>
                  <span className="text-base sm:text-lg font-extrabold text-gold-accent font-serif block">{tcData.tcNo}</span>
                  <span className="text-[9px] text-emerald-400 font-bold block mt-0.5">Status: Issued & Verified</span>
                </div>
              </div>

              {/* TC Certificate Title */}
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-black text-navy-deep font-serif uppercase tracking-wider underline underline-offset-8 decoration-gold-accent">
                  TRANSFER CERTIFICATE
                </h3>
                <p className="text-xs text-navy-muted italic">Issued under Rule 14.1 of CBSE Examination Bye-Laws</p>
              </div>

              {/* TC Key Student Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-bg-accent-section p-6 rounded-2xl border border-border-hairline text-xs">
                <div className="space-y-2.5">
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">1. Name of Student:</span>
                    <span className="font-extrabold text-navy-deep uppercase">{tcData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">2. Father's / Guardian's Name:</span>
                    <span className="font-bold text-navy-deep">{tcData.fatherName}</span>
                  </div>
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">3. Mother's Name:</span>
                    <span className="font-bold text-navy-deep">{tcData.motherName}</span>
                  </div>
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">4. School Admission / Roll No:</span>
                    <span className="font-bold text-gold-accent uppercase">{tcData.admissionNo}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">5. Academic Session Year:</span>
                    <span className="font-bold text-navy-deep">{tcData.year}</span>
                  </div>
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">6. Class & Section Last Studied:</span>
                    <span className="font-bold text-navy-deep">{tcData.classGrade} ({tcData.section})</span>
                  </div>
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">7. Date of Birth (in Figures):</span>
                    <span className="font-bold text-navy-deep">{tcData.dob}</span>
                  </div>
                  <div className="flex justify-between border-b border-border-hairline pb-1.5">
                    <span className="font-bold text-navy-muted">8. Date of First Admission:</span>
                    <span className="font-bold text-navy-deep">{tcData.doa}</span>
                  </div>
                </div>
              </div>

              {/* TC Academic Status & Conduct Block */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium">
                <div className="p-4 bg-bg-primary rounded-xl border border-border-hairline space-y-1">
                  <span className="text-[10px] text-navy-muted uppercase font-black block">Class Board Exam Status</span>
                  <span className="text-sm font-bold text-navy-deep block">{tcData.reason}</span>
                </div>
                <div className="p-4 bg-bg-primary rounded-xl border border-border-hairline space-y-1">
                  <span className="text-[10px] text-navy-muted uppercase font-black block">General Conduct & Character</span>
                  <span className="text-sm font-bold text-emerald-accent block">{tcData.conduct}</span>
                </div>
                <div className="p-4 bg-bg-primary rounded-xl border border-border-hairline space-y-1">
                  <span className="text-[10px] text-navy-muted uppercase font-black block">Date of Issue</span>
                  <span className="text-sm font-bold text-gold-accent block">{tcData.dateOfIssue}</span>
                </div>
              </div>

              {/* Signature Blocks (Printed Verification Seal) */}
              <div className="pt-8 border-t-2 border-border-hairline flex flex-col sm:flex-row justify-between items-center gap-6 text-center text-xs">
                <div>
                  <div className="w-32 h-10 border-b border-navy-muted mb-1 mx-auto flex items-end justify-center pb-1">
                    <span className="font-serif italic font-bold text-navy-deep text-sm">Signed / Verified</span>
                  </div>
                  <span className="font-bold text-navy-muted block">Checked By (Class Teacher)</span>
                </div>

                <div>
                  <div className="w-36 h-12 bg-gold-accent/10 rounded-full border border-gold-accent/30 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-black uppercase text-gold-accent tracking-widest">Official KIS Seal</span>
                  </div>
                  <span className="font-bold text-navy-muted block">Krishna International School</span>
                </div>

                <div>
                  <div className="w-32 h-10 border-b border-navy-muted mb-1 mx-auto flex items-end justify-center pb-1">
                    <span className="font-serif italic font-bold text-navy-deep text-sm">Dr. S. K. Sharma</span>
                  </div>
                  <span className="font-bold text-navy-muted block">Signature of Principal</span>
                </div>
              </div>

              {/* TC Action Controls (Print / Download PDF) */}
              <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-4 border-t border-border-hairline print:hidden">
                <button
                  type="button"
                  onClick={() => setIsPdfModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 bg-gold-accent hover:opacity-90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official TC (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-6 py-3 bg-bg-accent-section hover:bg-gold-accent text-navy-deep hover:text-white border border-border-hairline font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Printer className="w-4 h-4 text-gold-accent group-hover:text-white transition-colors" />
                  <span>Print Certificate</span>
                </button>
              </div>

            </div>
          </ImageReveal>
        )}

      </div>

      {/* Transfer Certificate PDF Download Modal */}
      {isPdfModalOpen && (
        <ProspectusModal
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
          autoPrint={true}
          docInfo={{
            title: `Official Transfer Certificate - ${tcData?.name || 'Student'} (${tcData?.tcNo || 'TC'})`,
            description: `Verified Transfer Certificate for ${tcData?.name} (${tcData?.classGrade}). Issued on ${tcData?.dateOfIssue}.`,
            fileSize: "PDF Certificate • Verified",
            fileName: `${tcData?.name.replace(/\s+/g, '_')}_Transfer_Certificate.pdf`
          }}
        />
      )}
    </div>
  );
};
