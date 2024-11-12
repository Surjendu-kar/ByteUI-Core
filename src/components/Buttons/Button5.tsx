import { FC } from "react";
import { Box, Button, styled } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CodeViewer from "../CodeViewer/CodeViewer";

const StyledButton = styled(Button)(() => ({
  textTransform: "capitalize",
  height: "40px",
  padding: "0 40px",
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

const PayButton = styled(Button)(() => ({
  width: "130px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(15, 15, 15)",
  border: "none",
  color: "white",
  fontWeight: 600,
  gap: "8px",
  cursor: "pointer",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.103)",
  position: "relative",
  overflow: "hidden",
  transitionDuration: "0.3s",
  textTransform: "none",

  "& svg": {
    width: "16px",
    height: "16px",
    fill: "currentColor",
  },

  "&::before": {
    width: "130px",
    height: "130px",
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    borderRadius: "50%",
    left: "-100%",
    top: 0,
    transitionDuration: "0.3s",
    mixBlendMode: "difference",
  },

  "&:hover": {
    backgroundColor: "rgb(15, 15, 15)",
  },

  "&:hover::before": {
    transitionDuration: "0.3s",
    transform: "translate(100%,-50%)",
    borderRadius: 0,
  },

  "&:active": {
    transform: "translate(5px,5px)",
    transitionDuration: "0.3s",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <StyledButton>
        <span className="primary-text">Save</span>
        <span className="alternate-text">Saving...</span>
      </StyledButton>
      <PayButton>
        Pay
        <CreditCardIcon sx={{ fontSize: 16 }} />
      </PayButton>
    </Box>
  );
};

const Button5: FC = () => {
  const shortCode = `<StyledButton>
  <span className="primary-text">Save</span>
  <span className="alternate-text">Saving...</span>
</StyledButton>
<PayButton>
  Pay
  <CreditCardIcon sx={{ fontSize: 16 }} />
</PayButton>`;

  const fullCode = `import { FC } from "react";
import { Box, Button, styled } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const StyledButton = styled(Button)(() => ({
  textTransform: "capitalize",
  height: "40px",
  padding: "0 40px",
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

const PayButton = styled(Button)(() => ({
  width: "130px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(15, 15, 15)",
  border: "none",
  color: "white",
  fontWeight: 600,
  gap: "8px",
  cursor: "pointer",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.103)",
  position: "relative",
  overflow: "hidden",
  transitionDuration: "0.3s",
  textTransform: "none",

  "& svg": {
    width: "16px",
    height: "16px",
    fill: "currentColor",
  },

  "&::before": {
    width: "130px",
    height: "130px",
    position: "absolute",
    content: '""',
    backgroundColor: "white",
    borderRadius: "50%",
    left: "-100%",
    top: 0,
    transitionDuration: "0.3s",
    mixBlendMode: "difference",
  },

  "&:hover": {
    backgroundColor: "rgb(15, 15, 15)",
  },

  "&:hover::before": {
    transitionDuration: "0.3s",
    transform: "translate(100%,-50%)",
    borderRadius: 0,
  },

  "&:active": {
    transform: "translate(5px,5px)",
    transitionDuration: "0.3s",
  },
}));

const ButtonDemo = () => {
  return (
   <Box sx={{ display: "flex", gap: 2 }}>
      <StyledButton>
        <span className="primary-text">Save</span>
        <span className="alternate-text">Saving...</span>
      </StyledButton>
      <PayButton>
        Pay
        <CreditCardIcon sx={{ fontSize: 16 }} />
      </PayButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button5;
