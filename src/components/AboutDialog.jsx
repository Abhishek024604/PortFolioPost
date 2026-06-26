import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { profileData, achievements } from '../mock';

const AboutDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#F5ECD7] border-2 border-[#8B6F47]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3D2817]" style={{ fontFamily: '"Fira Code", monospace' }}>
            About_Me.txt
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div className="bg-[#FAF5EB] p-6 rounded-lg border-2 border-[#A0826D]">
            <h3 className="text-xl font-bold text-[#3D2817] mb-2">{profileData.name}</h3>
            <p className="text-lg text-[#6B7F5A] font-semibold mb-4">{profileData.title}</p>
            <p className="text-[#5D4E37] leading-relaxed italic mb-4">"{profileData.tagline}"</p>
            <p className="text-[#3D2817] leading-relaxed">{profileData.bio}</p>
          </div>

          <div className="bg-[#FAF5EB] p-6 rounded-lg border-2 border-[#A0826D]">
            <h4 className="text-lg font-bold text-[#3D2817] mb-4" style={{ fontFamily: '"Fira Code", monospace' }}>
              Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-[#5D4E37] flex items-start gap-2">
                  <span className="text-[#6B7F5A] font-bold">→</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#8B9D7C] p-4 rounded-lg text-center">
            <p className="text-white font-medium">Currently exploring: System Design & Artificial Intelligence</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
