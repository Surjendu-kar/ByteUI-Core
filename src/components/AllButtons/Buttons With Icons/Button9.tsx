import CodeViewer from "../../CodeViewer/CodeViewer";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmailIcon from "@mui/icons-material/Email";
import { EnhancedStyledButton } from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";

const ButtonDemo: React.FC = () => {
  return (
    <CodeViewerContainer>
      <EnhancedStyledButton icon={<SendIcon />}>Send</EnhancedStyledButton>
      <EnhancedStyledButton icon={<LocalShippingIcon />}>
        Ship
      </EnhancedStyledButton>
      <EnhancedStyledButton icon={<EmailIcon />}>Email</EnhancedStyledButton>
    </CodeViewerContainer>
  );
};

const Button9: React.FC = () => {
  const shortCode = `<EnhancedStyledButton icon={<SendIcon />}>Send</EnhancedStyledButton>
<EnhancedStyledButton icon={<LocalShippingIcon />}>
  Ship
</EnhancedStyledButton>
<EnhancedStyledButton icon={<EmailIcon />}>Email</EnhancedStyledButton>`;

  const fullCode = `import { Box } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmailIcon from "@mui/icons-material/Email";
import { EnhancedStyledButton } from "@byteui/mui-core";

const ButtonDemo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center",flexWrap: "wrap",justifyContent: "center", gap: 2 }}>
      <EnhancedStyledButton icon={<SendIcon />}>Send</EnhancedStyledButton>
      <EnhancedStyledButton icon={<LocalShippingIcon />}>
        Ship
      </EnhancedStyledButton>
      <EnhancedStyledButton icon={<EmailIcon />}>Email</EnhancedStyledButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button9;
