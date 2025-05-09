import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hello, I'm <span>KAMALESH G</span></h1>
        <h2>Fullstack Developer</h2>
        <p>I build clean and modern web interfaces using React and CSS.</p>
        <div className="hero-buttons">
        <a href="#projects" className="hero-btn">View My Work</a>
        <a href="/Kamalesh G_resume.pdf" download className="hero-btn resume-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
