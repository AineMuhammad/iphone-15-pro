import React, { useRef } from "react";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import theme from "../theme";
import { Divider, Typography } from "@mui/material";

function Hovermenu({ name, menu }) {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  return (
    <>
      <div ref={ref} {...anchorProps}>
        <span style={{ cursor: "pointer" }} className="header-item">
          {name}
        </span>
      </div>

      <ControlledMenu
        {...hoverProps}
        {...menuState}
        anchorRef={ref}
        onClose={() => toggle(false)}
        menuStyle={{
          marginTop: "2vh",
          height: "fit-content",
          width: "100%",
          background: theme.palette.background.header,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10vw",
              marginTop: "6vh",
              marginBottom: "6vh",
            }}
          >
            {menu.map((item, index) => (
              <MenuItem
                style={{
                  color: theme.palette.text.primary,
                  marginTop: "2vh",
                  marginBottom: "1vh",
                  width: "20vh",
                }}
                key={index}
              >
                <Typography fontSize={14}>{item.label}</Typography>
              </MenuItem>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5vw",
              marginTop: "6vh",
              marginBottom: "6vh",
            }}
          >
            {menu.map((item, index) => (
              <MenuItem
                style={{
                  color: theme.palette.text.primary,
                  marginTop: "2vh",
                  marginBottom: "1vh",
                  width: "20vh",
                }}
                key={index}
              >
                <Typography style={{ cursor: "pointer" }} fontSize={14}>
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
          </div>
        </div>
      </ControlledMenu>
    </>
  );
}

export default Hovermenu;
