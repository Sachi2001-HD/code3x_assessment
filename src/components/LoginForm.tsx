import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

function LoginForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  console.log('Username:', username)
  console.log('Password:', password)
 }

  return (
    <Box
       component="form"
       onSubmit={handleSubmit}
       sx={{
       display: 'flex',
       flexDirection: 'column',
       gap: 2,
       mt: 4,
  }}
>
    <TextField
        label="Username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
    />

    <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
/>

      <Button
        type="submit"
        variant="contained"
        size="large"
      >
        Sign in
      </Button>
    </Box>
  )
}

export default LoginForm