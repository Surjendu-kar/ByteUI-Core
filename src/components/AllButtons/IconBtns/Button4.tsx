import LogoutIcon from "@mui/icons-material/Logout";
import CodeViewer from "../../CodeViewer/CodeViewer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";
import { AnimatedIcon1, AnimatedIcon2, BackToTopIcon } from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";

const ButtonDemo = () => {
  return (
    <CodeViewerContainer>
      <AnimatedIcon1
        bfBgColor="rgb(255, 65, 65)"
        afBgColor="rgb(255, 65, 65)"
        bfColor="white"
        afColor="white"
        content="Logout"
        icon={LogoutIcon}
      />

      <AnimatedIcon1
        bfBgColor="white"
        afBgColor="black"
        bfColor="black"
        afColor="white"
        content="Logout"
        icon={LoginIcon}
      />

      <AnimatedIcon1
        bfBgColor="#0163E0"
        afBgColor="#0163E0"
        bfColor="white"
        afColor="white"
        content="Facebook"
        icon={FacebookIcon}
        hoverWidth="140px" //default hover width 125px
      />

      <BackToTopIcon
        bfBgColor="rgb(20, 20, 20)"
        afBgColor="rgb(181, 160, 255)"
        content="Back to Top"
      />

      <AnimatedIcon2
        bfBgColor="rgb(20, 20, 20)"
        afBgColor="rgb(255, 69, 69)"
        content="Delete"
        icon={DeleteIcon}
      />
    </CodeViewerContainer>
  );
};

const Button4 = () => {
  const shortCode = `<AnimatedIcon1
  bfBgColor="rgb(255, 65, 65)"
  afBgColor="rgb(255, 65, 65)"
  bfColor="white"
  afColor="white"
  content="Logout"
  icon={LogoutIcon}
/>

<AnimatedIcon1
  bfBgColor="white"
  afBgColor="black"
  bfColor="black"
  afColor="white"
  content="Logout"
  icon={LoginIcon}
/>

<AnimatedIcon1
  bfBgColor="#0163E0"
  afBgColor="#0163E0"
  bfColor="white"
  afColor="white"
  content="Facebook"
  icon={FacebookIcon}
  hoverWidth="140px"
/>

<BackToTopIcon
  bfBgColor="rgb(20, 20, 20)"
  afBgColor="rgb(181, 160, 255)"
  content="Back to Top"
/>

<AnimatedIcon2
  bfBgColor="rgb(20, 20, 20)"
  afBgColor="rgb(255, 69, 69)"
  content="Delete"
  icon={DeleteIcon}
/>`;

  const fullCode = `import { Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";
import { AnimatedIcon1, AnimatedIcon2, BackToTopIcon } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <AnimatedIcon1
        bfBgColor="rgb(255, 65, 65)"
        afBgColor="rgb(255, 65, 65)"
        bfColor="white"
        afColor="white"
        content="Logout"
        icon={LogoutIcon}
      />

      <AnimatedIcon1
        bfBgColor="white"
        afBgColor="black"
        bfColor="black"
        afColor="white"
        content="Logout"
        icon={LoginIcon}
      />

      <AnimatedIcon1
        bfBgColor="#0163E0"
        afBgColor="#0163E0"
        bfColor="white"
        afColor="white"
        content="Facebook"
        icon={FacebookIcon}
        hoverWidth="140px" //default hover width 125px
      />

      <BackToTopIcon
        bfBgColor="rgb(20, 20, 20)"
        afBgColor="rgb(181, 160, 255)"
        content="Back to Top"
      />

      <AnimatedIcon2
        bfBgColor="rgb(20, 20, 20)"
        afBgColor="rgb(255, 69, 69)"
        content="Delete"
        icon={DeleteIcon}
      />
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button4;
