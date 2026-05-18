import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../../assets/photo.png';
import './Hero.css';

/* ------------------------------------------------------------------
   Hero Section – big intro with typing animation and CTA buttons
   ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section className="hero section" id="hero">
      {/* Background decoration */}
      <div className="hero-bg-grid" />
      <div className="bg-orb hero-orb-1" />
      <div className="bg-orb hero-orb-2" />

      <div className="container hero-container">
        {/* Left – Text */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Abdul Azees</span>
          </h1>

          <div className="hero-typing">
            <TypeAnimation
              sequence={[
                'Aspiring Software Engineer',
                2000,
                'AI & ML Engineer',
                2000,
                'MERN Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <p className="hero-desc">
            B.Tech CSE (AI &amp; ML) student at SVCE with a passion for
            building scalable web applications and solving complex algorithmic
            problems. Experienced in full-stack development with the MERN stack
            and exploring the frontiers of Artificial Intelligence.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" id="hero-view-projects">
              <span>View Projects</span>
              <FiArrowRight />
            </a>
            <a
              href="/Abdul_Azees_Resume.pdf"
              download
              className="btn btn-outline"
              id="hero-download-resume"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Shaik-Abdul-Azees" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shaik-abdul-azeez-6ba9502b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://leetcode.com/abdulazeesshaik" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="social-link">
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        {/* Right – Profile image placeholder */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring" />
            <div className="hero-image-placeholder">
              <img src={profileImg} alt="Abdul Azees" className="hero-profile-img" />
            </div>
            <div className="hero-image-dots" />
          </div>

          {/* Floating badges */}

          <div className="float-badge badge-2">
            <span className="float-badge-icon">💻</span>
            <div>
              <strong>MERN Stack</strong>
              <small>Full-Stack Developer</small>
            </div>
          </div>
          <div className="float-badge badge-3">
            <span className="float-badge-icon">🤖</span>
            <div>
              <strong>AI & ML</strong>
              <small>Engineer</small>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
