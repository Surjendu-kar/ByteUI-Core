import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import { FeedbackCard } from "@byteui/mui-core";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <FeedbackCard
      width="350px"
      onSubmit={(feedback) => console.log(feedback)}
      onHappyClick={() => console.log("Happy clicked")}
      onSadClick={() => console.log("Sad clicked")}
    />
  </CodeViewerContainer>
);

const Card8 = () => {
  const shortCode = `<FeedbackCard
  width="350px"
  onSubmit={(feedback) => console.log(feedback)}
  onHappyClick={() => console.log("Happy clicked")}
  onSadClick={() => console.log("Sad clicked")}
/>`;

  const fullCode = `import { Box } from "@mui/material";
import { FeedbackCard } from "@byteui/mui-core";

const CardDemo = () => (
  <Box
    sx={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
    <FeedbackCard
      width="350px"
      onSubmit={(feedback) => console.log(feedback)}
      onHappyClick={() => console.log("Happy clicked")}
      onSadClick={() => console.log("Sad clicked")}
    />
  </Box>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card8;
