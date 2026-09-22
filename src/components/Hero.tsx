'use client';

import { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { portfolioData } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

export default function Hero() {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const muiTheme = useTheme();
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    if (!inView) return;

    const full = personal.tagline;
    let cancelled = false;
    let timerId: ReturnType<typeof setTimeout>;

    const typeNextChar = (i: number) => {
      if (cancelled) return;
      setTypedText(full.slice(0, i));
      if (i === full.length) {
        timerId = setTimeout(() => {
          if (!cancelled) setShowCursor(false);
        }, 2500);
        return;
      }

      const char = full[i];
      let delay = 50 + Math.random() * 50;
      if (char === ' ') delay += 35;
      if ('.,!?;:'.includes(char)) delay += 200;
      timerId = setTimeout(() => typeNextChar(i + 1), delay);
    };

    timerId = setTimeout(() => {
      if (!cancelled) {
        setTypedText('');
        setShowCursor(true);
        typeNextChar(0);
      }
    }, 700);

    return () => {
      cancelled = true;
      clearTimeout(timerId);
    };
  }, [inView, personal.tagline, reduceMotion]);

  const displayedTagline = reduceMotion ? personal.tagline : typedText;

  return (
    <Box id="hero" component="section" ref={sectionRef} sx={{ minHeight: '92dvh', display: 'flex', alignItems: 'center', pt: 9, pb: 7 }}>
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 28, height: 1, bgcolor: 'text.primary', flexShrink: 0 }} />
              <Typography sx={{ color: 'text.secondary', letterSpacing: '0.16em', fontWeight: 600, fontSize: '0.72rem' }}>
                FRONTEND DEVELOPER
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.7rem', md: '4.8rem' }, mb: 1.5, fontWeight: 800, lineHeight: 1 }}>
              <Box component="span" sx={{ display: 'block', color: 'text.secondary', fontSize: '0.34em', fontWeight: 500, mb: 1 }}>
                안녕하세요,
              </Box>
              <Box component="span" sx={{ color: 'text.primary' }}>
                {personal.name}
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box sx={{ width: 2, height: 18, bgcolor: 'divider', flexShrink: 0 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', sm: '1.05rem' }, fontFamily: 'var(--font-geist-mono), monospace', minHeight: '1.6em' }}>
                {displayedTagline}
                {showCursor && !reduceMotion && (
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.45, 0.55, 0.9, 1], ease: 'easeInOut' }}
                    style={{ display: 'inline-block', width: 2, height: '1.1em', marginLeft: 3, verticalAlign: 'text-bottom', background: muiTheme.palette.text.primary }}
                  />
                )}
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 540, mb: 4, lineHeight: 1.8, borderLeft: '2px solid', borderColor: 'divider', pl: 2.2 }}>
              {personal.bio}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap sx={{ mb: 5 }}>
              <Button variant="contained" color="primary" size="large" component="a" href="#projects">
                프로젝트 보기
              </Button>
              <Button variant="outlined" color="primary" size="large" component="a" href="#contact">
                연락하기
              </Button>
            </Stack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 40, height: 1, bgcolor: 'divider' }} />
              <Box sx={{ width: 16, height: 1, bgcolor: 'text.primary' }} />
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mt: 3.5 }}>
              {[
                ...(personal.blog ? [{ label: 'Blog', href: personal.blog }] : []),
                { label: personal.email, href: `mailto:${personal.email}` },
              ].map((link, i, arr) => (
                <Box key={link.href} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography
                    component="a"
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    variant="body2"
                    sx={{ color: 'text.secondary', fontFamily: 'var(--font-geist-mono), monospace', textDecoration: 'none', fontSize: '0.8rem', '&:hover': { color: 'text.primary' }, transition: 'color 0.2s' }}
                  >
                    {link.label}
                  </Typography>
                  {i < arr.length - 1 && <Box sx={{ width: 3, height: 3, bgcolor: 'divider' }} />}
                </Box>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
