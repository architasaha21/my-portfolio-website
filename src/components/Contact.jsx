import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiSend, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const socials = [
  { name: 'LinkedIn', icon: <FiLinkedin size={22} />, href: 'https://linkedin.com/in/architasaha21', color: '#0A66C2' },
  { name: 'GitHub', icon: <FiGithub size={22} />, href: 'https://github.com/architasaha21', color: '#c47eb5' },
  { name: 'X (Twitter)', icon: <FaXTwitter size={22} />, href: '#', color: '#1DA1F2' },
  { name: 'Instagram', icon: <FiInstagram size={22} />, href: '#', color: '#E4405F' },
  { name: 'Email', icon: <FiMail size={22} />, href: 'mailto:archita.saha2106@gmail.com', color: '#9b72cf' },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  const { ref, inView } = useScrollReveal(0.05);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="contact__grid">
          <motion.div className="contact__info" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Get in Touch</motion.p>
            <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.08 }}>Let's Connect</motion.h2>
            <p className="contact__desc">Have a project idea, want to collaborate, or just want to say hi? I'd love to hear from you! ✨</p>
            <div className="contact__socials">
              {socials.map((s, i) => (
                <motion.a key={s.name} href={s.href} className="contact__social glass-card"
                  initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }} target="_blank" rel="noopener noreferrer">
                  <div className="contact__social-icon" style={{ color: s.color }}>{s.icon}</div>
                  <span className="contact__social-name">{s.name}</span>
                  <FiArrowUpRight size={16} className="contact__social-arrow" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div className="contact__form-wrapper" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="contact__form-card glass-card">
              <div className="contact__form-header"><FiMail size={20} /><span>Send a Message</span></div>
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label mono">Name</label>
                  <input type="text" id="contact-name" className="contact__input" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label mono">Email</label>
                  <input type="email" id="contact-email" className="contact__input" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-msg" className="contact__label mono">Message</label>
                  <textarea id="contact-msg" className="contact__input contact__textarea" placeholder="Tell me about your project, idea, or just say hi!" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <motion.button type="submit" className="btn-gradient contact__submit" whileTap={{ scale: 0.97 }}>
                  {sent ? (<><FiCheckCircle size={18} /><span>Sent!</span></>) : (<><FiSend size={18} /><span>Send Message</span></>)}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
