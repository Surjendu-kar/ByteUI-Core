import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import { ProjectCard } from "@byteui/mui-core";
import ImageIcon from "@mui/icons-material/Image";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <ProjectCard
      title="Project Name"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      image={<ImageIcon />}
      onDemoClick={() =>
        window.open("https://byteui-core.vercel.app/", "_blank")
      }
      onSourceClick={() =>
        window.open("https://github.com/Surjendu-kar/ByteUI-Core", "_blank")
      }
    />
  </CodeViewerContainer>
);

const Card2 = () => {
  const shortCode = `  <ProjectCard
      title="Project Name"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      image={<ImageIcon />}
      onDemoClick={() =>
        window.open("https://byteui-core.vercel.app/", "_blank")
      }
      onSourceClick={() =>
        window.open("https://github.com/Surjendu-kar/ByteUI-Core", "_blank")
      }
    />`;

  const fullCode = `import { Box } from "@mui/material";
import { ProjectCard } from "@byteui/mui-core";
import ImageIcon from "@mui/icons-material/Image";

const CardDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
    <ProjectCard
      title="Project Name"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      image={<ImageIcon />}
      onDemoClick={() =>
        window.open("https://byteui-core.vercel.app/", "_blank")
      }
      onSourceClick={() =>
        window.open("https://github.com/Surjendu-kar/ByteUI-Core", "_blank")
      }
    />
  </Box>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card2;
