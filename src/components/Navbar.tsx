'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { portfolioData } from '@/data/portfolio';
import { useThemeToggle } from '@/app/providers';

const NAV_LINKS = [
  { label: '소개', href: '#about' },
  { label: '기술', href: '#skills' },
  { label: '경력', href: '#experience' },
  { label: '프로젝트', href: '#projects' },
  { label: '연락', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 60 });
  const { isDark, toggleTheme } = useThemeToggle();
  const muiTheme = useTheme();
  const dark = muiTheme.palette.mode === 'dark';

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: elevated
            ? (dark ? 'rgba(8,12,22,0.92)' : 'rgba(255,255,255,0.95)')
            : (dark ? 'rgba(8,12,22,0.4)' : 'rgba(255,255,255,0.6)'),
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: elevated
            ? (dark ? 'rgba(249,158,26,0.25)' : 'rgba(46,125,50,0.15)')
            : 'transparent',
          transition: 'background-color 0.3s, border-color 0.3s',
        }}
      >
        {/* Accent bar at very top — dark mode only */}
        {dark && (
          <Box
            sx={{
              height: 2,
              background: 'linear-gradient(90deg, #F99E1A 0%, #00B4FF 50%, transparent 100%)',
              opacity: elevated ? 1 : 0,
              transition: 'opacity 0.3s',
            }}
          />
        )}
        <Toolbar
          sx={{
            maxWidth: 960,
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 56, sm: 64 },
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="#hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexGrow: 1,
              textDecoration: 'none',
              '&:hover .nav-logo-bar': { width: 24 },
            }}
          >
            <Box
              className="nav-logo-bar"
              sx={{
                width: 16,
                height: 3,
                bgcolor: 'primary.main',
                transition: 'width 0.2s ease',
                flexShrink: 0,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                color: 'primary.main',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
              }}
            >
              {portfolioData.personal.name}
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                component="a"
                href={link.href}
                size="small"
                sx={{
                  color: 'text.secondary',
                  clipPath: 'none',
                  borderRadius: dark ? 0 : 1,
                  px: 1.5,
                  letterSpacing: '0.06em',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%) scaleX(0)',
                    transformOrigin: 'center',
                    width: '80%',
                    height: '2px',
                    bgcolor: 'primary.main',
                    transition: 'transform 0.2s ease',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                    '&::after': { transform: 'translateX(-50%) scaleX(1)' },
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              component="a"
              href={portfolioData.personal.resume}
              variant="outlined"
              color="primary"
              size="small"
              sx={{ ml: 1, clipPath: 'none' }}
            >
              이력서
            </Button>
            {/* Dark mode toggle */}
            <Tooltip title={isDark ? '라이트 모드' : '다크 모드'}>
              <IconButton
                onClick={toggleTheme}
                aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                size="small"
                sx={{ ml: 0.5, color: 'primary.main' }}
              >
                {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 0.5 }}>
            {/* Dark mode toggle — mobile */}
            <Tooltip title={isDark ? '라이트 모드' : '다크 모드'}>
              <IconButton
                onClick={toggleTheme}
                aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                size="small"
                sx={{ color: 'primary.main' }}
              >
                {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="메뉴 열기"
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundImage: 'none',
            borderLeft: `1px solid ${dark ? 'rgba(249,158,26,0.25)' : 'rgba(46,125,50,0.15)'}`,
          },
        }}
      >
        <Box
          sx={{
            height: 2,
            background: dark
              ? 'linear-gradient(90deg, transparent, #F99E1A 50%, #00B4FF)'
              : 'linear-gradient(90deg, transparent, #2E7D32 50%, #4CAF50)',
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography
            sx={{
              fontWeight: 900,
              color: 'primary.main',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
            }}
          >
            MENU
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="메뉴 닫기" sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding sx={{ mb: 0.25 }}>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderLeft: '2px solid transparent',
                  pl: 2,
                  '&:hover': {
                    color: 'primary.main',
                    borderLeftColor: 'primary.main',
                    bgcolor: 'rgba(249,158,26,0.06)',
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { fontWeight: 600, letterSpacing: '0.04em' } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 2, px: 2 }}>
            <Button
              fullWidth
              component="a"
              href={portfolioData.personal.resume}
              variant="outlined"
              color="primary"
              onClick={() => setDrawerOpen(false)}
            >
              이력서
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

