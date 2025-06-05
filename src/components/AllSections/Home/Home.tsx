import { Stack, Button, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../enums";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

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

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        // background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
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

      <Container maxWidth="md">
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
          <MotionTypography
            variant="h1"
            variants={itemVariants}
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
            variants={itemVariants}
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
              mb: 2,
            }}
          >
            A modern Material-UI component library for building beautiful React applications
          </MotionTypography>

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
      </Container>
    </Box>
  );
}

export default Home;
