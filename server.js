const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon");

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
