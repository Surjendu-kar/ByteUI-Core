import { BorderSpinner, CircleSpinnerLoader } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <CircleSpinnerLoader />
    <BorderSpinner />
  </CodeViewerContainer>
);

const Loader4 = () => {
  const shortCode = `<CircleSpinnerLoader />
<BorderSpinner />`;

  const fullCode = `import { Box } from "@mui/material";
import { BorderSpinner, CircleSpinnerLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <CircleSpinnerLoader />
    <BorderSpinner />

    {/* <CircleSpinnerLoader color1="#F44336" color2="#FFC107" color3="#8bc34a" />
    <BorderSpinner size="5rem" borderWidth={7} color="#2596be" speed="2s" /> */}
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader4;
