import React, { useRef, useState } from 'react';
import { Download, Mail, Phone, MapPin, Link as LinkIcon, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

const ResumePreview = ({ data }) => {
  const resumeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;
    
    setIsDownloading(true);
    const loadingToast = toast.loading('Generating PDF...');
    
    try {
      // Create a wrapper for printing to ensure it renders completely and nicely
      const originalStyle = element.style.cssText;
      
      // Temporarily override styles for better canvas generation
      element.style.transform = 'none';
      element.style.boxShadow = 'none';
      element.style.width = '210mm';
      element.style.minHeight = '297mm';
      
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      // Restore styles
      element.style.cssText = originalStyle;
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${data.fullName ? data.fullName.replace(/\s+/g, '_') : 'My'}_Resume.pdf`);
      
      toast.success('PDF Downloaded successfully!', { id: loadingToast });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#8b5cf6', '#10b981']
      });
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      toast.error('Failed to generate PDF. Please try again.', { id: loadingToast });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div 
      className="flex flex-col h-full max-h-[85vh]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-100 shrink-0">
        <h2 className="text-xl font-bold text-slate-800">Live Preview</h2>
        <button 
          onClick={downloadPDF}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Download PDF
            </>
          )}
        </button>
      </div>

      <div className="flex-grow overflow-auto rounded-xl border border-slate-200 bg-slate-200 p-4 md:p-8 flex justify-center scrollbar-thin scrollbar-thumb-slate-300">
        {/* The actual resume paper */}
        <div 
          ref={resumeRef} 
          className="resume-paper bg-white p-8 md:p-12 text-slate-900 shrink-0"
        >
          {/* Header */}
          <header className="border-b-2 border-primary-600 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight uppercase">{data.fullName || 'Your Name'}</h1>
            
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-600 mt-4">
              {data.email && (
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-primary-600" />
                  <span>{data.email}</span>
                </div>
              )}
              {data.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>{data.phone}</span>
                </div>
              )}
              {data.address && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span>{data.address}</span>
                </div>
              )}
            </div>
          </header>

          <div className="space-y-6">
            {/* Summary */}
            {data.summary && (
              <section>
                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">Professional Summary</h2>
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{data.summary}</p>
              </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Experience</h2>
                <div className="space-y-4">
                  {data.experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-slate-800 text-base">{exp.position}</h3>
                        <span className="text-sm font-medium text-primary-700">{exp.duration}</span>
                      </div>
                      <div className="text-slate-600 text-sm font-medium mb-1.5">{exp.company}</div>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.projects && data.projects.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Projects</h2>
                <div className="space-y-4">
                  {data.projects.map((proj, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-800 text-base">{proj.title}</h3>
                        {proj.link && (
                          <a href={proj.link} className="text-primary-600 hover:underline inline-flex items-center gap-1 text-sm">
                            <LinkIcon className="w-3 h-3" /> Link
                          </a>
                        )}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education & Skills Split */}
            <div className="grid grid-cols-2 gap-6">
              {/* Education */}
              {data.education && data.education.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Education</h2>
                  <div className="space-y-3">
                    {data.education.map((edu, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-slate-800 text-sm">{edu.degree}</h3>
                        <div className="text-slate-600 text-sm">{edu.institution}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Skills */}
              {data.skills && data.skills.length > 0 && data.skills.some(s => s.trim() !== '') && (
                <section>
                  <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.filter(s => s.trim() !== '').map((skill, index) => (
                      <span key={index} className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePreview;
