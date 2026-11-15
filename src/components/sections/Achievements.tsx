import { motion } from 'framer-motion';
import { ACHIEVEMENTS_STATS, ACHIEVEMENTS_ITEMS } from '@/data/portfolio';
import { useCountUp } from '@/hooks/usePortfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import GradientOrbs from '@/components/ui/GradientOrbs';

function StatCard({
  stat,
  index,
}: {
  stat: (typeof ACHIEVEMENTS_STATS)[number];
  index: number;
}) {
  const { value, ref } = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl glass-strong p-7 text-center transition-all duration-300 hover:border-white/20"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-electric-500/20">
        <Icon className="text-brand-300" size={24} />
      </div>

      <div className="flex items-baseline justify-center">
        <span
          ref={ref}
          className="text-4xl font-bold text-gradient sm:text-5xl"
        >
          {value}
        </span>
        <span className="text-3xl font-bold text-gradient sm:text-4xl">
          {stat.suffix}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <GradientOrbs />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 — Achievements"
          title={
            <>
              Achievements & <span className="text-gradient">Milestones</span>
            </>
          }
          description="Progress measured through consistent practice and learning."
          align="center"
        />

        {/* Stats */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS_STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Achievement cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ACHIEVEMENTS_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:bg-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-electric-500/15 font-mono text-sm font-bold text-brand-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-brand-500/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note about editability */}
        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-xs text-slate-600">
            Statistics are editable and reflect approximate progress — update them with your verified numbers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
