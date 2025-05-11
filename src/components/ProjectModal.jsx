import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay" 
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="modal-content" 
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          <img src={project.image} alt={project.title} className="modal-image" />
          <h2>{project.title}</h2>
          <ul className="modal-description">
            {project.fullDescription.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
              <i className="fab fa-github"></i> GitHub Repository
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
