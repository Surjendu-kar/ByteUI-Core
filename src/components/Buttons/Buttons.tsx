import { Box, Stack } from "@mui/material";
import Button1 from "./Button1";
import Button2 from "./Button2";

function Buttons() {
  return (
    <Stack sx={{ width: "100%", gap: 4 }}>
      <Box sx={{ width: "100%" }}>
        <Button1 />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button2 />
      </Box>
    </Stack>
  );
}

export default Buttons;
