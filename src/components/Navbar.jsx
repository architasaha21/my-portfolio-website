import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 50));

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}>
        <div className="navbar__inner">
          <motion.a href="#home" className="navbar__logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            <span className="navbar__logo-text">Archita</span>
            <span className="navbar__logo-dot">.</span>
          </motion.a>
          <div className="navbar__links">
            {navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }} whileHover={{ y: -2 }}>
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="navbar__actions">
            <motion.button className="navbar__theme-btn" onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }} aria-label="Toggle theme">
              <motion.div key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.div>
            </motion.button>
            <motion.button className="navbar__mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} whileTap={{ scale: 0.9 }} aria-label="Toggle menu">
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>
      <motion.div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}
        initial={false} animate={mobileOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}>
        <div className="mobile-menu__links">
          {navLinks.map((link, i) => (
            <motion.a key={link.label} href={link.href} className="mobile-menu__link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              initial={{ opacity: 0, x: 50 }} animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: mobileOpen ? i * 0.06 : 0, duration: 0.4 }}>
              <span className="mobile-menu__link-num mono">0{i + 1}</span>{link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
      {mobileOpen && <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />}
    </>
  );
}
