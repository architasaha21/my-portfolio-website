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
          setTimeout(() => { setIsExiting(true); setTimeout(onComplete, 800); }, 400);
          return 100;
        }
        setCurrentStep(Math.min(Math.floor(next / 20), loadingSteps.length - 1));
        return next;
      });
    }, 160);
    return () => clearInterval(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i) => ({
      y: 0, opacity: 1, rotateX: 0,
      transition: { delay: i * 0.09, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    }),
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div className="loader-wrapper"
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)', transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] } }}
        >
          <div className="loader-content">
            {[...Array(8)].map((_, i) => (
              <motion.div key={i}
                style={{ position: 'absolute', width: 3 + Math.random() * 8, height: 3 + Math.random() * 8, borderRadius: '50%', background: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)', opacity: 0.15, left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
                animate={{ y: [-30, 30, -30], x: [-15, 15, -15], opacity: [0.1, 0.35, 0.1], scale: [1, 1.8, 1] }}
                transition={{ duration: 3.5 + Math.random() * 3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              />
            ))}
            <div className="loader-text-container">
              <div style={{ display: 'flex', perspective: '600px' }}>
                {'Archita'.split('').map((letter, i) => (
                  <motion.span key={i} className="loader-name" custom={i} variants={letterVariants} initial="hidden" animate="visible" style={{ display: 'inline-block' }}>
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.p className="loader-tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.5, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
              developer · problem solver · creator
            </motion.p>
            <div style={{ height: 28, overflow: 'hidden', marginTop: 8 }}>
              <AnimatePresence mode="wait">
                <motion.p key={currentStep} className="loader-tagline" style={{ fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4 }}
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 0.4 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
                  {loadingSteps[currentStep]}...
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="loader-progress-track" style={{ marginTop: 20 }}>
              <motion.div className="loader-progress-bar" initial={{ scaleX: 0 }} animate={{ scaleX: Math.min(progress / 100, 1) }} transition={{ duration: 0.4, ease: 'easeOut' }} />
            </div>
            <motion.span className="loader-tagline" style={{ fontSize: '0.7rem', letterSpacing: '3px', marginTop: 8 }}
              initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1, duration: 0.5 }}>
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
