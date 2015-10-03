import React from "react";
import Greeting from "./components/greeting";

global.jQuery = require("jquery");

require("bootstrap-sass!../bootstrap-sass.config.js");
import "./app.scss";

React.render(
  <Greeting name="World" />,
  document.getElementById("mount-node")
);
