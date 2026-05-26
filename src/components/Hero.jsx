import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__container">
        <div className="hero__content">
          <motion.div className="hero__tag mono"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <span className="hero__tag-line"></span>
            KIIT · CSE · Class of 2027
          </motion.div>

          <div className="hero__name-wrapper">
            <motion.h1 className="hero__name"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
              Archita
            </motion.h1>
            <motion.h1 className="hero__name hero__name--accent"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
              Saha
            </motion.h1>
          </div>

          <motion.p className="hero__bio"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
            Full-stack developer, competitive programmer, and lifelong learner.
            I build elegant software, solve algorithmic challenges, and explore
            the frontiers of ML & GenAI.
          </motion.p>

          <motion.div className="hero__ctas"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.5 }}>
            <button className="btn-gradient" onClick={() => handleScroll('#contact')}>
              <span>Get in touch</span>
            </button>
            <button className="btn-outline" onClick={() => handleScroll('#works')}>
              <span>View my work</span>
            </button>
          </motion.div>

          <motion.div className="hero__socials"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
            <span className="hero__socials-label mono">Find me on</span>
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com/architasaha21', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/architasaha21', label: 'LinkedIn' },
              { icon: <SiLeetcode size={18} />, href: 'https://leetcode.com/u/architasaha21/', label: 'LeetCode' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="hero__social-link" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div className="hero__image-wrapper"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
          <div className="hero__image-glow" />
          <img src="/hero-illustration.png" alt="Girl coding at a cozy desk" className="hero__image" />
          {[
            { text: 'Full-Stack Dev', cls: 'hero__badge--1', color: '#c47eb5' },
            { text: 'ML & GenAI', cls: 'hero__badge--2', color: '#9b72cf' },
            { text: 'Problem Solver', cls: 'hero__badge--3', color: '#7eb5c4' },
          ].map((b) => (
            <motion.div key={b.text} className={`hero__badge ${b.cls}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}>
              <span className="hero__badge-dot" style={{ background: b.color }} />
              {b.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }} onClick={() => handleScroll('#works')}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown size={20} />
        </motion.div>
        <span className="mono">scroll</span>
      </motion.div>
    </section>
  );
}
