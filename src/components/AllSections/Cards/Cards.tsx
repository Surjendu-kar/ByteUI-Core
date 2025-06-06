import { Box, Stack, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Card1 from "../../AllCards/Card1";
import Card2 from "../../AllCards/Card2";
import Card3 from "../../AllCards/Card3";
import Card4 from "../../AllCards/Card4";
import Card5 from "../../AllCards/Card5";
import Card6 from "../../AllCards/Card6";
import Card7 from "../../AllCards/Card7";
import Card8 from "../../AllCards/Card8";

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

function Cards() {
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
              <MainTitle>Cards</MainTitle>
              <Description>
                Cards are versatile containers that group related content and actions. 
                They provide a flexible and extensible content container with multiple variants 
                and options for content organization and interaction.
              </Description>
              <Description>
                This showcase demonstrates various card designs and implementations, 
                from simple content cards to complex interactive cards with rich media. 
                Each example includes ready-to-use code that you can copy and integrate 
                into your project.
              </Description>

              <Description sx={{ mt: 2 }}>
                Each card example below comes with:
              </Description>
              <ul
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginLeft: "10px",
                }}
              >
                <Item>• Live demonstration of the card design and interactions</Item>
                <Item>• Copyable code snippets for quick implementation</Item>
                <Item>• Responsive layouts that adapt to different screen sizes</Item>
                <Item>• Customizable styles and content organization options</Item>
                <Item>• Interactive elements and hover effects</Item>
              </ul>
            </Box>
          </motion.div>

          <Stack sx={{ gap: 4 }}>
            {[
              <Card1 key="card1" />,
              <Card2 key="card2" />,
              <Card3 key="card3" />,
              <Card4 key="card4" />,
              <Card5 key="card5" />,
              <Card6 key="card6" />,
              <Card7 key="card7" />,
              <Card8 key="card8" />
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                {card}
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </MainContainer>
  );
}

export default Cards;
