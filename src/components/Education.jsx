import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    degree: 'B.E. in Computer Science and Engineering',
    school: 'Kalinga Institute of Industrial Technology (KIIT)',
    location: 'Bhubaneswar, Odisha',
    period: 'Jul 2023 — Jul 2027 (Expected)',
    grade: 'CGPA: 8.9',
  },
  {
    degree: 'Senior Secondary (Class XII) — CISCE',
    school: 'Loreto Day School Bowbazar',
    location: 'Kolkata, West Bengal',
    period: 'Graduated Mar 2023',
    grade: '93.60%',
  },
];

export default function Education() {
  const { ref, inView } = useScrollReveal(0.1);
  const hv = { hidden: { opacity: 0, y: 60, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>Academics</motion.p>
        <motion.h2 className="section-title" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>Education</motion.h2>

        <div className="education__cards">
          {education.map((edu, i) => (
            <motion.div key={edu.degree} className="education__card glass-card"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }} whileHover={{ scale: 1.02 }}>
              <div className="education__icon"><FiBookOpen size={24} /></div>
              <div className="education__info">
                <span className="education__period mono">{edu.period}</span>
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__school">{edu.school}</p>
                <p className="education__desc">{edu.location}</p>
                <span className="education__grade">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
