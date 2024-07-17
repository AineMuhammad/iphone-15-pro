import { Box, Typography, useScrollTrigger } from "@mui/material";
import React from "react";
import theme from "../theme";

function IPhoneStory() {
  const textTrigger1 = useScrollTrigger({
    threshold: 0.5,
  });

  const textTrigger2 = useScrollTrigger({
    threshold: 0.5,
  });

  const imageTrigger1 = useScrollTrigger({
    threshold: 0.5,
  });

  const imageTrigger2 = useScrollTrigger({
    threshold: 0.5,
  });

  return (
    <Box my={"20vh"} sx={{ position: "relative" }} width={"100%"}>
      <Typography
        ml={"10vw"}
        fontSize={50}
        color={theme.palette.text.primary}
        mb={"15vh"}
      >
        Explore the full story.
      </Typography>
      <Typography
        ml={"15vw"}
        fontSize={70}
        color={theme.palette.text.primary}
        mb={"10vh"}
      >
        iPhone.
        <br />
        Forged in titanium.
      </Typography>
      <video autoPlay muted style={{ marginLeft: "15vw", width: "70vw" }}>
        <source
          style={{ borderRadius: "10px", objectFit: "cover" }}
          src="/video/iphone_story.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{ display: "flex", marginTop: "2vh", marginBottom: "8vh" }}>
        <div
          style={{
            marginLeft: "15vw",
            width: "34vw",
            height: "56vh",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: imageTrigger1 ? "scale(1)" : "scale(1.25)",
              opacity: imageTrigger1 ? "1" : "0.25",
              transition: "transform 2.5s ease-in-out, opacity 1s ease-in-out",
            }}
            src="/img/story_1.jpg"
          />
        </div>
        <div
          style={{
            marginLeft: "2vw",
            width: "34vw",
            height: "56vh",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: imageTrigger2 ? "scale(1)" : "scale(1.25)",
              opacity: imageTrigger2 ? "1" : "0.25",
              transition: "transform 2.5s ease-in-out, opacity 1s ease-in-out",
            }}
            src="/img/story_2.jpg"
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "22vw", width: "34vw" }}>
          <Typography
            sx={{
              width: "20vw",
              transform: textTrigger1 ? "translateY(0)" : "translateY(50%)",
              opacity: textTrigger1 ? "1" : "0",
              transition: "transform 2.5s ease-in-out,opacity 1s ease-in-out",
            }}
            fontSize={20}
            color={theme.palette.text.primary}
          >
            iPhone 15 Pro is the first iPhone to feature an aerospace‑grade
            titanium design, using the same alloy that spacecraft use for
            missions to Mars.
          </Typography>
        </div>
        <div style={{ marginLeft: "2vw", width: "34vw" }}>
          <Typography
            sx={{
              width: "20vw",
              transform: textTrigger2 ? "translateY(0)" : "translateY(50%)",
              opacity: textTrigger2 ? "1" : "0",
              transition: "transform 2.5s ease-in-out,opacity 1s ease-in-out",
            }}
            fontSize={20}
            color={theme.palette.text.primary}
          >
            iPhone 15 Pro is the first iPhone to feature an aerospace‑grade
            titanium design, using the same alloy that spacecraft use for
            missions to Mars.
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default IPhoneStory;
