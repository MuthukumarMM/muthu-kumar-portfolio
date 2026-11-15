import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';
import { useActiveSection, scrollToSection } from '@/hooks/usePortfolio';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-b-2xl px-5 py-3.5 transition-all duration-500 sm:px-8 lg:px-10 ${
            scrolled
              ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="group flex items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-electric-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/30">
              M
            </span>
            <span className="hidden font-display text-sm font-semibold text-slate-200 transition-colors group-hover:text-white sm:block">
              Muthu Kumar
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-electric-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-white/5 hover:text-brand-300 sm:flex"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-white/5 hover:text-white sm:flex"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-2 border-l border-white/10 bg-ink-900/95 p-6 pt-20"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:text-white"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              {LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  onClick={() => handleNav(link.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-brand-500/15 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="mt-auto flex items-center gap-3 pt-6">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-300 hover:text-brand-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
