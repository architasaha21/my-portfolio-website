import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

const achievements = [
  { stat: 'Top 15', title: 'Hero Campus Challenge S10', desc: 'National Semi-Finalist (E-Track) among 2,00,000+ registrations nationwide.', year: '2026', accent: '#c47eb5' },
  { stat: 'Top 60', title: 'Deloitte Hacksplosion 2026', desc: 'Semi-Finalist, reaching top 60 from a pool of 21,000+ participants.', year: '2026', accent: '#86bc25' },
  { stat: 'Top 50', title: 'HackNITR 7.0 Finalist', desc: 'Selected among top 50 teams out of 6,000+ participants at NIT Rourkela.', year: '2025', accent: '#9b72cf' },
  { stat: 'Top 50', title: 'SIH 2025 Internal Round', desc: 'Selected in the top 50 teams from internal hackathon for national level at Smart India Hackathon.', year: '2025', accent: '#ec407a' },
  { stat: 'AIR 2661', title: 'Naukri Campus Young Turks', desc: 'Top 1% among 5.1 lakh+ participants nationwide.', year: '2025', accent: '#3b82f6' },
  { stat: '4th', title: 'CodingQuest on Unstop', desc: 'Secured 4th position among 1,800+ total participants.', year: '2025', accent: '#7eb5c4' },
  { stat: 'Topper', title: 'ISC Class 12 Topper', desc: 'Secured top rank in the school with 93.5% in the CISCE board exams at Loreto.', year: '2023', accent: '#e8a0bf' },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function Achievements() {
  const { ref, inView } = useScrollReveal(0.05);

  return (
    <section id="achievements" className="section achievements" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Recognition</motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Achievements</motion.h2>

        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <motion.div key={a.title} className="achievements__card glass-card"
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 12px 30px rgba(196, 126, 181, 0.15)',
                borderColor: 'var(--accent-primary)' 
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20, 
                default: { delay: 0.1 + i * 0.06, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } 
              }}>
              <div className="achievements__card-top">
                <span className="achievements__stat" style={{ color: a.accent }}>{a.stat}</span>
                <span className="achievements__year mono">{a.year}</span>
              </div>
              <h3 className="achievements__card-title">{a.title}</h3>
              <p className="achievements__card-desc">{a.desc}</p>
              <div className="achievements__bar">
                <motion.div className="achievements__bar-fill" style={{ background: a.accent }}
                  initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: 'easeOut' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
