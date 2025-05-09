import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>Feel free to reach out via the form below or through my social media!</p>
          
          <div className="contact-links">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/kamalesh-gauthaman-968962224/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/kamaleshg2004" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:kamaleshgauthaman@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/f/xgvkzole" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
