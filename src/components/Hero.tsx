'use client';

import { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { portfolioData } from '@/data/portfolio';

// Framer Motion variants for staggered fade-up
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Hero() {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  const muiTheme = useTheme();

  // Track when the hero section is in view → restart typing each time
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    setTypedText('');
    setShowCursor(false);
    if (!inView) return;

    const full = personal.tagline;
    let cancelled = false;
    let timerId: ReturnType<typeof setTimeout>;

    // 재귀 setTimeout으로 자연스러운 타이밍 구현
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
      // 기본 50–100ms + 공백/구두점에서 자연스러운 멈춤
      let delay = 50 + Math.random() * 50;
      if (char === ' ') delay += 35;
      if ('.,!?;:'.includes(char)) delay += 200;

      timerId = setTimeout(() => typeNextChar(i + 1), delay);
    };

    timerId = setTimeout(() => {
      if (!cancelled) {
        setShowCursor(true);
        typeNextChar(0);
      }
    }, 700);

    return () => {
      cancelled = true;
      clearTimeout(timerId);
    };
  }, [inView, personal.tagline]);

  return (
    <Box
      id="hero"
      component="section"
      ref={sectionRef}
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: 10,
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative angular background accent */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '100%',
            background:
              'linear-gradient(135deg, transparent 0%, rgba(249,158,26,0.04) 50%, rgba(0,180,255,0.03) 100%)',
            borderLeft: '1px solid rgba(249,158,26,0.12)',
            transform: 'skewX(-8deg) translateX(4%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            width: 240,
            height: 240,
            background:
              'radial-gradient(circle, rgba(0,180,255,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
          },
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Stagger container — replays every time the section enters view */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Overline badge */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 28, height: 2, bgcolor: 'primary.main', flexShrink: 0 }} />
              <Typography
                sx={{
                  color: 'primary.main',
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-geist-mono), monospace',
                }}
              >
                Frontend Developer
              </Typography>
              <Box sx={{ width: 8, height: 8, bgcolor: 'secondary.main', flexShrink: 0, transform: 'rotate(45deg)' }} />
            </Box>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.2rem', md: '5.8rem' },
                mb: 2,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: { xs: '0.01em', md: '0.02em' },
                lineHeight: 0.95,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'block',
                  color: 'text.secondary',
                  fontSize: '0.35em',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  mb: 1,
                  textTransform: 'none',
                }}
              >
                안녕하세요,
              </Box>
              <Box component="span" sx={{ color: 'primary.main' }}>
                {personal.name}
              </Box>
            </Typography>
          </motion.div>

          {/* Tagline — typing */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
              }}
            >
              <Box sx={{ width: 3, height: 20, bgcolor: 'secondary.main', flexShrink: 0 }} />
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontFamily: 'var(--font-geist-mono), monospace',
                  minHeight: '1.6em',
                  letterSpacing: '0.02em',
                }}
              >
                {typedText}
                {showCursor && (
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0, 1] }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      times: [0, 0.45, 0.55, 0.9, 1],
                      ease: 'easeInOut',
                    }}
                    style={{
                      display: 'inline-block',
                      width: 2,
                      height: '1.1em',
                      marginLeft: 3,
                      verticalAlign: 'text-bottom',
                      background: muiTheme.palette.primary.main,
                    }}
                  />
                )}
              </Typography>
            </Box>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 560,
                mb: 5,
                lineHeight: 1.85,
                borderLeft: '2px solid',
                borderColor: 'primary.main',
                pl: 2.5,
              }}
            >
              {personal.bio}
            </Typography>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mb: 6 }}>
              <Button variant="contained" color="primary" size="large" component="a" href="#projects">
                프로젝트 보기
              </Button>
              <Button variant="outlined" color="primary" size="large" component="a" href="#contact">
                연락하기
              </Button>
              {personal.github && (
                <Button
                  component="a"
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                    '&:hover': { borderColor: 'secondary.main', color: 'secondary.main', bgcolor: 'rgba(0,180,255,0.06)' },
                  }}
                >
                  GitHub
                </Button>
              )}
            </Stack>
          </motion.div>

          {/* Bottom decoration */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 40, height: 1, bgcolor: 'divider' }} />
              <Box sx={{ width: 16, height: 2, bgcolor: 'primary.main' }} />
              <Box sx={{ width: 6, height: 6, bgcolor: 'secondary.main', transform: 'rotate(45deg)' }} />
            </Box>
          </motion.div>

          {/* Links row */}
          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mt: 4 }}>
              {[
                { label: 'GitHub', href: personal.github },
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
                    sx={{
                      color: 'text.disabled',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      letterSpacing: '0.04em',
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Typography>
                  {i < arr.length - 1 && (
                    <Box sx={{ width: 3, height: 3, bgcolor: 'divider', transform: 'rotate(45deg)' }} />
                  )}
                </Box>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
