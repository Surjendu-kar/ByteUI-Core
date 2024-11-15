import { styled } from "@mui/material/styles";
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
  marginLeft: "16px",

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

      <AnimatedButton variant="contained">Download</AnimatedButton>
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

<AnimatedButton variant="contained">Download</AnimatedButton>`;

  const fullCode = `import React from 'react';
import { styled } from '@mui/material/styles';
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

const AnimatedButton = styled(Button)(() => ({
  position: 'relative',
  padding: '7px 25px',
  backgroundColor: '#4CC713',
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '0.9em',
  textAlign: 'center',
  textIndent: '15px',
  border: 'none',
  borderRadius: "7px",
  textTransform: 'none',
  marginLeft: '16px',
  
  '&:hover': {
    backgroundColor: '#45a21a',
  },

  '&::before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '15px',
    top: '52%',
  },

  '&::before': {
    width: '10px',
    height: '2px',
    borderStyle: 'solid',
    borderWidth: '0 2px 2px',
    borderColor: 'white',
  },

  '&::after': {
    width: 0,
    height: 0,
    marginLeft: '3px',
    marginTop: '-7px',
    borderStyle: 'solid',
    borderWidth: '4px 4px 0 4px',
    borderColor: 'white transparent transparent transparent',
    animation: 'downloadArrow 1s linear infinite',
    animationPlayState: 'paused',
  },

  '@keyframes downloadArrow': {
    '0%': {
      marginTop: '-7px',
      opacity: 1,
    },
    '0.001%': {
      marginTop: '-15px',
      opacity: 0.4,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      marginTop: 0,
      opacity: 0.4,
    }
  },

  '&:hover::before': {
    borderColor: '#cdefbd',
  },

  '&:hover::after': {
    borderTopColor: '#cdefbd',
    animationPlayState: 'running',
  }
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

      <AnimatedButton variant="contained">Download</AnimatedButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button11;
