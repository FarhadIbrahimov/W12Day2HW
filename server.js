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

//A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: false }));

app.use("/pokemon", pokemonRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
