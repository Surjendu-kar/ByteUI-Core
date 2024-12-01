import { TerminalCard } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <TerminalCard
      packageManager="yarn"
      command="add @byteui/mui-core"
      width="400px"
    />
  </CodeViewerContainer>
);

const Card5 = () => {
  const shortCode = `<TerminalCard
  packageManager="yarn"
  command="add @byteui/mui-core"
  width="400px"
/>`;

  const fullCode = `import { Box } from "@mui/material";
import { TerminalCard } from "@byteui/mui-core";

const CardDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
    <TerminalCard
      packageManager="yarn"
      command="add @byteui/mui-core"
      width="400px"
    />
  </Box>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card5;
