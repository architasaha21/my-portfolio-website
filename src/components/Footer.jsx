import { motion } from 'framer-motion';
import { FiHeart, FiCode } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <motion.div className="footer__brand"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="footer__logo">
              <span className="footer__logo-text">Archita</span>
              <span className="footer__logo-dot">.</span>
            </span>
            <p className="footer__tagline">Teaching machines to solve problems while I learn to solve mine :)</p>
          </motion.div>
          <motion.p className="footer__copyright mono"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
            Designed & coded with <FiHeart size={14} className="footer__heart" /> and way too much <FiCode size={14} style={{ color: 'var(--accent-secondary)' }} /> by Archita
          </motion.p>
          <motion.p className="footer__year mono"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
            © 2025 Archita Saha. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
