import React from "react";
import { Box, Typography, createTheme } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "assets/images/logo.png";
import { navBarLinks, socialMediaLinks } from "utils/constant";
import { ContainerBox, DarkModeTheme } from "components";
import Hamburger from "./Hamburger";

export const Header = ({ handleThemeToggle }) => {
  const themeFont = createTheme({
    typography: {
      fontFamily: ["Cagliostro"].join(","),
    },
  });

  const location = useLocation();
  const theme = useTheme();
  console.log(location.pathname);
  return (
    <ThemeProvider theme={themeFont}>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: "9",
        }}
      >
        <Box>
          <ContainerBox>
            <Box
              sx={{
                padding: "1rem 0",
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
                  gap: "12px",
                }}
              >
                {navBarLinks?.map((item, index) => {
                  return (
                    <NavLink
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "2px solid" : "inherit",
                        textTransform: "capitalize",
                      })}
                      to={item?.url}
                      key={index}
                    >
                      <Typography
                        sx={{ paddingBottom: "5px", fontSize: "1.1rem" }}
                      >
                        {item?.linkName}
                      </Typography>
                    </NavLink>
                  );
                })}
              </ul>
              <Box style={{ height: "70px" }}>
                <NavLink to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      filter:
                        theme.palette.mode === "dark" ? "invert(100%)" : "",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </NavLink>
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
                {location.pathname === "/" ? (
                  ""
                ) : (
                  <DarkModeTheme handleThemeToggle={handleThemeToggle} />
                )}
              </ul>
            </Box>
          </ContainerBox>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Hamburger handleThemeToggle={handleThemeToggle} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
