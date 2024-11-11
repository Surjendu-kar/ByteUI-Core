import React, { ReactNode } from "react";
import { Button, styled, ButtonProps } from "@mui/material";

interface HoverButtonProps extends ButtonProps {
  children: ReactNode;
}

const AnimatedButton = styled(Button)(() => ({
  borderRadius: 4,
  border: "none",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "15px",
  padding: "7px",
  width: "150px",
  transition: "all 0.5s",
  cursor: "pointer",
  margin: "5px",
  position: "relative",
  "& .buttonText": {
    cursor: "pointer",
    display: "inline-block",
    position: "relative",
    transition: "0.5s",
    paddingRight: "0",
  },
  "& .buttonText:after": {
    content: '"»"',
    position: "absolute",
    opacity: 0,
    top: "-2px",
    right: "-20px",
    transition: "0.5s",
  },
  "&:hover .buttonText": {
    paddingRight: "25px",
  },
  "&:hover .buttonText:after": {
    opacity: 1,
    right: 0,
  },
}));

const Button1: React.FC<HoverButtonProps> = ({ children, ...props }) => {
  return (
    <AnimatedButton variant="contained" {...props}>
      <span className="buttonText">{children}</span>
    </AnimatedButton>
  );
};

export default Button1;
