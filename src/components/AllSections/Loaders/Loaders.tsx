import { Box, Stack, styled, Typography } from "@mui/material";
import Loaders1 from "../../AllLoaders/Loaders1";
import Loaders2 from "../../AllLoaders/Loaders2";

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

function Loaders() {
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
        <Stack sx={{ width: "100%", gap: 3 }}>
          <Box>
            <MainTitle>Loaders</MainTitle>
            <Title></Title>
            <Description></Description>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Loaders1 />
            <Loaders2 />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Loaders;
