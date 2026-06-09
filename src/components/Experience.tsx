import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { portfolioData } from '@/data/portfolio';
import FadeIn from '@/components/FadeIn';

export default function Experience() {
  const list = portfolioData.experiences;

  return (
    <Box id="experience" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="md">
        <FadeIn>
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
              Experience
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' }, textTransform: 'uppercase' }}
          >
            경력 사항
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
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
                    color: 'primary.main',
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

              {/* Timeline — diamond dot + line */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '4px' }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    bgcolor: 'primary.main',
                    transform: 'rotate(45deg)',
                    flexShrink: 0,
                    boxShadow: '0 0 10px rgba(249,158,26,0.6)',
                  }}
                />
                {i < list.length - 1 && (
                  <Box
                    sx={{
                      width: '1px',
                      flex: 1,
                      background: 'linear-gradient(to bottom, rgba(249,158,26,0.4), rgba(249,158,26,0.08))',
                      mt: 1,
                      minHeight: 40,
                    }}
                  />
                )}
              </Box>

              {/* Content */}
              <Box sx={{ pb: 6 }}>
                {/* Mobile period */}
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    fontFamily: 'var(--font-geist-mono), monospace',
                    color: 'primary.main',
                    mb: 0.5,
                    fontSize: '0.7rem',
                  }}
                >
                  {exp.period}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    {exp.company}
                  </Typography>
                  <Chip
                    label={exp.type}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.65rem',
                      borderRadius: 0,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      bgcolor: 'rgba(249,158,26,0.12)',
                      color: 'primary.main',
                      border: '1px solid rgba(249,158,26,0.4)',
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, fontWeight: 600, color: 'secondary.main', letterSpacing: '0.04em', fontSize: '0.8rem' }}
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
                          width: 5,
                          height: 5,
                          bgcolor: 'primary.main',
                          transform: 'rotate(45deg)',
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

