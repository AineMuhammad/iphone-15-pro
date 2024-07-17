import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";
import theme from "../theme";
import "./VideoCarousel.css";
import { Circle } from "@mui/icons-material";

function VideoCarousel(props) {
  var items = [
    {
      video: "/video/video_3.mp4",
      description: `Enter A17 PRO.\nGame-changing chip.\nGroundbreaking Performance.`,
    },
    {
      video: "/video/video_2.mp4",
      description: `Titanium\nSo light. So Strong. So Pro.`,
    },
    {
      video: "/video/video_1.mp4",
      description: `iPhone 15 Pro Max has the\nlongest optical zoom in\niPhone ever. Far out.`,
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={4000}
      navButtonsAlwaysVisible
      animation="slide"
      duration={500}
      indicatorContainerProps={{
        className: "indicator-container",
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box display={"flex"} justifyContent={"center"} position={"relative"}>
      <video autoPlay muted style={{ borderRadius: "28px" }} width={"80%"}>
        <source width={"80vw"} src={props.item.video} />
      </video>
      <Typography
        sx={{ color: theme.palette.text.primary }}
        fontSize={24}
        lineHeight={1.2}
        position={"absolute"}
        left={"15%"}
        top={"8%"}
        dangerouslySetInnerHTML={{
          __html: props.item.description.replace(/\n/g, "<br />"),
        }}
      />
    </Box>
  );
}

export default VideoCarousel;
