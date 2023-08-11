import React from "react";
import pokemon from "../models/pokemonData";

function Show({ pokemonData }) {
  const pokemonWithImgExtention = {
    ...pokemonData,
    img: `${pokemonData.img}.jpg`,
  };

  return (
    <div>
      <h1>You have selected {pokemonWithImgExtention.name.toUpperCase()}</h1>
      <li>Name: {pokemonWithImgExtention.name.toUpperCase()}</li>

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
