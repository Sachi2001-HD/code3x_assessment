import { useLocation } from "react-router-dom";
import { Box, Container, Paper, Typography } from "@mui/material";

function Token() {
  const location = useLocation();
  const accessToken = location.state?.accessToken;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
            Login Successful
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Your access token:
          </Typography>

          <Box
            sx={{
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              wordBreak: "break-all",
              fontFamily: "monospace",
              fontSize: "0.85rem",
            }}
          >
            {accessToken || "No access token available."}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Token;
