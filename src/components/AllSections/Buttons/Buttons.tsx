import { Box, Stack, styled, Typography } from "@mui/material";
import Button1 from "../../AllButtons/Simple Buttons/Button1";
import Button5 from "../../AllButtons/Simple Buttons/Button5";
import Button2 from "../../AllButtons/Simple Buttons/Button2";
import Button3 from "../../AllButtons/Simple Buttons/Button3";
import Button6 from "../../AllButtons/Simple Buttons/Button6";
import Button7 from "../../AllButtons/Simple Buttons/Button7";
import Button8 from "../../AllButtons/Buttons With Icons/Button8";
import Button9 from "../../AllButtons/Buttons With Icons/Button9";
import Button11 from "../../AllButtons/Buttons With Icons/Button11";
import Button10 from "../../AllButtons/Social media Btns/Button10";
import Button13 from "../../AllButtons/Social media Btns/Button13";
import Button4 from "../../AllButtons/IconBtns/Button4";
import Button12 from "../../AllButtons/IconBtns/Button12";
import Button14 from "../../AllButtons/IconBtns/Button14";

const MainContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Stack)(({ theme }) => ({
  width: "70%",
  margin: "1rem 0",
  gap: theme.spacing(10),

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { width: "95%" },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#f8c555 !important",
  marginBottom: theme.spacing(2),
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(0),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#f8c555 !important",
  marginBottom: theme.spacing(2),
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {},
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#ffffffc9 !important",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: { fontSize: "14px" },
}));

const Item = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "#ffffffc9 !important",

  [theme.breakpoints.down("sm")]: { fontSize: "12px" },
}));

function Buttons() {
  return (
    <MainContainer sx={{ overflow: "hidden" }}>
      <Container>
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
                marginLeft: "10px",
              }}
            >
              <Item>• Live demonstration of the button style</Item>
              <Item>• Copyable code snippets for quick implementation</Item>
              <Item>• Customization options and variants</Item>
            </ul>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Button1 />
            <Button5 />
            <Button2 />
            <Button3 />
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
            <Button13 />
            {/* <Button15 /> */}
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
            <Button14 />
          </Stack>
        </Stack>
      </Container>
    </MainContainer>
  );
}

export default Buttons;
