import { Stack, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../enums";

function Home() {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        height: "100dvh",
        gap: 2,
      }}
    >
      <Typography style={{ fontSize: "2rem", fontWeight: "500" }}>
        ByteUI-Core
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate(Path.Installation)}
        sx={{ textTransform: "capitalize" }}
      >
        Get started
      </Button>
    </Stack>
  );
}

export default Home;
