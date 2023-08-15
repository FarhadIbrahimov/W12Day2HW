const express = require("express");

const router = express.Router();

const pokemonController = require("../controllers/pokemonController");

//I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route  // localhost:3000/pokemon
router.get("/", pokemonController.index);

//"new" route
router.get("/New", pokemonController.new);

//'destroy' route
router.delete("/:indexOfPokemon", pokemonController.destroy);

//'update' route

//'create' route
router.post("/", pokemonController.create);

// 'edit' route

//"show"  route   //localhost:3000/pokemon/:indexOfPokemon
router.get("/:indexOfPokemon", pokemonController.show);

module.exports = router;
