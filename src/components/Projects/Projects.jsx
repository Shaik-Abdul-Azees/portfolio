import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact, SiMui, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiOpencv,
  SiTensorflow, SiFlask, SiTailwindcss,
} from 'react-icons/si';
import './Projects.css';

/* ------------------------------------------------------------------
   Projects Section – filterable project cards
   ------------------------------------------------------------------ */
const projects = [
  {
    id: 1,
    title: 'Fitness Exercise Recommendation System',
    description:
      'A comprehensive fitness application with 1000+ exercises, advanced filtering, pagination, and YouTube video recommendations. Built with a beautiful Material UI interface and real-time API integration.',
    tags: ['React'],
    techStack: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Material UI', icon: <SiMui /> },
      { name: 'RapidAPI', icon: null },
    ],
    features: [
      '1000+ exercises with categories',
      'Advanced filtering & pagination',
      'YouTube video recommendations',
      'Responsive Material UI design',
    ],
    github: 'https://github.com/Shaik-Abdul-Azees',
    demo: '#',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'TalentIQ – Interview Platform',
    description:
      'A full-featured interview platform with real-time video calling, screen sharing, live chat, integrated code editor with execution, role-based authentication, and recording & evaluation system.',
    tags: ['MERN'],
    techStack: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    features: [
      'Video calling with screen sharing',
      'Live chat & code editor',
      'Role-based authentication (JWT)',
      'Recording & evaluation system',
    ],
    github: 'https://github.com/Shaik-Abdul-Azees',
    demo: '#',
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Driver Drowsiness Detection System',
    description:
      'An AI-powered computer vision system that monitors driver alertness in real time via webcam. Combines eye aspect ratio analysis and yawn detection with a Flask web dashboard to trigger audio alerts before fatigue leads to accidents.',
    tags: ['AI'],
    techStack: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Flask', icon: <SiFlask /> },
    ],
    features: [
      'Simultaneous eye closure & yawn detection',
      'MRL Eye Dataset–trained classification model',
      'Real-time webcam video processing',
      'Flask dashboard with audio alert system',
    ],
    github: 'https://github.com/Shaik-Abdul-Azees/DriverDrowsinessDetectionSystem',
    demo: '#',
    color: '#10b981',
  },
  {
    id: 4,
    title: 'DevInspect AI',
    description:
      'A full-stack AI code review and security audit platform with automated inspections, Monaco editor workbench, split-diff fix suggestions, contextual AI chat, audit history, and PDF export for compliance reporting.',
    tags: ['AI'],
    techStack: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Gemini AI', icon: null },
    ],
    features: [
      'AST-based security & quality analysis',
      'Monaco editor with split-diff viewer',
      'GitHub import & drag-and-drop file upload',
      'Audit history, sharing & PDF export',
    ],
    github: 'https://github.com/Shaik-Abdul-Azees',
    demo: '#',
    color: '#0ea5e9',
  },
];

const filters = ['All', 'React', 'MERN', 'AI'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className={`projects-header ${inView ? 'animate-in' : ''}`}>
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications showcasing full-stack development, API
            integration, and modern UI/UX design.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`project-filters ${inView ? 'animate-in' : ''}`}>
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
              id={`project-filter-${f.toLowerCase()}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projects-list">
          {filtered.map((project, i) => (
            <div
              className="project-card"
              key={project.id}
              style={{
                '--project-color': project.color,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Header area */}
              <div className="project-card-header">
                <div
                  className="project-indicator"
                  style={{ background: project.color }}
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              {/* Features */}
              <ul className="project-features">
                {project.features.map((f) => (
                  <li key={f}>
                    <span className="feature-bullet">▹</span> {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack badges */}
              <div className="project-tech">
                {project.techStack.map((t) => (
                  <span className="tech-badge" key={t.name}>
                    {t.icon && <span className="tech-icon">{t.icon}</span>}
                    {t.name}
                  </span>
                ))}
              </div>

              {/* Footer links */}
              <div className="project-card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
