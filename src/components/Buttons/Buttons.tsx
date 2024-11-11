import { Box, Stack } from "@mui/material";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";
import Button5 from "./Button5";
import Button6 from "./Button6";
import Button7 from "./Button7";

function Buttons() {
  return (
    <Stack sx={{ width: "100%", gap: 4 }}>
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
    </Stack>
  );
}

export default Buttons;
