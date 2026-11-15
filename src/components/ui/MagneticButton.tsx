import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  download?: boolean | string;
};

/**
 * A button/link that subtly follows the cursor — a magnetic hover effect.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  target,
  rel,
  onClick,
  download,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: { x: springX, y: springY },
    className,
    onClick,
  };

  if (as === 'a') {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </motion.a>
    );
  }

  return <motion.button {...motionProps}>{children}</motion.button>;
}
