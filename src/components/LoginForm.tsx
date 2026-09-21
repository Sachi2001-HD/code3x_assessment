import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";

import { FaApple, FaFacebookF } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log("Email:", email);
  console.log("Password:", password);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
          "& .MuiFormLabel-asterisk": {
            color: "error.main",
          },
        }}
      />
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        fullWidth
        required
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((previous) => !previous)}
                  edge="end"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
          "& .MuiFormLabel-asterisk": {
            color: "error.main",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: -1,
        }}
      >
        <Link href="#" underline="hover" color="text.primary" variant="body2">
          Forgot password?
        </Link>
      </Box>

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 1,
          py: 1.5,
          fontWeight: 600,
          borderRadius: 2,
        }}
      >
        Login
      </Button>

      <Divider sx={{ my: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
          or continue with
        </Typography>
      </Divider>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <IconButton
          aria-label="Continue with Google"
          sx={{
            width: 48,
            height: 48,
            border: "2px solid",
            borderColor: "divider",
          }}
        >
          <FcGoogle size={22} />
        </IconButton>

        <IconButton
          aria-label="Continue with Apple"
          sx={{
            width: 48,
            height: 48,
            border: "2px solid",
            borderColor: "divider",
          }}
        >
          <FaApple size={22} />
        </IconButton>

        <IconButton
          aria-label="Continue with Facebook"
          sx={{
            width: 48,
            height: 48,
            border: "2px solid",
            borderColor: "divider",
          }}
        >
          <FaFacebookF size={20} color="#1877F2" />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          textAlign: "center",
          mt: 3,
        }}
      >
        Not a member?{" "}
        <Link href="#" underline="hover" color="primary">
          Register now
        </Link>
      </Typography>
    </Box>
  );
}

export default LoginForm;
