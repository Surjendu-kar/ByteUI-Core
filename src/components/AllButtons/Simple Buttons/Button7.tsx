import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import { Custom3DButton } from "@byteui/mui-core";

const Button7 = () => {
  const shortCode = `<Custom3DButton customColor="#f87171" customBgcolor="#450a0a">
  Red Button
</Custom3DButton>

<Custom3DButton customColor="#4ade80" customBgcolor="#052e16">
  Green Button
</Custom3DButton>

<Custom3DButton customColor="#facc15" customBgcolor="#422006">
  Yellow Button
</Custom3DButton>`;

  const fullCode = `import { Box } from "@mui/material";
import { Custom3DButton } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Custom3DButton customColor="#f87171" customBgcolor="#450a0a">
        Red Button
      </Custom3DButton>

      <Custom3DButton customColor="#4ade80" customBgcolor="#052e16">
        Green Button
      </Custom3DButton>

      <Custom3DButton customColor="#facc15" customBgcolor="#422006">
        Yellow Button
      </Custom3DButton>
    </Box>
  );
};

export default ButtonDemo;`;

  const ButtonDemo = () => {
    return (
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Custom3DButton customColor="#f87171" customBgcolor="#450a0a">
          Red Button
        </Custom3DButton>

        <Custom3DButton customColor="#4ade80" customBgcolor="#052e16">
          Green Button
        </Custom3DButton>

        <Custom3DButton customColor="#facc15" customBgcolor="#422006">
          Yellow Button
        </Custom3DButton>
      </Box>
    );
  };

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button7;
