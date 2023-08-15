const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

//takes two arguments, first argument is collection, second argument is blueprint we need to pass Schema
const PokemonDB = mongoose.model("PokemonDB", pokemonSchema);
module.exports = PokemonDB;
