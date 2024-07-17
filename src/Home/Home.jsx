import * as React from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import theme from "../theme";
import Header from "../Header/Header";
import InfoBar from "../InfoBar/InfoBar";
import IphoneVideo from "../IphoneVideo/IphoneVideo";
import HighlightsBar from "../HighlightsBar/HighlightsBar";
import VideoCarousel from "../VideoCarousel/VideoCarousel";
import IPhoneThree from "../IPhoneThree/IPhoneThree";
import IPhoneStory from "../IphoneStory/IPhoneStory";
import Footer from "../Footer/Footer";

const HomeRoot = styled("div")(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeRoot>
        <Header />
        <InfoBar />
        <IphoneVideo />
        <HighlightsBar />
        <VideoCarousel />
        <IPhoneThree />
        <IPhoneStory />
        <Footer />
      </HomeRoot>
    </ThemeProvider>
  );
};

export default Home;
