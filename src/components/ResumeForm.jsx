import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Copy, RefreshCcw } from 'lucide-react';
import toast from 'react-hot-toast';

const ResumeForm = ({ data, updateData, resetForm }) => {
  const handleChange = (e) => {
    updateData(e.target.name, e.target.value);
  };

  const handleArrayChange = (field, index, subfield, value) => {
    const newArray = [...data[field]];
    newArray[index] = { ...newArray[index], [subfield]: value };
    updateData(field, newArray);
  };

  const addArrayItem = (field, emptyItem) => {
    updateData(field, [...data[field], emptyItem]);
  };

  const removeArrayItem = (field, index) => {
    const newArray = [...data[field]];
    newArray.splice(index, 1);
    updateData(field, newArray);
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    updateData('skills', skillsArray);
  };

  const copyToClipboard = () => {
    const text = `
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}

Summary:
${data.summary}

Skills:
${data.skills.join(', ')}
    `;
    navigator.clipboard.writeText(text);
    toast.success('Resume content copied to clipboard!');
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Personalize</h2>
        <div className="flex gap-2">
          <button 
            onClick={copyToClipboard}
            className="p-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            title="Copy Content"
          >
            <Copy className="w-5 h-5" />
          </button>
          <button 
            onClick={resetForm}
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Reset Form"
          >
            <RefreshCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Personal Details */}
        <section>
          <h3 className="text-lg font-semibold text-primary-600 mb-4 border-b pb-2">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input type="text" name="fullName" value={data.fullName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" name="email" value={data.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input type="text" name="phone" value={data.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
              <input type="text" name="address" value={data.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section>
          <h3 className="text-lg font-semibold text-primary-600 mb-4 border-b pb-2">Professional Summary</h3>
          <textarea 
            name="summary" 
            value={data.summary} 
            onChange={handleChange} 
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
            placeholder="A brief summary of your professional background..."
          ></textarea>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-lg font-semibold text-primary-600 mb-4 border-b pb-2">Skills</h3>
          <input 
            type="text" 
            value={data.skills.join(', ')} 
            onChange={handleSkillsChange} 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. React, JavaScript, Tailwind CSS (Comma separated)"
          />
        </section>

        {/* Experience */}
        <section>
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-lg font-semibold text-primary-600">Experience</h3>
            <button 
              onClick={() => addArrayItem('experience', { company: '', position: '', duration: '', description: '' })}
              className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="p-4 border rounded-lg bg-slate-50 relative">
                <button 
                  onClick={() => removeArrayItem('experience', index)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input type="text" placeholder="Company Name" value={exp.company} onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                  <input type="text" placeholder="Position" value={exp.position} onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                  <input type="text" placeholder="Duration (e.g. 2020 - Present)" value={exp.duration} onChange={(e) => handleArrayChange('experience', index, 'duration', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none md:col-span-2" />
                </div>
                <textarea 
                  placeholder="Description..." 
                  value={exp.description} 
                  onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)} 
                  className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none resize-none" 
                  rows={2}
                ></textarea>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-lg font-semibold text-primary-600">Education</h3>
            <button 
              onClick={() => addArrayItem('education', { institution: '', degree: '', year: '' })}
              className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg bg-slate-50 relative">
                <button 
                  onClick={() => removeArrayItem('education', index)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 gap-3">
                  <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Degree/Course" value={edu.degree} onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                    <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-lg font-semibold text-primary-600">Projects</h3>
            <button 
              onClick={() => addArrayItem('projects', { title: '', description: '', link: '' })}
              className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
          <div className="space-y-4">
            {data.projects.map((proj, index) => (
              <div key={index} className="p-4 border rounded-lg bg-slate-50 relative">
                <button 
                  onClick={() => removeArrayItem('projects', index)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <input type="text" placeholder="Project Title" value={proj.title} onChange={(e) => handleArrayChange('projects', index, 'title', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                  <input type="text" placeholder="Project Link" value={proj.link} onChange={(e) => handleArrayChange('projects', index, 'link', e.target.value)} className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <textarea 
                  placeholder="Description..." 
                  value={proj.description} 
                  onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)} 
                  className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary-500 outline-none resize-none" 
                  rows={2}
                ></textarea>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ResumeForm;
