import { Stack, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import theme from "./theme";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack bgcolor={theme.palette.background.default} minHeight="100dvh">
        {children}
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
