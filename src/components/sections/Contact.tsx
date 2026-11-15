import { useState } from 'react';
import { CheckCircle2, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import GradientOrbs from '@/components/ui/GradientOrbs';

type CopyStatus = 'idle' | 'success' | 'error';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyStatus('success');
    } catch {
      setCopyStatus('error');
    }

    window.setTimeout(() => setCopyStatus('idle'), 2500);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GradientOrbs />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="07 — Contact"
          title={
            <>
              Let's <span className="text-gradient">Connect</span>
            </>
          }
          description="Have an opportunity, question, or just want to say hello? I'd love to hear from you."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-7 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Let's work together</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              I&apos;m always open to discussing internships, collaborations, or interesting
              technology conversations. Reach out directly and I&apos;ll get back to you.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white/[0.03] p-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                    <Mail size={18} className="text-brand-300" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">Email</span>
                    <span className="block truncate text-sm font-medium text-slate-200 group-hover:text-brand-200">
                      {PROFILE.email}
                    </span>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition-all hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-200"
                  aria-label="Copy email address"
                >
                  {copyStatus === 'success' ? <CheckCircle2 size={15} /> : <Copy size={15} />}
                  {copyStatus === 'success'
                    ? 'Copied'
                    : copyStatus === 'error'
                      ? 'Copy failed'
                      : 'Copy'}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl glass p-7 sm:p-8"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-300">
                Find me online
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Connect with me through my professional and developer profiles.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 transition-all hover:-translate-y-1 hover:bg-brand-500/25"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-slate-200 transition-all hover:-translate-y-1 hover:bg-white/15"
              >
                <Github size={20} />
              </a>
              <MagneticButton as="a" href={`mailto:${PROFILE.email}`} className="btn-primary ml-auto">
                <Mail size={17} />
                Contact Me
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
