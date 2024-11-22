import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack bgcolor="background.default" minHeight="100dvh">
        {children}
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
