import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import './Rankings.css';

const rankings = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode size={28} />,
    handle: 'architasaha21',
    rating: '1673',
    rank: 'Specialist',
    problemsSolved: '400+',
    color: '#f89f1b',
    link: 'https://leetcode.com/u/architasaha21/',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef size={28} />,
    handle: 'archita_216',
    rating: '1602',
    rank: 'Div 2 (3★)',
    problemsSolved: '200+',
    color: '#d0011b',
    link: 'https://www.codechef.com/users/archita_216',
  },
  {
    platform: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={28} />,
    handle: 'user_mhjm6h0h4fo',
    rating: '234 Score',
    rank: 'Rank: 346',
    problemsSolved: '106',
    color: '#2f8d46',
    link: 'https://www.geeksforgeeks.org/profile/user_mhjm6h0h4fo',
  },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function Rankings() {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section id="rankings" className="section rankings" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Competitive Programming</motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Rankings</motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.14 }}>
          My competitive programming profiles and coding achievements.
        </motion.p>
        <div className="rankings__grid">
          {rankings.map((r, i) => (
            <motion.a key={r.platform} href={r.link} className="rankings__card glass-card"
              initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              target="_blank" rel="noopener noreferrer">
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
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                style={{ background: `linear-gradient(90deg, ${r.color}40, ${r.color})`, transformOrigin: 'left' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
