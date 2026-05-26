import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import './Rankings.css';

const rankings = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode size={28} />,
    handle: 'archita21',
    rating: '1673',
    rank: 'Knight',
    problemsSolved: '400+',
    color: '#f89f1b',
    link: 'https://leetcode.com/archita21',
  },
  {
    platform: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={28} />,
    handle: 'archita21',
    rating: '—',
    rank: '330 / 6721',
    problemsSolved: '100+',
    color: '#2f8d46',
    link: 'https://geeksforgeeks.org/user/archita21',
  },
];

export default function Rankings() {
  const { ref, inView } = useScrollReveal(0.1);
  const hv = { hidden: { opacity: 0, y: 60, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };

  return (
    <section id="rankings" className="section rankings" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>Competitive Programming</motion.p>
        <motion.h2 className="section-title" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>Rankings</motion.h2>
        <motion.p className="section-subtitle" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}>
          My competitive programming profiles and stats.
        </motion.p>

        <div className="rankings__grid">
          {rankings.map((r, i) => (
            <motion.a key={r.platform} href={r.link} className="rankings__card glass-card"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }} target="_blank" rel="noopener noreferrer">
              <div className="rankings__card-header">
                <div className="rankings__icon" style={{ color: r.color }}>{r.icon}</div>
                <FiExternalLink size={16} className="rankings__ext" />
              </div>
              <h3 className="rankings__platform">{r.platform}</h3>
              <p className="rankings__handle mono">@{r.handle}</p>
              <div className="rankings__stats">
                <div className="rankings__stat">
                  <span className="rankings__stat-value" style={{ color: r.color }}>{r.rating}</span>
                  <span className="rankings__stat-label mono">Rating</span>
                </div>
                <div className="rankings__stat">
                  <span className="rankings__stat-value" style={{ color: r.color }}>{r.rank}</span>
                  <span className="rankings__stat-label mono">Rank</span>
                </div>
                <div className="rankings__stat">
                  <span className="rankings__stat-value" style={{ color: r.color }}>{r.problemsSolved}</span>
                  <span className="rankings__stat-label mono">Solved</span>
                </div>
              </div>
              <motion.div className="rankings__bar"
                initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                style={{ background: `linear-gradient(90deg, ${r.color}40, ${r.color})`, transformOrigin: 'left' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
