import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Params, Path } from "../../enums";
import theme from "../../theme";
import { motion } from "framer-motion";

const drawerWidth = 200;

const MotionListItem = motion(ListItem);
const MotionBox = motion(Box);
const MotionDrawer = motion(Drawer);

interface Props {
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { window } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.get(Params.SidebarOpen) === "true";
  const location = useLocation();

  const handleDrawerClose = () => {
    searchParams.delete(Params.SidebarOpen);
    setSearchParams(searchParams);
  };

  const navItems = [
    { display: "Installation", path: Path.Installation },
    { display: "Button", path: Path.Buttons },
    { display: "Loader", path: Path.Loaders },
    { display: "Card", path: Path.Cards },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileDrawerVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    closed: {
      x: -drawerWidth,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    }
  };

  const drawer = (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "flex-end",
          p: 1,
        }}
      >
        <IconButton
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDrawerClose}
          sx={{ color: theme.palette.text.primary }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ p: 0 }}>
        {navItems.map(({ display, path }) => {
          const isSelected =
            location.pathname === `/${path}` ||
            (location.pathname === "/" && path === Path.Installation);

          return (
            <Link
              to={path}
              key={display}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MotionListItem 
                disablePadding
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ListItemButton
                  sx={{
                    bgcolor: isSelected
                      ? "rgba(255, 255, 255, 0.08)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: isSelected
                        ? "rgba(255, 255, 255, 0.12)"
                        : "rgba(255, 255, 255, 0.16) !important",
                    },
                    "&.MuiListItemButton-root:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.16)",
                    },
                  }}
                >
                  <ListItemText 
                    primary={display}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: isSelected ? 600 : 400,
                        background: isSelected 
                          ? "linear-gradient(to right, #fff 20%, #90caf9 100%)"
                          : "none",
                        WebkitBackgroundClip: isSelected ? "text" : "none",
                        WebkitTextFillColor: isSelected ? "transparent" : "inherit",
                      }
                    }}
                  />
                </ListItemButton>
              </MotionListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </MotionBox>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* mobile screen */}
      <MotionDrawer
        container={container}
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "rgba(13, 17, 23, 0.95)",
            backdropFilter: "blur(10px)",
            borderRight: "none",
            color: theme.palette.text.primary,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            height: "100%",
            top: "0px",
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent)',
            },
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileDrawerVariants}
      >
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {drawer}
        </MotionBox>
      </MotionDrawer>

      {/* desktop screen drawer remains unchanged */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "transparent",
            color: "white",
            borderRight: 1,
            borderColor: "divider",
            zIndex: 1100,
            height: "calc(100% - 70px)",
            top: "70px",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
