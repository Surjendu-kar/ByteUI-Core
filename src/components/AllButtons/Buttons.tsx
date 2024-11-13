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
import Button12 from "./Button12";

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#fff",
  marginBottom: theme.spacing(2),
  textAlign: "left",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
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
      <Stack
        sx={{
          width: "70%",
          margin: "0 auto",
          alignItems: "flex-start",
          padding: "1rem 0.5rem 4rem",
          gap: 10,
        }}
      >
        {/* Buttons */}
        <Stack sx={{ width: "100%", gap: 3 }}>
          <Box>
            <MainTitle>Button</MainTitle>
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
          <Stack sx={{ gap: 4 }}>
            <Button1 />
            <Button2 />
            <Button3 />
            <Button5 />
            <Button6 />
            <Button7 />
          </Stack>
        </Stack>

        {/* Buttons with icons  */}
        <Stack sx={{ width: "100%", gap: 2 }}>
          <Box>
            <Title>Buttons with icons and label</Title>
            <Description>
              Buttons with icons and labels provide enhanced visual
              communication and improved user experience. These buttons combine
              meaningful icons with descriptive text to create clear, intuitive
              interaction points that help users quickly identify and understand
              button actions while maintaining professional aesthetics.
            </Description>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Button8 />
            <Button9 />
            <Button11 />
          </Stack>
        </Stack>

        {/* Social media buttons  */}
        <Stack sx={{ width: "100%", gap: 2 }}>
          <Box>
            <Title>Social Media Buttons</Title>
            <Description>
              Social media buttons are essential for modern web applications.
              These buttons combine recognizable brand colors, icons, and hover
              effects to create engaging and familiar interaction points for
              users to connect with your social platforms.
            </Description>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Button10 />
          </Stack>
        </Stack>

        {/* Icon Button  */}
        <Stack sx={{ width: "100%", gap: 2 }}>
          <Box>
            <Title>Icon Button</Title>
            <Description>
              Icon buttons offer a compact, visually appealing way to represent
              actions in your interface. Perfect for toolbars, app bars, and
              dense UI layouts, these buttons use universally recognized symbols
              to convey their purpose, making them both space-efficient and
              instantly understandable to users.
            </Description>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Button4 />
            <Button12 />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Buttons;
