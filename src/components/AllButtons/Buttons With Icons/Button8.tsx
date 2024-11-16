import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import { AmongUsButton, BatmanButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <AmongUsButton firstText="Start" secondText="Go" />
      <BatmanButton>PLAY NOW</BatmanButton>
    </Box>
  );
};

const Button8 = () => {
  const shortCode = `<AmongUsButton firstText="Start" secondText="Go" />
<BatmanButton>PLAY NOW</BatmanButton>`;

  const fullCode = `import { Box } from "@mui/material";
import { AmongUsButton, BatmanButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <AmongUsButton firstText="Start" secondText="Go" />
      <BatmanButton>PLAY NOW</BatmanButton>
    </Box>
  );
};
export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button8;
