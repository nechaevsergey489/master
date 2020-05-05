import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App title={"i am from props"} />,
  document.getElementById("root")
);
registerServiceWorker();
