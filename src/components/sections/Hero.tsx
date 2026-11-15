import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Github, Linkedin, Sparkles } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';
import { scrollToSection } from '@/hooks/usePortfolio';
import MagneticButton from '@/components/ui/MagneticButton';
import GradientOrbs from '@/components/ui/GradientOrbs';

function useTypewriter(words: string[], typingSpeed = 90, deletingSpeed = 50, pause = 1600) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 section-pad"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <GradientOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/40 to-ink-950" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs font-medium text-brand-300"
          >
            <Sparkles size={14} className="text-brand-300" />
            <span>Available for Internships & Opportunities</span>
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-400"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              <span className="text-gradient-animated">Muthu Kumar</span>
              <br />
              <span className="text-white">M.</span>
            </motion.h1>
          </div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-1 font-mono text-xl text-slate-300 sm:text-2xl"
          >
            <span className="text-brand-400">{`>`}</span>
            <span className="min-h-[1.5em] text-slate-100">{typed}</span>
            <span className="inline-block h-6 w-0.5 animate-blink bg-brand-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {PROFILE.intro}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="button"
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              <FolderGit2 size={18} />
              Explore My Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/Muthu_Kumar_Resume.pdf"
              download="Muthu_Kumar_Resume.pdf"
              className="btn-ghost"
            >
              <Download size={18} />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="text-sm text-slate-500">Connect:</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-brand-300"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right column — profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          {/* Orbiting rings */}
          <div className="absolute inset-0 animate-spinSlow rounded-full border border-brand-500/20" />
          <div className="absolute inset-8 animate-spinSlow rounded-full border border-electric-500/15" style={{ animationDirection: 'reverse' }} />

          {/* Glow */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-brand-500/30 to-electric-500/20 blur-3xl" />

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-16 overflow-hidden rounded-[2rem] glass-strong glow-border"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-electric-500 text-4xl font-bold text-white shadow-xl shadow-brand-500/30">
                MK
              </div>
              <p className="font-display text-xl font-semibold text-white">
                Muthu Kumar M
              </p>
              <p className="text-sm text-slate-400">
                Software Developer
              </p>
              <div className="mt-2 flex gap-2">
                <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs text-brand-300">Java</span>
                <span className="rounded-full bg-electric-500/15 px-3 py-1 text-xs text-electric-400">Python</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">React</span>
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -left-4 top-12 rounded-xl glass px-3 py-2 text-xs font-medium text-slate-300"
          >
            {`</>`} Java
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-2 bottom-20 rounded-xl glass px-3 py-2 text-xs font-medium text-slate-300"
          >
            AI · RAG
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-slate-300"
        aria-label="Scroll to About"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
