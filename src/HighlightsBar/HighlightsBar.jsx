import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useScrollTrigger } from "@mui/material";

function HighlightsBar() {
  const highlightTrigger = useScrollTrigger({
    threshold: 0.1,
  });
  const buttonTrigger = useScrollTrigger({
    threshold: 1,
  });

  return (
    <Box
      sx={{
        width: "90%",
        alignContent: "center",
        background: theme.palette.background.default,
        paddingTop: "10vh",
        paddingBottom: "2vh",
        paddingLeft: "10%",
        position: "relative",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.tan,
            width: "fit-content",
            textAlign: "center",
            left: "0",
            transform: highlightTrigger ? "translateY(0)" : "translateY(25%)",
            opacity: highlightTrigger ? "1" : "0",
            transition: "transform 2.5s ease-in-out,opacity 1.5s ease-in-out",
          }}
          fontSize={50}
        >
          Get the highlights.
        </Typography>
        <Button
          style={{
            color: theme.palette.text.button,
            position: "absolute",
            right: "10vw",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            transform: buttonTrigger ? "translateY(0)" : "translateY(25%)",
            transition: "transform 1.5s ease-in-out",
          }}
          sx={{ ":hover": { textDecoration: "underline" } }}
          variant="text"
          underline="hover"
        >
          Watch the film <PlayCircleOutlineIcon sx={{ marginLeft: "5px" }} />
        </Button>
      </Box>
    </Box>
  );
}

export default HighlightsBar;
