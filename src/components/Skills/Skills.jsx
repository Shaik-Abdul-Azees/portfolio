import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaJava, FaJs, FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaCode
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiJsonwebtokens
} from 'react-icons/si';
import { FiCpu, FiTool } from 'react-icons/fi';
import './Skills.css';

/* ------------------------------------------------------------------
   Skills Section – categorised with animated cards
   ------------------------------------------------------------------ */
const categories = [
  {
    title: 'Programming',
    icon: <FiCpu />,
    skills: [
      { name: 'Java',       icon: <FaJava />,       level: 90 },
      { name: 'JavaScript', icon: <FaJs />,          level: 88 },
      { name: 'TypeScript', icon: <SiTypescript />,  level: 75 },
      { name: 'Python',     icon: <FaPython />,      level: 65 },
    ],
  },
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: [
      { name: 'HTML5',       icon: <FaHtml5 />,       level: 95 },
      { name: 'CSS3',        icon: <FaCss3Alt />,      level: 90 },
      { name: 'Bootstrap',   icon: <FaBootstrap />,    level: 85 },
      { name: 'TailwindCSS', icon: <SiTailwindcss />,  level: 82 },
      { name: 'React.js',    icon: <FaReact />,        level: 90 },
      { name: 'Next.js',     icon: <SiNextdotjs />,    level: 75 },
      { name: 'Redux',       icon: <SiRedux />,        level: 78 },
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Node.js',    icon: <FaNodeJs />,   level: 85 },
      { name: 'Express.js', icon: <SiExpress />,   level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: <SiMongodb />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'MySQL',   icon: <SiMysql />,   level: 72 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <FiTool />,
    skills: [
      { name: 'Git',       icon: <FaGitAlt />,           level: 88 },
      { name: 'GitHub',    icon: <FaGithub />,            level: 90 },
      { name: 'Docker',    icon: <FaDocker />,            level: 65 },
      { name: 'REST APIs', icon: <SiJsonwebtokens />,     level: 85 },
      { name: 'VS Code',   icon: <FaCode />,  level: 92 },
      { name: 'Hoppscotch',icon: <FiTool />,  level: 80 },
      { name: 'JWT & bcrypt', icon: <SiJsonwebtokens />,  level: 85 },
      { name: 'DSA',       icon: <FiCpu />,   level: 90 },
    ],
  },
  {
    title: 'Automation Tools',
    icon: <FiCpu />,
    skills: [
      { name: 'Claude AI',  icon: <FiCpu />, level: 80 },
      { name: 'Cursor AI',  icon: <FiCpu />, level: 78 },
      { name: 'Lovable',    icon: <FiCpu />, level: 75 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <div className={`skills-header ${inView ? 'animate-in' : ''}`}>
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-subtitle">
            A curated toolkit spanning front-end, back-end, databases, and
            developer tools — built through real projects and continuous
            learning.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`skills-tabs ${inView ? 'animate-in' : ''}`}>
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              className={`skill-tab ${i === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(i)}
              id={`skill-tab-${i}`}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="skills-grid" key={activeCategory}>
          {categories[activeCategory].skills.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card-icon">{skill.icon}</div>
              <span className="skill-card-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: inView ? `${skill.level}%` : '0%' }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
