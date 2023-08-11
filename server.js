const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon");

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
