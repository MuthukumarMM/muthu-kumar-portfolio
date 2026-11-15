import { motion } from 'framer-motion';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientOrbs from '@/components/ui/GradientOrbs';

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24 section-pad sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GradientOrbs />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 — Certifications"
          title={
            <>
              Certifications & <span className="text-gradient">Credentials</span>
            </>
          }
          description="Industry-recognized certifications that validate my technical skills."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6 transition-all duration-300 hover:border-white/20"
            >
              {/* Gradient glow */}
              <div
                className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${cert.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
              />

              {/* Certificate icon */}
              <div className="relative mb-4 flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.accent} shadow-lg`}
                >
                  <Award className="text-white" size={26} />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                  <BadgeCheck size={12} className="text-emerald-400" />
                  Verified
                </div>
              </div>

              {/* Issuer */}
              <p className="text-xs font-medium uppercase tracking-wider text-brand-300">
                {cert.issuer}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-base font-semibold leading-snug text-white min-h-[3rem]">
                {cert.title}
              </h3>

              {/* Certificate image placeholder */}
              <div className="mt-4 h-24 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center">
                <div className="text-center">
                  <Award size={24} className="mx-auto text-slate-600" />
                  <p className="mt-1.5 text-[0.65rem] text-slate-600">Certificate Preview</p>
                </div>
              </div>

              {/* View button */}
              <div className="mt-4">
                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:bg-brand-500/15 hover:text-brand-200"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                ) : (
                  <span className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-slate-500">
                    <ExternalLink size={14} />
                    Link available soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 p-8 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
              <Award className="text-brand-300" size={26} />
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Continuously learning and earning new certifications.
            </p>
            <p className="mt-1 text-xs text-slate-600">More coming soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
