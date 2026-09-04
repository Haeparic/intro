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
            ? (dark ? 'rgba(15,15,16,0.98)' : 'rgba(255,255,255,0.98)')
            : (dark ? 'rgba(15,15,16,0.9)' : 'rgba(255,255,255,0.9)'),
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: 'background-color 0.2s ease',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 960,
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 54, sm: 60 },
          }}
        >
          <Box
            component="a"
            href="#hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            <Box sx={{ width: 18, height: 1, bgcolor: 'text.primary', flexShrink: 0 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
              {portfolioData.personal.name}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                component="a"
                href={link.href}
                size="small"
                sx={{
                  color: 'text.secondary',
                  px: 1.25,
                  borderRadius: 1,
                  '&:hover': { color: 'text.primary', bgcolor: dark ? '#1E1E22' : '#F5F5F5' },
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
              sx={{ ml: 1 }}
            >
              이력서
            </Button>
            <Tooltip title={isDark ? '라이트 모드' : '다크 모드'}>
              <IconButton
                onClick={toggleTheme}
                aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                size="small"
                sx={{ ml: 0.5, color: 'text.secondary' }}
              >
                {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <Tooltip title={isDark ? '라이트 모드' : '다크 모드'}>
              <IconButton
                onClick={toggleTheme}
                aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                size="small"
                sx={{ color: 'text.secondary' }}
              >
                {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="메뉴 열기" sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, backgroundImage: 'none', borderLeft: '1px solid', borderColor: 'divider' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>MENU</Typography>
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
                  pl: 2,
                  borderLeft: '2px solid transparent',
                  '&:hover': { borderLeftColor: 'text.primary', bgcolor: dark ? '#1E1E22' : '#F5F5F5' },
                }}
              >
                <ListItemText primary={link.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
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
