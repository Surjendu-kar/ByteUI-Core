import { Button, styled, Box, keyframes } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";

const scrollAnimation = keyframes`
  0% {
    bottom: 9px;
  }
  50% {
    bottom: 5px;
  }
  100% {
    bottom: 9px;
  }
`;

const MouseButton = styled(Button)(() => ({
  width: "23px",
  height: "35px",
  border: "1px solid rgb(196, 196, 196)",
  backgroundColor: "transparent",
  borderRadius: "13px",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  minWidth: "unset",
  padding: 0,

  "&::after": {
    content: '""',
    width: "3px",
    height: "10px",
    backgroundColor: "rgb(196, 196, 196)",
    borderRadius: "2px",
    position: "absolute",
    bottom: "9px",
    animation: `${scrollAnimation} 1.5s linear infinite`,
  },

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingButton = styled(Button)(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "30px",
  border: "2px solid rgb(244, 63, 94)",
  color: "rgb(244, 63, 94)",
  padding: "0.5rem 1.5rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  textTransform: "capitalize",
  lineHeight: "1.5",
  transition: "all 150ms ease-in-out",
  backgroundColor: "transparent",

  "&:hover": {
    borderColor: "rgb(225, 29, 72)",
    color: "rgb(225, 29, 72)",
    backgroundColor: "rgba(244, 63, 94, 0.1)",
  },

  "&:active": {
    borderColor: "rgb(159, 18, 57)",
    color: "rgb(159, 18, 57)",
  },

  "& .spinner": {
    display: "inline-block",
    width: "0.7rem",
    height: "0.7rem",
    borderRadius: "9999px",
    border: "2px solid currentColor",
    borderRightColor: "transparent",
    animation: `${spin} 1.5s linear infinite`,
  },

  "& .sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
}));

const ThemeButton = styled(Button)(() => ({
  width: "32px",
  height: "32px",
  padding: "4px",
  borderRadius: "10px",
  backgroundColor: "#5856d6",
  position: "relative",
  overflow: "hidden",
  minWidth: "unset",

  "&:hover": {
    backgroundColor: "#5856d6",
  },

  "& .center-circle": {
    width: "16px",
    height: "16px",
    borderRadius: "24px",
    border: "3px solid #5856d6",
    backgroundColor: "rgb(28, 28, 30)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "width .4s, height .4s, border .4s, background-color .4s",
    zIndex: 10,
  },

  "&:hover .center-circle": {
    width: "20px",
    height: "20px",
    border: "1px solid rgb(245, 245, 247)",
    backgroundColor: "rgb(245, 245, 247)",
  },

  "& .rays-container": {
    width: "24px",
    height: "24px",
    borderRadius: "24px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "transform .4s",

    "& span": {
      display: "block",
      width: "24px",
      height: "2px",
      borderRadius: "2px",
      backgroundColor: "rgb(28, 28, 30)",
      position: "relative",
    },

    "& span:nth-of-type(1)": {
      top: "calc(50% - 1px)",
    },

    "& span:nth-of-type(2)": {
      top: "calc(50% - 3px)",
      transform: "rotate(90deg)",
    },

    "& span:nth-of-type(3)": {
      top: "calc(50% - 5px)",
      transform: "rotate(45deg)",
    },

    "& span:nth-of-type(4)": {
      top: "calc(50% - 7px)",
      transform: "rotate(-45deg)",
    },
  },

  "&:hover .rays-container": {
    transform: "translate(-50%, -50%) rotate(-45deg) scale(.8)",
  },

  "& .corner-circle": {
    width: "4px",
    height: "4px",
    borderRadius: "9px",
    backgroundColor: "#5856d6",
    position: "absolute",
    top: "2px",
    right: "2px",
    transition: "width .6s, height .6s",
    transitionDelay: ".08s",
    zIndex: 10,
  },

  "&:hover .corner-circle": {
    width: "18px",
    height: "18px",
  },
}));

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <MouseButton disableRipple />
      <LoadingButton disableRipple>
        <Box className="spinner">
          <span className="sr-only">Loading...</span>
        </Box>
        Loading
      </LoadingButton>

      <ThemeButton disableRipple>
        <span className="center-circle" />
        <div className="rays-container">
          <span />
          <span />
          <span />
          <span />
        </div>
        <span className="corner-circle" />
      </ThemeButton>
    </Box>
  );
};

