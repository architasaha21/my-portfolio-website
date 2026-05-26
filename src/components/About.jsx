import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const skillGroups = [
  { 
    category: 'Languages', 
    items: ['Python', 'C++', 'JavaScript', 'Java'],
    color: '#ff80b3', 
    darkColor: '#ff4d94',
    bg: '#fff0f5'
  },
  { 
    category: 'Frontend', 
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    color: '#80d4ff', 
    darkColor: '#33bcff',
    bg: '#e6f7ff'
  },
  { 
    category: 'Backend', 
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
    color: '#80ffaa', 
    darkColor: '#33ff77',
    bg: '#ebffef'
  },
  { 
    category: 'Databases', 
    items: ['MongoDB', 'SQL'],
    color: '#ffe066', 
    darkColor: '#ffd11a',
    bg: '#fffae6'
  },
  { 
    category: 'Core CS', 
    items: ['DSA', 'OOP', 'OS', 'Computer Networks', 'Distributed Systems'],
    color: '#ff8080', 
    darkColor: '#ff4d4d',
    bg: '#ffe6e6'
  },
  { 
    category: 'Tools & Cloud', 
    items: ['Git', 'GitHub', 'GCP', 'AWS', 'Postman'],
    color: '#c1a3ff', 
    darkColor: '#9e66ff',
    bg: '#f5f0ff'
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { ref, inView } = useScrollReveal(0.05);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <motion.div className="about__text"
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>About Me</motion.p>
            <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Who I Am</motion.h2>
            <p className="about__bio">
              Hey there! I'm <strong>Archita Saha</strong> — a computer science student at <strong>KIIT, Bhubaneswar (Class of 2027)</strong> with a strong focus on logical problem-solving and software development. I enjoy building functional, well-designed projects for the web.
            </p>
            <p className="about__bio">
              I don't define myself by a single domain. Whether it's developing clean user interfaces, building server logic, solving DSA challenges, or working on Machine Learning models, I'm always eager to learn and build. <strong>I am actively seeking Software Engineering internships or AI/ML-focused opportunities</strong> where I can collaborate, learn, and build meaningful software! 🚀✨
            </p>
            <div className="about__highlights">
              {[
                { num: '750+', label: 'Problems Solved' },
                { num: '10+', label: 'Projects Built' },
                { num: '9.03', label: 'CGPA' },
              ].map((item, i) => (
                <motion.div key={item.label} className="about__highlight"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}>
                  <span className="about__highlight-num">{item.num}</span>
                  <span className="about__highlight-label mono">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about__skills"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
            
            <div className="skills-brutal__header">
              <span className="skills-brutal__title">SKILLS ✨</span>
            </div>

            <div className="about__skills-grid-brutal">
              {skillGroups.map((group, i) => (
                <motion.div key={group.category} className="skills-brutal__card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -6 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    default: { delay: 0.2 + i * 0.06, duration: 0.4 } 
                  }}>
                  <div className="skills-brutal__badge" style={{ backgroundColor: group.color }}>
                    {group.category}
                  </div>
                  <div className="skills-brutal__items">
                    {group.items.map((item) => (
                      <span key={item} className="skills-brutal__item">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
