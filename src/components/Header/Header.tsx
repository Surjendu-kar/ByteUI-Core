import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSearchParams } from "react-router-dom";
import { Params } from "../../enums";
import image from "../../assets/logo-2.png";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDrawerToggle = () => {
    searchParams.set(Params.SidebarOpen, "true");
    setSearchParams(searchParams);
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
        // px: 20,
        bgcolor: "background.paper",
        zIndex: 1100,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "flex", sm: "none" },
          position: { xs: "absolute", sm: "static" },
          left: 8,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Logo"
          sx={{
            height: { xs: "90px", sm: "110px" },
            width: { xs: "100px", sm: "120px" },
          }}
        />
      </Box>
    </Box>
  );
}

export default Header;
