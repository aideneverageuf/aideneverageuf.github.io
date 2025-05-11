import React from 'react';
import profileImg from '../assets/bodyshotraw.JPG';

function About() {
  return (
    <section id="intro" className="about card">
      <h2><i className="fas fa-user"></i> About Me</h2>
      <div className="intro-content">
        <img src={profileImg} alt="Aiden Everage" className="profile-img" />
        <div className="intro-text">
          <p>
            Hello! I am Aiden Everage, a computer engineering major at the University of Florida.
            I'm interested in hardware and full-stack development. I have experience in Python, 
            C++, React, HTML/CSS, JavaScript, JSX, TypeScript, ARM Programming, and PyTorch. 
            I have gained experience from creating a pathfinding program to help students find classes,
            a program to suggest books to a user, and a website for students to track and set goals 
            for their own fitness. I am continuing to grow my knowledge of computers through Hackathons 
            and learning new APIs/Frameworks that are applicable to the industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
