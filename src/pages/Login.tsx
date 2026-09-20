import { Box, Container, Paper, Typography } from '@mui/material'
import LoginForm from '../components/LoginForm'
import loginImage from '../assets/login_image.svg'

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
        p: {
            xs: 3,
            sm: 5,
            md: 6,
        },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 420 }}>
        <Typography 
          variant="h3"
          sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}
        >
          Welcome back !
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, lineHeight: 1.6 }}
        >
          Simplify your workflow and boost your productivity
          with Tuga's App. Get started for free.
        </Typography>

        <LoginForm />        
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
        overflow: 'hidden',
      }}
    >
      <Box
       component="img"
       src={loginImage}
       alt="Login image"
       sx={{
       width: '100%',
       height: '100%',
       objectFit: 'contain',
       }}
    />
    </Box>
  </Box>
</Paper>
</Container>
</Box>
  )
}

export default Login