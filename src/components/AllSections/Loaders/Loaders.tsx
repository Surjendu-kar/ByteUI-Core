import { Box, Stack, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Loader1 from "../../AllLoaders/Loader1";
import Loader2 from "../../AllLoaders/Loader2";
import Loader3 from "../../AllLoaders/Loader3";
import Loader4 from "../../AllLoaders/Loader4";
import Loader5 from "../../AllLoaders/Loader5";
import Loader6 from "../../AllLoaders/Loader6";
import Loader7 from "../../AllLoaders/Loader7";

const MainContainer = styled(motion(Stack))(({ theme }) => ({
  width: "100%",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(motion(Stack))(({ theme }) => ({
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

function Loaders() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainContainer 
      sx={{ overflow: "hidden" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container variants={containerVariants}>
        <Stack sx={{ width: "100%", gap: 3 }}>
          <motion.div variants={itemVariants}>
            <Box>
              <MainTitle>Loaders</MainTitle>
              <Description>
                Loaders provide visual feedback to users when content is being
                loaded or processed, improving the perceived performance and user
                experience of your application.
              </Description>
              <Description>
                This showcase demonstrates various loader animations and
                implementations. Each example includes ready-to-use code that you
                can copy and integrate into your project. Browse through different
                loading animations to find the perfect fit for your application.
              </Description>

              <Description sx={{ mt: 2 }}>
                Each loader example below comes with:
              </Description>
              <ul
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginLeft: "10px",
                }}
              >
                <Item>• Live demonstration of the loading animation</Item>
                <Item>• Copyable code snippets for quick implementation</Item>
                <Item>• Customization options for colors and sizes</Item>
              </ul>
            </Box>
          </motion.div>

          <Stack sx={{ gap: 4 }}>
            {[
              <Loader1 key="loader1" />,
              <Loader2 key="loader2" />,
              <Loader3 key="loader3" />,
              <Loader4 key="loader4" />,
              <Loader5 key="loader5" />,
              <Loader6 key="loader6" />,
              <Loader7 key="loader7" />
            ].map((loader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                {loader}
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </MainContainer>
  );
}

export default Loaders;
