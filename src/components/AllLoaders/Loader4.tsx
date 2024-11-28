import { BorderSpinner, CircleSpinnerLoader } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const LoaderDemo = () => (
  <CodeViewerContainer isLoader>
    <CircleSpinnerLoader />
    <BorderSpinner />

    <CircleSpinnerLoader color1="orange" color2="white" color3="#00ff00" />
    <BorderSpinner size="4.5rem" borderWidth={2} color="#00ff00" speed="1s" />
  </CodeViewerContainer>
);

const Loader4 = () => {
  const shortCode = `<CircleSpinnerLoader />
<BorderSpinner />

<CircleSpinnerLoader color1="orange" color2="white" color3="#00ff00" />
<BorderSpinner size="4.5rem" borderWidth={2} color="#00ff00" speed="1s" />`;

  const fullCode = `import { Box } from "@mui/material";
import { BorderSpinner, CircleSpinnerLoader } from "@byteui/mui-core";

const LoaderDemo = () => (
  <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
    <CircleSpinnerLoader />
    <BorderSpinner />

    <CircleSpinnerLoader color1="orange" color2="white" color3="#00ff00" />
    <BorderSpinner size="4.5rem" borderWidth={2} color="#00ff00" speed="1s" />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Loader4;
