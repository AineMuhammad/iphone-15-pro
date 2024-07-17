import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

function InfoBar() {
  return (
    <Box
      sx={{
        height: "10vh",
        width: "100%",
        alignContent: "center",
        textAlign: "-webkit-center",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          color: theme.palette.text.primary,
          width: "25%",
          textAlign: "center",
        }}
      >
        Get $170–$620 in credit toward iPhone 15 Pro when you trade in iPhone 11
        or higher.
      </Typography>
    </Box>
  );
}

export default InfoBar;
