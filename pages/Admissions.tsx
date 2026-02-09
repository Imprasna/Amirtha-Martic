
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, Info, FileText, UserPlus, FileCheck } from 'lucide-react';
import Button from '../components/Button';

const Admissions: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { title: 'Personal', icon: UserPlus },
    { title: 'Contact', icon: Info },
    { title: 'Formalities', icon: FileCheck },
  ];

  // High visibility black borders as requested
  const inputStyles = "w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-[3px] border-slate-900 dark:border-slate-400 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 font-semibold shadow-sm outline-none";
  const labelStyles = "block text-sm font-bold text-slate-900 dark:text-slate-200 mb-2 ml-1 uppercase tracking-wider";
  const sectionTitle = "text-xl font-900 text-slate-900 dark:text-primary mb-6 flex items-center gap-2 border-b-4 border-slate-900/10 pb-2";

  return (
    <div className="min-h-[80vh] py-20 px-6 bg-slate-50 dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-900 font-display text-slate-900 dark:text-white"
          >
            Admission <span className="text-primary italic">Portal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Please fill out the form carefully to begin your journey at Amirtha Matric.
          </motion.p>
        </div>

        {/* Stepper Header */}
        <div className="flex justify-between items-center mb-16 relative px-4">
          <div className="absolute top-7 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10 rounded-full"></div>
          {steps.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                step >= idx + 1 
                ? 'bg-primary border-primary text-secondary' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-300'
              }`}>
                {step > idx + 1 ? <CheckCircle size={28} /> : <s.icon size={28} />}
              </div>
              <span className={`text-[10px] font-900 uppercase tracking-widest ${
                step >= idx + 1 ? 'text-secondary dark:text-primary' : 'text-slate-400'
              }`}>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-slate-900/5">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={(e) => {
                  if (step < 3) {
                    e.preventDefault();
                    nextStep();
                  } else {
                    handleSubmit(e);
                  }
                }}
                className="space-y-10"
              >
                {step === 1 && (
                  <div className="space-y-8">
                    <h3 className={sectionTitle}>Student Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2 space-y-1">
                        <label className={labelStyles}>Student's Name</label>
                        <input type="text" className={inputStyles} placeholder="Enter student's full name" required />
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Father's Name</label>
                        <input type="text" className={inputStyles} placeholder="Father's full name" required />
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Mother's Name</label>
                        <input type="text" className={inputStyles} placeholder="Mother's full name" required />
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Birth Date</label>
                        <input type="date" className={inputStyles} required />
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Gender</label>
                        <div className="flex gap-8 py-4">
                          <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="gender" className="w-5 h-5 text-primary border-2 border-slate-900" required />
                            <span className="font-bold text-slate-900 dark:text-slate-300">Male</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="gender" className="w-5 h-5 text-primary border-2 border-slate-900" required />
                            <span className="font-bold text-slate-900 dark:text-slate-300">Female</span>
                          </label>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Religion</label>
                        <input type="text" className={inputStyles} placeholder="e.g. Hinduism" />
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Nationality</label>
                        <input type="text" className={inputStyles} placeholder="e.g. Indian" required />
                      </div>
                      <div className="space-y-1">
                        <label className={labelStyles}>Blood Group</label>
                        <select className={inputStyles}>
                          <option value="">Select Blood Group</option>
                          <option>A+</option><option>A-</option>
                          <option>B+</option><option>B-</option>
                          <option>AB+</option><option>AB-</option>
                          <option>O+</option><option>O-</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <h3 className={sectionTitle}>Address Details</h3>
                      
                      {/* Present Address */}
                      <div className="p-6 rounded-3xl border-[3px] border-dashed border-slate-900 space-y-6">
                        <h4 className="font-900 text-slate-900 dark:text-slate-400 uppercase tracking-widest text-xs">Present Address</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label className={labelStyles}>Division</label>
                            <input type="text" className={inputStyles} placeholder="Enter division" required />
                          </div>
                          <div className="space-y-1">
                            <label className={labelStyles}>District</label>
                            <input type="text" className={inputStyles} placeholder="Enter district" required />
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className={labelStyles}>Full Address</label>
                            <textarea className={`${inputStyles} h-24 resize-none`} placeholder="House/Street/Area info"></textarea>
                          </div>
                        </div>
                      </div>

                      {/* Permanent Address */}
                      <div className="p-6 rounded-3xl border-[3px] border-dashed border-slate-900 space-y-6">
                        <h4 className="font-900 text-slate-900 dark:text-slate-400 uppercase tracking-widest text-xs">Permanent Address</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label className={labelStyles}>Division</label>
                            <input type="text" className={inputStyles} placeholder="Enter division" required />
                          </div>
                          <div className="space-y-1">
                            <label className={labelStyles}>District</label>
                            <input type="text" className={inputStyles} placeholder="Enter district" required />
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className={labelStyles}>Full Address</label>
                            <textarea className={`${inputStyles} h-24 resize-none`} placeholder="House/Street/Area info"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className={sectionTitle}>Contact Info</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className={labelStyles}>Phone Number</label>
                          <input type="tel" className={inputStyles} placeholder="+91 00000 00000" required />
                        </div>
                        <div className="space-y-1">
                          <label className={labelStyles}>Email Address</label>
                          <input type="email" className={inputStyles} placeholder="student@example.com" required />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-10">
                    <div className="space-y-8">
                      <h3 className={sectionTitle}>Other Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className={labelStyles}>NID Number</label>
                          <input type="text" className={inputStyles} placeholder="National ID / Registration No." />
                        </div>
                        <div className="space-y-1">
                          <label className={labelStyles}>Occupation</label>
                          <input type="text" className={inputStyles} placeholder="Parent's Occupation" />
                        </div>
                        <div className="space-y-1">
                          <label className={labelStyles}>Status</label>
                          <div className="flex gap-8 py-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="status" className="w-5 h-5 text-primary border-2 border-slate-900" />
                              <span className="font-bold text-slate-900 dark:text-slate-300">Single</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="status" className="w-5 h-5 text-primary border-2 border-slate-900" />
                              <span className="font-bold text-slate-900 dark:text-slate-300">Married</span>
                            </label>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className={labelStyles}>Course Name</label>
                          <input type="text" className={inputStyles} placeholder="Grade or Specific Program" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border-[3px] border-slate-900">
                      <h3 className="text-xl font-900 text-center uppercase tracking-widest text-slate-900 dark:text-white">Declaration</h3>
                      <p className="text-sm text-slate-900 dark:text-slate-400 italic text-center leading-relaxed font-semibold">
                        I hereby, declaring that I will obey all the rules and regulations of the institution and be fully responsible for violating the rules.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-10 pt-10">
                        <div className="space-y-2 text-center">
                          <div className="border-t-[3px] border-slate-900 pt-2">
                            <span className="text-[10px] font-900 uppercase tracking-widest text-slate-900 dark:text-slate-300">Student's Signature</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-center">
                          <div className="border-t-[3px] border-slate-900 pt-2">
                            <span className="text-[10px] font-900 uppercase tracking-widest text-slate-900 dark:text-slate-300">Authorized's Signature</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12">
                  <div className="w-full md:w-auto order-2 md:order-1">
                    {step > 1 && (
                      <Button 
                        type="button" 
                        onClick={prevStep} 
                        variant="outline"
                        className="w-full md:w-auto border-slate-900 text-slate-900 font-900"
                      >
                        <ArrowLeft size={20} className="mr-2" /> Previous Step
                      </Button>
                    )}
                  </div>
                  <div className="w-full md:w-auto order-1 md:order-2">
                    {step < 3 ? (
                      <Button type="submit" variant="secondary" className="w-full md:w-auto border-[3px] border-slate-900">
                        Next Step <ArrowRight size={20} className="ml-3" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="primary" className="w-full md:w-auto border-[3px] border-slate-900">
                        Submit Final Application
                      </Button>
                    )}
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16 space-y-8"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto text-secondary shadow-2xl border-2 border-slate-900">
                  <CheckCircle size={56} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-900 font-display text-slate-900 dark:text-white">Submission Successful!</h2>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto text-lg leading-relaxed">
                    We've received your application. Our admissions team will reach out to you within 3 business days.
                  </p>
                </div>
                <Button onClick={() => window.location.href = '#/'} variant="outline" className="mt-8 border-slate-900">
                  Back to Home
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
