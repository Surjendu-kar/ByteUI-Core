import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Params, Path } from "../../enums";
import theme from "../../theme";

const drawerWidth = 200;

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

  const drawer = (
    <Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "flex-end",
          p: 1,
        }}
      >
        <IconButton
          onClick={handleDrawerClose}
          sx={{ color: theme.palette.text.primary }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
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
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    bgcolor: isSelected
                      ? "rgba(255, 255, 255, 0.08)"
                      : "transparent",
                    "&:hover": {
                      bgcolor: isSelected
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(255, 255, 255, 0.16) !important",
                    },
                    "&.MuiListItemButton-root:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.16)",
                    },
                  }}
                >
                  <ListItemText primary={display} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* mobile screen */}
      <Drawer
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
            background: theme.palette.background.default,
            borderRight: 1,
            borderColor: "divider",
            color: theme.palette.text.primary,
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* desktop screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: theme.palette.background.default,
            color: "white",
            borderRight: 1,
            borderColor: "divider",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
