import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Works.css';

const projects = [
  {
    title: 'Vehicle Damage Detection',
    description: 'A computer vision pipeline using YOLOv8 and deep learning to detect and classify vehicle damages, enhanced with severity estimation and structured JSON outputs for seamless system integration.',
    tags: ['Python', 'YOLOv8', 'Deep Learning', 'Computer Vision'],
    color: '#c47eb5',
    github: 'https://github.com/architasaha21/Vehicle-Damage-Detection',
    live: '#',
  },
  {
    title: 'Detective.AI',
    description: 'A realtime fraud detection model trained on the IEEE-CIS Fraud Detection dataset using XGBoost & Streamlit to identify and flag fraudulent financial transactions in real time.',
    tags: ['Python', 'XGBoost', 'Streamlit', 'Machine Learning'],
    color: '#9b72cf',
    github: 'https://github.com/architasaha21/Detective.AI',
    live: '#',
  },
  {
    title: 'DeepBot',
    description: 'An intelligent, interactive chatbot built leveraging the power of the DeepSeek API for deep semantic search, contextual natural language understanding, and retrieval.',
    tags: ['JavaScript', 'DeepSeek API', 'NLP', 'GenAI'],
    color: '#ec407a',
    github: 'https://github.com/architasaha21/DeepBot',
    live: '#',
  },
  {
    title: 'Klimate',
    description: 'A sleek, modern weather dashboard built with React, TanStack Query, and shadcn/ui. It fetches real-time weather data based on location, displaying hourly/daily forecasts.',
    tags: ['TypeScript', 'React.js', 'TanStack Query', 'shadcn/ui'],
    color: '#7eb5c4',
    github: 'https://github.com/architasaha21/Klimate',
    live: '#',
  },
  {
    title: 'Mojify',
    description: 'A modern, scroll-animated cocktail website built with React and GSAP. It blends smooth transitions, responsive layouts, and elegant motion effects to showcase craft recipes.',
    tags: ['React', 'GSAP', 'CSS Modules', 'Web Animation'],
    color: '#e8a0bf',
    github: 'https://github.com/architasaha21/Mojify',
    live: '#',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Works() {
  const { ref, inView } = useScrollReveal(0.05);

  return (
    <section id="works" className="section works" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Portfolio</motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Selected Works</motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.14 }}>
          Projects spanning deep learning, Generative AI, machine learning, and clean frontend engineering.
        </motion.p>
        <div className="works__grid">
          {projects.map((project, i) => (
            <motion.div key={project.title} className="works__card glass-card"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}>
              <div className="works__card-header">
                <div className="works__card-dot" style={{ background: `${project.color}30`, border: `2px solid ${project.color}` }} />
                <div className="works__card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={18} /></a>
                  <a href={project.live} aria-label="Live"><FiExternalLink size={18} /></a>
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
