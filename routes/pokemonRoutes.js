const express = require("express");

const router = express.Router();

const pokemonData = require("../models/pokemonData"); // Here you are requiring the pokemonData module using require("../models/pokemonData");, which means you are importing the data from the pokemonData.js file as the pokemonData variable. Therefore, you should use pokemonData in your route handlers to reference the imported array of Pokemon data.

router.get("/", (req, res) => {
  res.send(pokemonData);
});

router.get("/:indexOfPokemon", (req, res) => {
  let pokes = pokemonData[req.params.indexOfPokemon];
  if (pokes) {
    res.send(pokes);
  } else {
    res.send("<h1>Not Found</h1>");
  }
});

module.exports = router;
