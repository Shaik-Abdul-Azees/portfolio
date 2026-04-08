import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="logo-text">Abdul<span className="gradient-text">.dev</span></span>
          <p className="footer-motto">Building intelligent, scalable, and modern digital experiences.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-group">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
          
          <div className="footer-group">
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="https://github.com/abdulazeesshaik" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abdulazeesshaik" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Abdul Azees. All rights reserved.</p>
      </div>
    </footer>
  );
}
