'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  direction?: 'up' | 'left' | 'none';
  distance?: number;
}

export default function FadeIn({
  delay = 0,
  direction = 'up',
  distance = 28,
  children,
  style,
  ...props
}: FadeInProps) {
  const yOffset = direction === 'up' ? distance : 0;
  const xOffset = direction === 'left' ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
      style={{ willChange: 'opacity, transform', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
