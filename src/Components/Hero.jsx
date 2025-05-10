import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm <span className="name">KAMALESH G</span></h1>
        <h2>Fullstack Developer</h2>
        <p>Building responsive and modern web applications using React, JavaScript, and Java for full-stack development.</p>
        <div className="hero-buttons">
        <a href="#projects" className="hero-btn">View My Work</a>
        <a href="/Kamalesh G_resume.pdf" download className="hero-btn resume-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
