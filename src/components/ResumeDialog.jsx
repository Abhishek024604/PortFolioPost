import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { experience } from '../mock';
import { Briefcase } from 'lucide-react';

const ResumeDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#F5ECD7] border-2 border-[#8B6F47]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3D2817]" style={{ fontFamily: '"Fira Code", monospace' }}>
            {/* Resume.pdf */}
            Work_Exp.Log
          </DialogTitle>
          <DialogDescription className="text-[#5D4E37]">
            Professional experience and work history
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-[#8B9D7C] last:border-l-0 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#6B7F5A] border-2 border-[#F5ECD7]"></div>
              <div className="bg-[#FAF5EB] p-6 rounded-lg border-2 border-[#A0826D] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-[#8B9D7C] rounded-lg">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3D2817]">{exp.role}</h3>
                    <p className="text-[#6B7F5A] font-semibold">{exp.company}</p>
                    <p className="text-sm text-[#A0826D] mt-1">{exp.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-[#5D4E37] flex items-start gap-2">
                      <span className="text-[#6B7F5A] font-bold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDialog;
