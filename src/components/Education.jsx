import React from 'react';

function Education() {
  return (
    <section id="education" className="education card">
      <h2><i className="fas fa-university"></i> Education</h2>
      <div className="education-content">
        <p className="university">University of Florida | Computer Engineering | Second Year</p>
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-item"><i className="fas fa-code"></i> C++</div>
            <div className="skill-item"><i className="fab fa-python"></i> Python</div>
            <div className="skill-item"><i className="fab fa-html5"></i> HTML/CSS</div>
            <div className="skill-item"><i className="fab fa-js"></i> JavaScript</div>
            <div className="skill-item"><i className="fab fa-react"></i> JSX</div>
            <div className="skill-item"><i className="fas fa-code-branch"></i> TypeScript</div>
            <div className="skill-item"><i className="fab fa-react"></i> React</div>
            <div className="skill-item"><i className="fa-solid fa-fire-flame-curved"></i> PyTorch</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
