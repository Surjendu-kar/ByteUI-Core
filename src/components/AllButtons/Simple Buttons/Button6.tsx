import { FC } from "react";
import { Button, styled, keyframes, Typography, Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";

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
  minWidth: "100px",
  height: "40px",
  padding: "0 20px",
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
  fontSize: "16px",
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

const GradientContainer = styled(Box)(() => ({
  position: "relative",
  padding: "2px",
  background: "linear-gradient(90deg, #03a9f4, #f441a5)",
  borderRadius: "0.5em",
  transition: "all 0.4s ease",
  zIndex: 0,

  "& button": {
    fontSize: "0.9em",
    padding: "0.3em 1em",
    borderRadius: "0.5em",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "2px 2px 3px #000000b4",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#000",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: "-5px",
    margin: "auto",
    borderRadius: "0.9em",
    zIndex: -1,
    background: "linear-gradient(90deg, #03a9f4, #f441a5)",
    opacity: 0,
    filter: "blur(1.2em)",
    transition: "opacity 0.4s ease",
  },

  "&:hover::after": {
    opacity: 1,
  },

  "&:active::after": {
    filter: "blur(0.2em)",
  },
}));

const GoldButton = styled(Button)(() => ({
  width: "140px",
  height: "40px",
  border: "none",
  borderRadius: "10px",
  background:
    "linear-gradient(to right, #77530a, #ffd277, #77530a, #77530a, #ffd277, #77530a)",
  backgroundSize: "250%",
  backgroundPosition: "left",
  color: "#ffd277",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 1s",
  overflow: "hidden",
  padding: 0,
  minWidth: "140px",
  textTransform: "none",

  "& .buttonContent": {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "97%",
    height: "90%",
    borderRadius: "8px",
    transition: "all 1s",
    backgroundColor: "rgba(0, 0, 0, 0.842)",
    backgroundSize: "200%",
    zIndex: 1,
  },

  "&:hover": {
    backgroundPosition: "right",
    "& .buttonContent": {
      backgroundPosition: "right",
    },
  },

  "&:active": {
    transform: "scale(0.95)",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <StyledButton>
        <Typography className="text">Button</Typography>
      </StyledButton>
      <GradientContainer>
        <Button>Hover me</Button>
      </GradientContainer>
      <GoldButton>
        <Typography className="buttonContent">Click Me</Typography>
      </GoldButton>
    </Box>
  );
};

const Button6: FC = () => {
  const shortCode = `<StyledButton>
  <Typography className="text">Button</Typography>
</StyledButton>
<GradientContainer>
  <Button>Hover me</Button>
</GradientContainer>
<GoldButton>
  <Typography className="buttonContent">Click Me</Typography>
</GoldButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, keyframes, Typography, Box } from "@mui/material";

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
  minWidth: "100px",
  height: "40px",
  padding: "0 20px",
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
  fontSize: "16px",
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

const GradientContainer = styled(Box)(() => ({
  position: "relative",
  padding: "2px",
  background: "linear-gradient(90deg, #03a9f4, #f441a5)",
  borderRadius: "0.5em",
  transition: "all 0.4s ease",
  zIndex: 0,

  "& button": {
    fontSize: "0.9em",
    padding: "0.3em 1em",
    borderRadius: "0.5em",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "2px 2px 3px #000000b4",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#000",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: "-5px",
    margin: "auto",
    borderRadius: "0.9em",
    zIndex: -1,
    background: "linear-gradient(90deg, #03a9f4, #f441a5)",
    opacity: 0,
    filter: "blur(1.2em)",
    transition: "opacity 0.4s ease",
  },

  "&:hover::after": {
    opacity: 1,
  },

  "&:active::after": {
    filter: "blur(0.2em)",
  },
}));

const GoldButton = styled(Button)(() => ({
  width: "140px",
  height: "40px",
  border: "none",
  borderRadius: "10px",
  background:
    "linear-gradient(to right, #77530a, #ffd277, #77530a, #77530a, #ffd277, #77530a)",
  backgroundSize: "250%",
  backgroundPosition: "left",
  color: "#ffd277",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 1s",
  overflow: "hidden",
  padding: 0,
  minWidth: "140px",
  textTransform: "none",

  "& .buttonContent": {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "97%",
    height: "90%",
    borderRadius: "8px",
    transition: "all 1s",
    backgroundColor: "rgba(0, 0, 0, 0.842)",
    backgroundSize: "200%",
    zIndex: 1,
  },

  "&:hover": {
    backgroundPosition: "right",
    "& .buttonContent": {
      backgroundPosition: "right",
    },
  },

  "&:active": {
    transform: "scale(0.95)",
  },
}));

const ButtonDemo: FC = () => {
  return (
  <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <StyledButton>
        <Typography className="text">Button</Typography>
      </StyledButton>

      <GradientContainer>
        <Button>Hover me</Button>
      </GradientContainer>
      
      <GoldButton>
        <Typography className="buttonContent">Click Me</Typography>
      </GoldButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button6;
