import React, { useState } from 'react';
import './App.css';
import DesktopIcon from './components/DesktopIcon';
import ProjectsDialog from './components/ProjectsDialog';
import AboutDialog from './components/AboutDialog';
import ExperienceDialog from './components/ResumeDialog';
import EducationDialog from './components/EducationDialog';
import SkillsDialog from './components/SkillsDialog';
import ContactDialog from './components/ContactDialog';
import { Toaster } from './components/ui/toaster';
import { Button } from './components/ui/button';
import { profileData } from './mock';
import { FileText, User, Briefcase, GraduationCap, Code2, Mail } from 'lucide-react';

function App() {
  const [openDialog, setOpenDialog] = useState(null);

  const desktopIcons = [
    {
      id: 'projects',
      label: 'Projects.md',
      icon: <FileText className="w-full h-full text-[#6B7F5A]" strokeWidth={2.5} />
    },
    {
      id: 'about',
      label: 'About_Me.txt',
      icon: <User className="w-full h-full text-[#8B6F47]" strokeWidth={2.5} />
    },
    {
      id: 'experience',
      label: 'Work_Exp.Log',
      icon: <Briefcase className="w-full h-full text-[#A0826D]" strokeWidth={2.5} />
    },
    {
      id: 'education',
      label: 'Education.log',
      icon: <GraduationCap className="w-full h-full text-[#6B7F5A]" strokeWidth={2.5} />
    },
    {
      id: 'skills',
      label: 'Skills.json',
      icon: <Code2 className="w-full h-full text-[#8B9D7C]" strokeWidth={2.5} />
    },
    {
      id: 'contact',
      label: 'Contacts_Log',
      icon: <Mail className="w-full h-full text-[#D4A574]" strokeWidth={2.5} />
    },

  ];

  const handleIconClick = (id) => {
    if (id === "resume") {
      window.open(
        "https://drive.google.com/file/d/17sW-imfY5491TJgulKPp6lFgync-nn_d/view?usp=sharing",
        "_blank"
      );
    } else {
      setOpenDialog(id);
    }
  };

  return (
    <div className="App">
      {/* Desktop Background */}
      <div className="desktop-wrapper ">
        {/* Header Bar */}
        <header className="desktop-header h-12.5">
          <div className="header-content" >
            <div className="header-copy">
              <h1 className="desktop-title">{profileData.name}</h1>
              <p className="desktop-subtitle">{profileData.title}</p>
            </div>
            <Button
              type="button"
              className="resume-header-button"
              onClick={() => handleIconClick('resume')}
            >
              <Briefcase className="h-4 w-4" />
              CV Link
            </Button>
          </div>
        </header>

        {/* Desktop Icons */}
        <div className="desktop-icons-container mt-10 ml-10">
          {desktopIcons.map((icon) => (
            <DesktopIcon
              key={icon.id}
              icon={icon.icon}
              label={icon.label}
              onClick={() => handleIconClick(icon.id)}
            />
          ))}
        </div>

        {/* Center Illustration Area */}
        <div className="center-illustration mt-8">
          <div className="illustration-content">
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">portfolio.sh</span>
              </div>
              <div className="code-body">
                <p><span className="code-comment"># Welcome to my portfolio</span></p>
                <p><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}</p>
                <p>  <span className="code-property">name</span>: <span className="code-string">'{profileData.name}'</span>,</p>
                <p>  <span className="code-property">role</span>: <span className="code-string">'{profileData.title}'</span>,</p>
                <p>  <span className="code-property">passion</span>: <span className="code-string">'Passionate about AI, systems, and innovation'</span>,</p>
                <p>  <span className="code-property">status</span>: <span className="code-string">'Open for opportunities'</span></p>
                <p>{'};'}</p>
              </div>
            </div>

            {/* Decorative doodles */}
            <div className="doodle doodle-1">~</div>
            <div className="doodle doodle-2">*</div>
            <div className="doodle doodle-3">+</div>
            <div className="doodle doodle-4">{'{'}</div>
            <div className="doodle doodle-5">{'}'}</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="desktop-footer">
          <p>© 2024 {profileData.name}. Built with React & Tailwind</p>
        </footer>
      </div>

      {/* Dialogs */}
      <ProjectsDialog open={openDialog === 'projects'} onOpenChange={(open) => !open && setOpenDialog(null)} />
      <AboutDialog open={openDialog === 'about'} onOpenChange={(open) => !open && setOpenDialog(null)} />
      <ExperienceDialog open={openDialog === 'experience'} onOpenChange={(open) => !open && setOpenDialog(null)} />
      <EducationDialog open={openDialog === 'education'} onOpenChange={(open) => !open && setOpenDialog(null)} />
      <SkillsDialog open={openDialog === 'skills'} onOpenChange={(open) => !open && setOpenDialog(null)} />
      <ContactDialog open={openDialog === 'contact'} onOpenChange={(open) => !open && setOpenDialog(null)} />

      <Toaster />
    </div>
  );
}

export default App;
