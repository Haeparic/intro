import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { portfolioData } from '@/data/portfolio';
import FadeIn from '@/components/FadeIn';

export default function Projects() {
  return (
    <Box
      id="projects"
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
          background: 'linear-gradient(90deg, #00B4FF 0%, #F99E1A 50%, transparent 100%)',
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
              Projects
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' }, textTransform: 'uppercase' }}
          >
            프로젝트
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            주요 프로젝트의 세부 사항을 확인해 보세요.
          </Typography>
        </FadeIn>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
          {portfolioData.projects.map((project, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: project.status === '서비스 중'
                      ? 'linear-gradient(90deg, #F99E1A, transparent)'
                      : 'linear-gradient(90deg, #00B4FF, transparent)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 20px 20px 0',
                    borderColor: project.status === '서비스 중'
                      ? 'transparent rgba(249,158,26,0.3) transparent transparent'
                      : 'transparent rgba(0,180,255,0.3) transparent transparent',
                  },
                }}
              >
                <CardContent sx={{ p: 3, flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.02em', pr: 1 }}
                    >
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.status}
                      size="small"
                      sx={{
                        ml: 1,
                        flexShrink: 0,
                        fontSize: '0.65rem',
                        height: 20,
                        borderRadius: 0,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        bgcolor: project.status === '서비스 중'
                          ? 'rgba(249,158,26,0.12)'
                          : 'rgba(0,180,255,0.08)',
                        color: project.status === '서비스 중' ? 'primary.main' : 'secondary.main',
                        border: '1px solid',
                        borderColor: project.status === '서비스 중'
                          ? 'rgba(249,158,26,0.4)'
                          : 'rgba(0,180,255,0.35)',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.disabled',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      display: 'block',
                      mb: 2,
                      fontSize: '0.68rem',
                    }}
                  >
                    {project.period} · {project.team}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2.5 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {project.stacks.map((stack) => (
                      <Chip key={stack} label={stack} size="small" variant="outlined" sx={{ fontSize: '0.72rem' }} />
                    ))}
                  </Box>
                </CardContent>
                {(project.github || project.demo) && (
                  <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0, gap: 0.5 }}>
                    {project.github && (
                      <Button
                        size="small"
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="small"
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        데모 보기 ↗
                      </Button>
                    )}
                  </CardActions>
                )}
              </Card>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

