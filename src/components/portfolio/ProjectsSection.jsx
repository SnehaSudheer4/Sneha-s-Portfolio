import React from 'react';

import INFO from '../../data/user';
import Project from '../../components/projects/project';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-10 w-32 h-32 opacity-20 pointer-events-none anim-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-diary-sage">
          <path d="M50 0 C50 30, 80 50, 100 50 C80 50, 50 80, 50 100 C50 80, 20 50, 0 50 C20 50, 50 30, 50 0 Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="font-handwriting text-5xl md:text-6xl text-diary-brown relative z-10">
              Featured Projects
            </h2>
            <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-6 text-diary-pink/50 z-0" viewBox="0 0 200 20" preserveAspectRatio="none">
              <path d="M5,15 Q50,0 100,10 T195,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="anim-scribble"/>
            </svg>
          </div>
          <p className="font-body text-diary-brown/70 mt-6 max-w-2xl mx-auto text-lg">
            A collection of applications and tools I've built throughout my coding journey.
          </p>
        </div>

        {/* Postcards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
          {INFO.projects.map((project, index) => (
            <div className="w-full flex justify-center" key={index}>
              <Project
                logo={project.logo}
                title={project.title}
                description={project.description}
                linkText={project.linkText}
                link={project.link}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="mt-16 text-center">
          <a href="#projects" className="inline-flex items-center gap-2 font-handwriting text-3xl text-diary-sage hover:text-diary-brown transition-colors group">
            <span className="relative">
              Browse all projects
              <span className="absolute bottom-1 left-0 w-full h-1 bg-diary-sage/30 group-hover:bg-diary-brown/40 transition-colors"></span>
            </span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
