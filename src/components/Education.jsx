import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Kalinga Institute of Industrial Technology (KIIT)',
    location: 'Bhubaneswar, Odisha',
    period: 'Jul 2023 — Jul 2027 (Expected)',
    grade: 'CGPA: 9.03',
    logo: '/logos/kiit_real.png',
  },
  {
    degree: 'Senior Secondary (Class XII) — CISCE',
    school: 'Loreto Day School Bowbazar',
    location: 'Kolkata, West Bengal',
    period: 'Graduated Mar 2023',
    grade: '93.5%',
    logo: '/logos/loreto_real.png',
  },
  {
    degree: 'Secondary (Class X) — ICSE',
    school: 'Loreto Day School Bowbazar',
    location: 'Kolkata, West Bengal',
    period: '2021',
    grade: '94%',
    logo: '/logos/loreto_real.png',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Academics</motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Education</motion.h2>

        <div className="education__cards">
          {education.map((edu, i) => (
            <motion.div key={edu.degree} className="education__card glass-card"
              initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
              <img src={edu.logo} alt={edu.school} className="education__logo" />
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
