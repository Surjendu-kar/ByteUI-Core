import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import { LinePulseLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <LinePulseLoader />
    <LinePulseLoader color="#00ff00" width="60px" height="50px" strokeWidth={3}/>
  </CodeViewerContainer>
);

const Loader5 = () => {
  const shortCode = `<LinePulseLoader />
<LinePulseLoader color="#00ff00" width="60px" height="50px" strokeWidth={3}/>`;

  const fullCode = `import { Box } from "@mui/material";
import { LinePulseLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <LinePulseLoader />
    <LinePulseLoader color="#00ff00" width="60px" height="50px" strokeWidth={3}/>
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader5;
