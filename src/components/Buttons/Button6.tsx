import { FC } from "react";
import { Button, styled, keyframes, Typography } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const gradientAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const glowingEffect = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
`;

const StyledButton = styled(Button)(() => ({
  height: "40px",
  padding: "0 30px",
  backgroundColor: "#111",
  border: "none",
  outline: "none",
  color: "#FFFFFF",
  cursor: "pointer",
  position: "relative",
  zIndex: 0,
  borderRadius: "10px",
  userSelect: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "18px",
  fontWeight: 500,
  letterSpacing: 0,
  margin: 0,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",

  "&::before": {
    content: '""',
    background: `linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    )`,
    position: "absolute",
    top: -2,
    left: -2,
    backgroundSize: "400%",
    zIndex: -1,
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: `${gradientAnimation} 20s linear infinite, ${glowingEffect} 2s ease-in-out infinite`,
    transition: "opacity 0.3s ease-in-out",
    borderRadius: "10px",
    opacity: 0.8,
  },

  "&::after": {
    zIndex: -1,
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#222",
    left: 0,
    top: 0,
    borderRadius: "10px",
  },

  "&:hover::before": {
    opacity: 1,
  },

  "& .text": {
    zIndex: 1,
    position: "relative",
  },
}));

const Button6: FC = () => {
  const shortCode = `<StyledButton>
  <Typography className="text">Button</Typography>
</StyledButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, keyframes, Typography } from "@mui/material";

const gradientAnimation = keyframes\`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
\`;

const glowingEffect = keyframes\`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
\`;

const StyledButton = styled(Button)(() => ({
  height: "40px",
  padding: "0 30px",
  backgroundColor: "#111",
  border: "none",
  outline: "none",
  color: "#FFFFFF",
  cursor: "pointer",
  position: "relative",
  zIndex: 0,
  borderRadius: "10px",
  userSelect: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "18px",
  fontWeight: 500,
  letterSpacing: 0,
  margin: 0,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",

  "&::before": {
    content: '""',
    background: \`linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    )\`,
    position: "absolute",
    top: -2,
    left: -2,
    backgroundSize: "400%",
    zIndex: -1,
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: \`\${gradientAnimation} 20s linear infinite, \${glowingEffect} 2s ease-in-out infinite\`,
    transition: "opacity 0.3s ease-in-out",
    borderRadius: "10px",
    opacity: 0.8,
  },

  "&::after": {
    zIndex: -1,
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#222",
    left: 0,
    top: 0,
    borderRadius: "10px",
  },

  "&:hover::before": {
    opacity: 1,
  },

  "& .text": {
    zIndex: 1,
    position: "relative",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <StyledButton>
      <Typography className="text">Button</Typography>
    </StyledButton>
  );
};

export default ButtonDemo;`;

  const ButtonDemo: FC = () => {
    return (
      <StyledButton>
        <Typography className="text">Button</Typography>
      </StyledButton>
    );
  };

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button6;
