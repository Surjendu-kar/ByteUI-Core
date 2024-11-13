import { FC } from "react";
import { Button, styled, Box } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";

const DownloadButton = styled(Button)(() => ({
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

const AddButton = styled(Button)(() => ({
  cursor: "pointer",
  outline: "none",
  transition: "transform 0.3s",
  padding: 0,
  minWidth: "unset",
  backgroundColor: "transparent",
  width: "40px",
  height: "40px",

  "&:hover": {
    backgroundColor: "transparent",
    transform: "rotate(90deg)",
  },

  "& svg": {
    stroke: "rgb(161, 161, 170)",
    fill: "none",
    width: "50px",
    height: "50px",
    transition: "fill 0.3s",
  },

  "&:hover svg": {
    fill: "rgb(39, 39, 42)",
  },

  "&:active": {
    backgroundColor: "transparent",
    "& svg": {
      stroke: "rgb(228, 228, 231)",
      fill: "rgb(82, 82, 91)",
      transition: "none",
    },
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <DownloadButton disableRipple>
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
        <span className="icon2"></span>
      </DownloadButton>

      <AddButton disableRipple title="Add New">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </AddButton>
    </Box>
  );
};

const Button12: FC = () => {
  const shortCode = `<DownloadButton disableRipple>
  <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
  </svg>
  <span className="icon2"></span>
</DownloadButton>

<AddButton disableRipple title="Add New">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      strokeWidth="1.5"
    ></path>
    <path d="M8 12H16" strokeWidth="1.5"></path>
    <path d="M12 16V8" strokeWidth="1.5"></path>
  </svg>
</AddButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, Box } from "@mui/material";

const DownloadButton = styled(Button)(() => ({
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

const AddButton = styled(Button)(() => ({
  cursor: "pointer",
  outline: "none",
  transition: "transform 0.3s",
  padding: 0,
  minWidth: "unset",
  backgroundColor: "transparent",
  width: "40px",
  height: "40px",

  "&:hover": {
    backgroundColor: "transparent",
    transform: "rotate(90deg)",
  },

  "& svg": {
    stroke: "rgb(161, 161, 170)",
    fill: "none",
    width: "50px",
    height: "50px",
    transition: "fill 0.3s",
  },

  "&:hover svg": {
    fill: "rgb(39, 39, 42)",
  },

  "&:active": {
    backgroundColor: "transparent",
    "& svg": {
      stroke: "rgb(228, 228, 231)",
      fill: "rgb(82, 82, 91)",
      transition: "none",
    },
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <DownloadButton disableRipple>
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
        <span className="icon2"></span>
      </DownloadButton>

      <AddButton disableRipple title="Add New">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </AddButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button12;
