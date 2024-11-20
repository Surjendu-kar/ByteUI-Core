import { Box, styled } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import {
  FacebookBtn,
  InstagramBtn,
  TooltipFacebookBtn,
  TooltipInstagramBtn,
  TooltipTwitterBtn,
  TwitterBtn,
} from "@byteui/mui-core";

const SocialContainer = styled(Box)(() => ({
  display: "inline-flex",
  width: "100%",
  justifyContent: "center",
  gap: "2rem",
  alignItems: "center",
}));

const ButtonsContainer = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  gap: "10px",
}));

const ButtonDemo = () => {
  return (
    <SocialContainer>
      {/* First Style */}
      <ButtonsContainer>
        <TooltipFacebookBtn />
        <TooltipTwitterBtn />
        <TooltipInstagramBtn />
      </ButtonsContainer>

      {/* Second Style */}
      <ButtonsContainer>
        <FacebookBtn />
        <TwitterBtn />
        <InstagramBtn />
      </ButtonsContainer>
    </SocialContainer>
  );
};

const Button10 = () => {
  const shortCode = `<TooltipFacebookBtn />
<TooltipTwitterBtn />
<TooltipInstagramBtn />

<FacebookBtn />
<TwitterBtn />
<InstagramBtn />`;

  const fullCode = `import { Box, styled } from "@mui/material";
import {
  FacebookBtn,
  InstagramBtn,
  TooltipFacebookBtn,
  TooltipInstagramBtn,
  TooltipTwitterBtn,
  TwitterBtn,
} from "@byteui/mui-core";

const SocialContainer = styled(Box)(() => ({
  display: "inline-flex",
  width: "100%",
  justifyContent: "center",
  gap: "2rem",
  alignItems: "center",
}));

const ButtonsContainer = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  gap: "10px",
}));

const ButtonDemo = () => {
  return (
    <SocialContainer>
      {/* First Style */}
      <ButtonsContainer>
        <TooltipFacebookBtn />
        <TooltipTwitterBtn />
        <TooltipInstagramBtn />
      </ButtonsContainer>

      {/* Second Style */}
      <ButtonsContainer>
        <FacebookBtn />
        <TwitterBtn />
        <InstagramBtn />
      </ButtonsContainer>
    </SocialContainer>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button10;
