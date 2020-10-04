import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    wildSand: "#f4f4f4",
    tamarillo: "#ca2430",
    silverChalice: "#9e9e9e",
    diSerria: "#d6a15f",
    disabled: "#ececec",
  },
  grid: {
    gutter: 15,
  },
  configs: {
    borderRadiusDefault: 3,
  },
  breakpoints: {
    sm: 540,
    md: 720,
    lg: 1023,
    xl: 1140,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme} displayName="Theme Context">
    {children}
  </ThemeProvider>
);

export default Theme;
