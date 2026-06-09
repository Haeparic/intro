import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #F99E1A 0%, transparent 40%)',
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 3, height: 3, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {personal.name}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{ color: 'text.disabled', fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.7rem' }}
          >
            &copy; {year} {personal.nameEn}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

