import { TextLoader } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <TextLoader color="white" shadowColor="#000000" speed="1.5s" />
  </CodeViewerContainer>
);

const Loader7 = () => {
  const shortCode = `<TextLoader color="white" shadowColor="#000000" speed="1.5s" />`;

  const fullCode = `import { Box } from "@mui/material";
import { TextLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <TextLoader color="white" shadowColor="#000000" speed="1.5s" />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader7;
