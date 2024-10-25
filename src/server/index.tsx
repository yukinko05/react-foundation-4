import React from "react"
import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../shared/App";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(
    `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
