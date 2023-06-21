import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import logo from "assets/images/logo.png";
import { useTheme } from "@emotion/react";
import { navBarLinks, socialMediaLinks } from "utils/constant";
import { NavLink } from "react-router-dom";
import { DarkModeTheme, ContainerBox } from "components";
import Hamburger from "./Hamburger";

export const Header = ({ handleThemeToggle }) => {
  const theme = useTheme();
  const [scroll, setScrollY] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);

  return (
    <ContainerBox>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {navBarLinks?.map((item, index) => {
            return (
              <NavLink
                style={{ textTransform: "capitalize" }}
                to={item?.url}
                key={index}
              >
                {item?.linkName}
              </NavLink>
            );
          })}
        </ul>
        <Box style={{ height: "70px" }}>
          {theme.palette.mode === "dark" ? (
            <img
              src={logo}
              alt="logo"
              style={{ filter: "invert(100%)", width: "100%", height: "100%" }}
            />
          ) : (
            <img
              style={{ width: "100%", height: "100%" }}
              src={logo}
              alt="logo"
            />
          )}
        </Box>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {socialMediaLinks?.map((item, index) => {
            return (
              <NavLink to={item?.url} key={index}>
                {item?.linkImage}
              </NavLink>
            );
          })}
          <DarkModeTheme handleThemeToggle={handleThemeToggle} />
        </ul>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Hamburger />
      </Box>
    </ContainerBox>
  );
};
