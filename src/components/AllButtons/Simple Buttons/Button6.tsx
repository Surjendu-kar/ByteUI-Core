import CodeViewer from "../../CodeViewer/CodeViewer";
import { BorderColorButton, GoldButton } from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";

const ButtonDemo = () => {
  return (
    <CodeViewerContainer>
      <BorderColorButton>Button</BorderColorButton>
      <GoldButton>Click Me</GoldButton>
    </CodeViewerContainer>
  );
};

const Button6 = () => {
  const shortCode = `<BorderColorButton>Button</BorderColorButton>
<GoldButton>Click Me</GoldButton>`;

  const fullCode = `import { Box } from "@mui/material";
import { BorderColorButton, GoldButton } from "@byteui/mui-core";

const ButtonDemo= () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <BorderColorButton>Button</BorderColorButton>
      <GoldButton>Click Me</GoldButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button6;
