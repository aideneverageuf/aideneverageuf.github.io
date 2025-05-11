import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact card">
      <h2><i className="fas fa-envelope"></i> Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:aideneverage@ufl.edu" className="contact-link">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://www.linkedin.com/in/aideneverage/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
