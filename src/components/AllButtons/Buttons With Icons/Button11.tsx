import { keyframes, styled } from "@mui/material/styles";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CodeViewer from "../../CodeViewer/CodeViewer";

const StyledButton = styled(Button)(() => ({
  "--width": "150px",
  "--height": "40px",
  width: "var(--width)",
  height: "var(--height)",
  backgroundColor: "#1163ff",
  position: "relative",
  borderRadius: "0.45em",
  overflow: "hidden",
  transition: "background 0.3s",
  padding: 0,
  minWidth: "var(--width)",

  "&:hover": {
    backgroundColor: "#6c18ff",
  },

  ".button-content": {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },

  ".text": {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "top 0.5s",
    top: 0,
  },

  ".icon": {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "top 0.5s",
    top: "100%",
  },

  "&:hover .text": {
    top: "-100%",
  },

  "&:hover .icon": {
    top: 0,
  },
}));

const AnimatedButton = styled(Button)(() => ({
  position: "relative",
  padding: "7px 25px",
  backgroundColor: "#4CC713",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "0.9em",
  textAlign: "center",
  textIndent: "15px",
  border: "none",
  borderRadius: "7px",
  textTransform: "none",
  marginRight: "0.5rem",

  "&:hover": {
    backgroundColor: "#45a21a",
  },

  "&::before, &::after": {
    content: '""',
    display: "block",
    position: "absolute",
    left: "15px",
    top: "52%",
  },

  "&::before": {
    width: "10px",
    height: "2px",
    borderStyle: "solid",
    borderWidth: "0 2px 2px",
    borderColor: "white",
  },

  "&::after": {
    width: 0,
    height: 0,
    marginLeft: "3px",
    marginTop: "-7px",
    borderStyle: "solid",
    borderWidth: "4px 4px 0 4px",
    borderColor: "white transparent transparent transparent",
    animation: "downloadArrow 1s linear infinite",
    animationPlayState: "paused",
  },

  "@keyframes downloadArrow": {
    "0%": {
      marginTop: "-7px",
      opacity: 1,
    },
    "0.001%": {
      marginTop: "-15px",
      opacity: 0.4,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      marginTop: 0,
      opacity: 0.4,
    },
  },

  "&:hover::before": {
    borderColor: "#cdefbd",
  },

  "&:hover::after": {
    borderTopColor: "#cdefbd",
    animationPlayState: "running",
  },
}));

