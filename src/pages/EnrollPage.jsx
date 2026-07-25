import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PageBanner } from '../components/common/PageBanner';
import { CheckCircle2, User, Phone, Send, Upload, FileText, Calendar, Building, Download, Printer } from 'lucide-react';
import { Toast } from '../components/common/Toast';
import { AdmissionCountdown } from '../components/common/AdmissionCountdown';
import { ImageReveal } from '../components/common/ImageReveal';

export const EnrollPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [registrationSlip, setRegistrationSlip] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const regId = `REG-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const slip = {
      regId,
      studentName: data.studentName,
      grade: data.grade,
      parentName: data.fatherName,
      mobile: data.mobile,
      email: data.email || 'N/A',
      dob: data.dob,
      gender: data.gender,
      submissionDate: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      testDate: 'Aug 14, 2026 at 10:00 AM'
    };
    setRegistrationSlip(slip);
    setSubmitted(true);
    setToastMsg(`Registration Submitted Successfully! Reg ID: ${regId}`);
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <PageBanner
        title="Online Student Admission Registration 2026-27"
        subtitle="Click to Enroll - Krishna International School, Aligarh"
        breadcrumb={['Home', 'Admission', 'Enroll']}
        bannerImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Admission Countdown Timer Alert */}
        <AdmissionCountdown />

        {submitted && registrationSlip ? (
          <ImageReveal>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border-2 border-kis-gold text-center space-y-6 animate-fadeIn my-6">
              
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
              </div>

              <div>
                <span className="px-3.5 py-1 bg-kis-gold/20 text-kis-navy font-black text-xs uppercase tracking-wider rounded-full">
                  Admission Slip Generated
                </span>
                <h2 className="text-3xl font-extrabold text-kis-navy font-serif mt-2">Registration Successful!</h2>
                <p className="text-slate-600 max-w-lg mx-auto text-sm leading-relaxed mt-1">
                  Your child's admission application has been registered for Academic Session 2026-27.
                </p>
              </div>

              {/* Registration Slip Summary Box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs space-y-3 text-left max-w-xl mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Registration Number:</span>
                  <span className="font-mono font-black text-lg text-kis-gold">{registrationSlip.regId}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Student Name:</span>
                  <span className="font-bold text-kis-navy">{registrationSlip.studentName}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Applied Grade:</span>
                  <span className="font-bold text-slate-700">{registrationSlip.grade}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Parent / Guardian:</span>
                  <span className="font-bold text-slate-700">{registrationSlip.parentName}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Mobile Number:</span>
                  <span className="font-bold text-slate-700">+91 {registrationSlip.mobile}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Scheduled Entrance Assessment:</span>
                  <span className="font-bold text-emerald-600">{registrationSlip.testDate}</span>
                </div>

                <div className="flex justify-between pt-1">
                  <span className="text-slate-500 font-semibold">Submission Date:</span>
                  <span className="font-bold text-slate-700">{registrationSlip.submissionDate}</span>
                </div>
              </div>

              {/* Next Steps List */}
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 text-left text-xs text-amber-900 max-w-xl mx-auto space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-amber-950 mb-1">Important Next Steps:</h4>
                <p>1. Please bring a printed copy of this Registration Slip on the entrance test date.</p>
                <p>2. Keep student's Birth Certificate copy and 2 passport photos ready for document verification.</p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => alert("Admission Registration Copy printed for demo purposes.")}
                  className="px-6 py-3 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold font-black text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2 hover:scale-105"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Registration Slip</span>
                </button>

                <button
                  onClick={() => { setSubmitted(false); reset(); setUploadedFile(null); }}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Submit Another Application
                </button>
              </div>

            </div>
          </ImageReveal>
        ) : (
          <div className="bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden my-6">
            {/* Header */}
            <div className="bg-kis-navy p-8 text-white text-center border-b-4 border-kis-gold">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">Student Admission Application Form</h2>
              <p className="text-xs sm:text-sm text-kis-gold mt-1 font-semibold uppercase tracking-wider">Academic Session 2026-27 • CBSE Curriculum</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 sm:p-12 space-y-8">
              
              {/* Section 1: Student Details */}
              <div>
                <h3 className="text-lg font-bold text-kis-navy border-b border-slate-200 pb-2 mb-4 flex items-center gap-2 font-serif">
                  <User className="w-5 h-5 text-kis-gold" />
                  <span>1. Student Information</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      {...register('studentName', { required: 'Student name is required' })}
                      placeholder="Enter student's full name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-kis-gold outline-none ${
                        errors.studentName ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.studentName && <span className="text-xs text-red-500 mt-1 block">{errors.studentName.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Grade Seeking Admission *</label>
                    <select
                      {...register('grade', { required: 'Please select a grade' })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none bg-white font-medium"
                    >
                      <option value="">Select Grade</option>
                      <option value="Nursery / LKG / UKG">Nursery / LKG / UKG</option>
                      <option value="Class I - Class V (Primary)">Class I - Class V (Primary)</option>
                      <option value="Class VI - Class VIII (Middle)">Class VI - Class VIII (Middle)</option>
                      <option value="Class IX - Class X (Secondary)">Class IX - Class X (Secondary)</option>
                      <option value="Class XI Science">Class XI Science</option>
                      <option value="Class XI Commerce">Class XI Commerce</option>
                      <option value="Class XII Science">Class XII Science</option>
                    </select>
                    {errors.grade && <span className="text-xs text-red-500 mt-1 block">{errors.grade.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      {...register('dob', { required: 'Date of birth is required' })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                    {errors.dob && <span className="text-xs text-red-500 mt-1 block">{errors.dob.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Gender *</label>
                    <select
                      {...register('gender', { required: 'Select gender' })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none bg-white font-medium"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender && <span className="text-xs text-red-500 mt-1 block">{errors.gender.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Previous School Attended</label>
                    <input
                      type="text"
                      {...register('previousSchool')}
                      placeholder="Name of previous school & board"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Student Aadhar / ID No.</label>
                    <input
                      type="text"
                      {...register('aadharNo')}
                      placeholder="12-digit Aadhar Number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Parent / Guardian Details */}
              <div>
                <h3 className="text-lg font-bold text-kis-navy border-b border-slate-200 pb-2 mb-4 flex items-center gap-2 font-serif">
                  <Phone className="w-5 h-5 text-kis-gold" />
                  <span>2. Parent / Guardian Details</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Father's Full Name *</label>
                    <input
                      type="text"
                      {...register('fatherName', { required: 'Father name is required' })}
                      placeholder="Father's full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                    {errors.fatherName && <span className="text-xs text-red-500 mt-1 block">{errors.fatherName.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Mother's Full Name *</label>
                    <input
                      type="text"
                      {...register('motherName', { required: 'Mother name is required' })}
                      placeholder="Mother's full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                    {errors.motherName && <span className="text-xs text-red-500 mt-1 block">{errors.motherName.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Primary Mobile Number *</label>
                    <input
                      type="tel"
                      {...register('mobile', { required: 'Mobile number required', pattern: { value: /^[0-9]{10}$/, message: 'Enter valid 10-digit mobile number' } })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                    {errors.mobile && <span className="text-xs text-red-500 mt-1 block">{errors.mobile.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="parent.email@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Residential Address *</label>
                    <input
                      type="text"
                      {...register('address', { required: 'Address is required' })}
                      placeholder="House No, Street, Colony, City, Pin Code"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-kis-gold outline-none"
                    />
                    {errors.address && <span className="text-xs text-red-500 mt-1 block">{errors.address.message}</span>}
                  </div>
                </div>
              </div>

              {/* Section 3: Document Upload (Mock) */}
              <div>
                <h3 className="text-lg font-bold text-kis-navy border-b border-slate-200 pb-2 mb-4 flex items-center gap-2 font-serif">
                  <Upload className="w-5 h-5 text-kis-gold" />
                  <span>3. Document Attachment (Optional)</span>
                </h3>

                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-kis-gold transition-colors bg-slate-50">
                  <Upload className="w-8 h-8 text-kis-gold mx-auto mb-2" />
                  <p className="text-xs font-bold text-kis-navy uppercase tracking-wider">Upload Student Passport Photo / Birth Certificate</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">JPG, PNG, or PDF up to 5MB</p>
                  <label className="inline-block mt-3 px-4 py-2 bg-white text-slate-700 text-xs font-bold rounded-lg border border-slate-300 shadow-sm cursor-pointer hover:bg-slate-100">
                    Browse File
                    <input type="file" onChange={handleFileUpload} className="hidden" />
                  </label>
                  {uploadedFile && (
                    <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Attached: {uploadedFile}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg hover:shadow-gold hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Student Admission Application</span>
              </button>

            </form>
          </div>
        )}

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



