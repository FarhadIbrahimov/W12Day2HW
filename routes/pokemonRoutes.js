const express = require("express");

const router = express.Router();

const pokemonController = require("../controllers/pokemonController");

// router.get("/pokemon/New", pokemonController.new);

// router.get("/pokemon", pokemonController.index);

// router.post("/pokemon", pokemonController.create);

// router.get("/pokemon/:id", pokemonController.show);

//I>N>D>U>C>E>S (Index, New, Delete, Update, Create, Edit, Show)

// "index" route  // localhost:3000/pokemon
router.get("/", pokemonController.index);

//"new" route
router.get("/New", pokemonController.new);

//"show"  route   //localhost:3000/pokemon/:indexOfPokemon
router.get("/:indexOfPokemon?", pokemonController.show);

//'delete' route

//'update' route

//'create' route

// 'edit' route

module.exports = router;
