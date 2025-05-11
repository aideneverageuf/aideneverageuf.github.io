import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2><i className="fas fa-project-diagram"></i> My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}

export default Projects;
