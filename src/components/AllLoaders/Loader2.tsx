import CodeViewer from "../CodeViewer/CodeViewer";
import { NewtonsCradle, ShadowLoader, ThreeBodyLoader } from "@byteui/mui-core";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <ThreeBodyLoader />
    <ShadowLoader />
    <NewtonsCradle />
  </CodeViewerContainer>
);

const Loaders2 = () => {
  const shortCode = `<ThreeBodyLoader />
<ShadowLoader />
<NewtonsCradle />`;

  const fullCode = `import { Box } from "@mui/material";
import { ShadowLoader, ThreeBodyLoader, NewtonsCradle } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <ThreeBodyLoader />
    <ShadowLoader />
    <NewtonsCradle />

    {/* <NewtonsCradle color="#474554" size="40px" speed="1.5s" /> */}
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loaders2;
