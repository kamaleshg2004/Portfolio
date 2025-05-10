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
            I’m a passionate Java Full Stack Developer with hands-on experience in building dynamic and responsive web applications. My expertise lies in Java (Spring Boot) for backend development and React for creating clean, modern user interfaces. I enjoy solving complex problems and continuously learning new technologies to stay up-to-date in the fast-evolving tech landscape.
          </p>
          <p>
            Whether it's building robust backend APIs with Java Spring Boot or crafting responsive UIs with React, I enjoy creating full-stack web applications that are efficient, scalable, and user-friendly.git add .

          </p>
        </div>

        <div className="about-skills">
          <h3>Skills</h3>
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
