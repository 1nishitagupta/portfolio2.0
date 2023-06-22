import { Box } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "components";
import { About, Home } from "pages";

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Signika Negative"].join(","),
  },
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
  typography: {
    fontFamily: ["Signika Negative"].join(","),
  },
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
  const location = useLocation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["oswald"].join(","),
  //   },
  // });

  return (
    <ThemeProvider
      theme={isDarkTheme || location.pathname === "/" ? darkTheme : lightTheme}
    >
      <CssBaseline />
      <Box>
        <Header handleThemeToggle={handleThemeToggle} />
        <Box
          sx={{
            paddingTop: location.pathname === "/" ? "0" : "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
