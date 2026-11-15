import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
        >
          {/* Animated ring */}
          <div className="relative h-24 w-24">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-400 border-r-brand-500"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border-2 border-transparent border-t-electric-400 border-l-electric-500"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-gradient">M</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-slate-500"
          >
            Muthu Kumar M
          </motion.p>

          {/* Loading bar */}
          <div className="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="h-full w-full rounded-full bg-gradient-to-r from-brand-400 to-electric-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
