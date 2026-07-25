import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/common/PageBanner';
import { Search, UserCheck, CreditCard, CheckCircle2, QrCode, ArrowLeft, Download, ShieldCheck, FileText, Check, Home } from 'lucide-react';
import { Toast } from '../components/common/Toast';
import { ImageReveal } from '../components/common/ImageReveal';


export const FeePaymentPage = () => {
  // Step State: 1 = Search, 2 = Select Student, 3 = Payment Checkout, 4 = Receipt
  const [step, setStep] = useState(1);
  
  // Search Form State
  const [searchParams, setSearchParams] = useState({
    academicYear: '2026-27',
    grade: 'Class X',
    section: 'Section A',
    rollNo: ''
  });

  // Mock Students Database
  const mockStudents = [
    {
      id: 'KIS-2026-104',
      name: 'Aarav Sharma',
      fatherName: 'Mr. Alok Sharma',
      grade: 'Class X',
      section: 'Section A',
      rollNo: '104',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
      quarter: 'Quarter II (Jul - Sep 2026)',
      tuitionFee: 11000,
      labFee: 1500,
      transportFee: 2000,
      totalFee: 14500,
      status: 'UNPAID'
    },
    {
      id: 'KIS-2026-108',
      name: 'Ananya Verma',
      fatherName: 'Mr. Rajesh Verma',
      grade: 'Class X',
      section: 'Section A',
      rollNo: '108',
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
      quarter: 'Quarter II (Jul - Sep 2026)',
      tuitionFee: 11000,
      labFee: 1500,
      transportFee: 2000,
      totalFee: 14500,
      status: 'UNPAID'
    },
    {
      id: 'KIS-2026-115',
      name: 'Rohan Gupta',
      fatherName: 'Mr. Suresh Gupta',
      grade: 'Class X',
      section: 'Section A',
      rollNo: '115',
      photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
      quarter: 'Quarter II (Jul - Sep 2026)',
      tuitionFee: 11000,
      labFee: 1500,
      transportFee: 2000,
      totalFee: 14500,
      status: 'UNPAID'
    }
  ];

  const [searchResults, setSearchResults] = useState(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter mock database
    const filtered = mockStudents.filter(s => {
      if (searchParams.grade && s.grade !== searchParams.grade) return false;
      if (searchParams.section && s.section !== searchParams.section) return false;
      if (searchParams.rollNo && !s.rollNo.includes(searchParams.rollNo) && !s.name.toLowerCase().includes(searchParams.rollNo.toLowerCase())) return false;
      return true;
    });
    setSearchResults(filtered.length > 0 ? filtered : mockStudents);
    setStep(2);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setStep(3);
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const receipt = {
        receiptNo: `REC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        txnId: `TXN${Math.floor(100000000 + Math.random() * 900000000)}`,
        student: selectedStudent,
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        amountPaid: selectedStudent.totalFee,
        paymentMethod: paymentMethod.toUpperCase(),
        status: 'SUCCESSFUL'
      };
      setPaymentReceipt(receipt);
      setToastMsg(`Payment Successful! Receipt #${receipt.receiptNo}`);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <PageBanner
        title="Online School Fee Payment Portal"
        subtitle="Krishna International School, Aligarh • Secure Payment Gateway"
        breadcrumb={['Home', 'Admission', 'Fee Payment']}
        bannerImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Step Indicator Wizard Bar */}
        <div className="mb-10 bg-bg-secondary p-4 sm:p-6 rounded-3xl border border-border-hairline shadow-card">
          <div className="flex items-center justify-between relative max-w-3xl mx-auto">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                step >= 1 ? 'bg-kis-navy text-kis-gold border-2 border-kis-gold shadow' : 'bg-bg-accent-section text-slate-400'
              }`}>
                1
              </div>
              <span className="text-[11px] font-bold text-body uppercase tracking-wider mt-2 hidden sm:block">Search Class</span>
            </div>

            {/* Line 1-2 */}
            <div className={`flex-1 h-1 mx-2 transition-all ${step >= 2 ? 'bg-kis-gold' : 'bg-slate-200'}`} />

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                step >= 2 ? 'bg-kis-navy text-kis-gold border-2 border-kis-gold shadow' : 'bg-bg-accent-section text-slate-400'
              }`}>
                2
              </div>
              <span className="text-[11px] font-bold text-body uppercase tracking-wider mt-2 hidden sm:block">Select Student</span>
            </div>

            {/* Line 2-3 */}
            <div className={`flex-1 h-1 mx-2 transition-all ${step >= 3 ? 'bg-kis-gold' : 'bg-slate-200'}`} />

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                step >= 3 ? 'bg-kis-navy text-kis-gold border-2 border-kis-gold shadow' : 'bg-bg-accent-section text-slate-400'
              }`}>
                3
              </div>
              <span className="text-[11px] font-bold text-body uppercase tracking-wider mt-2 hidden sm:block">Fee Payment</span>
            </div>

            {/* Line 3-4 */}
            <div className={`flex-1 h-1 mx-2 transition-all ${step >= 4 ? 'bg-kis-gold' : 'bg-slate-200'}`} />

            {/* Step 4 */}
            <div className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                step >= 4 ? 'bg-emerald-600 text-white border-2 border-emerald-400 shadow' : 'bg-bg-accent-section text-slate-400'
              }`}>
                4
              </div>
              <span className="text-[11px] font-bold text-body uppercase tracking-wider mt-2 hidden sm:block">Receipt</span>
            </div>

          </div>
        </div>

        {/* STEP 1: Class & Section Search Form */}
        {step === 1 && (
          <ImageReveal>
            <div className="bg-bg-secondary rounded-3xl p-8 sm:p-12 shadow-card border border-border-hairline">
              <div className="border-b border-border-hairline pb-4 mb-8 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-kis-navy font-serif">Search Student Record</h3>
                <p className="text-sm text-text-body mt-1">Enter academic session, class, section, and optional roll number to fetch fee details.</p>
              </div>

              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Academic Year */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-body mb-1.5">Academic Session *</label>
                    <select
                      value={searchParams.academicYear}
                      onChange={(e) => setSearchParams({ ...searchParams, academicYear: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-hairline text-sm focus:ring-2 focus:ring-kis-gold outline-none bg-bg-secondary font-medium"
                    >
                      <option value="2026-27">Session 2026-27</option>
                      <option value="2025-26">Session 2025-26</option>
                    </select>
                  </div>

                  {/* Grade / Class */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-body mb-1.5">Select Class *</label>
                    <select
                      value={searchParams.grade}
                      onChange={(e) => setSearchParams({ ...searchParams, grade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-hairline text-sm focus:ring-2 focus:ring-kis-gold outline-none bg-bg-secondary font-medium"
                    >
                      <option value="Nursery">Nursery / LKG / UKG</option>
                      <option value="Class V">Class V (Primary)</option>
                      <option value="Class VIII">Class VIII (Middle)</option>
                      <option value="Class X">Class X (Secondary)</option>
                      <option value="Class XI Science">Class XI Science</option>
                      <option value="Class XII Commerce">Class XII Commerce</option>
                    </select>
                  </div>

                  {/* Section */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-body mb-1.5">Select Section *</label>
                    <select
                      value={searchParams.section}
                      onChange={(e) => setSearchParams({ ...searchParams, section: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-hairline text-sm focus:ring-2 focus:ring-kis-gold outline-none bg-bg-secondary font-medium"
                    >
                      <option value="Section A">Section A</option>
                      <option value="Section B">Section B</option>
                      <option value="Section C">Section C</option>
                    </select>
                  </div>

                  {/* Student Roll No or Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-body mb-1.5">Roll No / Student Name</label>
                    <input
                      type="text"
                      value={searchParams.rollNo}
                      onChange={(e) => setSearchParams({ ...searchParams, rollNo: e.target.value })}
                      placeholder="e.g. 104 or Aarav"
                      className="w-full px-4 py-3 rounded-xl border border-border-hairline text-sm focus:ring-2 focus:ring-kis-gold outline-none font-medium"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold font-black text-sm uppercase tracking-wider rounded-xl shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Fetch Student List</span>
                </button>
              </form>
            </div>
          </ImageReveal>
        )}

        {/* STEP 2: Select Student List View */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-bg-secondary p-6 rounded-2xl border border-border-hairline shadow-sm">
              <div>
                <span className="text-xs text-kis-gold font-black uppercase tracking-wider">Search Results</span>
                <h3 className="text-xl font-bold text-kis-navy font-serif">
                  Students in {searchParams.grade} • {searchParams.section}
                </h3>
              </div>

              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-bg-accent-section hover:bg-slate-200 text-body text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Modify Search</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {searchResults.map((student) => (
                <ImageReveal key={student.id}>
                  <div className="bg-bg-secondary rounded-2xl p-6 border border-border-hairline shadow-card hover:border-kis-gold transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-kis-gold shadow-sm shrink-0"
                        />
                        <div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                            Roll No: {student.rollNo}
                          </span>
                          <h4 className="text-lg font-bold text-kis-navy font-serif">{student.name}</h4>
                          <p className="text-xs text-navy-muted font-medium">{student.fatherName}</p>
                        </div>
                      </div>

                      <div className="bg-bg-accent-section p-4 rounded-xl border border-border-hairline space-y-2 text-xs mb-6">
                        <div className="flex justify-between">
                          <span className="text-navy-muted font-semibold">Class / Sec:</span>
                          <span className="font-bold text-kis-navy">{student.grade} ({student.section})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-navy-muted font-semibold">Adm ID:</span>
                          <span className="font-mono font-bold text-body">{student.id}</span>
                        </div>
                        <div className="flex justify-between border-t border-border-hairline pt-2">
                          <span className="text-navy-muted font-semibold">Pending Due:</span>
                          <span className="font-black text-red-600">₹{student.totalFee.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectStudent(student)}
                      className="w-full py-3 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Select & Pay Fee</span>
                    </button>
                  </div>
                </ImageReveal>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Fee Breakdown & Payment Checkout */}
        {step === 3 && selectedStudent && (
          <ImageReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Fee Details Breakdown (Left 7 cols) */}
              <div className="lg:col-span-7 bg-bg-secondary rounded-3xl p-6 sm:p-8 border border-border-hairline shadow-card space-y-6">
                <div className="flex items-center justify-between border-b border-border-hairline pb-4">
                  <div>
                    <span className="text-xs text-kis-gold font-black uppercase tracking-wider">Fee Statement</span>
                    <h3 className="text-2xl font-bold text-kis-navy font-serif">{selectedStudent.name}</h3>
                    <p className="text-xs text-navy-muted">Roll No. {selectedStudent.rollNo} • {selectedStudent.grade} ({selectedStudent.section})</p>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-navy-muted hover:text-kis-navy"
                  >
                    Change Student
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-body tracking-wider">Itemized Quarterly Breakdown</h4>
                  
                  <div className="bg-bg-accent-section rounded-2xl p-5 border border-border-hairline space-y-3 text-sm">
                    <div className="flex justify-between text-body">
                      <span>Quarterly Tuition Fee</span>
                      <span className="font-bold">₹{selectedStudent.tuitionFee.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-body">
                      <span>Computer & Science Lab Charge</span>
                      <span className="font-bold">₹{selectedStudent.labFee.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-body">
                      <span>AC Bus Transport Facility</span>
                      <span className="font-bold">₹{selectedStudent.transportFee.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="border-t border-border-hairline pt-3 flex justify-between text-lg font-black text-kis-navy">
                      <span>Total Amount Due</span>
                      <span className="text-kis-gold font-serif">₹{selectedStudent.totalFee.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-navy-muted bg-emerald-50 p-3.5 rounded-xl border border-emerald-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>256-Bit SSL Encrypted Official Payment Portal for Krishna International School</span>
                </div>
              </div>

              {/* Payment Gateway Options (Right 5 cols) */}
              <div className="lg:col-span-5 bg-bg-secondary rounded-3xl p-6 sm:p-8 border border-border-hairline shadow-card space-y-6">
                <h3 className="text-lg font-bold text-kis-navy font-serif border-b border-border-hairline pb-3">
                  Select Payment Method
                </h3>

                {/* Gateway Options Radio */}
                <div className="space-y-3">
                  
                  {/* UPI */}
                  <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'upi' ? 'border-kis-gold bg-kis-gold/10' : 'border-border-hairline hover:border-border-hairline'
                  }`}>
                    <input
                      type="radio"
                      name="payGateway"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="accent-kis-navy"
                    />
                    <QrCode className="w-5 h-5 text-kis-navy" />
                    <div>
                      <span className="text-sm font-bold text-kis-navy block">UPI / QR Code</span>
                      <span className="text-[10px] text-navy-muted">Google Pay, PhonePe, Paytm, BHIM</span>
                    </div>
                  </label>

                  {/* Credit / Debit Card */}
                  <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-kis-gold bg-kis-gold/10' : 'border-border-hairline hover:border-border-hairline'
                  }`}>
                    <input
                      type="radio"
                      name="payGateway"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-kis-navy"
                    />
                    <CreditCard className="w-5 h-5 text-kis-navy" />
                    <div>
                      <span className="text-sm font-bold text-kis-navy block">Credit / Debit Card</span>
                      <span className="text-[10px] text-navy-muted">Visa, Mastercard, RuPay</span>
                    </div>
                  </label>

                </div>

                {/* Simulated Payment Form Details */}
                {paymentMethod === 'upi' ? (
                  <div className="bg-bg-accent-section p-4 rounded-xl text-center space-y-2 border border-border-hairline">
                    <div className="w-32 h-32 bg-white mx-auto border-2 border-kis-navy rounded-lg p-2 flex items-center justify-center shadow-inner">
                      {/* Demo QR Code Graphic */}
                      <svg viewBox="0 0 100 100" className="w-full h-full text-kis-navy fill-current">
                        <rect x="0" y="0" width="30" height="30" />
                        <rect x="5" y="5" width="20" height="20" fill="white" />
                        <rect x="10" y="10" width="10" height="10" />
                        <rect x="70" y="0" width="30" height="30" />
                        <rect x="75" y="5" width="20" height="20" fill="white" />
                        <rect x="80" y="10" width="10" height="10" />
                        <rect x="0" y="70" width="30" height="30" />
                        <rect x="5" y="75" width="20" height="20" fill="white" />
                        <rect x="10" y="80" width="10" height="10" />
                        <rect x="40" y="40" width="20" height="20" />
                      </svg>
                    </div>
                    <p className="text-xs text-text-body font-medium">Scan QR code using any UPI App</p>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-body uppercase mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="4532 •••• •••• 8912"
                        className="w-full px-3 py-2 rounded-lg border border-border-hairline text-xs outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold text-body uppercase mb-1">Expiry (MM/YY)</label>
                        <input
                          type="text"
                          placeholder="08/28"
                          className="w-full px-3 py-2 rounded-lg border border-border-hairline text-xs outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-body uppercase mb-1">CVV</label>
                        <input
                          type="password"
                          placeholder="•••"
                          className="w-full px-3 py-2 rounded-lg border border-border-hairline text-xs outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handlePayNow}
                  disabled={isProcessing}
                  className="w-full py-4 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold font-black text-sm uppercase tracking-wider rounded-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-kis-gold border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Pay ₹{selectedStudent.totalFee.toLocaleString('en-IN')} Now</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </ImageReveal>
        )}

        {/* STEP 4: Payment Receipt View */}
        {step === 4 && paymentReceipt && (
          <ImageReveal>
            <div className="bg-bg-secondary rounded-3xl p-8 sm:p-12 shadow-card border-2 border-emerald-500 text-center max-w-2xl mx-auto space-y-6">
              
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
              </div>

              <div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-black text-xs uppercase rounded-full tracking-wider">
                  Payment Successful
                </span>
                <h3 className="text-3xl font-extrabold text-kis-navy font-serif mt-2">School Fee Receipt</h3>
                <p className="text-xs text-navy-muted">Official Payment Acknowledgement Slip</p>
              </div>

              {/* Receipt Details Table */}
              <div className="bg-bg-accent-section rounded-2xl p-6 border border-border-hairline text-xs space-y-3 text-left">
                <div className="flex justify-between border-b border-border-hairline pb-2">
                  <span className="text-navy-muted font-semibold">Receipt Number:</span>
                  <span className="font-mono font-bold text-kis-navy">{paymentReceipt.receiptNo}</span>
                </div>

                <div className="flex justify-between border-b border-border-hairline pb-2">
                  <span className="text-navy-muted font-semibold">Transaction Ref ID:</span>
                  <span className="font-mono font-bold text-body">{paymentReceipt.txnId}</span>
                </div>

                <div className="flex justify-between border-b border-border-hairline pb-2">
                  <span className="text-navy-muted font-semibold">Student Name:</span>
                  <span className="font-bold text-kis-navy">{paymentReceipt.student.name}</span>
                </div>

                <div className="flex justify-between border-b border-border-hairline pb-2">
                  <span className="text-navy-muted font-semibold">Class / Roll No:</span>
                  <span className="font-bold text-body">{paymentReceipt.student.grade} ({paymentReceipt.student.section}) • Roll {paymentReceipt.student.rollNo}</span>
                </div>

                <div className="flex justify-between border-b border-border-hairline pb-2">
                  <span className="text-navy-muted font-semibold">Date & Time:</span>
                  <span className="font-bold text-body">{paymentReceipt.date} at {paymentReceipt.time}</span>
                </div>

                <div className="flex justify-between pt-2 text-sm font-black">
                  <span className="text-body">Total Amount Paid:</span>
                  <span className="text-emerald-600 font-serif text-lg">₹{paymentReceipt.amountPaid.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => alert("Fee Payment Receipt PDF downloaded for demo purposes.")}
                  className="px-6 py-3 bg-kis-navy hover:bg-kis-navy-hover text-kis-gold font-black text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2 hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Receipt</span>
                </button>

                <button
                  onClick={() => { setStep(1); setSelectedStudent(null); setPaymentReceipt(null); }}
                  className="px-6 py-3 bg-bg-accent-section hover:bg-slate-200 text-body font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Make Another Payment
                </button>
              </div>

              {/* Go Back to Home Page Button */}
              <div className="pt-6 border-t border-border-hairline mt-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-kis-gold hover:bg-kis-gold-hover text-kis-navy font-black text-xs uppercase tracking-wider rounded-full shadow hover:scale-105 transition-all"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Back to Home Page</span>
                </Link>
              </div>

            </div>
          </ImageReveal>
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

