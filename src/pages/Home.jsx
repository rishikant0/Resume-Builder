import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import FAQ from '../components/FAQ';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import Footer from '../components/Footer';

const DEFAULT_RESUME_DATA = {
  fullName: 'Rishikant Kumar',
  email: 'rishikantkumar@gmail.com',
  phone: '',
  address: '',
  summary: '',
  skills: [],
  education: [],
  experience: [],
  projects: []
};

const Home = () => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_RESUME_DATA;
      }
    }
    return DEFAULT_RESUME_DATA;
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    if(confirm('Are you sure you want to reset your resume? This action cannot be undone.')) {
      setResumeData(DEFAULT_RESUME_DATA);
      toast.success('Resume reset successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-primary-500 selection:text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <div className="container mx-auto px-4 py-20" id="builder">
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="w-full xl:w-1/2">
              <ResumeForm 
                data={resumeData} 
                updateData={updateResumeData} 
                resetForm={resetForm}
              />
            </div>
            <div className="w-full xl:w-1/2">
              <div className="sticky top-24">
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
