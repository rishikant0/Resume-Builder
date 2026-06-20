import React from 'react';
import { FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-primary-600 to-accent-500 p-2 rounded-xl shadow-lg">
            <FileText className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-accent-600">
            ResumeAI
          </span>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
