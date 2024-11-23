import { Box, Typography } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import {
  CircleSlideButton,
  DiagonalSlideButton,
  LetterAnimatedButton,
  PayButton,
  SavingSlideButton,
} from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";

const ButtonDemo = () => {
  return (
    <CodeViewerContainer>
      <CircleSlideButton disableRipple>Slide</CircleSlideButton>

      <LetterAnimatedButton>
        <Box className="original">Button</Box>
        <Box className="letters">
          <span>B</span>
          <span>U</span>
          <span>T</span>
          <span>T</span>
          <span>O</span>
          <span>N</span>
        </Box>
      </LetterAnimatedButton>

      <DiagonalSlideButton disableRipple>Button</DiagonalSlideButton>

      <SavingSlideButton>
        <Typography className="primary-text">Save</Typography>
        <Typography className="alternate-text">Saving...</Typography>
      </SavingSlideButton>

      <PayButton>Pay</PayButton>
    </CodeViewerContainer>
  );
};

const Button5 = () => {
  const shortCode = `<CircleSlideButton disableRipple>Slide</CircleSlideButton>

<LetterAnimatedButton>
  <Box className="original">Button</Box>
  <Box className="letters">
    <span>B</span>
    <span>U</span>
    <span>T</span>
    <span>T</span>
    <span>O</span>
    <span>N</span>
  </Box>
</LetterAnimatedButton>

<DiagonalSlideButton disableRipple>Button</DiagonalSlideButton>

<SavingSlideButton>
  <Typography className="primary-text">Save</Typography>
  <Typography className="alternate-text">Saving...</Typography>
</SavingSlideButton>

<PayButton>Pay</PayButton>`;

  const fullCode = `import { Box, Typography } from "@mui/material";
import {
  CircleSlideButton,
  DiagonalSlideButton,
  LetterAnimatedButton,
  PayButton,
  SavingSlideButton,
} from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <CircleSlideButton disableRipple>Slide</CircleSlideButton>

      <LetterAnimatedButton>
        <Box className="original">Button</Box>
        <Box className="letters">
          <span>B</span>
          <span>U</span>
          <span>T</span>
          <span>T</span>
          <span>O</span>
          <span>N</span>
        </Box>
      </LetterAnimatedButton>

      <DiagonalSlideButton disableRipple>Button</DiagonalSlideButton>

      <SavingSlideButton>
        <Typography className="primary-text">Save</Typography>
        <Typography className="alternate-text">Saving...</Typography>
      </SavingSlideButton>

      <PayButton>Pay</PayButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button5;
