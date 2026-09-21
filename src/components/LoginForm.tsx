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
import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const accessToken = await result.user.getIdToken();

      navigate("/token", {
        state: { accessToken },
      });
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <Box
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
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined color="action" />
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

      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        fullWidth
        required
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((previous) => !previous)}
                  edge="end"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
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
        <Link href="#" underline="hover" color="primary" variant="body2">
          Forgot password?
        </Link>
      </Box>

      <Button
        type="button"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 1,
          py: 1.5,
          fontWeight: 600,
          borderRadius: 2,
          backgroundColor: "primary.main",
          boxShadow: "0 4px 12px rgba(45, 69, 47, 0.2)",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "primary.dark",
            boxShadow: "0 6px 16px rgba(45, 69, 47, 0.3)",
            transform: "translateY(-1px)",
          },
        }}
      >
        Login
      </Button>

      <Divider sx={{ my: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ px: 1 }}
        >
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
          onClick={handleGoogleLogin}
          sx={{
            width: 48,
            height: 48,
            border: "2px solid",
            borderColor: "divider",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              transform: "translateY(-2px)",
            },
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