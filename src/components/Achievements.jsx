import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

const achievements = [
  {
    stat: 'Top 15',
    title: 'Hero Campus Challenge S10',
    desc: 'National Semi-Finalist (E-Track) among 2,00,000+ registrations nationwide.',
    year: '2026',
    accent: '#c47eb5',
  },
  {
    stat: 'Top 60',
    title: 'Deloitte Hacksplosion 2026',
    desc: 'Semi-Finalist, reaching top 60 from a pool of 21,000+ participants.',
    year: '2026',
    accent: '#86bc25',
  },
  {
    stat: 'Top 50',
    title: 'HackNITR 7.0 Finalist',
    desc: 'Selected among top 50 teams out of 6,000+ participants at NIT Rourkela.',
    year: '2025',
    accent: '#9b72cf',
  },
  {
    stat: 'AIR 2661',
    title: 'Naukri Campus Young Turks',
    desc: 'Top 1% among 5.1 lakh+ participants nationwide.',
    year: '2025',
    accent: '#3b82f6',
  },
  {
    stat: '4th',
    title: 'CodingQuest on Unstop',
    desc: 'Secured 4th position among 1,800+ total participants.',
    year: '2025',
    accent: '#7eb5c4',
  },
  {
    stat: '750+',
    title: 'DSA Problems Solved',
    desc: 'LeetCode (Rating: 1669), CodeChef (3★), and GeeksforGeeks combined.',
    year: 'Ongoing',
    accent: '#e8a0bf',
  },
  {
    stat: 'Selected',
    title: 'Accenture ASE Program',
    desc: 'Shortlisted for the Accenture Associate Software Engineer Internship Program.',
    year: '2026',
    accent: '#a100ff',
  },
];

export default function Achievements() {
  const { ref, inView } = useScrollReveal(0.05);
  const hv = { hidden: { opacity: 0, y: 60, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };

  return (
    <section id="achievements" className="section achievements" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>Recognition</motion.p>
        <motion.h2 className="section-title" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>Achievements</motion.h2>

        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <motion.div key={a.title} className="achievements__card glass-card"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              whileHover={{ y: -6, boxShadow: `0 10px 40px ${a.accent}20` }}>
              <div className="achievements__card-top">
                <span className="achievements__stat" style={{ color: a.accent }}>{a.stat}</span>
                <span className="achievements__year mono">{a.year}</span>
              </div>
              <h3 className="achievements__card-title">{a.title}</h3>
              <p className="achievements__card-desc">{a.desc}</p>
              <div className="achievements__bar">
                <motion.div className="achievements__bar-fill"
                  style={{ background: a.accent }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: 'easeOut' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
