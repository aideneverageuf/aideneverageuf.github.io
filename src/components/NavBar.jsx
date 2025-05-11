import React, { useState, useEffect } from 'react';

function Navbar({ toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#">Aiden Everage</a> 
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#intro" onClick={closeMenu} className={activeSection === 'intro' ? 'active' : ''}>About</a></li>
          <li><a href="#education" onClick={closeMenu} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#projects" onClick={closeMenu} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          <li><button onClick={() => { toggleDarkMode(); closeMenu(); }} className="theme-toggle">🌙 / ☀️</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
