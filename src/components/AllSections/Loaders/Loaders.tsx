import { Box, Stack, styled, Typography } from "@mui/material";
import Loader1 from "../../AllLoaders/Loader1";
import Loader2 from "../../AllLoaders/Loader2";
import Loader3 from "../../AllLoaders/Loader3";
import Loader4 from "../../AllLoaders/Loader4";
import Loader5 from "../../AllLoaders/Loader5";
const MainContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Stack)(({ theme }) => ({
  width: "70%",
  margin: "0 auto",
  alignItems: "flex-start",
  padding: "1rem 0.5rem 4rem",
  gap: theme.spacing(10),

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { width: "95%" },
}));

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
    <MainContainer sx={{ overflow: "hidden" }}>
      <Container>
        <Stack sx={{ width: "100%", gap: 3 }}>
          <Box>
            <MainTitle>Loaders</MainTitle>
            <Title></Title>
            <Description></Description>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Loader1 />
            <Loader2 />
            <Loader3 />
            <Loader4 />
            <Loader5 />
          </Stack>
        </Stack>
      </Container>
    </MainContainer>
  );
}

export default Loaders;
