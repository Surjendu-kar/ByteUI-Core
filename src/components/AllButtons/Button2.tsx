import { Button, styled, keyframes, Box, Typography } from "@mui/material";
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
  padding: "0 16px",
  backgroundColor: "#FCFCFD",
  borderRadius: "4px",
  boxShadow:
    "0 2px 4px rgba(45, 35, 66, 0.4), 0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #D6D6E7",
  color: "#36395A",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "18px",
  lineHeight: 1,
  textAlign: "left",
  textTransform: "none",
  transition: "box-shadow 0.15s, transform 0.15s",
  userSelect: "none",
  touchAction: "manipulation",
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  cursor: "pointer",
  border: "none",

  "&:focus": {
    boxShadow:
      "#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
  },

  "&:hover": {
    backgroundColor: "#FCFCFD",
    boxShadow:
      "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
    transform: "translateY(-2px)",
  },

  "&:active": {
    boxShadow: "#D6D6E7 0 3px 7px inset",
    transform: "translateY(2px)",
  },
}));

const AnimatedButton = styled(Button)(() => ({
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

const ButtonDemo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <StyledButton>Shadow Button</StyledButton>
      <AnimatedButton>
        <Typography className="text">Slide Button</Typography>
      </AnimatedButton>
    </Box>
  );
};

const Button2 = () => {
  const shortCode = `<StyledButton>Shadow Button</StyledButton>
<AnimatedButton>
  <Typography className="text">Slide Button</Typography>
</AnimatedButton>`;

  const fullCode = `import { Button, styled, keyframes, Box, Typography } from "@mui/material";

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

const StyledButton = styled(Button)(() => ({
  height: "40px",
  padding: "0 16px",
  backgroundColor: "#FCFCFD",
  borderRadius: "4px",
  boxShadow:
    "0 2px 4px rgba(45, 35, 66, 0.4), 0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #D6D6E7",
  color: "#36395A",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "18px",
  lineHeight: 1,
  textAlign: "left",
  textTransform: "none",
  transition: "box-shadow 0.15s, transform 0.15s",
  userSelect: "none",
  touchAction: "manipulation",
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  cursor: "pointer",
  border: "none",

  "&:focus": {
    boxShadow:
      "#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
  },

  "&:hover": {
    backgroundColor: "#FCFCFD",
    boxShadow:
      "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
    transform: "translateY(-2px)",
  },

  "&:active": {
    boxShadow: "#D6D6E7 0 3px 7px inset",
    transform: "translateY(2px)",
  },
}));

const AnimatedButton = styled(Button)(() => ({
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
    transition:
      "clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1)",
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
  },
}));

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <StyledButton>Shadow Button</StyledButton>
      <AnimatedButton>
        <Typography className="text">Slide Button</Typography>
      </AnimatedButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button2;
