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
        py: 3.5,
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
            <Box sx={{ width: 14, height: 1, bgcolor: 'text.primary' }} />
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '0.02em' }}
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
