import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="about">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-accent-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Why ResumeAI?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            ResumeAI helps students and professionals create beautiful ATS-friendly resumes in minutes with live preview and instant PDF download.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
