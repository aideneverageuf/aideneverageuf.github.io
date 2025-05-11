import { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Header />
      <main className="container">
        <About />
        <Education />
        <Projects />
        <Contact />
        <ScrollToTop/>
      </main>
    </>
  );
}

export default App;
