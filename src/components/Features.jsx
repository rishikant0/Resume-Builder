import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, FileCheck, Smartphone, Save, Zap } from 'lucide-react';

const features = [
  {
    title: 'Live Preview',
    description: 'See your changes instantly as you type without refreshing the page.',
    icon: <Eye className="w-6 h-6 text-primary-500" />
  },
  {
    title: 'One Click PDF Download',
    description: 'Export your resume to a high-quality PDF format with a single click.',
    icon: <Download className="w-6 h-6 text-accent-500" />
  },
  {
    title: 'ATS Friendly Templates',
    description: 'Designed to easily pass through Applicant Tracking Systems.',
    icon: <FileCheck className="w-6 h-6 text-green-500" />
  },
  {
    title: 'Mobile Responsive',
    description: 'Create and edit your resume on any device, anywhere.',
    icon: <Smartphone className="w-6 h-6 text-pink-500" />
  },
  {
    title: 'Auto Save',
    description: 'Your progress is automatically saved to your local browser storage.',
    icon: <Save className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Fast & Free',
    description: 'Lightning fast performance and 100% free forever.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to build a professional resume that stands out.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
