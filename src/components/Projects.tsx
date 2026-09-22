import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
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
          {portfolioData.projects.map((project, i) => {
            const pageLink = project.demo;

            return (
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ minWidth: 0, overflowWrap: 'anywhere', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.01em' }}
                      >
                        {project.title}
                      </Typography>
                      {pageLink && (
                        <IconButton
                             component="a"
                             href={pageLink}
                             target="_blank"
                             rel="noopener noreferrer"
                            size="small"
                            aria-label={`${project.title} 페이지 열기`}
                            sx={{
                              flexShrink: 0,
                              border: '1px solid',
                              borderColor: 'divider',
                              borderRadius: 1,
                              color: 'text.secondary',
                              '&:hover': {
                                color: 'text.primary',
                                borderColor: 'text.primary',
                                bgcolor: 'action.hover',
                              },
                            }}
                         >
                           <OpenInNewRoundedIcon fontSize="inherit" />
                         </IconButton>
                      )}
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
                </Card>
              </FadeIn>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
