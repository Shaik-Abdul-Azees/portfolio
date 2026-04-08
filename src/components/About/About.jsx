import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import './About.css';

/* ------------------------------------------------------------------
   About Section – personal bio with highlight cards
   ------------------------------------------------------------------ */
const highlights = [
  { icon: <FiCode size={22} />,       label: 'DSA',          value: '300+ Problems',    accent: '#6366f1' },
  { icon: <FiCpu size={22} />,        label: 'AI & ML',      value: 'Infosys Intern',   accent: '#8b5cf6' },
  { icon: <FiDatabase size={22} />,   label: 'Full-Stack',   value: 'MERN Developer',   accent: '#a78bfa' },
  { icon: <FiTrendingUp size={22} />, label: 'Progress',     value: '7.5 CGPA',         accent: '#c4b5fd' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className={`about-grid ${inView ? 'animate-in' : ''}`}>
          {/* Left – Summary */}
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Passionate about <span className="gradient-text">building</span> &amp;{' '}
              <span className="gradient-text">problem-solving</span>
            </h2>
            <p className="about-description">
              I'm a 4th-year B.Tech Computer Science (AI &amp; ML) student at
              <strong> Sri Venkateswara College of Engineering</strong>, driven by
              curiosity and a deep passion for creating impactful software. My
              journey blends strong <strong>Data Structures &amp; Algorithms</strong>{' '}
              fundamentals with hands-on <strong>full-stack web development</strong>.
            </p>
            <p className="about-description">
              Having solved <strong>300+ problems on LeetCode</strong> and <strong>100+ on GeeksforGeeks</strong>, and built
              production-grade MERN applications, I thrive on turning complex
              problems into elegant, scalable solutions. Currently exploring
              <strong> AI/ML</strong> to build intelligent systems that make a
              real-world difference.
            </p>

            <div className="about-stats">
              {highlights.map((h) => (
                <div
                  className="stat-card"
                  key={h.label}
                  style={{ '--card-accent': h.accent }}
                >
                  <div className="stat-icon">{h.icon}</div>
                  <div>
                    <strong>{h.value}</strong>
                    <span>{h.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Code card */}
          <div className="about-visual">
            <div className="code-card">
              <div className="code-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <pre className="code-block">
                <code>
{`const abdulAzees = {
  education: "B.Tech CSE (AI & ML)",
  college:   "SVCE (2022–2026)",
  cgpa:      7.5,
  skills: [
    "React", "Node.js", "Express",
    "MongoDB", "Python", "Java"
  ],
  passions: [
    "Problem Solving",
    "Full-Stack Dev",
    "Artificial Intelligence"
  ],
  motto: "Build. Learn. Repeat. 🚀"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
