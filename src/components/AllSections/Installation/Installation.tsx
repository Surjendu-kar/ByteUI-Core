import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  IconButton,
  Typography,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';

const Container = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "0 1rem",
  
}));

const CustomTab = styled(Tab)(() => ({
  color: "rgba(255, 255, 255, 0.5)",
  minHeight: "40px",
  padding: "8px 12px",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "normal",
  minWidth: "auto",
  position: "relative",
  "&:hover": {
    background: "rgba(61, 71, 81, 0.3)",
    color: "#ffffffc9",
  },
  "&.Mui-selected": {
    color: "white",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      background: "linear-gradient(to right, #fff 20%, #90caf9 100%)",
    },
  },
}));

const MotionPaper = motion(Paper);

const Installation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const npmCommand = "npm i @byteui/mui-core";
  const yarnCommand = "yarn add @byteui/mui-core";

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleCopy = async () => {
    const commandToCopy = activeTab === 0 ? npmCommand : yarnCommand;
    await navigator.clipboard.writeText(commandToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Stack sx={{ width: "100%", alignItems: "center" }}>
      <Container>
        <MotionPaper
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.87)",
            color: "white",
            borderRadius: 2,
            overflow: "hidden",
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box sx={{ p: 2, borderBottom: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", gap: 1 }}>
            <CodeIcon sx={{ color: "#90caf9" }} />
            <Typography variant="subtitle2" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Install Package
            </Typography>
          </Box>
          
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              minHeight: "40px",
              borderBottom: 1,
              borderColor: "rgba(255, 255, 255, 0.1)",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <CustomTab label="npm" />
            <CustomTab label="yarn" />
          </Tabs>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              background: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography
              component="code"
              sx={{
                fontFamily: "monospace",
                fontSize: "15px",
                color: "#90caf9",
                letterSpacing: 0.5,
              }}
            >
              $ {activeTab === 0 ? npmCommand : yarnCommand}
            </Typography>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              size="small"
              sx={{
                color: copied ? "#a6e3a1" : "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                ml: 1,
                transition: "all 0.3s ease",
              }}
            >
              {copied ? (
                <CheckIcon sx={{ fontSize: 18 }} />
              ) : (
                <ContentCopyIcon sx={{ fontSize: 18 }} />
              )}
            </IconButton>
          </Box>
        </MotionPaper>
      </Container>
    </Stack>
  );
};

export default Installation;
