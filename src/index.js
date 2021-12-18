import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import tracks from "./tracks";
import AutoPlayer from "./AutoPlayer";

ReactDOM.render(
  <React.StrictMode>
    <AutoPlayer tracks={tracks} />
  </React.StrictMode>,
  document.getElementById("root")
);
