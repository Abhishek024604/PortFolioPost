import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { education } from '../mock';
import { GraduationCap } from 'lucide-react';

const EducationDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#F5ECD7] border-2 border-[#8B6F47]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3D2817]" style={{ fontFamily: '"Fira Code", monospace' }}>
            Education.log
          </DialogTitle>
          <DialogDescription className="text-[#5D4E37]">
            Academic background and qualifications
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {education.map((edu) => (
            <div key={edu.id} className="bg-[#FAF5EB] p-6 rounded-lg border-2 border-[#A0826D] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-[#6B7F5A] rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3D2817]">{edu.degree}</h3>
                  <p className="text-[#6B7F5A] font-semibold">{edu.institution}</p>
                  <p className="text-sm text-[#A0826D] mt-1">{edu.duration}</p>
                  {edu.cgpa && (
                    <div className="inline-block mt-2 px-3 py-1 bg-[#8B9D7C] text-white rounded-full text-sm font-semibold">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="inline-block mt-2 px-3 py-1 bg-[#8B9D7C] text-white rounded-full text-sm font-semibold">
                      Score: {edu.percentage}
                    </div>
                  )}
                </div>
              </div>
              {edu.highlights && (
                <div className="mt-4 pt-4 border-t-2 border-[#E8DCC4]">
                  <h4 className="text-sm font-bold text-[#3D2817] mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-[#5D4E37] flex items-start gap-2 text-sm">
                        <span className="text-[#6B7F5A] font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationDialog;
