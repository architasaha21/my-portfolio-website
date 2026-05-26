import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Rankings from './components/Rankings';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoadComplete} />}
      </AnimatePresence>
      {!loading && (
        <>
          <div className="ambient-glows">
            <div className="ambient-glow ambient-glow--1" />
            <div className="ambient-glow ambient-glow--2" />
            <div className="ambient-glow ambient-glow--3" />
          </div>
          <Navbar />
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <Works />
            <About />
            <Experience />
            <Education />
            <Achievements />
            <Rankings />
            <Articles />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
