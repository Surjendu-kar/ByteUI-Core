import { Stack, Button, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../enums";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        // background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            gap: 4,
            textAlign: "center",
            py: 8,
          }}
        >
          <Typography 
            variant="h1" 
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 700,
              background: "linear-gradient(to right, #fff 20%, #90caf9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            ByteUI-Core
          </Typography>
          <Typography 
            variant="h2" 
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
              mb: 2,
            }}
          >
            A modern Material-UI component library for building beautiful React applications
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(Path.Installation)}
            sx={{
              textTransform: "none",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              fontSize: "1.1rem",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-2px)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
