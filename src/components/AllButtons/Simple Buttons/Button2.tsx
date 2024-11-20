import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import { RotateButton, TextRevealButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <RotateButton>Button</RotateButton>
      <TextRevealButton disableRipple>Button</TextRevealButton>
    </Box>
  );
};

const Button2 = () => {
  const shortCode = `<RotateButton>Button</RotateButton>
<TextRevealButton disableRipple>Button</TextRevealButton>`;

  const fullCode = `import { Box } from "@mui/material";
import { RotateButton, TextRevealButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <RotateButton>Button</RotateButton>
      <TextRevealButton disableRipple>Button</TextRevealButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button2;
