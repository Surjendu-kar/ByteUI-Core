import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import {
  DownloadIconButton,
  SimpleDownloadButton,
  TooltipDownloadButton,
} from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <TooltipDownloadButton tooltipSize="Size: 10Mb">
        Download
      </TooltipDownloadButton>
      <SimpleDownloadButton>Download</SimpleDownloadButton>
      <DownloadIconButton />
    </Box>
  );
};

const Button11 = () => {
  const shortCode = `<TooltipDownloadButton tooltipSize="Size: 10Mb">
  Download
</TooltipDownloadButton>
<SimpleDownloadButton>Download</SimpleDownloadButton>
<DownloadIconButton />`;

  const fullCode = `import { Box } from "@mui/material";
import {
  DownloadIconButton,
  SimpleDownloadButton,
  TooltipDownloadButton,
} from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <TooltipDownloadButton tooltipSize="Size: 10Mb">
        Download
      </TooltipDownloadButton>
      <SimpleDownloadButton>Download</SimpleDownloadButton>
      <DownloadIconButton />
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button11;
