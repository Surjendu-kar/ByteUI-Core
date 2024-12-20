import CodeViewer from "../CodeViewer/CodeViewer";
import { BarsLoader, MatrixLoader, SimpleLoader } from "@byteui/mui-core";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <BarsLoader />
    <SimpleLoader />
    <MatrixLoader />
  </CodeViewerContainer>
);

const Loader1 = () => {
  const shortCode = `<BarsLoader />
<SimpleLoader />
<MatrixLoader />`;

  const fullCode = `import { Box } from "@mui/material";
import { BarsLoader, MatrixLoader, SimpleLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
    <BarsLoader />
    <SimpleLoader />
    <MatrixLoader />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader1;
