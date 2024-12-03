import CodeViewer from "../CodeViewer/CodeViewer";
import { NewtonsCradle, ShadowLoader, ThreeBodyLoader } from "@byteui/mui-core";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <ThreeBodyLoader />
    <ShadowLoader />
    <NewtonsCradle />
    <NewtonsCradle color="white" size="40px" speed="1.5s" />
  </CodeViewerContainer>
);

const Loaders2 = () => {
  const shortCode = `<ThreeBodyLoader />
<ShadowLoader />
<NewtonsCradle />
<NewtonsCradle color="white" size="40px" speed="1.5s" />`;

  const fullCode = `import { Box } from "@mui/material";
import { ShadowLoader, ThreeBodyLoader, NewtonsCradle } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <ThreeBodyLoader />
    <ShadowLoader />
    <NewtonsCradle />

    <NewtonsCradle color="white" size="40px" speed="1.5s" />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loaders2;
