import React from "react"
import { hydrateRoot } from "react-dom/client";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom"

const rootDom = document.getElementById("root");

if (!rootDom) {
  throw new Error("rootが存在しません")
}

hydrateRoot(
  rootDom,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
