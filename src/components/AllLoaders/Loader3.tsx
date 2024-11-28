import { JumpLoader, TruckLoader } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <JumpLoader />
    <TruckLoader />
  </CodeViewerContainer>
);

const Loader3 = () => {
  const shortCode = `<JumpLoader />
<TruckLoader />`;

  const fullCode = `import { Box } from "@mui/material";
import { JumpLoader, TruckLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <JumpLoader />
    <TruckLoader />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader3;
