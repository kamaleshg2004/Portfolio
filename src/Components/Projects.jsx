import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of the project. This can be a web app, a tool, or anything you’ve worked on.',
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'Project 2',
      description: 'A description of the project. Highlight what you learned and the technologies used.',
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Project 3',
      description: 'A description of the project. Briefly mention the tech stack or specific features.',
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
  {projects.map((project, index) => (
    <div key={index} className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
