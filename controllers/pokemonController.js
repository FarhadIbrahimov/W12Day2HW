const pokemonData = require("../models/pokemonData"); // Here you are requiring the pokemonData module using require("../models/pokemonData");, which means you are importing the data from the pokemonData.js file as the pokemonData variable. Therefore, you should use pokemonData in your route handlers to reference the imported array of Pokemon data.

module.exports.capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports.index = (req, res) => {
  res.render("Index", { pokemonData });
};

module.exports.show = (req, res) => {
  let pokes = pokemonData[req.params.indexOfPokemon];
  if (pokes) {
    res.render("Show", { pokemonData: pokes });
  } else {
    res.render("Error");
  }
};

module.exports.new = (req, res) => {
  res.render("New");
};
