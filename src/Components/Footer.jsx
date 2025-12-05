import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/kamaleshg2004" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/g-kamalesh/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more if needed */}
      </div>
      <p>© {new Date().getFullYear()} Kamalesh G. All rights reserved.</p>
    </footer>
  );
}
