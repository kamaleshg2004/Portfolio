import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaJava } from 'react-icons/fa';
import { SiPostman, SiMysql, SiSpring, SiBootstrap } from 'react-icons/si';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate Frontend Developer with a strong foundation in building responsive and interactive web interfaces. I specialize in modern frontend technologies like HTML, CSS, JavaScript, and React, and have hands-on experience creating clean, scalable, and user-centric applications.
          </p>
          <p>
           I enjoy turning complex problems into elegant UI solutions and stay current with evolving trends to ensure my designs are both functional and visually engaging. Whether it’s developing reusable React components or optimizing performance for better UX, I focus on delivering polished frontend experiences.

          </p>
        </div>

        <div className="about-skills">
          <h2>Skills</h2>
          <div className="skill-cards">
            <div className="skill-card">
                <FaHtml5 className="skill-icon" />
                <span>HTML5</span>
            </div>
            <div className="skill-card">
                <FaCss3Alt className="skill-icon" />
                <span>CSS3</span>
            </div>
            <div className="skill-card">
                <SiBootstrap className="skill-icon" />
                <span>Bootstrap</span>
            </div>
            <div className="skill-card">
                <FaJs className="skill-icon" />
                <span>JavaScript</span>
            </div>
            <div className="skill-card">
                <FaReact className="skill-icon" />
                <span>React</span>
            </div>
            <div className="skill-card">
                <FaGithub className="skill-icon" />
                <span>GitHub</span>
            </div>
            <div className="skill-card">
                <FaJava className="skill-icon" />
                <span>Java</span>
            </div>
            <div className="skill-card">
                <SiPostman className="skill-icon" />
                <span>Postman</span>
            </div>
            <div className="skill-card">
                <SiMysql className="skill-icon" />
                <span>SQL</span>
            </div>
            <div className="skill-card">
                <SiSpring className="skill-icon" />
                <span>Spring Boot</span>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
