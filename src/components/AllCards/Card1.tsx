import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import ImageIcon from "@mui/icons-material/Image";
import { FlipCard } from "@byteui/mui-core";

const LoaderDemo = () => (
  <CodeViewerContainer isCard>
    <FlipCard title="Title" description="Description" image={<ImageIcon />} />
  </CodeViewerContainer>
);

const Card1 = () => {
  const shortCode = `<FlipCard title="Title" description="Description" image={<ImageIcon />} />`;

  const fullCode = `import { Box } from "@mui/material";
import { FlipCard } from "@byteui/mui-core";
import ImageIcon from "@mui/icons-material/Image";

const LoaderDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
  <FlipCard title="Title" description="Description" image={<ImageIcon />} />
  </Box>
);

export default LoaderDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={LoaderDemo} />
  );
};

export default Card1;
