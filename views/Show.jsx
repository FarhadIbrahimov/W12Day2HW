import React from "react";
import pokemon from "../models/pokemonData";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function Show({ pokemonData, index }) {
  let { name, img, _id } = pokemonData;

  return (
    <div>
      <h1> Gotta Catch 'Em All</h1>
      <h2>You have caught {name}</h2>
      <li>Name: {name}</li>

      <li>
        Image:
        <img src={`${pokemonData.img}.jpg`} alt={name} />
      </li>
      <a href={`/pokemon/`}>
        <button>Back</button>
      </a>
      <form action={`/pokemon/${_id}?_method=DELETE`} method="POST">
        <button>Delete</button>
      </form>
    </div>
  );
}

export default Show;
