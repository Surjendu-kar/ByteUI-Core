import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import { DayLightIcon } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <DayLightIcon />
    </Box>
  );
};

const Button14 = () => {
  const shortCode = `<DayLightIcon />`;

  const fullCode = `import { Box } from "@mui/material";
import { DayLightIcon } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <DayLightIcon />
    </Box>
  );
};
  
export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button14;
