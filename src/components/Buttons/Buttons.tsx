import { Box } from "@mui/material";
import Button2 from "./Button2";
import Button1 from "./Button1";

function Buttons() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button1>Button 1</Button1>
      <Button2>Button 2</Button2>
    </Box>
  );
}

export default Buttons;
