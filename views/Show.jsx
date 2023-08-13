import React from "react";
import pokemon from "../models/pokemonData";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function Show({ pokemonData }) {
  const pokemonWithImgExtention = {
    ...pokemonData,
    img: `${pokemonData.img}.jpg`,
  };

  return (
    <div>
      <h1>You have selected {pokemonWithImgExtention.name.toUpperCase()}</h1>
      <li>Name: {capitalizeFirstLetter(pokemonWithImgExtention.name)}</li>

      <li>
        Image:
        <img
          src={pokemonWithImgExtention.img}
          alt={pokemonWithImgExtention.name}
        />
      </li>
    </div>
  );
}

export default Show;