const animate = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
`;

const animateC = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const DownloadButton = styled(Button)(() => ({
  width: "125px",
  height: "40px",
  borderRadius: "10px",
  border: "none",
  boxShadow: "1px 1px rgba(107, 221, 215, 0.37)",
  margin: "0 0.5rem",
  backgroundColor: "rgb(59, 190, 230)",
  color: "#fff",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 505,
  fontSize: "16px",
  lineHeight: 1,
  cursor: "pointer",
  filter: "drop-shadow(0 0 10px rgba(59, 190, 230, 0.568))",
  transition: "0.5s linear",
  minWidth: "unset",
  position: "relative",
  textTransform: "capitalize",

  "& .svg-icon": {
    display: "none",
  },

  "&:hover": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgb(59, 190, 230)",

    "& .text": {
      display: "none",
    },

    "& .svg-icon": {
      display: "inline",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      width: "16px",
      height: "3px",
      backgroundColor: "rgb(59, 190, 230)",
      animation: `${animate} 0.9s linear infinite`,
    },

    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      border: "4px solid transparent",
      borderTop: "3.5px solid #fff",
      borderRight: "3.5px solid #fff",
      borderRadius: "50%",
      animation: `${animateC} 2s linear infinite`,
    },
  },
}));

const DownloadDesign = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: "#141313",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "relative",
  transition: "all 0.3s",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.11)",
  padding: 0,
  minWidth: "unset",

  "& svg": {
    fill: "rgb(214, 178, 255)",
    height: "12px",
  },

  "& .icon2": {
    width: "14px",
    height: "5px",
    borderBottom: "2px solid rgb(182, 143, 255)",
    borderLeft: "2px solid rgb(182, 143, 255)",
    borderRight: "2px solid rgb(182, 143, 255)",
  },

  "&:hover": {
    backgroundColor: "rgb(150, 94, 255)",

    "& .icon2": {
      borderBottom: "2px solid rgb(235, 235, 235)",
      borderLeft: "2px solid rgb(235, 235, 235)",
      borderRight: "2px solid rgb(235, 235, 235)",
    },

    "& svg": {
      fill: "rgb(255, 255, 255)",
      animation:
        "slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    },
  },

  "@keyframes slide-in-top": {
    "0%": {
      transform: "translateY(-10px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0px)",
      opacity: 1,
    },
  },
}));

const ButtonDemo = () => {
  return (
    <Box style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <Tooltip
        title="Size: 20Mb"
        placement="top"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "white",
              color: "#111",
              "& .MuiTooltip-arrow": {
                color: "white",
              },
              fontSize: "0.9rem",
              padding: "8px 12px",
              borderRadius: "0.25em",
            },
          },
        }}
      >
        <StyledButton>
          <Box className="button-content">
            <Typography className="text">Download</Typography>
            <Typography className="icon">
              <DownloadIcon />
            </Typography>
          </Box>
        </StyledButton>
      </Tooltip>

      <DownloadButton disableRipple>
        <svg
          className="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#f1f1f1"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              ></path>
            </g>
          </g>
        </svg>
        <span className="text">Download</span>
      </DownloadButton>

      <AnimatedButton variant="contained">Download</AnimatedButton>

      <DownloadDesign disableRipple>
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
        <span className="icon2"></span>
      </DownloadDesign>
    </Box>
  );
};

const Button11 = () => {
  const shortCode = `<Tooltip>
  title="Size: 20Mb"
  placement="top"
  arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: "white",
        color: "#111",
        "& .MuiTooltip-arrow": {
          color: "white",
        },
        fontSize: "0.9rem",
        padding: "8px 12px",
        borderRadius: "0.25em",
      },
    },
  }}
>
  <StyledButton>
    <Box className="button-content">
      <Typography className="text">Download</Typography>
      <Typography className="icon">
        <DownloadIcon />
      </Typography>
    </Box>
  </StyledButton>
</Tooltip>

<AnimatedButton variant="contained">Download</AnimatedButton>

<DownloadButton disableRipple>
  <svg
    className="svg-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24px"
    width="24px"
  >
    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      id="SVGRepo_tracerCarrier"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / Download">
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="#f1f1f1"
          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
        ></path>
      </g>
    </g>
  </svg>
  <span className="text">Download</span>
</DownloadButton>
<DownloadDesign disableRipple>
  <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
  </svg>
  <span className="icon2"></span>
</DownloadDesign>`;

  const fullCode = `import React from 'react';
import { keyframes, styled } from "@mui/material/styles";
import { Button, Tooltip, Box, Typography } from '@mui/material';
import DownloadIcon from "@mui/icons-material/Download";

const StyledButton = styled(Button)(() => ({
  '--width': '150px',
  '--height': '40px',
  width: 'var(--width)',
  height: 'var(--height)',
  backgroundColor: '#1163ff',
  position: 'relative',
  borderRadius: '0.45em',
  overflow: 'hidden',
  transition: 'background 0.3s',
  padding: 0,
  minWidth: 'var(--width)',

  '&:hover': {
    backgroundColor: '#6c18ff',
  },

  '.button-content': {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },

  '.text': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'top 0.5s',
    top: 0,
  },

  '.icon': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'top 0.5s',
    top: '100%',
  },

  '&:hover .text': {
    top: '-100%',
  },

  '&:hover .icon': {
    top: 0,
  },
}));

