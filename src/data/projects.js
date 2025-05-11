import stayfit from '../assets/stayfit.png';
import swamproute from '../assets/swamproute.jpg';
import astroradar from '../assets/astroradar.png';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    title: 'AstroRadar',
    image: astroradar,
    shortDescription: '3D visualizer for near-Earth objects using NASA APIs and Three.js.',
    fullDescription: [
      "Engineered a 3D visualizer to monitor near-Earth objects using React and NASA’s NEO API, enhancing spatial awareness.",
      "Developed interactive 3D models of Earth, the Moon, and asteroids using Three.js to improve user engagement.",
      "Optimized UI/UX with modular JSX components and custom CSS styling to boost site interactivity and responsiveness."
    ],
    githubLink: 'https://github.com/aideneverageuf/AstroRadar'
  },
  {
    title: 'StayFit',
    image: stayfit,
    shortDescription: 'Fitness tracking web app built with React and integrated database backend.',
    fullDescription: [
      "Utilized JavaScript, HTML, and CSS to create the frontend for a fitness tracking program with React.",
      "Collaborated with a backend team to integrate frontend forms with a live database enabling real-time account creation.",
      "Used JSX functions to parse user inputs and validate them with site requirements as well as verify passwords to enhance security."
    ],
    githubLink: 'https://github.com/saanjpatel/IntroSWEGroup3'
  },
  {
    title: 'SwampRoute',
    image: swamproute,
    shortDescription: 'Campus pathfinder mobile app using React Native, TypeScript, C++, and Flask.',
    fullDescription: [
      "Built a mobile-friendly campus pathfinder using React Native and TypeScript, enabling students to efficiently navigate UF’s campus.",
      "Created a custom C++ backend implementing the A* search algorithm to efficiently calculate shortest paths between campus locations.",
      "Integrated a Flask server to bridge frontend and backend, facilitating seamless user input processing and pathfinding request handling."
    ],
    githubLink: 'https://github.com/aideneverageuf/SwampRoute'
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    shortDescription: 'Personal portfolio site showcasing projects, skills, and education.',
    fullDescription: [
      "Designed and developed a fully responsive portfolio website using React and Vite to showcase projects, skills, and education.",
      "Implemented modular React components (About, Projects, Contact, etc.) for better scalability and maintenance.",
      "Integrated smooth scroll navigation, light/dark mode toggle, dynamic project modals, and professional UI/UX styling.",
      "Deployed site on GitHub Pages with continuous improvements based on modern frontend best practices."
    ],
    githubLink: 'https://github.com/aideneverageuf/aideneverageuf.github.io'
  }
];

export default projects;
