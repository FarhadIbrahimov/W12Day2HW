const express = require("express");

const app = express();

const PORT = 3000;

require("dotenv").config();
const mongoConfig = require("./config");
mongoConfig();

//import Routes
const pokemonRoutes = require("./routes/pokemonRoutes");

// Load the create engine function
const jsxEngine = require("jsx-view-engine");

//Load the method override function
const methodOverride = require("method-override");

// Configure the view engine and look for files ending in jsx
app.set("view engine", "jsx");

// Create the engine and accept files ending in jsx
app.engine("jsx", jsxEngine());

//give our form more HTTP method to work with (like DELETE and PUT)
app.use(methodOverride("_method"));

//A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }));

app.use("/pokemon", pokemonRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource Not Found</h1>");
// });

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT, process.env.MONGO_URL);
});
