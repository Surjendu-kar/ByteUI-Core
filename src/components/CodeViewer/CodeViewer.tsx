import { useState, FC, ComponentType } from "react";
import { Box, Paper, IconButton, Button } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface CodeViewerProps {
  shortCode: string;
  fullCode: string;
  demo: ComponentType;
}

const CodeViewer: FC<CodeViewerProps> = ({
  shortCode,
  fullCode,
  demo: Demo,
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(isExpanded ? fullCode : shortCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Paper
      sx={{
        maxWidth: 800,
        mx: "auto",
      }}
    >
      {/* Demo Section */}
      {Demo && (
        <Box
          sx={{
            p: 3,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "center",
            bgcolor: "#19191b",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Demo />
        </Box>
      )}

      {/* Code Section */}
      <Box sx={{ bgcolor: "#11111b", borderRadius: 2 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Button
            startIcon={
              isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: "#89b4fa",
              "&:hover": { bgcolor: "rgba(137, 180, 250, 0.1)" },
              textTransform: "none",
            }}
          >
            {isExpanded ? "Collapse code" : "Expand code"}
          </Button>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              color: copied ? "#a6e3a1" : "rgba(255, 255, 255, 0.7)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            {copied ? (
              <CheckIcon fontSize="small" />
            ) : (
              <ContentCopyOutlinedIcon fontSize="small" />
            )}
          </IconButton>
        </Box>

        {/* Code Content */}
        <Box
          sx={{
            position: "relative",
            p: 2,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,

            fontFamily: "monospace",
            fontSize: "0.875rem",
            color: "#cdd6f4",
            maxHeight: isExpanded ? "300px" : "none",
            overflow: "auto",
            "&:hover": {
              border: "1px solid #3b82f680",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255, 255, 255, 0.1) transparent",
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-corner": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "3px",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.2)",
              },
            },
          }}
        >
          <pre style={{ margin: 0 }}>
            <code>{isExpanded ? fullCode : shortCode}</code>
          </pre>
        </Box>
      </Box>
    </Paper>
  );
};

export default CodeViewer;
