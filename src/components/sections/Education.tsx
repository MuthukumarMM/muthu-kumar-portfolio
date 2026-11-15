import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { EDUCATION } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientOrbs from '@/components/ui/GradientOrbs';

const ICONS = [GraduationCap, School];

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <GradientOrbs />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 — Education"
          title={
            <>
              Education <span className="text-gradient">Journey</span>
            </>
          }
          description="My academic path and institutions that shaped my foundation."
          align="center"
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-brand-500/60 via-electric-500/40 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {EDUCATION.map((item, i) => {
              const Icon = ICONS[i] ?? GraduationCap;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 pl-16 md:pl-0 ${
                    isLeft ? 'md:flex-row-reverse md:pl-0 md:pr-1/2' : 'md:pl-1/2'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-6 top-6 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-electric-500 shadow-lg shadow-brand-500/30"
                    >
                      <Icon className="text-white" size={18} />
                    </motion.div>
                    <div className="absolute inset-0 animate-ping rounded-full bg-brand-500/20" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Card */}
                  <div className={`w-full ${isLeft ? 'md:text-right' : ''}`}>
                    <div className="rounded-2xl glass-strong p-6 transition-all duration-300 hover:border-white/20">
                      <span className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                        {item.duration}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-white">
                        {item.institution}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-300">
                        {item.degree}
                      </p>
                      <p className={`mt-3 text-sm leading-relaxed text-slate-400 ${isLeft ? 'md:ml-auto' : ''} max-w-md`}>
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
