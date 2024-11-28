import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import { LinePulseLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <LinePulseLoader />
  </CodeViewerContainer>
);

const Loader5 = () => {
  const shortCode = `<LinePulseLoader />`;

  const fullCode = `import { Box } from "@mui/material";
import { LinePulseLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <LinePulseLoader />
    {/* <LinePulseLoader color="#00ff00" width="80px" height="60px" strokeWidth={4}/> */}
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader5;