const Button14 = () => {
  const shortCode = `<MouseButton disableRipple />

<LoadingButton disableRipple>
  <Box className="spinner">
    <span className="sr-only">Loading...</span>
  </Box>
  Loading
</LoadingButton>
<ThemeButton disableRipple>
  <span className="center-circle" />
  <div className="rays-container">
    <span />
    <span />
    <span />
    <span />
  </div>
  <span className="corner-circle" />
</ThemeButton>
`;

  const fullCode = `import { Button, styled, Box, keyframes } from "@mui/material";
  
const scrollAnimation = keyframes\`
  0% {
    bottom: 9px;
  }
  50% {
    bottom: 5px;
  }
  100% {
    bottom: 9px;
  }
\`;

const MouseButton = styled(Button)(() => ({
  width: "23px",
  height: "35px",
  border: "1px solid rgb(196, 196, 196)",
  backgroundColor: "transparent",
  borderRadius: "13px",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  minWidth: "unset",
  padding: 0,

  "&::after": {
    content: '""',
    width: "3px",
    height: "10px",
    backgroundColor: "rgb(196, 196, 196)",
    borderRadius: "2px",
    position: "absolute",
    bottom: "9px",
    animation: \`\${scrollAnimation} 1.5s linear infinite\`,
  },

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const spin = keyframes\`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
\`;

const LoadingButton = styled(Button)(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "30px",
  border: "2px solid rgb(244, 63, 94)",
  color: "rgb(244, 63, 94)",
  padding: "0.5rem 1.5rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  textTransform: "capitalize",
  lineHeight: "1.5",
  transition: "all 150ms ease-in-out",
  backgroundColor: "transparent",

  "&:hover": {
    borderColor: "rgb(225, 29, 72)",
    color: "rgb(225, 29, 72)",
    backgroundColor: "rgba(244, 63, 94, 0.1)",
  },

  "&:active": {
    borderColor: "rgb(159, 18, 57)",
    color: "rgb(159, 18, 57)",
  },

  "& .spinner": {
    display: "inline-block",
    width: "0.7rem",
    height: "0.7rem",
    borderRadius: "9999px",
    border: "2px solid currentColor",
    borderRightColor: "transparent",
    animation: \`\${spin} 1.5s linear infinite\`,
  },

  "& .sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
}));

const ThemeButton = styled(Button)(() => ({
  width: "32px",
  height: "32px",
  padding: "4px",
  borderRadius: "10px",
  backgroundColor: "#5856d6",
  position: "relative",
  overflow: "hidden",
  minWidth: "unset",

  "&:hover": {
    backgroundColor: "#5856d6",
  },

  "& .center-circle": {
    width: "16px",
    height: "16px",
    borderRadius: "24px",
    border: "3px solid #5856d6",
    backgroundColor: "rgb(28, 28, 30)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "width .4s, height .4s, border .4s, background-color .4s",
    zIndex: 10,
  },

  "&:hover .center-circle": {
    width: "20px",
    height: "20px",
    border: "1px solid rgb(245, 245, 247)",
    backgroundColor: "rgb(245, 245, 247)",
  },

  "& .rays-container": {
    width: "24px",
    height: "24px",
    borderRadius: "24px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "transform .4s",

    "& span": {
      display: "block",
      width: "24px",
      height: "2px",
      borderRadius: "2px",
      backgroundColor: "rgb(28, 28, 30)",
      position: "relative",
    },

    "& span:nth-of-type(1)": {
      top: "calc(50% - 1px)",
    },

    "& span:nth-of-type(2)": {
      top: "calc(50% - 3px)",
      transform: "rotate(90deg)",
    },

    "& span:nth-of-type(3)": {
      top: "calc(50% - 5px)",
      transform: "rotate(45deg)",
    },

    "& span:nth-of-type(4)": {
      top: "calc(50% - 7px)",
      transform: "rotate(-45deg)",
    },
  },

  "&:hover .rays-container": {
    transform: "translate(-50%, -50%) rotate(-45deg) scale(.8)",
  },

  "& .corner-circle": {
    width: "4px",
    height: "4px",
    borderRadius: "9px",
    backgroundColor: "#5856d6",
    position: "absolute",
    top: "2px",
    right: "2px",
    transition: "width .6s, height .6s",
    transitionDelay: ".08s",
    zIndex: 10,
  },

  "&:hover .corner-circle": {
    width: "18px",
    height: "18px",
  },
}));

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <MouseButton disableRipple />
      
      <LoadingButton disableRipple>
        <Box className="spinner">
          <span className="sr-only">Loading...</span>
        </Box>
        Loading
      </LoadingButton>

      <ThemeButton disableRipple>
        <span className="center-circle" />
        <div className="rays-container">
          <span />
          <span />
          <span />
          <span />
        </div>
        <span className="corner-circle" />
      </ThemeButton>
    </Box>
  );
};
  
export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button14;
