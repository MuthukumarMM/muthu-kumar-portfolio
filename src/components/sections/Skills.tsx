import { motion } from 'framer-motion';
import { SKILLS, type SkillCategory } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import GradientOrbs from '@/components/ui/GradientOrbs';

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl glass-strong p-6 transition-all duration-300 hover:border-white/20"
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${category.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
      />

      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}
        >
          <Icon className="text-white" size={22} />
        </div>
        <h3 className="text-base font-semibold text-white">{category.title}</h3>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="group/tag relative inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GradientOrbs />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title={
            <>
              Technical <span className="text-gradient">Arsenal</span>
            </>
          }
          description="Technologies and tools I work with across the stack."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Skill cloud */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[...SKILLS.flatMap((c) => c.skills)].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-sm text-slate-400"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
