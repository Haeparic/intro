import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Box
          sx={{
            maxWidth: 560,
            mx: 'auto',
            textAlign: 'center',
            p: { xs: 3.5, md: 5 },
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
            <Box sx={{ width: 16, height: 1, bgcolor: 'divider' }} />
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
              Contact
            </Typography>
            <Box sx={{ width: 16, height: 1, bgcolor: 'divider' }} />
          </Box>

          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            함께 일하고 싶으신가요?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4.5, lineHeight: 1.8 }}>
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
            sx={{ mb: 4.5 }}
          >
            메일 보내기 ↗
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, justifyContent: 'center' }}>
            <Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
            <Box sx={{ width: 5, height: 1, bgcolor: 'text.primary' }} />
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
                  '&:hover': { color: 'text.primary', bgcolor: 'action.hover' },
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
                sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary', bgcolor: 'action.hover' } }}
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
                sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary', bgcolor: 'action.hover' } }}
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
