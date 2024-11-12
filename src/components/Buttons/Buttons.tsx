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

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 700,
  color: "#fff",
  marginBottom: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: theme.spacing(1),
}));

function Buttons() {
  return (
    <Stack sx={{ width: "100%", gap: 4, pb: "5rem", alignItems: "center" }}>
      <Box>
        <Title>Buttons</Title>
        <Description>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </Description>
        <Description>
          Buttons communicate actions that users can take. They are typically
          placed throughout your UI, in places like:
        </Description>
        <ul style={{ color: "rgba(255, 255, 255, 0.8)", marginLeft: "20px" }}>
          <li>Modal windows</li>
          <li>Forms</li>
          <li>Cards</li>
          <li>Toolbars</li>
        </ul>
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
    </Stack>
  );
}

export default Buttons;
