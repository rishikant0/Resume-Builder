import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, FileText, FileSignature, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-slate-50">
      {/* Animated gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-40 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-primary-400/40 via-accent-300/20 to-transparent blur-3xl rounded-full mix-blend-multiply" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-t from-accent-400/30 via-primary-300/20 to-transparent blur-3xl rounded-full mix-blend-multiply translate-x-32" 
        />
      </div>

      {/* Floating Documents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[15%] opacity-20"
        >
          <FileText className="w-24 h-24 text-primary-500" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 right-[15%] opacity-20"
        >
          <FileSignature className="w-32 h-32 text-accent-500" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-24 left-[20%] opacity-20"
        >
          <Briefcase className="w-20 h-20 text-slate-500" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 text-primary-800 font-medium text-sm shadow-sm border border-primary-100">
            <Sparkles className="w-4 h-4 text-accent-500" />
            100% Free • ATS Friendly • PDF Export
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
        >
          Build Your Dream <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
            Resume in Minutes
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Create a professional, ATS-friendly resume completely free. Stand out from the crowd and land your dream job with our modern templates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <a 
            href="#builder"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Create My Resume Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Developer Info */}
        <motion.div 
          className="mt-16 pt-8 border-t border-slate-200/50 inline-block text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-medium text-slate-700">Developed by Rishikant Kumar</p>
          <p>Email: <a href="mailto:rishikantkumar@gmail.com" className="text-primary-600 hover:underline">rishikantkumar@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
