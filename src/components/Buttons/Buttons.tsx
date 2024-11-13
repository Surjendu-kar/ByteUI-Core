import { Box, Stack, styled, Typography } from "@mui/material";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";
import Button5 from "./Button5";
import Button6 from "./Button6";
import Button7 from "./Button7";
import Button8 from "./Button8";
import Button9 from "./Button9";
import Button10 from "./Button10";
import Button11 from "./Button11";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 700,
  color: "#fff",
  marginBottom: theme.spacing(2),
  textAlign: "left",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: theme.spacing(1),
}));

function Buttons() {
  return (
    <Stack sx={{ width: "100%", alignItems: "center" }}>
      <Stack sx={{ gap: 5, width: "100%" }}>
        <Box
          sx={{
            width: "70%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Title>Button</Title>
            <Description>
              Buttons allow users to take actions, and make choices, with a
              single tap.
            </Description>
            <Description>
              This showcase demonstrates various Material-UI button styles and
              implementations. Each example includes ready-to-use code that you
              can copy and integrate into your project. Browse through different
              buttons.
            </Description>

            <Description sx={{ mt: 2 }}>
              Each button example below comes with:
            </Description>
            <ul
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                marginLeft: "20px",
              }}
            >
              <li>Live demonstration of the button style</li>
              <li>Copyable code snippets for quick implementation</li>
              <li>Comprehensive implementation examples using Material-UI</li>
              <li>Customization options and variants</li>
            </ul>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Button1 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button2 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button3 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button4 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button5 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button6 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button7 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button8 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button9 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button10 />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button11 />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Buttons;
