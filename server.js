const express = require("express");

const app = express();

const PORT = 3000;

//import Routes
const pokemonRoutes = require("./routes/pokemonRoutes");

// Load the create engine function
const jsxEngine = require("jsx-view-engine");

// Configure the view engine and look for files ending in jsx
app.set("view engine", "jsx");

// Create the engine and accept files ending in jsx
app.engine("jsx", jsxEngine());

// app.get("/pokemon/:id", (req, res) => {
//   res.send(`${req.params.id}`);
// });
app.use("/pokemon", pokemonRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
