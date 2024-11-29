import { Route, Routes } from "react-router-dom";
import Installation from "./components/AllSections/Installation/Installation";
import Buttons from "./components/AllSections/Buttons/Buttons";
import Loaders from "./components/AllSections/Loaders/Loaders";
import { Path } from "./enums";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { Box, styled } from "@mui/material";
import Layout from "./layout";
import Footer from "./components/Footer/Footer";
import Home from "./components/AllSections/Home/Home";
import Cards from "./components/AllSections/Cards/Cards";

const MainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingLeft: 200,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  overflow: "auto",
  paddingTop: "5rem",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "3rem",
  },
}));

// Component for pages with full layout
const PagesWithLayout = () => (
  <>
    <Header />
    <Sidebar />
    <MainWrapper>
      <ContentWrapper>
        <Routes>
          <Route element={<Installation />} path={Path.Installation} />
          <Route element={<Buttons />} path={Path.Buttons} />
          <Route element={<Loaders />} path={Path.Loaders} />
          <Route element={<Cards />} path={Path.Cards} />
        </Routes>
        <Footer />
      </ContentWrapper>
    </MainWrapper>
  </>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path={Path.Home} />
        <Route element={<PagesWithLayout />} path="/*" />
      </Routes>
    </Layout>
  );
}

export default App;
