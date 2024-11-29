import { Box, Stack, styled, Typography } from "@mui/material";
import Card1 from "../../AllCards/Card1";

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
  color: "#fff",
  marginBottom: theme.spacing(2),
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(0),
  },
}));

function Cards() {
  return (
    <MainContainer sx={{ overflow: "hidden" }}>
      <Container>
        <Stack sx={{ width: "100%", gap: 3 }}>
          <Box>
            <MainTitle>Cards</MainTitle>
          </Box>

          <Stack sx={{ gap: 4 }}>
            <Card1 />
          </Stack>
        </Stack>
      </Container>
    </MainContainer>
  );
}

export default Cards;
