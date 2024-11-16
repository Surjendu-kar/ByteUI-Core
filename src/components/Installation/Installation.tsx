// Installation.tsx
import { Box, ListItemText, IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

const Installation = () => {
  const [copiedNpm, setCopiedNpm] = useState(false);
  const [copiedYarn, setCopiedYarn] = useState(false);

  const handleCopy = async (command: string, type: "npm" | "yarn") => {
    await navigator.clipboard.writeText(command);
    if (type === "npm") {
      setCopiedNpm(true);
      setTimeout(() => setCopiedNpm(false), 2000);
    } else {
      setCopiedYarn(true);
      setTimeout(() => setCopiedYarn(false), 2000);
    }
  };

  const npmCommand =
    "npm i @byteui/mui-core @mui/material @emotion/react @emotion/styled";
  const yarnCommand =
    "yarn add @byteui/mui-core @mui/material @emotion/react @emotion/styled";

  return (
    <Box sx={{ width: "70%", margin: "0 auto", mb: 8 }}>
      <ListItemText
        primary="Installation"
        primaryTypographyProps={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fff",
          mb: 2,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <ListItemText
            primary="npm"
            secondary={npmCommand}
            primaryTypographyProps={{
              color: "#66b2ff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              mb: 1,
            }}
            secondaryTypographyProps={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.9rem",
              sx: { wordBreak: "break-all" },
            }}
          />
          <IconButton
            size="small"
            onClick={() => handleCopy(npmCommand, "npm")}
            sx={{
              color: copiedNpm ? "#a6e3a1" : "rgba(255, 255, 255, 0.7)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              ml: 1,
            }}
          >
            {copiedNpm ? (
              <CheckIcon fontSize="small" sx={{ fontSize: 16 }} />
            ) : (
              <ContentCopyOutlinedIcon fontSize="small" sx={{ fontSize: 16 }} />
            )}
          </IconButton>
        </Box>

        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <ListItemText
            primary="yarn"
            secondary={yarnCommand}
            primaryTypographyProps={{
              color: "#66b2ff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              mb: 1,
            }}
            secondaryTypographyProps={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.9rem",
              sx: { wordBreak: "break-all" },
            }}
          />
          <IconButton
            size="small"
            onClick={() => handleCopy(yarnCommand, "yarn")}
            sx={{
              color: copiedYarn ? "#a6e3a1" : "rgba(255, 255, 255, 0.7)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              ml: 1,
            }}
          >
            {copiedYarn ? (
              <CheckIcon fontSize="small" sx={{ fontSize: 16 }} />
            ) : (
              <ContentCopyOutlinedIcon fontSize="small" sx={{ fontSize: 16 }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Installation;
