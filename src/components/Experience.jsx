import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiBriefcase, FiMapPin, FiGlobe } from 'react-icons/fi';
import { SiAccenture } from 'react-icons/si';
import './Experience.css';

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Accenture',
    companyIcon: <SiAccenture size={20} />,
    period: 'Jun 2025 — Present',
    location: 'Bangalore',
    locationType: 'In-Office',
    locationIcon: <FiBriefcase size={14} />,
    description: 'Working on enterprise-grade software solutions, contributing to full-stack development and deployment pipelines.',
    tags: ['Full-Stack', 'Enterprise', 'Agile'],
    color: '#a100ff',
  },
  {
    role: 'Web Development Intern',
    company: 'Codeunia',
    companyIcon: <FiGlobe size={20} />,
    period: 'Jul 2025 — Present',
    location: 'Remote',
    locationType: 'Remote',
    locationIcon: <FiMapPin size={14} />,
    description: 'Developed TrackATS.io, an AI-powered recruitment intelligence platform using React.js, Node.js, and REST APIs — automating resume parsing, candidate profiling, and hiring workflows.',
    tags: ['React.js', 'Node.js', 'REST APIs'],
    color: '#c47eb5',
  },
  {
    role: 'Open Source Contributor',
    company: 'Social Summer of Code',
    companyIcon: <FiGlobe size={20} />,
    period: 'Apr 2025 — Jun 2025',
    location: 'Remote',
    locationType: 'Remote',
    locationIcon: <FiMapPin size={14} />,
    description: 'Contributed to Civix and StyleCart — implementing UI enhancements, feature additions, and bug fixes. Merged 10+ contributions involving frontend work, debugging, and project maintenance.',
    tags: ['Open Source', 'Git', 'React'],
    color: '#9b72cf',
  },
];

export default function Experience() {
  const { ref, inView } = useScrollReveal(0.05);

  const headingVariant = {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <motion.p className="section-label" variants={headingVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>Journey</motion.p>
          <motion.h2 className="section-title" variants={headingVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>Experience</motion.h2>
          <motion.p className="section-subtitle" variants={headingVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}>
            Where I've worked and contributed to real-world impact.
          </motion.p>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__line" />
          {experiences.map((exp, i) => (
            <motion.div key={exp.role + exp.company}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}>
              <motion.div className="experience__dot"
                initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.4, type: 'spring' }} />
              <motion.div className="experience__card glass-card" whileHover={{ scale: 1.02 }}>
                <span className="experience__period mono">{exp.period}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <div className="experience__company-row">
                  <span className="experience__company-icon" style={{ color: exp.color }}>{exp.companyIcon}</span>
                  <p className="experience__company">{exp.company}</p>
                  <span className="experience__location mono">
                    {exp.locationIcon} {exp.location}
                  </span>
                </div>
                <p className="experience__desc">{exp.description}</p>
                <div className="experience__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="experience__tag mono">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
