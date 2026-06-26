import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { projects } from '../mock';

const ProjectsDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#F5ECD7] border-2 border-[#8B6F47]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3D2817]" style={{ fontFamily: '"Fira Code", monospace' }}>
            Projects.md
          </DialogTitle>
          <DialogDescription className="text-[#5D4E37]">
            A collection of my software engineering projects
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {projects.map((project) => (
            <Card key={project.id} className="bg-[#FAF5EB] border-[#A0826D] hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-[#3D2817]">{project.title}</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="bg-[#8B9D7C] text-white border-none">{project.category}</Badge>
                      <Badge variant="outline" className={project.status === 'Completed' ? 'bg-[#6B7F5A] text-white border-none' : 'bg-[#D4A574] text-white border-none'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="sm" variant="ghost" className="hover:bg-[#E8DCC4]" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" variant="ghost" className="hover:bg-[#E8DCC4]" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#5D4E37] mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-[#E8DCC4] text-[#3D2817]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsDialog;
