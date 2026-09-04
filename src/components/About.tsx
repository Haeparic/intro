import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { portfolioData } from '@/data/portfolio';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <FadeIn>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <Box sx={{ width: 18, height: 1, bgcolor: 'text.primary' }} />
            <Typography
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-geist-mono), monospace',
              }}
            >
              About
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' } }}
          >
            핵심 역량
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 520 }}>
            유연하게 소통하고 견고하게 개발합니다.
          </Typography>
        </FadeIn>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
          {portfolioData.strengths.map((item, i) => (
            <FadeIn key={item.title} delay={i * 120}>
              <Card
                sx={{
                  height: '100%',
                  borderColor: 'divider',
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
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1.5, letterSpacing: '0.01em', fontSize: '0.95rem' }}
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
