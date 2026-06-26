import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { skills } from '../mock';

const SkillsDialog = ({ open, onOpenChange }) => {
  const skillCategories = [
    { title: 'Programming Languages', items: skills.languages, color: 'bg-[#6B7F5A]' },
    { title: 'Frontend Technologies', items: skills.frontend, color: 'bg-[#8B9D7C]' },
    { title: 'Backend Technologies', items: skills.backend, color: 'bg-[#A0826D]' },
    { title: 'AI & ML', items: skills.AI, color: 'bg-[#D4A574]' },
    { title: 'Databases', items: skills.databases, color: 'bg-[#D4A574]' },
    { title: 'Tools & Platforms', items: skills.tools, color: 'bg-[#8B6F47]' },
    { title: 'Core Concepts', items: skills.concepts, color: 'bg-[#6B7F5A]' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#F5ECD7] border-2 border-[#8B6F47]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3D2817]" style={{ fontFamily: '"Fira Code", monospace' }}>
            Skills.json
          </DialogTitle>
          <DialogDescription className="text-[#5D4E37]">
            Technical skills and competencies
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#FAF5EB] p-6 rounded-lg border-2 border-[#A0826D]">
              <h3 className="text-lg font-bold text-[#3D2817] mb-4" style={{ fontFamily: '"Fira Code", monospace' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    className={`${category.color} text-white border-none px-3 py-1 hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsDialog;
