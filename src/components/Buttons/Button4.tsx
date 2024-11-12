import { Button, styled, keyframes, Typography } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const moveUpAlternate = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledButton = styled(Button)(() => ({
  "&.MuiButton-root": {
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    height: "40px",
    padding: "0 40px",
    textTransform: "capitalize",
    borderRadius: "20px",
    borderWidth: "2px",
    zIndex: 0,
    overflow: "hidden",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    WebkitAppearance: "button",
    mixBlendMode: "normal",

    "&:hover": {
      backgroundColor: "#000",
    },

    "& .text-container": {
      display: "block",
      position: "relative",
      overflow: "hidden",
      mixBlendMode: "difference",
    },

    "& .text": {
      display: "block",
      position: "relative",
    },

    "&:hover .text": {
      animation: `${moveUpAlternate} 0.3s forwards`,
    },

    "&::before, &::after": {
      "--skew": "0.2",
      background: "#fff",
      content: '""',
      display: "block",
      height: "102%",
      pointerEvents: "none",
      position: "absolute",
      transition: "transform 0.2s ease",
      width: "100%",
      transform:
        "skew(calc(150deg * var(--skew))) translateY(var(--progress, 0))",
    },

    "&::before": {
      left: "calc(-50% - 50% * var(--skew))",
      top: "-104%",
      "--progress": "0%",
    },

    "&::after": {
      left: "calc(50% + 50% * var(--skew))",
      top: "102%",
      zIndex: -1,
      "--progress": "0%",
    },

    "&:hover::before": {
      "--progress": "100%",
    },

    "&:hover::after": {
      "--progress": "-102%",
    },
  },
}));

const ButtonDemo = () => {
  return (
    <StyledButton disableRipple>
      <Typography className="text-container">
        <Typography className="text" component="span">
          Button
        </Typography>
      </Typography>
    </StyledButton>
  );
};

const Button4 = () => {
  const shortCode = `<StyledButton disableRipple>
  <Typography className="text-container">
    <Typography className="text" component="span">Button</Typography>
  </Typography>
</StyledButton>`;

  const fullCode = `import { Button, styled, keyframes, Typography } from "@mui/material";

const moveUpAlternate = keyframes\`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0);
  }
\`;

const StyledButton = styled(Button)(() => ({
  "&.MuiButton-root": {
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    height: "40px",
    padding: "0 40px",
    textTransform: "capitalize",
    borderRadius: "20px",
    borderWidth: "2px",
    zIndex: 0,
    overflow: "hidden",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    WebkitAppearance: "button",
    mixBlendMode: "normal",

    "&:hover": {
      backgroundColor: "#000",
    },

    "& .text-container": {
      display: "block",
      position: "relative",
      overflow: "hidden",
      mixBlendMode: "difference",
    },

    "& .text": {
      display: "block",
      position: "relative",
    },

    "&:hover .text": {
      animation: \`\${moveUpAlternate} 0.3s forwards\`,
    },

    "&::before, &::after": {
      "--skew": "0.2",
      background: "#fff",
      content: '""',
      display: "block",
      height: "102%",
      pointerEvents: "none",
      position: "absolute",
      transition: "transform 0.2s ease",
      width: "100%",
      transform:
        "skew(calc(150deg * var(--skew))) translateY(var(--progress, 0))",
    },

    "&::before": {
      left: "calc(-50% - 50% * var(--skew))",
      top: "-104%",
      "--progress": "0%",
    },

    "&::after": {
      left: "calc(50% + 50% * var(--skew))",
      top: "102%",
      zIndex: -1,
      "--progress": "0%",
    },

    "&:hover::before": {
      "--progress": "100%",
    },

    "&:hover::after": {
      "--progress": "-102%",
    },
  },
}));

const ButtonDemo = () => {
  return (
    <StyledButton disableRipple>
      <Typography className="text-container">
        <Typography className="text" component="span">Button</Typography>
      </Typography>
    </StyledButton>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button4;
