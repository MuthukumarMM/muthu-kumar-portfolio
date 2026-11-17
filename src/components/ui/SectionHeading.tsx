import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`max-w-2xl text-base text-brand-700/80 sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
