import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import { navBarLinks } from "utils/constant";
import logo from "assets/images/logo.png";
import { useTheme } from "@emotion/react";
import { DarkModeTheme } from "components/darkModeTheme";

export default function Hamburger({ handleThemeToggle }) {
  const theme = useTheme();
  const location = useLocation();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && event.key === "Tab") {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: { xs: "200", sm: "300" } }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavLink
        to="/"
        style={{
          display: "flex",
          width: { xs: "100%", sm: "80%" },
          height: "20%",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            filter: theme.palette.mode === "dark" ? "invert(100%)" : "",
            // width: { xs: "100%", sm: "80%" },
            // height: "20%",
            // width: "100%",
            // height: "100%",
          }}
        />
      </NavLink>
      <List>
        {navBarLinks.map((item, index) => (
          <NavLink to={item?.url} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item?.linkImage}</ListItemIcon>

                <ListItemText
                  sx={{ textTransform: "capitalize" }}
                  primary={item?.linkName}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      <Box>
        <Button onClick={toggleDrawer("left", true)}>
          {" "}
          <MenuIcon
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              fontSize: "3rem",
            }}
          />
        </Button>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </Box>
      <Box
        sx={{
          height: "70px",
          position: "absolute",
          left: { xs: "30%", sm: "40%" },
          top: "10px",
        }}
      >
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              filter: theme.palette.mode === "dark" ? "invert(100%)" : "",
              width: "100%",
              height: "100%",
            }}
          />
        </NavLink>
        <DarkModeTheme handleThemeToggle={handleThemeToggle} />
      </Box>
    </Box>
  );
}
