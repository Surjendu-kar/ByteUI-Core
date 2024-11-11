import { FC } from "react";
import { Button, styled, keyframes, Typography } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const opacityFallbackOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const opacityFallbackIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledButton = styled(Button)(() => ({
  height: "40px",
  padding: "0 30px",
  backgroundColor: "#FFFFFF",
  borderWidth: 0,
  boxSizing: "border-box",
  color: "#000000",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "18px",
  fontWeight: 500,
  letterSpacing: 0,
  margin: 0,
  opacity: 1,
  outline: 0,
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  textTransform: "none",
  transition:
    "opacity 300ms cubic-bezier(.694, 0, 0.335, 1), background-color 100ms cubic-bezier(.694, 0, 0.335, 1), color 100ms cubic-bezier(.694, 0, 0.335, 1)",
  userSelect: "none",
  touchAction: "manipulation",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
  borderRadius: "4px",

  "&::before": {
    animation: `${opacityFallbackOut} .5s step-end forwards`,
    backfaceVisibility: "hidden",
    backgroundColor: "#EBEBEB",
    clipPath: "polygon(-1% 0, 0 0, -25% 100%, -1% 100%)",
    content: '""',
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    transform: "translateZ(0)",
    transition:
      "clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1)",
    width: "100%",
    borderRadius: "4px",
  },

  "&:hover::before": {
    animation: `${opacityFallbackIn} 0s step-start forwards`,
    clipPath: "polygon(0 0, 101% 0, 101% 101%, 0 101%)",
  },

  "&::after": {
    backgroundColor: "#FFFFFF",
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

const Button4: FC = () => {
  const shortCode = `<StyledButton>
  <span className="text">Button</span>
</StyledButton>`;

  const fullCode = `import { Button, styled, keyframes } from "@mui/material";

const opacityFallbackOut = keyframes\`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
\`;

const opacityFallbackIn = keyframes\`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
\`;

const StyledButton = styled(Button)({
  height: "40px",
  padding: "0 16px",
  backgroundColor: "#FFFFFF",
  borderWidth: 0,
  boxSizing: "border-box",
  color: "#000000",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "18px",
  fontWeight: 500,
  letterSpacing: 0,
  margin: 0,
  opacity: 1,
  outline: 0,
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  textRendering: "geometricprecision",
  textTransform: "none",
  transition: "opacity 300ms cubic-bezier(.694, 0, 0.335, 1), background-color 100ms cubic-bezier(.694, 0, 0.335, 1), color 100ms cubic-bezier(.694, 0, 0.335, 1)",
  userSelect: "none",
  touchAction: "manipulation",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
  borderRadius: "4px",

  "&::before": {
    animation: \`\${opacityFallbackOut} .5s step-end forwards\`,
    backfaceVisibility: "hidden",
    backgroundColor: "#EBEBEB",
    clipPath: "polygon(-1% 0, 0 0, -25% 100%, -1% 100%)",
    content: '""',
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    transform: "translateZ(0)",
    transition: "clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1)",
    width: "100%",
    borderRadius: "4px",
  },

  "&:hover::before": {
    animation: \`\${opacityFallbackIn} 0s step-start forwards\`,
    clipPath: "polygon(0 0, 101% 0, 101% 101%, 0 101%)",
  },

  "&::after": {
    backgroundColor: "#FFFFFF",
  },

  "& .text": {
    zIndex: 1,
    position: "relative",
  }
});

const ButtonDemo = () => {
  return (
    <StyledButton>
      <span className="text">Button</span>
    </StyledButton>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button4;
