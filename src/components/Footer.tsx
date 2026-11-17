import { motion } from 'framer-motion';
import { ArrowUp, Github, Heart, Linkedin } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';
import { scrollToSection } from '@/hooks/usePortfolio';

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-12 section-pad">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-electric-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/30">
                M
              </span>
              <div className="text-left">
                <p className="font-display text-base font-semibold text-brand-900">
                  Muthu Kumar M
                </p>
                <p className="text-xs text-brand-700/70">Software Developer | Java Programmer</p>
              </div>
            </button>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-brand-700/75 transition-colors hover:text-brand-500"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 transition-all hover:text-brand-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 transition-all hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => scrollToSection('home')}
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 transition-all hover:text-brand-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-brand-700/65 sm:flex-row">
          <p>
            &copy; {year} Muthu Kumar M. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5"
          >
            Built with <Heart size={13} className="text-brand-500" /> using React &amp; Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
