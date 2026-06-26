import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { profileData } from '../mock';
import { toast } from '../hooks/use-toast';

const ContactDialog = ({ open, onOpenChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    { icon: Github, label: 'GitHub', url: profileData.github, color: 'bg-[#3D2817]' },
    { icon: Linkedin, label: 'LinkedIn', url: profileData.linkedin, color: 'bg-[#0077B5]' },
    { icon: Mail, label: profileData.email, onClick: handleCopyEmail, color: 'bg-[#8B6F47]' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#F5ECD7] border-2 border-[#8B6F47]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3D2817]" style={{ fontFamily: '"Fira Code", monospace' }}>
            Contact_Log
          </DialogTitle>
          <DialogDescription className="text-[#5D4E37]">
            Let's connect and build something amazing together
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div className="bg-[#FAF5EB] p-6 rounded-lg border-2 border-[#A0826D]">
            <h3 className="text-lg font-bold text-[#3D2817] mb-4">Get in Touch</h3>
            <p className="text-[#5D4E37] mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out through any of the platforms below!
            </p>
            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <div key={index}>
                  {link.url ? (
                    <Button
                      className={`w-full ${link.color} hover:opacity-90 text-white justify-start gap-3 h-auto py-4`}
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-5 h-5" />
                        <span className="flex-1 text-left">{link.label}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className={`w-full ${link.color} hover:opacity-90 text-white justify-start gap-3 h-auto py-4`}
                      onClick={link.onClick}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="flex-1 text-left">{link.label}</span>
                      <span className="text-xs opacity-75">{copied ? 'Copied!' : 'Click to copy'}</span>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#8B9D7C] p-6 rounded-lg text-center">
            <p className="text-white font-medium">
              Currently available for internships and freelance projects
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
