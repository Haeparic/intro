import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { portfolioData } from '@/data/portfolio';
import FadeIn from '@/components/FadeIn';

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #F99E1A 30%, #00B4FF 70%, transparent)',
        },
      }}
    >
      <Container maxWidth="md">
        <FadeIn>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <Box sx={{ width: 4, height: 20, bgcolor: 'secondary.main' }} />
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
                fontFamily: 'var(--font-geist-mono), monospace',
              }}
            >
              Technical Skills
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' }, textTransform: 'uppercase' }}
          >
            기술 스택
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            아래의 기술들을 사용할 수 있습니다.
          </Typography>
        </FadeIn>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
          {Object.entries(portfolioData.skills).map(([category, techs], i) => (
            <FadeIn key={category} delay={i * 80}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: { sm: 'flex-start' },
                  gap: { xs: 1.5, sm: 4 },
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Box sx={{ minWidth: 120, display: 'flex', alignItems: 'center', gap: 1, pt: { sm: '4px' } }}>
                  <Box sx={{ width: 2, height: 12, bgcolor: i % 2 === 0 ? 'primary.main' : 'secondary.main', flexShrink: 0 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: i % 2 === 0 ? 'primary.main' : 'secondary.main',
                      fontSize: '0.65rem',
                    }}
                  >
                    {category}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {techs.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      variant="outlined"
                      size="small"
                      sx={{
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: i % 2 === 0 ? 'primary.main' : 'secondary.main',
                          color: i % 2 === 0 ? 'primary.main' : 'secondary.main',
                          bgcolor: i % 2 === 0 ? 'rgba(249,158,26,0.06)' : 'rgba(0,180,255,0.06)',
                          boxShadow: i % 2 === 0
                            ? '0 0 8px rgba(249,158,26,0.25)'
                            : '0 0 8px rgba(0,180,255,0.25)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

