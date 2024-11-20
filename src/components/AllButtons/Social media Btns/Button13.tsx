import { Box, Stack } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";
import {
  BottomLeftTriangleGithubButton,
  BottomLeftTriangleWhatsAppButton,
  BottomRightTriangleDiscordButton,
  BottomRightTriangleGmailButton,
  LeftTriangleInstagramButton,
  OutlineDiscordButton,
  OutlineTwitchButton,
  OutlineTwitterButton,
  OutlineYoutubeButton,
  RightTriangleFacebookButton,
  RightTriangleTwitterButton,
} from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {/* first button  */}
      <Stack sx={{ gap: "0.5em" }}>
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <LeftTriangleInstagramButton />
          <RightTriangleTwitterButton />
        </Box>

        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <BottomLeftTriangleGithubButton />
          <BottomRightTriangleDiscordButton />
        </Box>
      </Stack>

      {/* Second button  */}
      <Stack sx={{ gap: "0.5em" }}>
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <LeftTriangleInstagramButton />
          <RightTriangleFacebookButton />
        </Box>
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <BottomLeftTriangleWhatsAppButton />
          <BottomRightTriangleGmailButton />
        </Box>
      </Stack>

      {/* Third button  */}
      <Stack sx={{ gap: "0.8em" }}>
        <Box sx={{ display: "flex", gap: "0.8em" }}>
          <OutlineYoutubeButton />
          <OutlineDiscordButton />
        </Box>
        <Box sx={{ display: "flex", gap: "0.8em" }}>
          <OutlineTwitterButton />
          <OutlineTwitchButton />
        </Box>
      </Stack>
    </Box>
  );
};

const Button13 = () => {
  const shortCode = `<LeftTriangleInstagramButton />
<RightTriangleTwitterButton />

<BottomLeftTriangleGithubButton />
<BottomRightTriangleDiscordButton />
       
<LeftTriangleInstagramButton />
<RightTriangleFacebookButton />
   
<BottomLeftTriangleWhatsAppButton />
<BottomRightTriangleGmailButton />
        
<OutlineYoutubeButton />
<OutlineDiscordButton />
       
<OutlineTwitterButton />
<OutlineTwitchButton />`;

  const fullCode = `import { Box, Stack } from "@mui/material";
import {
  BottomLeftTriangleGithubButton,
  BottomLeftTriangleWhatsAppButton,
  BottomRightTriangleDiscordButton,
  BottomRightTriangleGmailButton,
  LeftTriangleInstagramButton,
  OutlineDiscordButton,
  OutlineTwitchButton,
  OutlineTwitterButton,
  OutlineYoutubeButton,
  RightTriangleFacebookButton,
  RightTriangleTwitterButton,
} from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {/* first button  */}
      <Stack sx={{ gap: "0.5em" }}>
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <LeftTriangleInstagramButton />
          <RightTriangleTwitterButton />
        </Box>

        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <BottomLeftTriangleGithubButton />
          <BottomRightTriangleDiscordButton />
        </Box>
      </Stack>

      {/* Second button  */}
      <Stack sx={{ gap: "0.5em" }}>
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <LeftTriangleInstagramButton />
          <RightTriangleFacebookButton />
        </Box>
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <BottomLeftTriangleWhatsAppButton />
          <BottomRightTriangleGmailButton />
        </Box>
      </Stack>

      {/* Third button  */}
      <Stack sx={{ gap: "0.8em" }}>
        <Box sx={{ display: "flex", gap: "0.8em" }}>
          <OutlineYoutubeButton />
          <OutlineDiscordButton />
        </Box>
        <Box sx={{ display: "flex", gap: "0.8em" }}>
          <OutlineTwitterButton />
          <OutlineTwitchButton />
        </Box>
      </Stack>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button13;
