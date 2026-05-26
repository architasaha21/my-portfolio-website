import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'] },
  { category: 'AI / ML', items: ['Python', 'TensorFlow', 'LangChain', 'GenAI'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vercel', 'Postman'] },
  { category: 'Languages', items: ['JavaScript', 'Python', 'C++', 'TypeScript'] },
];

export default function About() {
  const { ref, inView } = useScrollReveal(0.05);

  const headingVariant = {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <motion.div className="about__text"
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <motion.p className="section-label" variants={headingVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>About Me</motion.p>
            <motion.h2 className="section-title" variants={headingVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>Who I Am</motion.h2>
            <p className="about__bio">
              Hey there! I'm Archita — a curious developer who thrives at the intersection of building
              and learning. I'm currently pursuing B.E. in Computer Science at KIIT, Bhubaneswar
              (Class of 2027) and I love crafting things that live on the internet.
            </p>
            <p className="about__bio">
              I don't believe in boxing myself into one domain. From shipping full-stack apps and
              cracking 750+ DSA problems to diving into ML and exploring GenAI — I'm always chasing
              the next challenge. Currently an Associate Software Engineer at Accenture, building
              real-world software every day. ✨
            </p>
            <div className="about__highlights">
              {[
                { num: '750+', label: 'Problems Solved' },
                { num: '10+', label: 'Projects Built' },
                { num: '3+', label: 'Internships' },
              ].map((item, i) => (
                <motion.div key={item.label} className="about__highlight"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}>
                  <span className="about__highlight-num">{item.num}</span>
                  <span className="about__highlight-label mono">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="about__skills"
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="about__skills-title">Tech Stack</h3>
            <div className="about__skills-grid">
              {skills.map((group, i) => (
                <motion.div key={group.category} className="about__skill-group glass-card"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}>
                  <h4 className="about__skill-category mono">{group.category}</h4>
                  <div className="about__skill-items">
                    {group.items.map((item) => (
                      <span key={item} className="about__skill-item">{item}</span>
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
