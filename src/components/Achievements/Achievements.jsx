import { useInView } from 'react-intersection-observer';
import { 
  FaCloud, 
  FaBrain, 
  FaLinux, 
  FaLaptopCode, 
  FaGlobe, 
  FaGraduationCap, 
  FaRocket,
  FaRobot,
  FaCheckCircle
} from 'react-icons/fa';
import './Achievements.css';

const achievementsList = [
  {
    id: 'aws-cloud',
    icon: <FaCloud />,
    category: 'Cloud Computing',
    title: 'Exploring Cloud Computing with AWS',
    badge: 'AWS Academy Certification',
    description: `I successfully completed the AWS Academy Cloud Foundations certification, which helped me build a strong foundation in cloud computing and Amazon Web Services. Through this learning experience, I gained knowledge of AWS core services, cloud concepts, security and architecture fundamentals, billing, pricing, and cloud best practices.`,
    highlights: ['AWS Core Services', 'Cloud Security & Architecture', 'Billing & Cloud Best Practices']
  },
  {
    id: 'aws-genai',
    icon: <FaRobot />,
    category: 'Generative AI',
    title: 'Building Knowledge in Generative AI',
    badge: 'AWS Academy Graduate',
    description: `I earned the AWS Academy Graduate – Generative AI Foundations certification. This learning experience introduced me to the fundamentals of Generative AI, Large Language Models (LLMs), real-world AI applications, responsible AI, and emerging AI technologies.`,
    highlights: ['LLMs & Generative AI', 'Real-world AI Applications', 'Responsible AI Practices']
  },
  {
    id: 'ibm-ai',
    icon: <FaBrain />,
    category: 'Artificial Intelligence',
    title: 'Strengthening My Artificial Intelligence Foundation',
    badge: 'IBM SkillsBuild',
    description: `Completed "Getting Started with Artificial Intelligence" through IBM SkillsBuild. The program strengthened my understanding of Artificial Intelligence fundamentals, Machine Learning concepts, practical AI applications, and emerging technologies.`,
    highlights: ['AI & Machine Learning Concepts', 'Practical AI Applications', 'Emerging Tech Stack']
  },
  {
    id: 'redhat-linux',
    icon: <FaLinux />,
    category: 'Linux & System Admin',
    title: 'Developing Linux Fundamentals',
    badge: 'Red Hat RH104-RHA',
    description: `Successfully completed Red Hat's Getting Started with Linux Fundamentals (RH104-RHA) training. Strengthened command-line operations, file systems, user management, system administration concepts, and essential Linux tools.`,
    highlights: ['Command-Line & CLI Tools', 'File Systems & User Management', 'System Administration']
  },
  {
    id: 'mern-internship',
    icon: <FaLaptopCode />,
    category: 'Full Stack Development',
    title: 'Full Stack Development Experience (MERN)',
    badge: 'SmartBridge x APSCHE',
    description: `Completed a Full Stack Development (MERN) Internship through SmartBridge in collaboration with APSCHE. Practical exposure to MERN Stack development, React.js, Node.js, Express.js, MongoDB, RESTful APIs, and database management.`,
    highlights: ['React.js & Node.js', 'MongoDB Database Management', 'Web App Architecture']
  },
  {
    id: 'aiml-internship',
    icon: <FaRobot />,
    category: 'AI & Machine Learning',
    title: 'Artificial Intelligence & Machine Learning Internship',
    badge: 'SmartBridge x APSCHE',
    description: `Completed an AI & ML Internship through SmartBridge in collaboration with APSCHE. Gained exposure to AI concepts, ML fundamentals, practical technology applications, analytical thinking, and industry-oriented problem solving.`,
    highlights: ['ML Model Workflows', 'Analytical Problem Solving', 'Industry Applications']
  },
  {
    id: 'portfolio-project',
    icon: <FaGlobe />,
    category: 'Web Portfolio',
    title: 'Building My Personal Portfolio',
    badge: 'Personal Milestone',
    description: `Created and published my personal portfolio website. Brought together projects, technical skills, Full Stack Development experience, Java and DSA learning, AI interests, and academic journey with modern responsive design.`,
    highlights: ['Responsive Frontend Design', 'Project Presentation', 'Professional Presence']
  },
  {
    id: 'nptel-chem',
    icon: <FaGraduationCap />,
    category: 'NPTEL Certification',
    title: 'Concepts of Chemistry for Engineering',
    badge: 'IIT Bombay / SWAYAM',
    description: `Completed the NPTEL Online Certification course on "Concepts of Chemistry for Engineering" offered by IIT Bombay through SWAYAM. Strengthened scientific fundamentals while improving analytical and problem-solving skills.`,
    highlights: ['IIT Bombay Coursework', 'Engineering Fundamentals', 'Analytical Thinking']
  }
];

const techSkills = [
  'Java',
  'DSA',
  'Full Stack Development',
  'Artificial Intelligence',
  'Cloud Computing',
  'Linux'
];

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section achievements" id="achievements" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`achievements-header ${inView ? 'animate-in' : ''}`}>
          <span className="section-label">Certifications & Milestones</span>
          <h2 className="section-title">
            My Learning & <span className="gradient-text">Achievement Journey</span>
          </h2>
          <p className="achievements-intro">
            My journey in software development has been driven by continuous learning, practical experience, 
            and a strong interest in emerging technologies such as Artificial Intelligence, Cloud Computing, Linux, 
            and Full Stack Development.
          </p>
        </div>

        {/* Grid of Achievement Cards */}
        <div className={`achievements-grid ${inView ? 'animate-in' : ''}`}>
          {achievementsList.map((item, idx) => (
            <div 
              className="achievement-card" 
              key={item.id}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="card-top">
                <div className="achievement-icon">{item.icon}</div>
                <span className="achievement-badge">{item.badge}</span>
              </div>
              <span className="achievement-category">{item.category}</span>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
              
              <div className="achievement-highlights">
                {item.highlights.map((hl, hIdx) => (
                  <span key={hIdx} className="highlight-tag">
                    <FaCheckCircle className="check-icon" /> {hl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Looking Ahead Banner */}
        <div className={`looking-ahead-card ${inView ? 'animate-in' : ''}`}>
          <div className="looking-ahead-content">
            <div className="looking-ahead-header">
              <div className="rocket-icon">
                <FaRocket />
              </div>
              <div>
                <h3>🚀 Looking Ahead</h3>
                <p className="looking-ahead-subtitle">Building impactful, scalable, and intelligent software products</p>
              </div>
            </div>

            <div className="stack-combination">
              <span className="stack-label">Current Focus & Skill Combination:</span>
              <div className="stack-pills">
                {techSkills.map((skill, index) => (
                  <span key={skill} className="stack-pill">
                    {skill}
                    {index < techSkills.length - 1 && <span className="pill-plus">+</span>}
                  </span>
                ))}
              </div>
            </div>

            <p className="looking-ahead-text">
              Each certification, internship, and project has contributed to my growth as a Software Engineer. 
              I believe technology is constantly evolving, and continuous learning is essential for becoming a 
              strong software professional. My goal is to keep building real-world applications, strengthen my 
              problem-solving abilities, explore AI-powered software solutions, and develop the skills required 
              to contribute effectively to modern technology teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
