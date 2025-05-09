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
            I'm a passionate frontend developer who loves crafting visually engaging and user-friendly web experiences. I specialize in building responsive interfaces using React, and I constantly seek to improve my skills with the latest web technologies.
          </p>
          <p>
            Whether it's transforming a UI design into a dynamic app or optimizing performance for users, I thrive on creating web solutions that are both beautiful and functional.
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
