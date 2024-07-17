import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import theme from "../theme";
import "./IphoneVideo.css";

const Video = styled("video")({
  objectFit: "cover",
  width: "80vw",
});

function IphoneVideo() {
  const [priceAnimate, setPriceAnimate] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPriceAnimate(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setButtonAnimation(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setHeaderAnimation(true);
  }, []);

  return (
    <Box
      sx={{
        background: theme.palette.background.header,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{ color: theme.palette.text.tan, paddingTop: "5vh" }}
        fontSize={30}
        textAlign={"center"}
        className={`header-typography ${headerAnimation ? "animate" : ""}`}
      >
        iPhone 15 Pro
      </Typography>
      <Video autoPlay muted>
        <source src="/video/iphone-15.mp4" type="video/mp4" />
      </Video>
      <Button
        style={{
          background: "#67AAAF",
          width: "5vw",
          color: "#FFFFFF",
          marginBottom: "2vh",
          padding: "5px 20px",
        }}
        variant="contained"
        className={`button-typography ${buttonAnimation ? "animate" : ""}`}
      >
        Buy
      </Button>
      <Typography
        className={`price-typography ${priceAnimate ? "animate" : ""}`}
        textAlign={"center"}
        fontSize={20}
        mb={"5vh"}
        fontWeight={900}
      >
        From $999 or $41.62/mo. for 24 mo.1
      </Typography>
    </Box>
  );
}

export default IphoneVideo;
