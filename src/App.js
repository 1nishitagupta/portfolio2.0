import { Box } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "components";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#705edc",
    },
    secondary: {
      main: "#f57c00",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a850dc",
    },
    secondary: {
      main: "#f57c00",
    },
  },
});

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
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
