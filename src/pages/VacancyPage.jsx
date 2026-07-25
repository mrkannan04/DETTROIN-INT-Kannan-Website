import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { vacanciesData } from '../data/vacancies';
import { Briefcase, MapPin, GraduationCap, Send, X, CheckCircle } from 'lucide-react';
import { Toast } from '../components/common/Toast';
import { ImageReveal } from '../components/common/ImageReveal';

export const VacancyPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: '', resume: '' });

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setToastMsg(`Application for ${selectedJob?.title || 'position'} submitted successfully!`);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', experience: '', resume: '' });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <PageBanner
        title="Join Our Faculty & Staff"
        subtitle="Shape the Minds of Tomorrow at Krishna International School"
        breadcrumb={['Home', 'Join Us', 'Vacancies']}
        bannerImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-kis-navy font-serif">Current Career Opportunities</h2>
          <p className="text-slate-600 mt-2 font-medium">We are seeking passionate, qualified educators committed to educational excellence.</p>
        </div>

        {/* Vacancies List */}
        <div className="space-y-6">
          {vacanciesData.map((job) => (
            <ImageReveal key={job.id}>
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-kis-gold transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-kis-navy font-serif">{job.title}</h3>
                    <span className="px-3 py-1 bg-kis-gold/15 text-kis-navy font-black text-xs rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 pt-2">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-kis-gold" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-kis-gold" />
                      <span>{job.qualification}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-kis-gold" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-6 py-3 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold font-extrabold text-xs uppercase tracking-wider rounded-full shadow hover:scale-105 active:scale-95 transition-all shrink-0"
                >
                  Apply Now
                </button>
              </div>
            </ImageReveal>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-kis-navy p-6 text-white border-b-4 border-kis-gold">
              <span className="text-xs text-kis-gold font-black uppercase tracking-wider">Job Application</span>
              <h3 className="text-xl font-bold font-serif">{selectedJob.title}</h3>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-bold text-kis-navy font-serif">Application Submitted!</h4>
                <p className="text-sm text-slate-600">Thank you for applying. Our HR team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-kis-gold text-sm outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-kis-gold text-sm outline-none"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-kis-gold text-sm outline-none"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Teaching Experience *</label>
                  <input
                    type="text"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-kis-gold text-sm outline-none"
                    placeholder="e.g. 4 Years in CBSE School"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cover Note / Remarks</label>
                  <textarea
                    rows={3}
                    value={formData.resume}
                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-kis-gold text-sm outline-none"
                    placeholder="Briefly state your qualifications and achievements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

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

