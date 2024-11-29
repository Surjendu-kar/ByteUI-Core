import { useState, FC, ComponentType, useEffect } from "react";
import { Box, IconButton, Button, Stack, styled } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

const DemoSection = styled(Box)(() => ({
  padding: "10px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#1f1f21",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
}));

const CodeContainer = styled(Box)(() => ({
  backgroundColor: "#101011",
  borderRadius: 2,
}));

const ControlsSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  padding: "8px",
  gap: "8px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
}));

const ExpandButton = styled(Button)(() => ({
  backgroundColor: "#1a1b26",
  color: "#f8c555",
  padding: "2px 16px",
  fontSize: "12px",
  textTransform: "none",
  border: "1px solid #2a2b36",
  borderRadius: "15px",
  boxShadow: "0 0 10px rgba(137, 180, 250, 0.1)",
  "&:hover": {
    backgroundColor: "#2a2b36",
    borderColor: "#ffde9569",
    boxShadow: "0 0 15px rgba(137, 180, 250, 0.2)",
  },
  "@media (max-width: 600px)": {
    fontSize: "10px",
  },
}));

const CodeContent = styled(Box)(() => ({
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  fontFamily: "monospace",
  fontSize: "0.875rem",
  color: "#cdd6f4",
  maxHeight: "300px",
  overflow: "auto",
  "&:hover": {
    border: "1px solid #ffc53b75",
  },
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "3px",
    border: "1px solid #f8c555",
    "&:hover": {
      border: "2px solid #ffde95",
    },
  },
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
  },
}));

interface CodeViewerProps {
  shortCode: string;
  fullCode: string;
  demo: ComponentType;
  language?: string;
}

const CodeViewer: FC<CodeViewerProps> = ({
  shortCode,
  fullCode,
  demo: Demo,
  language = "tsx",
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [isExpanded, shortCode, fullCode]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(isExpanded ? fullCode : shortCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Stack sx={{ maxWidth: 950, mx: "auto", width: "100%" }}>
      {Demo && (
        <DemoSection>
          <Demo />
        </DemoSection>
      )}

      <CodeContainer>
        <ControlsSection>
          <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse code" : "Expand code"}
          </ExpandButton>

          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              color: copied ? "#a6e3a1" : "#f8c555",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            {copied ? (
              <CheckIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
            ) : (
              <ContentCopyOutlinedIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
            )}
          </IconButton>
        </ControlsSection>

        <CodeContent>
          <pre style={{ margin: 0 }}>
            <code className={`language-${language}`}>
              {isExpanded ? fullCode : shortCode}
            </code>
          </pre>
        </CodeContent>
      </CodeContainer>
    </Stack>
  );
};

export default CodeViewer;
