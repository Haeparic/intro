'use client';

import { motion, useReducedMotion } from 'framer-motion';
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
  const reduceMotion = useReducedMotion() ?? false;
  const yOffset = direction === 'up' ? distance : 0;
  const xOffset = direction === 'left' ? -distance : 0;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: yOffset, x: xOffset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
      style={{ willChange: 'opacity, transform', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
