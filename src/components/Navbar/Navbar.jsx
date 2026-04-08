import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

/* ------------------------------------------------------------------
   Navbar – sticky top navigation with dark/light toggle
   ------------------------------------------------------------------ */
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMobile}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Abdul</span>
          <span className="logo-slash"> /</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMobile}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a href="#contact" className="navbar-cta" onClick={closeMobile}>
            Hire Me
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && <div className="mobile-overlay" onClick={closeMobile} />}
    </nav>
  );
}
