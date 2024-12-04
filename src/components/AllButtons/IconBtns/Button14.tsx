import CodeViewer from "../../CodeViewer/CodeViewer";
import { DayLightIcon, DayLightToggle } from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";
import { useState } from "react";

const ButtonDemo = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <CodeViewerContainer>
      <DayLightIcon />

      <DayLightToggle active={isDark} onToggleChange={setIsDark} />
    </CodeViewerContainer>
  );
};

const Button14 = () => {
  const shortCode = `<DayLightIcon />
<DayLightToggle active={isDark} onToggleChange={setIsDark} />`;

  const fullCode = `import { Box } from "@mui/material";
import { DayLightIcon, DayLightToggle } from "@byteui/mui-core";
import { useState } from "react";


const ButtonDemo = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center",flexWrap: "wrap",justifyContent: "center", gap: 2 }}>
      <DayLightIcon />
      <DayLightToggle active={isDark} onToggleChange={setIsDark} />
    </Box>
  );
};
  
export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button14;
