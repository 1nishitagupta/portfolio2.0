import { Box, Typography } from "@mui/material";
import { ContainerBox } from "components";
import React from "react";

export const About = () => {
  return (
    <ContainerBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
          fontFamily: "Signika Negative",
        }}
      >
        <Typography sx={{ fontSize: "3rem" }}>
          Code , Design , Draw and Explore
        </Typography>
        <Typography>Lorem ipsum</Typography>
      </Box>
    </ContainerBox>
  );
};
