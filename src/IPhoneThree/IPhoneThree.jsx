import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import zIndex from "@mui/material/styles/zIndex";

function IPhoneThree() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "10vh",
        height: "100vh",
        background: theme.palette.background.header,
        position: "relative",
      }}
    >
      <Typography
        position="absolute"
        sx={{ left: "10vw", top: "10vh", zIndex: 5 }}
        color={"#777777"}
        fontSize={50}
      >
        Take a closer look.
      </Typography>
      <Canvas style={{ background: "black" }}>
        <Model />
      </Canvas>
    </Box>
  );
}

export default IPhoneThree;
