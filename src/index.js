import React from "react";
import { render } from "react-dom";

function Hi() {
  debugger;
  return <p>Hello World.</p>;
}

render(<Hi />, document.getElementById("app"));
