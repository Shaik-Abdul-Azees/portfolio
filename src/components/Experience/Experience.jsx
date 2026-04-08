import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Artificial Intelligence Intern',
    company: 'Infosys Springboard',
    date: 'Aug 2024 - Nov 2025',
    description: 'Gained hands-on experience in AI & ML. Worked on real-time problem-solving using Python, data preprocessing, and model development.',
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'SmartInternz (Remote)',
    date: 'May 2025 - July 2025',
    description: 'Developed and deployed full-stack MERN applications. Collaborated using Git/GitHub and agile workflows.',
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    type: 'education',
    title: 'B.Tech in Computer Science (AI & ML)',
    company: 'Sri Venkateswara College of Engineering, Kadapa',
    date: '2022 - 2026',
    description: 'Current CGPA: 7.5',
    icon: <FaGraduationCap />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Intermediate (11th - 12th)',
    company: 'Sri Chaitanya Junior College, Kadapa',
    date: '2020 - 2022',
    description: 'Percentage: 75.2%',
    icon: <FaGraduationCap />,
  },
  {
    id: 5,
    type: 'education',
    title: 'Secondary School (10th)',
    company: 'Pavan E.M High School, Kadapa',
    date: '2019 - 2020',
    description: 'Percentage: 98.0%',
    icon: <FaGraduationCap />,
  }
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <div className={`experience-header ${inView ? 'animate-in' : ''}`}>
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className={`timeline ${inView ? 'animate-in' : ''}`}>
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={exp.id} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
