import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Github,
  Layers,
  X,
  Zap,
} from 'lucide-react';
import { PROJECTS, type Project } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import GradientOrbs from '@/components/ui/GradientOrbs';

function ProjectIllustration({ project }: { project: Project }) {
  const accent = project.accent;
  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${accent}`}>
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Glow */}
      <div className="absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-10 bottom-1/4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

      {/* Mock UI elements */}
      <div className="absolute inset-0 flex flex-col gap-3 p-6">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="mt-2 flex flex-1 gap-3">
          <div className="flex w-1/3 flex-col gap-2">
            <div className="h-8 rounded-lg bg-white/20 backdrop-blur-sm" />
            <div className="h-6 rounded-lg bg-white/10" />
            <div className="h-6 rounded-lg bg-white/10" />
            <div className="h-6 rounded-lg bg-white/10" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-20 rounded-xl bg-white/15 backdrop-blur-sm" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 rounded-xl bg-white/10" />
              <div className="h-14 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Project short name */}
      <div className="absolute bottom-5 left-6">
        <p className="font-display text-2xl font-bold text-white drop-shadow-lg">
          {project.shortName}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group perspective-1000"
    >
      <TiltCard className="relative cursor-pointer rounded-3xl" glare>
        <div
          onClick={onOpen}
          className="relative overflow-hidden rounded-3xl glass-strong transition-all duration-500 group-hover:border-white/20"
        >
          {/* Illustration */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <ProjectIllustration project={project} />

            {/* Status badge */}
            <div className="absolute right-4 top-4">
              {project.status === 'Ongoing' ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <Clock size={12} />
                  Ongoing
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <CheckCircle2 size={12} />
                  Completed
                </span>
              )}
            </div>
          </div>

          {/* Card body */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{project.shortName}</h3>
                <p className="mt-1 text-sm text-slate-400">{project.tagline}</p>
              </div>
              <button
                onClick={onOpen}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-brand-500/20 hover:text-brand-300"
                aria-label="View details"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-2">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:bg-white/10"
                >
                  <Github size={14} />
                  Code
                </a>
              ) : (
                <span className="flex items-center gap-2 rounded-xl bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-slate-500">
                  <Github size={14} />
                  Repo soon
                </span>
              )}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500/20 to-electric-500/20 px-4 py-2.5 text-xs font-semibold text-brand-200 transition-all hover:from-brand-500/30 hover:to-electric-500/30"
                >
                  <Zap size={14} />
                  Live Demo
                </a>
              ) : (
                <button
                  onClick={onOpen}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500/20 to-electric-500/20 px-4 py-2.5 text-xs font-semibold text-brand-200 transition-all hover:from-brand-500/30 hover:to-electric-500/30"
                >
                  <Layers size={14} />
                  Details
                </button>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-md" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass-strong"
        >
          {/* Header illustration */}
          <div className="relative aspect-[16/8] overflow-hidden rounded-t-3xl">
            <ProjectIllustration project={project} />
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/60 text-white backdrop-blur-sm transition-all hover:bg-ink-950/80"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            {project.status === 'Ongoing' && (
              <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Clock size={12} />
                Ongoing Project
              </span>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold leading-tight text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {project.description}
            </p>

            {/* Key features */}
            <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-brand-300">
              Key Features
            </h4>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3.5 py-2.5"
                >
                  <CheckCircle2 size={15} className="shrink-0 text-emerald-400" />
                  <span className="text-sm text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-brand-300">
              Technologies
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-white/10"
                >
                  <Github size={16} />
                  View Repository
                </a>
              ) : (
                <span className="flex items-center gap-2 rounded-xl bg-white/[0.02] px-5 py-3 text-sm font-medium text-slate-500">
                  <Github size={16} />
                  Repository coming soon
                </span>
              )}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-electric-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand-500/30"
                >
                  <Zap size={16} />
                  Live Demo
                </a>
              ) : (
                <span className="text-sm text-slate-500">Live demo not deployed yet</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GradientOrbs />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title={
            <>
              Featured <span className="text-gradient">Projects</span>
            </>
          }
          description="A selection of projects I've built, from pharmaceutical supply chains to AI-powered platforms."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
