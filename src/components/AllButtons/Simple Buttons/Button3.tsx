import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import { CustomGlitchButton, GlitchButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <CustomGlitchButton customBgColor="#FF013C" customColor="black">
        Red Button
      </CustomGlitchButton>

      <GlitchButton>GLITCH</GlitchButton>

      <CustomGlitchButton customBgColor="#00ff58" customColor="black">
        Green Button
      </CustomGlitchButton>
    </Box>
  );
};

const Button3 = () => {
  const shortCode = `<CustomGlitchButton customBgColor="#FF013C" customColor="black">
  Red Button
</CustomGlitchButton>

<GlitchButton>GLITCH</GlitchButton>

<CustomGlitchButton customBgColor="#00ff58" customColor="black">
  Green Button
</CustomGlitchButton>`;

  const fullCode = `import { Box } from "@mui/material";
import { CustomGlitchButton, GlitchButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <CustomGlitchButton customBgColor="#FF013C" customColor="black">
        Red Button
      </CustomGlitchButton>

      <GlitchButton>GLITCH</GlitchButton>

      <CustomGlitchButton customBgColor="#00ff58" customColor="black">
        Green Button
      </CustomGlitchButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button3;
