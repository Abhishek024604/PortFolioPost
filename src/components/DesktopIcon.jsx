import React from 'react';

const DesktopIcon = ({ icon, label, onClick }) => {
  // Generate random slight rotation for hand-drawn feel
  const randomRotation = Math.random() * 4 - 2; // -2 to 2 degrees
  
  return (
    <div
      onClick={onClick}
      className="desktop-icon group cursor-pointer"
      style={{
        transform: `rotate(${randomRotation}deg)`,
      }}
    >
      <div className="icon-container">
        <div className="icon-paper">
          <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            {icon}
          </div>
          <span className="text-sm font-medium text-[#3D2817] text-center max-w-[100px] leading-tight mt-2 block"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopIcon;
