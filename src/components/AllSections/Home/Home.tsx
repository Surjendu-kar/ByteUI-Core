import { Stack, Button, Typography, Box, Container, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../enums";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

function Home() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: "Modern Design",
      description: "Beautiful, responsive components built with Material-UI"
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "Performance",
      description: "Optimized for speed and smooth user experience"
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: "Customizable",
      description: "Easily customize components to match your brand"
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      title: "Responsive",
      description: "Works perfectly on all devices and screen sizes"
    }
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        background: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background gradient */}
      <Box
        component={motion.div}
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #1a237e 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #0d47a1 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, #1a237e 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6,
        }}
      />

      <Container maxWidth="lg">
        <Stack
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            gap: 2,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Hero Section */}
          <MotionBox
            variants={itemVariants}
            sx={{
              position: "relative",
              mb: 2,
              height: { xs: 'calc(100vh)', md: 'auto' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center'
            }}
          >
            <MotionTypography
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
            </MotionTypography>

            <MotionTypography
              variant="h2"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                mb: 3,
              }}
            >
              A modern Material-UI component library for building beautiful React applications
            </MotionTypography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <MotionButton
                variant="contained"
                size="large"
                onClick={() => navigate(Path.Installation)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  },
                }}
              >
                Get Started
              </MotionButton>
            </Stack>
          </MotionBox>

          {/* Features Section */}
          <MotionBox
            variants={itemVariants}
          >
            <Grid 
              container 
              spacing={4} 
              justifyContent="center"
              sx={{
                marginBottom: { xs: '1.5rem', md: 0 },
              }}
            >
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <MotionBox
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    sx={{
                      p: 3,
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: 2,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    <Box sx={{ color: "#90caf9", mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      {feature.description}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
