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
              Projects
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' } }}
          >
            프로젝트
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            주요 프로젝트의 세부 사항을 확인해 보세요.
          </Typography>
        </FadeIn>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}>
          {portfolioData.projects.map((project, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: 'divider',
                }}
              >
                <CardContent sx={{ p: 3, flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.01em', pr: 1 }}
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
                        borderRadius: 1,
                        fontWeight: 600,
                        bgcolor: project.status === '서비스 중' ? 'text.primary' : 'action.hover',
                        color: project.status === '서비스 중' ? 'background.default' : 'text.secondary',
                        border: '1px solid',
                        borderColor: project.status === '서비스 중' ? 'text.primary' : 'divider',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
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
                        sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
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
