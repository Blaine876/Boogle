import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { SearchProvdier } from "./context/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvdier>
      <App />
    </SearchProvdier>
  </React.StrictMode>,
  document.getElementById("root")
);
