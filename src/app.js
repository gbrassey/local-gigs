global.jQuery = require("jquery");
require("bootstrap-sass!../bootstrap-sass.config.js");
import "./app.scss";

import React from "react";
import Greeting from "./components/greeting";

React.render(
  <Greeting name="World" />,
  document.getElementById("mount-node")
);
