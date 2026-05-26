import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const loadingSteps = [
  'Setting up workspace',
  'Brewing some coffee',
  'Loading creativity',
  'Polishing pixels',
  'Almost there',
];

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10 + 4;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => { setIsExiting(true); setTimeout(onComplete, 600); }, 300);
          return 100;
        }
        setCurrentStep(Math.min(Math.floor(next / 20), loadingSteps.length - 1));
        return next;
      });
    }, 160);
    return () => clearInterval(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (i) => ({
      y: 0, opacity: 1,
      transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div className="loader-wrapper"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}>
          <div className="loader-content">
            {/* Reduced to 5 particles with simpler animation */}
            {[...Array(5)].map((_, i) => (
              <motion.div key={i}
                style={{ position: 'absolute', width: 4 + i * 2, height: 4 + i * 2, borderRadius: '50%', background: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)', left: `${15 + i * 16}%`, top: `${20 + i * 12}%` }}
                animate={{ y: [-20, 20, -20], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            <div className="loader-text-container">
              <div style={{ display: 'flex' }}>
                {'Archita'.split('').map((letter, i) => (
                  <motion.span key={i} className="loader-name" custom={i} variants={letterVariants} initial="hidden" animate="visible" style={{ display: 'inline-block' }}>
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.p className="loader-tagline" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 0.5, y: 0 }} transition={{ delay: 0.7, duration: 0.4 }}>
              developer · problem solver · creator
            </motion.p>
            <div style={{ height: 24, overflow: 'hidden', marginTop: 8 }}>
              <AnimatePresence mode="wait">
                <motion.p key={currentStep} className="loader-tagline" style={{ fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4 }}
                  initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 0.4 }} exit={{ y: -16, opacity: 0 }} transition={{ duration: 0.25 }}>
                  {loadingSteps[currentStep]}...
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="loader-progress-track" style={{ marginTop: 20 }}>
              <motion.div className="loader-progress-bar" style={{ scaleX: Math.min(progress / 100, 1), transformOrigin: 'left' }}
                transition={{ duration: 0.3 }} />
            </div>
            <motion.span className="loader-tagline" style={{ fontSize: '0.7rem', letterSpacing: '3px', marginTop: 8 }}
              initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.8, duration: 0.4 }}>
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
