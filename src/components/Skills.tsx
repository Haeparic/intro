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
      py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
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
              Technical Skills
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' } }}
          >
            기술 스택
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            아래의 기술들을 사용할 수 있습니다.
          </Typography>
        </FadeIn>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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
                  <Box sx={{ width: 2, height: 12, bgcolor: 'divider', flexShrink: 0 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'text.secondary',
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
                          borderColor: 'text.primary',
                          color: 'text.primary',
                          bgcolor: 'action.hover',
                          boxShadow: 'none',
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
