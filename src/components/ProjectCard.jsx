import React from 'react';

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
    </div>
  );
}

export default ProjectCard;
