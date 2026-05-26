import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiMapPin } from 'react-icons/fi';
import { SiAccenture } from 'react-icons/si';
import './Experience.css';

const experiences = [
  {
    role: 'Associate Software Engineer Intern',
    company: 'Accenture',
    period: 'May 2026 — Present',
    location: 'Bangalore',
    locationType: 'In-Office',
    description: 'Working on enterprise-grade software solutions, contributing to full-stack development and deployment pipelines in an agile environment.',
    tags: ['Full-Stack', 'Enterprise', 'Agile'],
    color: '#a100ff',
  },
  {
    role: 'Web Development Intern',
    company: 'Codeunia',
    logo: '/logos/codeunia.svg',
    period: 'Jul 2025 — Aug 2025',
    location: 'Remote',
    locationType: 'Remote',
    description: 'Built TrackATS.io — an AI-powered recruitment platform using React.js, Node.js, and REST APIs. Developed reusable components and integrated ATS scoring, candidate-job matching, and real-time data workflows.',
    tags: ['React.js', 'Node.js', 'REST APIs'],
    color: '#0099dd',
  },
  {
    role: 'Web Dev Domain Member',
    company: 'K-1000 Society',
    logo: '/logos/k1000.svg',
    period: 'May 2025 — Present',
    location: 'KIIT, Bhubaneswar',
    locationType: 'On-Campus',
    description: 'Active member of the Web Dev domain — conducted workshops teaching web development basics, and served as OC for KIIT fest, managing a 200+ member event alongside the organizing committee.',
    tags: ['React.js', 'Tailwind CSS', 'Workshops', 'Event Management'],
    color: '#888',
  },
  {
    role: 'Open Source Contributor',
    company: 'Social Summer of Code',
    logo: '/logos/ssoc.svg',
    period: 'Apr 2025 — Jun 2025',
    location: 'Remote',
    locationType: 'Remote',
    description: 'Contributed to Civix and StyleCart — implementing UI enhancements, feature additions, and bug fixes. Merged 10+ contributions involving frontend work, debugging, and project maintenance.',
    tags: ['Open Source', 'Git', 'React'],
    color: '#ec407a',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const { ref, inView } = useScrollReveal(0.05);

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Journey</motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Experience</motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.14 }}>
          Where I've worked and contributed to real-world impact.
        </motion.p>

        <div className="experience__timeline">
          <div className="experience__line" />
          {experiences.map((exp, i) => (
            <motion.div key={exp.company}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
              <motion.div className="experience__dot"
                initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }} />
              <div className="experience__card glass-card">
                <span className="experience__period mono">{exp.period}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <div className="experience__company-row">
                  {exp.company === 'Accenture' ? (
                    <span className="experience__company-icon-box" style={{ color: exp.color, background: `${exp.color}15` }}>
                      <SiAccenture size={20} />
                    </span>
                  ) : (
                    <img src={exp.logo} alt={exp.company} className="experience__company-logo" />
                  )}
                  <p className="experience__company">{exp.company}</p>
                  <span className="experience__location mono">
                    <FiMapPin size={11} /> {exp.location}
                  </span>
                </div>
                <p className="experience__desc">{exp.description}</p>
                <div className="experience__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="experience__tag mono">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
