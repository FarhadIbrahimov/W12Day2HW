const pokemonData = require("../models/pokemonData"); // Here you are requiring the pokemonData module using require("../models/pokemonData");, which means you are importing the data from the pokemonData.js file as the pokemonData variable. Therefore, you should use pokemonData in your route handlers to reference the imported array of Pokemon data.

module.exports.index = (req, res) => {
  const pokemonWithImgExtention = pokemonData.map((pokemon) => ({
    ...pokemon,
    img: ` ${pokemon.img}.jpg`,
  }));
  res.render("Index", { pokemonData: pokemonWithImgExtention });
};

module.exports.show = (req, res) => {
  let pokes = pokemonData[req.params.indexOfPokemon];
  if (pokes) {
    const pokemonWithImgExtention = {
      ...pokes,
      img: `${pokes.img}.jpg`,
    };

    res.render("Show", { pokemonData: pokemonWithImgExtention });
  } else {
    res.render("Error");
  }
};
