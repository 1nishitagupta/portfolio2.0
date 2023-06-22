import { Box, Typography } from "@mui/material";
import Banner from "assets/images/banner.jpg";
import React from "react";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#f6f6f6",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Box
        sx={{
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            display: "inline",
            textShadow: `
            0 0 10px #010101,
            0 0 20px #010101,
            0 0 30px #010101,
            0 0 40px #010101,
            0 0 70px #010101,
            0 0 80px #010101,
            0 0 100px #010101,
            0 0 150px #010101
    `,
            textAlign: "center",
          }}
        >
          Hi !!
        </Typography>
        <Typography
          sx={{
            fontSize: "4rem",
            display: "inline",
            textShadow: `
            0 0 10px #010101,
            0 0 20px #010101,
            0 0 30px #010101,
            0 0 40px #010101,
            0 0 70px #010101,
            0 0 80px #010101,
            0 0 100px #010101,
            0 0 150px #010101
    `,
            textAlign: "center",
          }}
        >
          I'm Nishita Gupta
        </Typography>
      </Box>

      <Box
        sx={{
          zIndex: "1",
          fontSize: { xs: "2.3rem", md: "3rem" },
          textShadow: `
            0 0 10px #010101,
            0 0 20px #010101,
            0 0 30px #010101,
            0 0 40px #010101,
            0 0 70px #010101,
            0 0 80px #010101,
            0 0 100px #010101,
            0 0 150px #010101
    `,
          textAlign: "center",
        }}
      >
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Designer", "Developer", "Artist"],
            autoStart: true,
            loop: true,
            delay: 50, // Delay in milliseconds between each character typing
            deleteSpeed: "natural", // Speed of deleting characters ('natural', 'slow', 'fast')
            pauseFor: 1500, // Pause duration in milliseconds before starting a new string
            cursor: "|", // Custom cursor character ('|', '_', etc.)
            cursorStyle: "_", // Custom CSS styles for the cursor
            wrapperClassName: "wrapper", // Custom class name for the typewriter wrapper
            cursorClassName: "cursor",
          }}
        />
      </Box>
    </Box>
  );
};
