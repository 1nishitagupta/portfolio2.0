import React from "react";
import { Box } from "@mui/material";

export const ContainerBox = ({ children }) => {
  return <Box sx={{ width: "1200px", margin: "auto" }}>{children}</Box>;
};
