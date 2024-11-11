import { FC } from "react";
import { Button, styled } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const StyledButton = styled(Button)(() => ({
  textTransform: "capitalize",
  height: "40px",
  padding: "0 30px",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #18181a",
  color: "#18181a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: "15px",
  textDecoration: "none",
  cursor: "pointer",
  background: "#fff",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",

  "& .primary-text": {
    position: "relative",
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 10,
  },

  "& .alternate-text": {
    color: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 500ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 100,
    opacity: 0,
    top: 0,
    left: 0,
    transform: "translateY(100%)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-50%",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    transformOrigin: "bottom center",
    transition: "transform 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    transform: "skewY(9.3deg) scaleY(0)",
    zIndex: 50,
  },

  "&:hover::after": {
    transformOrigin: "bottom center",
    transform: "skewY(9.3deg) scaleY(2)",
  },

  "&:hover .alternate-text": {
    transform: "translateY(0)",
    opacity: 1,
    transition: "all 900ms cubic-bezier(0.48, 0, 0.12, 1)",
  },

  "&:hover .primary-text": {
    color: "transparent",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <StyledButton>
      <span className="primary-text">Save</span>
      <span className="alternate-text">Saving...</span>
    </StyledButton>
  );
};

const Button5: FC = () => {
  const shortCode = `<StyledButton>
  <span className="primary-text">Save</span>
  <span className="alternate-text">Saving...</span>
</StyledButton>`;

  const fullCode = `import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  textTransform: "capitalize",
  height: "40px",
  padding: "0 30px",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #18181a",
  color: "#18181a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: "15px",
  textDecoration: "none",
  cursor: "pointer",
  background: "#fff",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",

  "& .primary-text": {
    position: "relative",
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 10,
  },

  "& .alternate-text": {
    color: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 500ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 100,
    opacity: 0,
    top: 0,
    left: 0,
    transform: "translateY(100%)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-50%",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    transformOrigin: "bottom center",
    transition: "transform 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    transform: "skewY(9.3deg) scaleY(0)",
    zIndex: 50,
  },

  "&:hover::after": {
    transformOrigin: "bottom center",
    transform: "skewY(9.3deg) scaleY(2)",
  },

  "&:hover .alternate-text": {
    transform: "translateY(0)",
    opacity: 1,
    transition: "all 900ms cubic-bezier(0.48, 0, 0.12, 1)",
  },

  "&:hover .primary-text": {
    color: "transparent",
  },
}));

const ButtonDemo = () => {
  return (
    <StyledButton>
      <span className="primary-text">Save</span>
      <span className="alternate-text">Saving...</span>
    </StyledButton>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button5;
