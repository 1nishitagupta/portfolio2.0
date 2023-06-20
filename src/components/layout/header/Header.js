import { Box } from "@mui/material";
import React from "react";
import { DarkModeTheme } from "../../darkModeTheme/DarkModeTheme";
import logo from "../../../assets/images/logo.png";

export const Header = ({ handleThemeToggle }) => {
  return (
    <Box>
      <img src={logo} alt="logo" />
      <DarkModeTheme handleThemeToggle={handleThemeToggle} />
    </Box>
  );
};
