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
import { NavLink } from "react-router-dom";
import { navBarLinks } from "utils/constant";

export default function Hamburger() {
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
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        {" "}
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
