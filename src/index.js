import React from "react";
import ReactDOM from "react-dom";
import { debugContextDevtool } from "react-context-devtool";

import Home from "./containers/Home";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  container
);

debugContextDevtool(container, { wrapped: true, disable: process.env.NODE_ENV === "production" });
