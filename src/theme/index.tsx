import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "dark",
    primary: {
      main: "#f8c555",
      light: "#ffc53b75",
    },
    secondary: {
      main: "#2a2b36",
    },
    // grey: {
    //   200: "#D9D9D9",
    //   300: "#727272",
    //   400: "#a6b8ca",
    // },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffffc9",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
});

export default theme;
