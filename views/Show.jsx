import React from "react";
import pokemon from "../models/pokemonData";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function Show({ pokemonData, index }) {
  let { name, img } = pokemon;
  const pokemonWithImgExtention = {
    ...pokemonData,
    img: `${pokemonData.img}.jpg`,
  };

  return (
    <div>
      <h1> Gotta Catch 'Em All</h1>
      <h2>You have caught {pokemonWithImgExtention.name.toUpperCase()}</h2>
      <li>Name: {capitalizeFirstLetter(pokemonWithImgExtention.name)}</li>

      <li>
        Image:
        <img
          src={pokemonWithImgExtention.img}
          alt={pokemonWithImgExtention.name}
        />
      </li>
      <a href={`/pokemon/`}>
        <button>Back</button>
      </a>
      {/* <form action={`/pokemon/:${index}`} method="DELETE">
        <button>Delete</button>
      </form> */}
    </div>
  );
}

export default Show;
