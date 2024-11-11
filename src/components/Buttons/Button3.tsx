import { FC } from "react";
import { Button, styled, keyframes } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const glitchAnimation = keyframes`
  0% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: inset(40% -6px 43% 0);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: inset(80% -6px 5% 0);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(0);
  }`;

const StyledButton = styled(Button)(() => ({
  height: "40px",
  padding: "0 16px",
  backgroundColor: "#FCFCFD",
  borderRadius: "4px",
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
  background: "linear-gradient(45deg, transparent 5%, #FF013C 5%)",
  letterSpacing: "3px",
  boxShadow: "3px 0px 0px #fff",
  outline: "transparent",

  "&::after": {
    content: '"ALTERNATE TEXT"',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%)",
    textShadow: "-3px -3px 0px #F8F005, 3px 3px 0px #00E6F6",
    clipPath: "inset(50% 50% 50% 50%)",
  },

  "&:hover::after": {
    animation: `${glitchAnimation} 1s steps(2, end)`,
  },

  "&:focus": {
    boxShadow:
      "#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
  },

  "&:hover": {
    boxShadow:
      "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
    transform: "translateY(-2px)",
  },

  "&:active": {
    boxShadow: "#D6D6E7 0 3px 7px inset",
    transform: "translateY(2px)",
  },
}));

const ButtonDemo: FC = () => {
  return <StyledButton>Button</StyledButton>;
};

const Button3: FC = () => {
  const shortCode = `  <StyledButton>Button3</StyledButton>`;

  const fullCode = `  import { Button, styled, keyframes } from "@mui/material";
  
  const glitchAnimation = keyframes\`
    0% {
      clip-path: inset(80% -6px 0 0);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: inset(10% -6px 85% 0);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: inset(80% -6px 0 0);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: inset(10% -6px 85% 0);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: inset(50% -6px 30% 0);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: inset(10% -6px 85% 0);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: inset(40% -6px 43% 0);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: inset(50% -6px 30% 0);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: inset(80% -6px 5% 0);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: inset(80% -6px 0 0);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: inset(80% -6px 0 0);
      transform: translate(0);
    }
  \`;
  
  const StyledButton = styled(Button)(({ theme }) => ({
    height: "40px",
    padding: "0 16px",
    backgroundColor: "#FCFCFD",
    borderRadius: "4px",
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
    background: "linear-gradient(45deg, transparent 5%, #FF013C 5%)",
    letterSpacing: "3px",
    boxShadow: "3px 0px 0px #fff",
    outline: "transparent",
  
    "&::after": {
      content: '"ALTERNATE TEXT"',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%)",
      textShadow: "-3px -3px 0px #F8F005, 3px 3px 0px #00E6F6",
      clipPath: "inset(50% 50% 50% 50%)",
    },
  
    "&:hover::after": {
      animation: \`\${glitchAnimation} 1s steps(2, end)\`,
    },
  
    "&:focus": {
      boxShadow:
        "#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
    },
  
    "&:hover": {
      boxShadow:
        "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
      transform: "translateY(-2px)",
    },
  
    "&:active": {
      boxShadow: "#D6D6E7 0 3px 7px inset",
      transform: "translateY(2px)",
    },
  }));
  
  const ButtonDemo = () => {
    return <StyledButton>Button3</StyledButton>;
  };
  
  export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button3;
