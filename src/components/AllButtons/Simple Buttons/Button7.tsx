import CodeViewer from "../../CodeViewer/CodeViewer";
import { Custom3DButton } from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";

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
    <Box sx={{ display: "flex", alignItems: "center",flexWrap: "wrap",justifyContent: "center", gap: 2 }}>
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
      <CodeViewerContainer>
        <Custom3DButton customColor="#f87171" customBgcolor="#450a0a">
          Red Button
        </Custom3DButton>

        <Custom3DButton customColor="#4ade80" customBgcolor="#052e16">
          Green Button
        </Custom3DButton>

        <Custom3DButton customColor="#facc15" customBgcolor="#422006">
          Yellow Button
        </Custom3DButton>
      </CodeViewerContainer>
    );
  };

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button7;
