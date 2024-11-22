import { useState, FC, ComponentType } from "react";
import { Box, Paper, IconButton, Button, styled } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";

const DemoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.25),
  border: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  justifyContent: "center",
  bgcolor: "#1f1f21",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  [theme.breakpoints.down("sm")]: {},
}));

const CodeSection = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(1.5),
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  fontFamily: "monospace",
  fontSize: "0.875rem",
  color: "#cdd6f4",
  maxHeight: "300px",
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

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const ExpandButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1a1b26",
  color: "#89b4fa",
  padding: "2px 15px",
  fontSize: "12px",
  textTransform: "none",
  border: "1px solid #2a2b36",
  borderRadius: "15px",
  boxShadow: "0 0 10px rgba(137, 180, 250, 0.1)",
  "&:hover": {
    backgroundColor: "#2a2b36",
    borderColor: "#89b4fa",
    boxShadow: "0 0 15px rgba(137, 180, 250, 0.2)",
  },

  [theme.breakpoints.down("sm")]: { fontSize: "10px", padding: "2px 13px" },
}));

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
        maxWidth: 950,
        mx: "auto",
        width: "100%",
      }}
    >
      {/* Demo Section */}
      {Demo && (
        <DemoSection>
          <Demo />
        </DemoSection>
      )}

      {/* Expand & Copy Section */}
      <Box sx={{ bgcolor: "#101011", borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            p: 1,
            gap: 1,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse code" : "Expand code"}
          </ExpandButton>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              color: copied ? "#a6e3a1" : "rgba(255, 255, 255, 0.7)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            {copied ? (
              <CheckIcon
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                }}
              />
            ) : (
              <ContentCopyOutlinedIcon
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                }}
              />
            )}
          </IconButton>
        </Box>

        {/* Code Content */}
        <CodeSection>
          <pre style={{ margin: 0 }}>
            <code>{isExpanded ? fullCode : shortCode}</code>
          </pre>
        </CodeSection>
      </Box>
    </Paper>
  );
};

export default CodeViewer;
