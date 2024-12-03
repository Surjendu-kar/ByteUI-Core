import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import CameraIcon from "@mui/icons-material/Camera";
import { WaveCard } from "@byteui/mui-core";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <WaveCard
      name="JohnDoe"
      title="Product Designer"
      icon={<CameraIcon />}
      width="270px"
      height="350px"
    />
  </CodeViewerContainer>
);

const Card6 = () => {
  const shortCode = `<WaveCard
  name="JohnDoe"
  title="Product Designer"
  icon={<CameraIcon />}
  width="270px"
  height="350px"
/>`;

  const fullCode = `import { Box } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import { WaveCard } from "@byteui/mui-core";

const CardDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
   <WaveCard
      name="JohnDoe"
      title="Product Designer"
      icon={<CameraIcon />}
      width="270px"
      height="350px"
    />
  </Box>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card6;
