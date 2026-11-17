import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

function MouseGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed z-[5] hidden h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[100px] lg:block"
      aria-hidden
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <Preloader />
      <MouseGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
