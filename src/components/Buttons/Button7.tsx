import { FC } from "react";
import { Button, styled, keyframes, Typography } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const glowAnimation = keyframes`
  from {
    top: -150%;
  }
  to {
    top: 150%;
  }
`;

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#450a0a",
  color: "#f87171",
  border: "1px solid #f87171",
  borderBottomWidth: "4px",
  fontWeight: 500,
  overflow: "hidden",
  position: "relative",
  padding: "6px 30px",
  borderRadius: "6px",
  outline: "none",
  transition: "all 0.3s ease",
  fontFamily: '"JetBrains Mono", monospace',
  textTransform: "none",

  "&:hover": {
    filter: "brightness(1.5)",
    borderTopWidth: "4px",
    borderBottomWidth: "1px",
  },

  "&:active": {
    opacity: 0.75,
  },

  "& .glow-effect": {
    backgroundColor: "#f87171",
    boxShadow: "0 0 10px 10px rgba(248, 113, 113, 0.3)",
    position: "absolute",
    top: "-150%",
    left: 0,
    display: "inline-flex",
    width: "320px",
    height: "5px",
    borderRadius: "6px",
    opacity: 0.5,
    transition: "all 0.5s ease",
  },

  "&:hover .glow-effect": {
    animation: `${glowAnimation} 0.5s forwards`,
  },
}));

const Button7: FC = () => {
  const shortCode = `<StyledButton>
  <span className="glow-effect"></span>
  <Typography>Hover Me</Typography>
</StyledButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, keyframes, Typography } from "@mui/material";

const glowAnimation = keyframes\`
  from {
    top: -150%;
  }
  to {
    top: 150%;
  }
\`;

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#450a0a",
  color: "#f87171",
  border: "1px solid #f87171",
  borderBottomWidth: "4px",
  fontWeight: 500,
  overflow: "hidden",
  position: "relative",
  padding: "6px 30px",
  borderRadius: "6px",
  outline: "none",
  transition: "all 0.3s ease",
  fontFamily: '"JetBrains Mono", monospace',
  textTransform: "none",

  "&:hover": {
    filter: "brightness(1.5)",
    borderTopWidth: "4px",
    borderBottomWidth: "1px",
  },

  "&:active": {
    opacity: 0.75,
  },

  "& .glow-effect": {
    backgroundColor: "#f87171",
    boxShadow: "0 0 10px 10px rgba(248, 113, 113, 0.3)",
    position: "absolute",
    top: "-150%",
    left: 0,
    display: "inline-flex",
    width: "320px",
    height: "5px",
    borderRadius: "6px",
    opacity: 0.5,
    transition: "all 0.5s ease",
  },

  "&:hover .glow-effect": {
    animation: \`\${glowAnimation} 0.5s forwards\`,
  },
}));

const ButtonDemo: FC = () => {
  return (
    <StyledButton>
      <span className="glow-effect"></span>
      <Typography>Hover Me</Typography>
    </StyledButton>
  );
};

export default ButtonDemo;`;

  const ButtonDemo: FC = () => {
    return (
      <StyledButton>
        <span className="glow-effect"></span>
        <Typography>Button</Typography>
      </StyledButton>
    );
  };

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button7;
