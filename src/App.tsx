import { Route, Routes } from "react-router-dom";
import Installation from "./components/AllSections/Installation/Installation";
import Buttons from "./components/AllSections/Buttons/Buttons";
import Loaders from "./components/AllSections/Loaders/Loaders";
import { Path } from "./enums";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { Box, Stack, styled } from "@mui/material";
import Layout from "./layout";
import Footer from "./components/Footer/Footer";

const MainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingLeft: 200,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
  },
}));

const ContentWrapper = styled(Box)({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  overflow: "auto",
  paddingTop: "5rem",
});

function App() {
  return (
    <Layout>
      {/* App Bar */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <MainWrapper>
        <ContentWrapper>
          <Routes>
            <Route element={<Installation />} path={Path.Installation} />
            <Route element={<Buttons />} path={Path.Buttons} />
            <Route element={<Loaders />} path={Path.Loaders} />
          </Routes>

          {/* Footer */}
          <Footer />
        </ContentWrapper>
      </MainWrapper>
    </Layout>
  );
}

export default App;
