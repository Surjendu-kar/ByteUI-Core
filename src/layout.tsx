import { Stack, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import theme from "./theme";
import { motion } from "framer-motion";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{ 
          minHeight: "100dvh",
          background: "#000",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Animated background gradient */}
        <Stack
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
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.6,
            zIndex: 0,
          }}
        />
        <Stack 
          sx={{ 
            position: "relative", 
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "column"
          }}
        >
          {children}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
