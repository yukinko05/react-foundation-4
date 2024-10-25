import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../shared/App";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
