import { Button, styled, Box } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

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

const CircleSlideButton = styled(Button)(() => ({
  fontFamily: "inherit",
  display: "inline-block",
  width: "6em",
  height: "2.6em",
  lineHeight: "2.5em",
  overflow: "hidden",
  fontSize: "17px",
  zIndex: 1,
  color: "#ffffff",
  border: "2px solid black",
  borderRadius: "6px",
  position: "relative",
  backgroundColor: "transparent",
  padding: 0,
  textTransform: "none",

  "&::before": {
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    width: "150px",
    height: "200px",
    zIndex: -1,
    borderRadius: "50%",
    top: "100%",
    left: "100%",
    transition: "all 0.3s",
  },

  "&:hover": {
    color: "black",
    backgroundColor: "transparent",

    "&::before": {
      top: "-30px",
      left: "-30px",
    },
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
      <CircleSlideButton disableRipple>Slide</CircleSlideButton>
    </Box>
  );
};

const Button2 = () => {
  const shortCode = `<StyledButton>Shadow Button</StyledButton>
<CircleSlideButton disableRipple>Slide</CircleSlideButton>`;

  const fullCode = `import { Button, styled, Box } from "@mui/material";

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

const CircleSlideButton = styled(Button)(() => ({
  fontFamily: "inherit",
  display: "inline-block",
  width: "6em",
  height: "2.6em",
  lineHeight: "2.5em",
  overflow: "hidden",
  fontSize: "17px",
  zIndex: 1,
  color: "#ffffff",
  border: "2px solid black",
  borderRadius: "6px",
  position: "relative",
  backgroundColor: "transparent",
  padding: 0,
  textTransform: "none",

  "&::before": {
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    width: "150px",
    height: "200px",
    zIndex: -1,
    borderRadius: "50%",
    top: "100%",
    left: "100%",
    transition: "all 0.3s",
  },

  "&:hover": {
    color: "black",
    backgroundColor: "transparent",

    "&::before": {
      top: "-30px",
      left: "-30px",
    },
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
      <CircleSlideButton disableRipple>Slide</CircleSlideButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button2;
