import { CookieCard } from "@byteui/mui-core";
import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <CookieCard
      width="330px"
      description="This website uses cookies to improve your browsing experience."
      policyLink={{
        text: "View our Cookie Policy",
        url: "/cookie-policy",
      }}
      onAccept={() => console.log("Cookies accepted")}
      onManagePreferences={() => console.log("Open preferences")}
    />
  </CodeViewerContainer>
);

const Card7 = () => {
  const shortCode = `<CookieCard
  width="330px"
  description="This website uses cookies to improve your browsing experience."
  policyLink={{
    text: "View our Cookie Policy",
    url: "/cookie-policy",
  }}
  onAccept={() => console.log("Cookies accepted")}
  onManagePreferences={() => console.log("Open preferences")}
/>`;

  const fullCode = `import { Box } from "@mui/material";
import { CookieCard } from "@byteui/mui-core";

const CardDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
    <CookieCard
      width="330px"
      description="This website uses cookies to improve your browsing experience."
      policyLink={{
        text: "View our Cookie Policy",
        url: "/cookie-policy",
      }}
      onAccept={() => console.log("Cookies accepted")}
      onManagePreferences={() => console.log("Open preferences")}
    />
  </Box>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card7;
