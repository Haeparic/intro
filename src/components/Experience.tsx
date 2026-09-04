import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { portfolioData } from '@/data/portfolio';
import FadeIn from '@/components/FadeIn';

export default function Experience() {
  const list = portfolioData.experiences;

  return (
    <Box id="experience" component="section" sx={{ py: { xs: 8, md: 10 } }}>
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
              Experience
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' } }}
          >
            경력 사항
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다.
          </Typography>
        </FadeIn>

        {list.map((exp, i) => (
          <FadeIn key={i} delay={i * 100}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '20px 1fr', sm: '160px 20px 1fr' },
                columnGap: { xs: '16px', sm: '24px' },
              }}
            >
              {/* Left — period (desktop) */}
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  pt: '4px',
                  gap: 0.5,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    color: 'text.secondary',
                    textAlign: 'right',
                    lineHeight: 1.5,
                    fontSize: '0.7rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {exp.period}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.disabled', textAlign: 'right', fontSize: '0.65rem' }}>
                  {exp.location}
                </Typography>
              </Box>

              {/* Timeline */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '4px' }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: 'text.primary',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }}
                />
                {i < list.length - 1 && (
                  <Box
                    sx={{
                      width: '1px',
                      flex: 1,
                      background: 'divider',
                      mt: 1,
                      minHeight: 40,
                    }}
                  />
                )}
              </Box>

              {/* Content */}
              <Box sx={{ pb: 5 }}>
                {/* Mobile period */}
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    fontFamily: 'var(--font-geist-mono), monospace',
                    color: 'text.secondary',
                    mb: 0.5,
                    fontSize: '0.7rem',
                  }}
                >
                  {exp.period}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.01em' }}>
                    {exp.company}
                  </Typography>
                  <Chip
                    label={exp.type}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.65rem',
                      borderRadius: 1,
                      fontWeight: 600,
                      bgcolor: 'action.hover',
                      color: 'text.secondary',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, fontWeight: 600, color: 'text.primary', letterSpacing: '0.01em', fontSize: '0.85rem' }}
                >
                  {exp.role}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
                  {exp.description}
                </Typography>

                <Box component="ul" sx={{ p: 0, m: 0, mb: 2.5, listStyle: 'none' }}>
                  {exp.achievements.map((ach, j) => (
                    <Box
                      component="li"
                      key={j}
                      sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 0.75 }}
                    >
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          bgcolor: 'text.secondary',
                          mt: '7px',
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {ach}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {exp.stacks.map((stack) => (
                    <Chip
                      key={stack}
                      label={stack}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.72rem' }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </FadeIn>
        ))}
      </Container>
    </Box>
  );
}
