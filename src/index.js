import React from "react";
import ReactDom from "react-dom";
import Student from "./student";

ReactDom.render(
  <Student name="Prakash" age={"23"} />,
  document.getElementById("root"));
