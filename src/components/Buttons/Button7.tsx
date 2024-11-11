import { FC } from "react";
import { Box, Button, styled, keyframes, Typography } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const glowAnimation = keyframes`
  from {
    top: -150%;
  }
  to {
    top: 150%;
  }
`;

const StyledRedButton = styled(Button)(() => ({
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

const StyledGreenButton = styled(StyledRedButton)(() => ({
  backgroundColor: "#052e16", // bg-green-950
  color: "#4ade80", // text-green-400
  border: "1px solid #4ade80", // border border-green-400

  "& .glow-effect": {
    backgroundColor: "#4ade80", // bg-green-400
    boxShadow: "0 0 10px 10px rgba(74, 222, 128, 0.3)", // shadow-green-400
  },

  "&:hover .glow-effect": {
    animation: `${glowAnimation} 0.5s forwards`,
  },
}));

const Button7: FC = () => {
const shortCode = `<StyledRedButton>
  <Typography className="glow-effect"></Typography>
  <Typography>Red Button</Typography>
</StyledRedButton>

<StyledGreenButton>
  <Typography className="glow-effect"></Typography>
  <Typography>Green Button</Typography>
</StyledGreenButton>`;

  const fullCode = `import { FC } from "react";
import { Box, Button, styled, keyframes, Typography } from "@mui/material";

const glowAnimation = keyframes\`
  from {
    top: -150%;
  }
  to {
    top: 150%;
  }
\`;

const StyledRedButton = styled(Button)(() => ({
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

const StyledGreenButton = styled(Button)(() => ({
  backgroundColor: "#052e16",
  color: "#4ade80",
  border: "1px solid #4ade80",
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
    backgroundColor: "#4ade80",
    boxShadow: "0 0 10px 10px rgba(74, 222, 128, 0.3)",
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
    <Box sx={{ display: 'flex', gap: 2 }}>
      <StyledRedButton>
        <Typography className="glow-effect"></Typography>
        <Typography>Red Button</Typography>
      </StyledRedButton>
      <StyledGreenButton>
        <Typography className="glow-effect"></Typography>
        <Typography>Green Button</Typography>
      </StyledGreenButton>
    </Box>
  );
};

export default ButtonDemo;`;

  const ButtonDemo: FC = () => {
    return (
      <Box sx={{ display: "flex", gap: 1 }}>
        <StyledRedButton>
          <Typography className="glow-effect"></Typography>
          <Typography>Red Button</Typography>
        </StyledRedButton>
        
        <StyledGreenButton>
          <Typography className="glow-effect"></Typography>
          <Typography>Green Button</Typography>
        </StyledGreenButton>
      </Box>
    );
  };

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button7;
