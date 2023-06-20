import { Box, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/header/Header";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
      primary: {
        main: isDarkTheme ? "#705edc" : "#fff",
        light: isDarkTheme ? "#705edc" : "#d05ce3",
        dark: isDarkTheme ? "#4a0072" : "#6a0080",
      },
      secondary: {
        main: isDarkTheme ? "#f57c00" : "#d05ce3",
        light: isDarkTheme ? "#ffab40" : "#ffc947",
        dark: isDarkTheme ? "#bb4d00" : "#c66900",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Header handleThemeToggle={handleThemeToggle} />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};
