import { FC } from "react";
import { Button, styled, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CodeViewer from "../../CodeViewer/CodeViewer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";

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
  textTransform: "capitalize",

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

const BackToTopButton = styled(Button)(() => ({
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "rgb(20, 20, 20)",
  border: "none",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s",
  overflow: "hidden",
  position: "relative",
  padding: 0,
  minWidth: "unset",
  textTransform: "capitalize",

  "&:hover": {
    width: "150px",
    borderRadius: "40px",
    backgroundColor: "rgb(181, 160, 255)",
    alignItems: "center",
  },

  "&:active": {
    transform: "translate(2px, 2px)",
  },

  "& svg": {
    width: "15px",
    height: "15px",
    transition: "all 0.3s",
    fill: "white",
  },

  "&:hover svg": {
    transform: "translateY(-200%)",
  },

  "&::before": {
    position: "absolute",
    bottom: "-20px",
    content: '"Back to Top"',
    color: "white",
    fontSize: 0,
  },

  "&:hover::before": {
    fontSize: "1.2em",
    opacity: 1,
    bottom: "unset",
    transition: "all 0.3s",
  },
}));

const DeleteButton = styled(Button)(() => ({
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "rgb(20, 20, 20)",
  border: "none",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.164)",
  cursor: "pointer",
  transition: "all 0.3s",
  overflow: "hidden",
  position: "relative",
  minWidth: "unset",
  padding: 0,

  "& svg": {
    width: "20px",
    height: "20px",
    transition: "all 0.3s",
    fill: "white",
  },

  "&:hover": {
    width: "140px",
    borderRadius: "50px",
    backgroundColor: "rgb(255, 69, 69)",
  },

  "&:hover svg": {
    width: "60px",
    height: "45px",
    transform: "translateY(60%)",
  },

  "&::before": {
    position: "absolute",
    top: "-20px",
    content: '"Delete"',
    color: "white",
    fontSize: "2px",
    transition: "all 0.3s",
  },

  "&:hover::before": {
    fontSize: "13px",
    transform: "translateY(30px)",
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

      <LoginButton disableRipple>
        <span className="icon-container">
          <LoginIcon />
        </span>
        <Typography className="button-text">Login</Typography>
      </LoginButton>

      <FacebookButton disableRipple>
        <span className="icon-container">
          <FacebookIcon />
        </span>
        <Typography className="button-text">Facebook</Typography>
      </FacebookButton>

      <BackToTopButton
        disableRipple
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </BackToTopButton>

      <DeleteButton disableRipple>
        <DeleteIcon />
      </DeleteButton>
    </Box>
  );
};

const Button4: FC = () => {
  const shortCode = `<LogoutButton disableRipple>
  <span className="icon-container">
    <LogoutIcon />
  </span>
  <Typography className="button-text">Logout</Typography>
</LogoutButton>

<LoginButton disableRipple>
  <span className="icon-container">
    <LoginIcon />
  </span>
  <Typography className="button-text">Login</Typography>
</LoginButton>

<FacebookButton disableRipple>
  <span className="icon-container">
    <FacebookIcon />
  </span>
  <Typography className="button-text">Facebook</Typography>
</FacebookButton>

<BackToTopButton
  disableRipple
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <svg viewBox="0 0 384 512">
    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
  </svg>
</BackToTopButton>

<DeleteButton disableRipple>
  <DeleteIcon />
</DeleteButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";

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

const BackToTopButton = styled(Button)(() => ({
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "rgb(20, 20, 20)",
  border: "none",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s",
  overflow: "hidden",
  position: "relative",
  padding: 0,
  minWidth: "unset",
  textTransform: "capitalize",

  "&:hover": {
    width: "150px",
    borderRadius: "40px",
    backgroundColor: "rgb(181, 160, 255)",
    alignItems: "center",
  },

  "&:active": {
    transform: "translate(2px, 2px)",
  },

  "& svg": {
    width: "15px",
    height: "15px",
    transition: "all 0.3s",
    fill: "white",
  },

  "&:hover svg": {
    transform: "translateY(-200%)",
  },

  "&::before": {
    position: "absolute",
    bottom: "-20px",
    content: '"Back to Top"',
    color: "white",
    fontSize: 0,
  },

  "&:hover::before": {
    fontSize: "1.2em",
    opacity: 1,
    bottom: "unset",
    transition: "all 0.3s",
  },
}));

const DeleteButton = styled(Button)(() => ({
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "rgb(20, 20, 20)",
  border: "none",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.164)",
  cursor: "pointer",
  transition: "all 0.3s",
  overflow: "hidden",
  position: "relative",
  minWidth: "unset",
  padding: 0,

  "& svg": {
    width: "20px",
    height: "20px",
    transition: "all 0.3s",
    fill: "white",
  },

  "&:hover": {
    width: "140px",
    borderRadius: "50px",
    backgroundColor: "rgb(255, 69, 69)",
  },

  "&:hover svg": {
    width: "60px",
    height: "45px",
    transform: "translateY(60%)",
  },

  "&::before": {
    position: "absolute",
    top: "-20px",
    content: '"Delete"',
    color: "white",
    fontSize: "2px",
    transition: "all 0.3s",
  },

  "&:hover::before": {
    fontSize: "13px",
    transform: "translateY(30px)",
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

      <LoginButton disableRipple>
        <span className="icon-container">
          <LoginIcon />
        </span>
        <Typography className="button-text">Login</Typography>
      </LoginButton>

      <FacebookButton disableRipple>
        <span className="icon-container">
          <FacebookIcon />
        </span>
        <Typography className="button-text">Facebook</Typography>
      </FacebookButton>

      <BackToTopButton
        disableRipple
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </BackToTopButton>

      <DeleteButton disableRipple>
        <DeleteIcon />
      </DeleteButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button4;
