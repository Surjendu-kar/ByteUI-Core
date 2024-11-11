import { Box, Stack } from "@mui/material";
import Button2 from "./Button2";
import Button1 from "./Button1";

function Buttons() {
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box>
        <Button1 />
      </Box>
      <Button2 />
    </Stack>
  );
}

export default Buttons;
