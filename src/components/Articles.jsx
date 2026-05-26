import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiExternalLink } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import './Articles.css';

const articles = [
  {
    title: 'From Deloitte Hacksplosion 2026 Semi-Finalist to a Deloitte Internship — My Journey',
    excerpt: 'If someone had told me in February that a random hackathon registration would eventually lead to a Deloitte internship...',
    date: 'May 2026',
    link: 'https://medium.com/@archita.saha2106/from-deloitte-hacksplosion-2026-semi-finalist-to-a-deloitte-internship-my-journey-fa11afc04681',
  },
  {
    title: 'Myntra SDE Intern Interview Experience 2026 (RampUp Hiring Challenge)',
    excerpt: 'This post is about my Myntra SDE intern (6-month) interview experience for the July–December internship cycle...',
    date: 'May 2026',
    link: 'https://medium.com/@archita.saha2106/myntra-sde-intern-interview-experience-2026-rampup-hiring-challenge-b2bda5d42d5c',
  },
];

export default function Articles() {
  const { ref, inView } = useScrollReveal(0.1);
  const hv = { hidden: { opacity: 0, y: 60, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };

  return (
    <section id="articles" className="section articles" ref={ref}>
      {/* Animated gradient background */}
      <div className="articles__gradient-bg" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.p className="section-label" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>Writing</motion.p>
        <motion.h2 className="section-title" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>
          Blogs
        </motion.h2>
        <motion.div className="articles__medium-link" variants={hv} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}>
          <SiMedium size={20} />
          <a href="https://medium.com/@archita.saha2106" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            @archita.saha2106
          </a>
        </motion.div>

        <div className="articles__grid">
          {articles.map((article, i) => (
            <motion.a key={article.title} href={article.link}
              className="articles__terminal" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}>
              {/* Terminal chrome */}
              <div className="articles__terminal-bar">
                <div className="articles__terminal-dots">
                  <span className="articles__dot articles__dot--r" />
                  <span className="articles__dot articles__dot--y" />
                  <span className="articles__dot articles__dot--g" />
                </div>
                <span className="articles__terminal-title mono">article.exe</span>
              </div>
              {/* Content */}
              <div className="articles__terminal-body">
                <h3 className="articles__title">{article.title}</h3>
                <p className="articles__excerpt">{article.excerpt}</p>
                <div className="articles__terminal-sep" />
                <div className="articles__terminal-footer">
                  <span className="articles__date mono">{article.date}</span>
                  <span className="articles__read-btn mono">
                    Read <FiExternalLink size={13} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
