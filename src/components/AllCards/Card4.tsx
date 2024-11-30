import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import { NotificationCard } from "@byteui/mui-core";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <NotificationCard
      width="288px"
      height="128px"
      titleSize="18px"
      bodySize="14px"
      title="Welcome To Uiverse"
      body="Contribute to Open Source UI Elements"
    />
  </CodeViewerContainer>
);

const Card4 = () => {
  const shortCode = `<NotificationCard
  width="288px"
  height="128px"
  titleSize="18px"
  bodySize="14px"
  title="Welcome To Uiverse"
  body="Contribute to Open Source UI Elements"
/>`;

  const fullCode = `import { CodeViewerContainer } from "../Shared/StyledComponents";
import { NotificationCard } from "@byteui/mui-core";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <NotificationCard
      width="288px"
      height="128px"
      titleSize="18px"
      bodySize="14px"
      title="Welcome To Uiverse"
      body="Contribute to Open Source UI Elements"
    />
  </CodeViewerContainer>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card4;
