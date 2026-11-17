import { motion } from 'framer-motion';

type Props = {
  className?: string;
};

/**
 * Soft floating gradient orbs used as ambient background lighting.
 */
export default function GradientOrbs({ className = '' }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-20 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-electric-500/14 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-brand-300/12 blur-[120px]"
      />
    </div>
  );
}
