import { Button, styled, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface HoverButtonProps extends ButtonProps {
  children: ReactNode;
}

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

const Button2: React.FC<HoverButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button2;
