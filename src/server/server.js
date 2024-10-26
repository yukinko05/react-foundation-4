const express = require("express");

// Station 3の説明用サーバー
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