const animate = keyframes\`
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
\`;

const animateC = keyframes\`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
\`;

const DownloadButton = styled(Button)(() => ({
  width: "125px",
  height: "40px",
  borderRadius: "10px",
  border: "none",
  boxShadow: "1px 1px rgba(107, 221, 215, 0.37)",
  margin: "0 1rem",
  backgroundColor: "rgb(59, 190, 230)",
  color: "#fff",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 505,
  fontSize: "16px",
  lineHeight: 1,
  cursor: "pointer",
  filter: "drop-shadow(0 0 10px rgba(59, 190, 230, 0.568))",
  transition: "0.5s linear",
  minWidth: "unset",
  position: "relative",
  textTransform: "capitalize",

  "& .svg-icon": {
    display: "none",
  },

  "&:hover": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgb(59, 190, 230)",

    "& .text": {
      display: "none",
    },

    "& .svg-icon": {
      display: "inline",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      width: "16px",
      height: "3px",
      backgroundColor: "rgb(59, 190, 230)",
      animation: \`\${animate} 0.9s linear \`,
    },

    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      border: "4px solid transparent",
      borderTop: "3.5px solid #fff",
      borderRight: "3.5px solid #fff",
      borderRadius: "50%",
      animation: \`\${animateC} 2s linear infinite\`,
    },
  },
}));

const AnimatedButton = styled(Button)(() => ({
  position: "relative",
  padding: "7px 25px",
  backgroundColor: "#4CC713",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "0.9em",
  textAlign: "center",
  textIndent: "15px",
  border: "none",
  borderRadius: "7px",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#45a21a",
  },

  "&::before, &::after": {
    content: '""',
    display: "block",
    position: "absolute",
    left: "15px",
    top: "52%",
  },

  "&::before": {
    width: "10px",
    height: "2px",
    borderStyle: "solid",
    borderWidth: "0 2px 2px",
    borderColor: "white",
  },

  "&::after": {
    width: 0,
    height: 0,
    marginLeft: "3px",
    marginTop: "-7px",
    borderStyle: "solid",
    borderWidth: "4px 4px 0 4px",
    borderColor: "white transparent transparent transparent",
    animation: "downloadArrow 1s linear infinite",
    animationPlayState: "paused",
  },

  "@keyframes downloadArrow": {
    "0%": {
      marginTop: "-7px",
      opacity: 1,
    },
    "0.001%": {
      marginTop: "-15px",
      opacity: 0.4,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      marginTop: 0,
      opacity: 0.4,
    },
  },

  "&:hover::before": {
    borderColor: "#cdefbd",
  },

  "&:hover::after": {
    borderTopColor: "#cdefbd",
    animationPlayState: "running",
  },
}));


const DownloadDesign = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: "#141313",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "relative",
  transition: "all 0.3s",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.11)",
  padding: 0,
  minWidth: "unset",

  "& svg": {
    fill: "rgb(214, 178, 255)",
    height: "12px",
  },

  "& .icon2": {
    width: "14px",
    height: "5px",
    borderBottom: "2px solid rgb(182, 143, 255)",
    borderLeft: "2px solid rgb(182, 143, 255)",
    borderRight: "2px solid rgb(182, 143, 255)",
  },

  "&:hover": {
    backgroundColor: "rgb(150, 94, 255)",

    "& .icon2": {
      borderBottom: "2px solid rgb(235, 235, 235)",
      borderLeft: "2px solid rgb(235, 235, 235)",
      borderRight: "2px solid rgb(235, 235, 235)",
    },

    "& svg": {
      fill: "rgb(255, 255, 255)",
      animation:
        "slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    },
  },

  "@keyframes slide-in-top": {
    "0%": {
      transform: "translateY(-10px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0px)",
      opacity: 1,
    },
  },
}));

const ButtonDemo = () => {
  return (
     <Box style={{ display: "flex", alignItems: "center" }}>
      <Tooltip
        title="Size: 20Mb"
        placement="top"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "white",
              color: "#111",
              "& .MuiTooltip-arrow": {
                color: "white",
              },
              fontSize: "0.9rem",
              padding: "8px 12px",
              borderRadius: "0.25em",
            },
          },
        }}
      >
        <StyledButton>
          <Box className="button-content">
            <Typography className="text">Download</Typography>
            <Typography className="icon">
              <DownloadIcon />
            </Typography>
          </Box>
        </StyledButton>
      </Tooltip>

      <DownloadButton disableRipple>
        <svg
          className="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#f1f1f1"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              ></path>
            </g>
          </g>
        </svg>
        <span className="text">Download</span>
      </DownloadButton>

      <AnimatedButton variant="contained">Download</AnimatedButton>

      <DownloadDesign disableRipple>
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
        <span className="icon2"></span>
      </DownloadDesign>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button11;
