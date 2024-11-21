import { Box } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";
import { ShadowLoader, ThreeBodyLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <ThreeBodyLoader />
    <ShadowLoader />
  </Box>
);

const Loaders2 = () => {
  const shortCode = `<ThreeBodyLoader />
<ShadowLoader />`;

  const fullCode = `import { Box } from "@mui/material";
import { ShadowLoader, ThreeBodyLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <ThreeBodyLoader />
    <ShadowLoader />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loaders2;
