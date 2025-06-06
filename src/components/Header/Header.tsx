import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSearchParams } from "react-router-dom";
import { Params } from "../../enums";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Path } from "../../enums";
import { useEffect, useState } from "react";
// import image from "../../assets/logo-3.png";

const MotionTypography = motion(Typography);

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    searchParams.set(Params.SidebarOpen, "true");
    setSearchParams(searchParams);
  };

  const handleLogoClick = () => {
    navigate(Path.Home);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: { xs: 64, sm: 70 },
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        bgcolor: isScrolled ? 'rgba(18, 18, 18, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1200,
        boxShadow: isScrolled ? "0 0 10px rgba(0, 0, 0, 0.2)" : "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "flex", sm: "none" },
          position: { xs: "absolute", sm: "static" },
          left: 6,
          color: theme.palette.text.primary,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          pl: {xs: 5, sm: 3},
        }}
      >
        <MotionTypography
          variant="h6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleLogoClick}
          sx={{
            fontWeight: 700,
            background: "linear-gradient(to right, #fff 20%, #90caf9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            cursor: "pointer"
          }}
        >
          ByteUI-Core
        </MotionTypography>
      </Box>
    </Box>
  );
}

export default Header;
