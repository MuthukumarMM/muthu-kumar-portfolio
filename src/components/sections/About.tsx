import { motion } from 'framer-motion';
import { Briefcase, Download, GraduationCap, Lightbulb, User } from 'lucide-react';
import { ABOUT } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import GradientOrbs from '@/components/ui/GradientOrbs';
import MagneticButton from '@/components/ui/MagneticButton';

const ICONS = [User, GraduationCap, Briefcase, Lightbulb];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <GradientOrbs />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 — About"
          title={
            <>
              About <span className="text-gradient">Me</span>
            </>
          }
          description="Get to know the person behind the code."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Profile visual */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/20 to-electric-500/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl glass-strong p-8">
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-electric-500 text-5xl font-bold text-white shadow-2xl shadow-brand-500/30"
                  >
                    MK
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white">Muthu Kumar M</h3>
                    <p className="text-sm text-slate-400">Computer Science & Engineering</p>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="grid w-full grid-cols-3 gap-3">
                    {ABOUT.cards.map((card) => (
                      <div
                        key={card.label}
                        className="rounded-2xl bg-white/[0.03] p-4 text-center"
                      >
                        <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">
                          {card.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-200">
                          {card.value}
                        </p>
                        <p className="mt-0.5 text-[0.65rem] text-slate-500">
                          {card.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            {ABOUT.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
                    {(() => {
                      const Icon = ICONS[i] ?? User;
                      return <Icon size={16} />;
                    })()}
                  </div>
                  <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                    {para}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="mt-4 flex flex-col gap-4">
                <MagneticButton
                  as="a"
                  href="/Muthu_Kumar_Resume.pdf"
                  download="Muthu_Kumar_Resume.pdf"
                  className="btn-primary self-start"
                >
                  <Download size={18} />
                  Download Resume
                </MagneticButton>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl glass p-5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                      <GraduationCap size={16} className="text-brand-300" />
                      Education
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      B.E. Computer Science & Engineering, Francis Xavier Engineering College (2024–2028)
                    </p>
                  </div>
                  <div className="rounded-2xl glass p-5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Briefcase size={16} className="text-electric-400" />
                      Career Interests
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Software Development, AI, Web Development and Scalable Systems
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
