import { TextLoader, ValoLoader } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <ValoLoader size="50px" />
    <TextLoader color="white" shadowColor="#000000" speed="1.5s" />
    <ValoLoader color="#0000ff" size="50px" speed="0.8s" />
  </CodeViewerContainer>
);

const Loader6 = () => {
  const shortCode = ` <ValoLoader size="50px" />
<TextLoader color="white" shadowColor="#000000" speed="1.5s" />
<ValoLoader color="#0000ff" size="50px" speed="0.8s" />`;

  const fullCode = `import { Box } from "@mui/material";
import { TextLoader, ValoLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <ValoLoader size="50px" />
    <TextLoader color="white" shadowColor="#000000" speed="1.5s" />
    <ValoLoader color="#0000ff" size="50px" speed="0.8s" />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader6;
