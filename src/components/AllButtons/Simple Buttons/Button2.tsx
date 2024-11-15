import { Button, styled, Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";

const StyledButton = styled(Button)(() => ({
  position: "relative",
  width: "120px",
  height: "40px",
  backgroundColor: "black !important",
  display: "flex",
  alignItems: "center",
  color: "white !important",
  justifyContent: "center",
  border: "none",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  textTransform: "none",
  minWidth: "120px",
  overflow: "visible",
  zIndex: 0,

  "& .MuiTouchRipple-root": {
    display: "none",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)",
    borderRadius: "10px",
    zIndex: -1,
    transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: "-4px",
    background: "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)",
    borderRadius: "12px",
    transform: "translate3d(0, 0, 0)",
    filter: "blur(15px)",
    zIndex: -2,
    opacity: 0.7,
  },

  "&:hover::after": {
    filter: "blur(20px)",
    opacity: 1,
  },

  "&:hover::before": {
    transform: "rotate(-180deg)",
  },

  "&:active::before": {
    transform: "scale(0.7)",
  },
}));

const TextRevealButton = styled(Button)(() => ({
  margin: 0,
  height: "auto",
  background: "transparent",
  padding: 0,
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  fontFamily: "Arial",
  position: "relative",
  textTransform: "uppercase",
  color: "transparent",
  letterSpacing: "3px",
  WebkitTextStroke: "1px rgba(255,255,255,0.6)",

  "& .actual-text": {
    display: "block",
    padding: "0 10px",
  },

  "& .hover-text": {
    position: "absolute",
    boxSizing: "border-box",
    content: "attr(data-text)",
    color: "#37FF8B",
    width: "0%",
    inset: 0,
    borderRight: "3px solid #37FF8B",
    overflow: "hidden",
    transition: "0.5s",
    WebkitTextStroke: "1px #37FF8B",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },

  "&:hover .hover-text": {
    width: "100%",
    filter: "drop-shadow(0 0 23px #37FF8B)",
  },

  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));

const ButtonDemo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <StyledButton>Button</StyledButton>
      <TextRevealButton disableRipple>
        <span className="actual-text">&nbsp;button&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;button&nbsp;
        </span>
      </TextRevealButton>
    </Box>
  );
};

const Button2 = () => {
  const shortCode = `<StyledButton>Button</StyledButton>
<TextRevealButton disableRipple>
  <span className="actual-text">&nbsp;button&nbsp;</span>
  <span className="hover-text" aria-hidden="true">
    &nbsp;button&nbsp;
  </span>
</TextRevealButton>`;

  const fullCode = `import { Button, styled, Box } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  position: "relative",
  width: "120px",
  height: "40px",
  backgroundColor: "black !important",
  display: "flex",
  alignItems: "center",
  color: "white !important",
  justifyContent: "center",
  border: "none",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  textTransform: "none",
  minWidth: "120px",
  overflow: "visible",
  zIndex: 0,

  "& .MuiTouchRipple-root": {
    display: "none",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)",
    borderRadius: "10px",
    zIndex: -1,
    transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: "-4px",
    background: "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)",
    borderRadius: "12px",
    transform: "translate3d(0, 0, 0)",
    filter: "blur(15px)",
    zIndex: -2,
    opacity: 0.7,
  },

  "&:hover::after": {
    filter: "blur(20px)",
    opacity: 1,
  },

  "&:hover::before": {
    transform: "rotate(-180deg)",
  },

  "&:active::before": {
    transform: "scale(0.7)",
  },
}));

const TextRevealButton = styled(Button)(() => ({
  margin: 0,
  height: "auto",
  background: "transparent",
  padding: 0,
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  fontFamily: "Arial",
  position: "relative",
  textTransform: "uppercase",
  color: "transparent",
  letterSpacing: "3px",
  WebkitTextStroke: "1px rgba(255,255,255,0.6)",

  "& .actual-text": {
    display: "block",
    padding: "0 10px",
  },

  "& .hover-text": {
    position: "absolute",
    boxSizing: "border-box",
    content: "attr(data-text)",
    color: "#37FF8B",
    width: "0%",
    inset: 0,
    borderRight: "3px solid #37FF8B",
    overflow: "hidden",
    transition: "0.5s",
    WebkitTextStroke: "1px #37FF8B",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },

  "&:hover .hover-text": {
    width: "100%",
    filter: "drop-shadow(0 0 23px #37FF8B)",
  },

  "& .MuiTouchRipple-root": {
    display: "none",
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
      <StyledButton>Button</StyledButton>
      <TextRevealButton disableRipple>
        <span className="actual-text">&nbsp;button&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;button&nbsp;
        </span>
      </TextRevealButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button2;
