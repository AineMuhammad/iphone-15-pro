import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import theme from "../theme";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Hovermenu from "../HoverMenu/Hovermenu";

const headerItems = [
  {
    label: "Apple",
    icon: <AppleIcon style={{ height: "3vh" }} />,
  },
  {
    label: "Store",
    menu: [
      { label: "Shop" },
      { label: "Mac" },
      { label: "iPhone" },
      { label: "iPod" },
      { label: "Apple Watch" },
    ],
  },
  {
    label: "Mac",
    menu: [
      { label: "Shop" },
      { label: "Mac" },
      { label: "iPhone" },
      { label: "iPod" },
      { label: "Apple Watch" },
    ],
  },
  { label: "iPad" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "AirPods" },
  { label: "Tv & Home" },
  { label: "Entertainment" },
  { label: "Support" },
  {
    label: "Search",
    icon: <SearchIcon style={{ height: "3vh" }} />,
  },
  {
    label: "Shopping Bag",
    icon: <ShoppingBagIcon style={{ height: "3vh" }} />,
  },
];

function Header() {
  return (
    <Box
      sx={{
        height: "6vh",
        width: "100%",
        background: theme.palette.background.header,
        display: "flex",
        color: theme.palette.text.primary,
        fontSize: 12,
      }}
    >
      <Grid container>
        <Grid item lg={2} md={2} />
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          item
          lg={8}
          md={8}
        >
          {headerItems.map((item, index) =>
            item.menu ? (
              <>
                <Hovermenu name={item.label} menu={item.menu} />
              </>
            ) : (
              <span key={index} className="header-item">
                {item.icon ? item.icon : item.label}
              </span>
            )
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
