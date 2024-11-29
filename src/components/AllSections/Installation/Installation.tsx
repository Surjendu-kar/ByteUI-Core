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
import theme from "../../../theme";

const Container = styled(Stack)(({ theme }) => ({
  width: "50%",
  margin: "1rem 0",
  [theme.breakpoints.down("sm")]: { width: "95%" },
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
    background: "#3d47514d",
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
      backgroundColor: "white",
    },
  },
}));

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
        <Paper
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.87)",
            color: "white",
            borderRadius: 1,
            overflow: "hidden",
            width: "100%",
          }}
        >
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
            }}
          >
            <Typography
              component="code"
              sx={{
                fontFamily: "monospace",
                fontSize: "14px",
                color: theme.palette.text.secondary,
              }}
            >
              {activeTab === 0 ? npmCommand : yarnCommand}
            </Typography>
            <IconButton
              onClick={handleCopy}
              size="small"
              sx={{
                color: copied ? "#a6e3a1" : "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                ml: 1,
              }}
            >
              {copied ? (
                <CheckIcon sx={{ fontSize: 16 }} />
              ) : (
                <ContentCopyIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Stack>
  );
};

export default Installation;
