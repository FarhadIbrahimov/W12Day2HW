const express = require("express");

const router = express.Router();

const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.index);

router.get("/:indexOfPokemon?", pokemonController.show);

module.exports = router;
