import React, { useEffect, useState } from 'react';

function Navbar({ toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState('');
    
  useEffect(() => {
    const handleScroll = () => {
			const sections = document.querySelectorAll('section');
			const scrollPos = window.scrollY + window.innerHeight / 2; // Middle of screen
			let closestSection = '';
			let minDistance = Infinity;

			sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			const distance = Math.abs(rect.top);

			if (distance < minDistance) {
					minDistance = distance;
					closestSection = section.getAttribute('id');
			}
			});

			setActiveSection(closestSection);
  	};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

  return (
    <nav className='navbar'>
        <div className="nav-container">
            <div className="logo">
            <a href="#">Aiden Everage</a> 
            </div>
            <ul className="nav-links">
            <li><a href="#intro" className={activeSection === 'intro' ? 'active' : ''}>About</a></li>
            <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
            <button onClick={toggleDarkMode} className="theme-toggle">
            🌙 / ☀️
            </button>
        </div>
    </nav>

  );
}

export default Navbar;
