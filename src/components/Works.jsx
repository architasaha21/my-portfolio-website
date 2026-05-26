import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Works.css';

const projects = [
  {
    title: 'TrackATS.io',
    description: 'AI-powered recruitment intelligence platform — automating resume parsing, candidate profiling, ATS scoring, and hiring workflow optimization.',
    tags: ['React.js', 'Node.js', 'REST APIs', 'AI'],
    color: '#c47eb5',
  },
  {
    title: 'Civix — Open Source',
    description: 'Contributed UI enhancements, feature additions, and bug fixes. Collaborated with distributed teams using Git-based workflows and pull requests.',
    tags: ['React', 'Open Source', 'Git', 'UI/UX'],
    color: '#9b72cf',
  },
  {
    title: 'StyleCart — Open Source',
    description: 'Frontend enhancements and project maintenance contributions. Merged 10+ pull requests involving debugging and feature development.',
    tags: ['JavaScript', 'CSS', 'GitHub', 'Frontend'],
    color: '#7eb5c4',
  },
  {
    title: 'Portfolio Website',
    description: 'This very site! A fully responsive, dark/light themed portfolio with Framer Motion animations, terminal-style blog cards, and glassmorphism UI.',
    tags: ['React', 'Framer Motion', 'CSS', 'Vite'],
    color: '#e8a0bf',
  },
  {
    title: 'DSA Visualizer',
    description: 'Interactive algorithm and data structure visualizer to help students understand sorting, searching, and graph algorithms step by step.',
    tags: ['React', 'Algorithms', 'Canvas', 'Education'],
    color: '#ab82df',
  },
  {
    title: 'ML Playground',
    description: 'Experimental workspace for machine learning models — classification, regression, and NLP tasks with interactive Streamlit dashboards.',
    tags: ['Python', 'Streamlit', 'TensorFlow', 'NLP'],
    color: '#82bfd6',
  },
];

export default function Works() {
  const { ref, inView } = useScrollReveal(0.05);
  const hv = { hidden: { opacity: 0, y: 60, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };

  return (
    <section id="works" className="section works" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>Portfolio</motion.p>
        <motion.h2 className="section-title" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>Selected Works</motion.h2>
        <motion.p className="section-subtitle" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}>
          Projects spanning full-stack development, open source, and machine learning.
        </motion.p>

        <div className="works__grid">
          {projects.map((project, i) => (
            <motion.div key={project.title} className="works__card glass-card"
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }} whileHover={{ y: -8 }}>
              <div className="works__card-header">
                <div className="works__card-dot" style={{ background: `${project.color}30`, border: `2px solid ${project.color}` }} />
                <div className="works__card-links">
                  <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="GitHub"><FiGithub size={18} /></motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="Live"><FiExternalLink size={18} /></motion.a>
                </div>
              </div>
              <h3 className="works__card-title">{project.title}</h3>
              <p className="works__card-desc">{project.description}</p>
              <div className="works__card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="works__tag mono" style={{ borderColor: `${project.color}40`, color: project.color }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
