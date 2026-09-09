import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
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
            <a href="#achievements">Achievements</a>
          </div>
          
          <div className="footer-group">
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="https://github.com/Shaik-Abdul-Azees" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shaik-abdul-azeez-6ba9502b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/abdulazeezshaik/" target="_blank" rel="noreferrer" aria-label="LeetCode">
                <SiLeetcode />
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
