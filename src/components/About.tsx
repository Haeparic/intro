import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { portfolioData } from '@/data/portfolio';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="md">
        <FadeIn>
          {/* OW section header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <Box sx={{ width: 4, height: 20, bgcolor: 'primary.main' }} />
            <Typography
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
                fontFamily: 'var(--font-geist-mono), monospace',
              }}
            >
              About
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' }, textTransform: 'uppercase' }}
          >
            핵심 역량
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: 540 }}>
            유연하게 소통하고 견고하게 개발합니다.
          </Typography>
        </FadeIn>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
          {portfolioData.strengths.map((item, i) => (
            <FadeIn key={item.title} delay={i * 120}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: i % 2 === 0
                      ? 'linear-gradient(90deg, #F99E1A, transparent)'
                      : 'linear-gradient(90deg, #00B4FF, transparent)',
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      mb: 2.5,
                      border: '1px solid',
                      borderColor: 'divider',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, mb: 1.5, letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.9rem' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

