import CodeViewer from "../../CodeViewer/CodeViewer";
import { LeftArrowButton } from "@byteui/mui-core";
import { RightArrowButton } from "@byteui/mui-core";
import { Box } from "@mui/material";

const ButtonDemo = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <LeftArrowButton>left</LeftArrowButton>
    <RightArrowButton>Right</RightArrowButton>
  </Box>
);

const Button1 = () => {
  const shortCode = `<LeftArrowButton>left</LeftArrowButton>
<RightArrowButton>Right</RightArrowButton>`;

  const fullCode = `import { LeftArrowButton } from "@byteui/mui-core";
import { RightArrowButton } from "@byteui/mui-core";
import { Box } from "@mui/material";

const ButtonDemo = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <LeftArrowButton>left</LeftArrowButton>
    <RightArrowButton>Right</RightArrowButton>
  </Box>
);

export default ButtonDemo;`;
  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button1;
