const pokemonData = require("../models/pokemonData"); // Here you are requiring the pokemonData module using require("../models/pokemonData");, which means you are importing the data from the pokemonData.js file as the pokemonData variable. Therefore, you should use pokemonData in your route handlers to reference the imported array of Pokemon data.

const PokemonDB = require("../models/PokemonDB");

module.exports.capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports.index = async (req, res) => {
  try {
    const databasePokemon = await PokemonDB.find();
    console.log("hi", databasePokemon);
    res.render("Index", { pokemonData: databasePokemon });
  } catch (error) {
    console.log("mongo error: ", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    const PokeData = await PokemonDB.findById(req.params.indexOfPokemon);
    console.log(PokeData);

    if (PokeData) {
      res.render("Show", {
        pokemonData: PokeData,
        index: req.params.indexOfPokemon,
      });
    } else {
      res.render("Error");
    }
  } catch (error) {
    console.log("mongo error: ", error);
  }
};

module.exports.new = (req, res) => {
  res.render("New");
};

module.exports.create = async (req, res) => {
  try {
    const newPokemonName = req.body.name.toLowerCase();
    const newPokemon = {
      name: newPokemonName,
      img: `http://img.pokemondb.net/artwork/${newPokemonName}`,
    };
    await PokemonDB.create(newPokemon);
    console.log(newPokemon);
  } catch (error) {
    console.log("mongo error: ", error);
  }

  res.redirect("/pokemon");
};

module.exports.destroy = async (req, res) => {
  try {
    await PokemonDB.findByIdAndDelete(req.params.indexOfPokemon);
    // let index = Number(req.params.indexOfPokemon);
    // pokemonData.splice(index, 1);
    res.redirect("/pokemon");
  } catch (error) {
    console.log("mongo error: ", error);
  }
};

module.exports.delete = (req, res) => {};
