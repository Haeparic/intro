import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="md">
        <Box
          sx={{
            maxWidth: 560,
            mx: 'auto',
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            border: '1px solid',
            borderColor: 'divider',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #F99E1A, #00B4FF, transparent)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(249,158,26,0.03) 0%, transparent 60%)',
              pointerEvents: 'none',
            },
          }}
        >
          {/* Section label */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
            <Box sx={{ width: 16, height: 1, bgcolor: 'primary.main' }} />
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
              Contact
            </Typography>
            <Box sx={{ width: 16, height: 1, bgcolor: 'primary.main' }} />
          </Box>

          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' }, textTransform: 'uppercase' }}
          >
            함께 일하고 싶으신가요?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.85 }}>
            합류 또는 프로젝트 제안 문의가 있다면 편하게 연락주세요.
            <br />
            1–2일 이내에 꼭 답장드리겠습니다 :)
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            component="a"
            href={`mailto:${personal.email}`}
            sx={{ mb: 5 }}
          >
            메일 보내기 ↗
          </Button>

          {/* Divider accent */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, justifyContent: 'center' }}>
            <Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
            <Box sx={{ width: 5, height: 5, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
            <Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
            {personal.github && (
              <Button
                component="a"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  clipPath: 'none',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                GitHub
              </Button>
            )}
            {personal.linkedin && (
              <Button
                component="a"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', clipPath: 'none', '&:hover': { color: 'secondary.main' } }}
              >
                LinkedIn
              </Button>
            )}
            {personal.blog && (
              <Button
                component="a"
                href={personal.blog}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', clipPath: 'none', '&:hover': { color: 'secondary.main' } }}
              >
                Blog
              </Button>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

