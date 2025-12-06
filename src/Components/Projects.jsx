import './Projects.css';
import restaurantimg from '../assets/restaurant.png';
import jobportalimg from '../assets/jobportal.png';
import travelimg from '../assets/travel.png';

export default function Projects() {
  const projects = [
    {
      image: restaurantimg,
      title: 'Restaurant Website',
      description: 'Built a static restaurant website with multiple pages in a clean, structured layout.',
      github: 'https://github.com/kamaleshg2004/Restaurant-website',
      live: 'https://goldenspoonn.netlify.app/',
    },
    {
      image: jobportalimg,
      title: 'Job Portal Website ',
      description: 'Built a fully responsive multi-page job portal with role-based access for recruiters and job seekers.',
      github: 'https://github.com/kamaleshg2004/Techhirehub',
      live: 'https://techhirehub.netlify.app/',
    },
    {
      image: travelimg,
      title: 'Travel Booking App',
      description: 'Developed a responsive travel booking website featuring packages, contact and booking.',
      github: 'https://github.com/kamaleshg2004/Travel-Booking-App',
      live: 'https://gotripp.netlify.app/',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
  {projects.map((project, index) => (
    <div key={index} className="project-card">
  <img src={project.image} alt={project.title} className="project-img" />

  <h3>{project.title}</h3>
  <p>{project.description}</p>

  <div className="project-links">
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
      GitHub
    </a>
    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-demo">
      Live Demo
    </a>
  </div>
</div>

  ))}
</div>

    </section>
  );
}
