import { Box, Container, Paper, Typography } from '@mui/material'

function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
  elevation={0}
  sx={{
    overflow: 'hidden',
    borderRadius: 4,
  }}
>
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 1fr',
      },
      minHeight: 600,
    }}
  >

    {/* Left side */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 6,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 420 }}>
        <Typography variant="h3">
          Welcome back
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Sign in to continue.
        </Typography>
      </Box>
    </Box>
    

    {/* Right side */}
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Typography variant="h3">
        Code3x
      </Typography>
    </Box>
  </Box>
</Paper>
      </Container>
    </Box>
  )
}

export default Login