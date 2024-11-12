import { FC } from "react";
import { Button, styled, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CodeViewer from "../CodeViewer/CodeViewer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginIcon from "@mui/icons-material/Login";

const LogoutButton = styled(Button)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.199)",
  backgroundColor: "rgb(255, 65, 65)",
  padding: 0,
  minWidth: "unset",
  fontSize: "12px",

  "&:hover": {
    width: "125px",
    borderRadius: "40px",
    backgroundColor: "rgb(255, 65, 65)",
  },

  "&:active": {
    transform: "translate(2px, 2px)",
  },

  "& .icon-container": {
    width: "100%",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: "23px",
      height: "23px",
      color: "white",
      strokeWidth: 3,
    },
  },

  "&:hover .icon-container": {
    width: "30%",
    paddingLeft: "20px",
  },

  "& .button-text": {
    position: "absolute",
    right: "0%",
    width: "0%",
    opacity: 0,
    color: "white",
    fontSize: "1.2em",
    fontWeight: 600,
    transition: "all 0.3s",
    whiteSpace: "nowrap",
  },

  "&:hover .button-text": {
    opacity: 1,
    width: "70%",
    paddingRight: "10px",
  },
}));

const FacebookButton = styled(LogoutButton)(() => ({
  backgroundColor: "#0163E0",

  "&:hover": {
    width: "150px",
    backgroundColor: "#0163E0",
  },
}));

const LoginButton = styled(LogoutButton)(() => ({
  backgroundColor: "white",

  "&:hover": {
    width: "125px",
    backgroundColor: "black",
  },

  "& .icon-container": {
    "& svg": {
      color: "black",
    },
  },

  "&:hover .icon-container svg": {
    color: "white",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <LogoutButton disableRipple>
        <span className="icon-container">
          <LogoutIcon />
        </span>
        <Typography className="button-text">Logout</Typography>
      </LogoutButton>

      <FacebookButton disableRipple>
        <span className="icon-container">
          <FacebookIcon />
        </span>
        <Typography className="button-text">Facebook</Typography>
      </FacebookButton>

      <LoginButton disableRipple>
        <span className="icon-container">
          <LoginIcon />
        </span>
        <Typography className="button-text">Login</Typography>
      </LoginButton>
    </Box>
  );
};

const Button4: FC = () => {
  const shortCode = `<LogoutButton disableRipple>
  <span className="icon-container">
    <LogoutIcon />
  </span>
  <Typography className="button-text">Logout</Typography>
</LogoutButton
<FacebookButton disableRipple>
  <span className="icon-container">
    <FacebookIcon />
  </span>
  <Typography className="button-text">Facebook</Typography>
</FacebookButton
<LoginButton disableRipple>
  <span className="icon-container">
    <LoginIcon />
  </span>
  <Typography className="button-text">Login</Typography>
</LoginButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginIcon from "@mui/icons-material/Login";

const LogoutButton = styled(Button)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.199)",
  backgroundColor: "rgb(255, 65, 65)",
  padding: 0,
  minWidth: "unset",
  fontSize: "12px",

  "&:hover": {
    width: "125px",
    borderRadius: "40px",
    backgroundColor: "rgb(255, 65, 65)",
  },

  "&:active": {
    transform: "translate(2px, 2px)",
  },

  "& .icon-container": {
    width: "100%",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: "23px",
      height: "23px",
      color: "white",
      strokeWidth: 3,
    },
  },

  "&:hover .icon-container": {
    width: "30%",
    paddingLeft: "20px",
  },

  "& .button-text": {
    position: "absolute",
    right: "0%",
    width: "0%",
    opacity: 0,
    color: "white",
    fontSize: "1.2em",
    fontWeight: 600,
    transition: "all 0.3s",
    whiteSpace: "nowrap",
  },

  "&:hover .button-text": {
    opacity: 1,
    width: "70%",
    paddingRight: "10px",
  },
}));

const FacebookButton = styled(Button)(() => ({
 display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.199)",
  backgroundColor: "#0163E0",
  padding: 0,
  minWidth: "unset",
  fontSize: "12px",

  "&:hover": {
    borderRadius: "40px",
    width: "150px",
    backgroundColor: "#0163E0",
  },

  "&:active": {
    transform: "translate(2px, 2px)",
  },

  "& .icon-container": {
    width: "100%",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: "23px",
      height: "23px",
      color: "white",
      strokeWidth: 3,
    },
  },

  "&:hover .icon-container": {
    width: "30%",
    paddingLeft: "20px",
  },

  "& .button-text": {
    position: "absolute",
    right: "0%",
    width: "0%",
    opacity: 0,
    color: "white",
    fontSize: "1.2em",
    fontWeight: 600,
    transition: "all 0.3s",
    whiteSpace: "nowrap",
  },

  "&:hover .button-text": {
    opacity: 1,
    width: "70%",
    paddingRight: "10px",
  },
}));

const LoginButton = styled(Button)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.199)",
  backgroundColor: "white",
  padding: 0,
  minWidth: "unset",
  fontSize: "12px",

  "&:hover": {
    width: "125px",
    borderRadius: "40px",
    backgroundColor: "black",
  },

  "&:active": {
    transform: "translate(2px, 2px)",
  },

  "& .icon-container": {
    width: "100%",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: "23px",
      height: "23px",
      color: "black",
      strokeWidth: 3,
      transition: "color 0.3s",
    },
  },

  "&:hover .icon-container svg": {
    color: "white",
  },

  "&:hover .icon-container": {
    width: "30%",
    paddingLeft: "20px",
  },

  "& .button-text": {
    position: "absolute",
    right: "0%",
    width: "0%",
    opacity: 0,
    color: "white",
    fontSize: "1.2em",
    fontWeight: 600,
    transition: "all 0.3s",
    whiteSpace: "nowrap",
  },

  "&:hover .button-text": {
    opacity: 1,
    width: "70%",
    paddingRight: "10px",
  },
}));



const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <LogoutButton disableRipple>
        <span className="icon-container">
          <LogoutIcon />
        </span>
        <Typography className="button-text">Logout</Typography>
      </LogoutButton>

      <FacebookButton disableRipple>
        <span className="icon-container">
          <FacebookIcon />
        </span>
        <Typography className="button-text">Facebook</Typography>
      </FacebookButton>

      <LoginButton disableRipple>
        <span className="icon-container">
          <LoginIcon />
        </span>
        <Typography className="button-text">Login</Typography>
      </LoginButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button4;
