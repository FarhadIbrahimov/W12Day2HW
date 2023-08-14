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
    res.render("Show", {
      pokemonData: pokes,
      index: req.params.indexOfPokemon,
    });
  } else {
    res.render("Error");
  }
};

module.exports.new = (req, res) => {
  res.render("New");
};

module.exports.create = (req, res) => {
  const newPokemonName = req.body.name.toLowerCase();
  const newPokemon = {
    name: newPokemonName,
    img: `http://img.pokemondb.net/artwork/${newPokemonName}`,
  };

  console.log(newPokemon);

  pokemonData.push(newPokemon);
  res.redirect("/pokemon");
};

// module.exports.destroy = (req, res) => {
//   console.log("DELETE/pokemon/:indexOfPokemon");
//   let index = Number(req.params.indexOfPokemon);
//   pokemonData.splice(index, 1);
//   res.redirect("/pokemon");
// };
module.exports.delete = (req, res) => {};
