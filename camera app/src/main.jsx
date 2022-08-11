import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lifecycle from "./lifecyclecomp";

import Webcam from "react-webcam";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Lifecycle />
    {/* <Lifecyclecomp2 /> */}

    {/* <button
      onClick={() => {
        <div>
          <Webcam />
        </div>;
      }}
    >
      Start
    </button> */}
  </React.StrictMode>
);
