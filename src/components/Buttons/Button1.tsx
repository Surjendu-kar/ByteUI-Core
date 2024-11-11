import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const LeftArrowButton = styled(Button)(() => ({
  background: "red",
  borderRadius: 4,
  border: "none",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "15px",
  padding: "7px",
  width: "150px",
  transition: "all 0.5s",
  textTransform: "capitalize",
  margin: "5px",
  position: "relative",
  "& p": {
    display: "inline-block",
    position: "relative",
    transition: "0.5s",
    paddingLeft: "0",
  },
  "& p:before": {
    content: '"«"',
    position: "absolute",
    opacity: 0,
    top: "-2px",
    left: "-20px",
    transition: "0.5s",
  },
  "&:hover p": {
    paddingLeft: "25px",
  },
  "&:hover p:before": {
    opacity: 1,
    left: 0,
  },
}));

const RightArrowButton = styled(Button)(() => ({
  borderRadius: 4,
  border: "none",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "15px",
  padding: "7px",
  width: "150px",
  transition: "all 0.5s",
  textTransform: "capitalize",
  margin: "5px",
  position: "relative",
  "& p": {
    display: "inline-block",
    position: "relative",
    transition: "0.5s",
    paddingRight: "0",
  },
  "& p:after": {
    content: '"»"',
    position: "absolute",
    opacity: 0,
    top: "-2px",
    right: "-20px",
    transition: "0.5s",
  },
  "&:hover p": {
    paddingRight: "25px",
  },
  "&:hover p:after": {
    opacity: 1,
    right: 0,
  },
}));

const ButtonDemo = () => (
  <>
    <LeftArrowButton variant="contained">
      <Typography>left</Typography>
    </LeftArrowButton>
    <RightArrowButton variant="contained">
      <Typography>right</Typography>
    </RightArrowButton>
  </>
);

const Button1 = () => {
  const shortCode = `<LeftArrowButton variant="contained">
  <Typography>left</Typography>
</LeftArrowButton>

<RightArrowButton variant="contained">
  <Typography>right</Typography>
</RightArrowButton>`;

  const fullCode = `import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const LeftArrowButton = styled(Button)(() => ({
  background: "red",
  borderRadius: 4,
  border: "none",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "15px",
  padding: "7px",
  width: "150px",
  transition: "all 0.5s",
  textTransform: "capitalize",
  margin: "5px",
  position: "relative",
  "& p": {
    display: "inline-block",
    position: "relative",
    transition: "0.5s",
    paddingLeft: "0",
  },
  "& p:before": {
    content: '"«"',
    position: "absolute",
    opacity: 0,
    top: "-2px",
    left: "-20px",
    transition: "0.5s",
  },
  "&:hover p": {
    paddingLeft: "25px",
  },
  "&:hover p:before": {
    opacity: 1,
    left: 0,
  },
}));

const RightArrowButton = styled(Button)(() => ({
  borderRadius: 4,
  border: "none",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "15px",
  padding: "7px",
  width: "150px",
  transition: "all 0.5s",
  textTransform: "capitalize",
  margin: "5px",
  position: "relative",
  "& p": {
    display: "inline-block",
    position: "relative",
    transition: "0.5s",
    paddingRight: "0",
  },
  "& p:after": {
    content: '"»"',
    position: "absolute",
    opacity: 0,
    top: "-2px",
    right: "-20px",
    transition: "0.5s",
  },
  "&:hover p": {
    paddingRight: "25px",
  },
  "&:hover p:after": {
    opacity: 1,
    right: 0,
  },
}));

const ButtonDemo = () => (
  <>
    <LeftArrowButton variant="contained">
      <Typography>left</Typography>
    </LeftArrowButton>
    <RightArrowButton variant="contained">
      <Typography>right</Typography>
    </RightArrowButton>
  </>
);

export default ButtonDemo;`;
  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button1;
