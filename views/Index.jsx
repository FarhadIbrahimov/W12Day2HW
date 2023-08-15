import React from "react";
import { CAP } from "../controllers/pokemonController";

function Index({ pokemonData }) {
  return (
    <div>
      <h1>Here is your Pokemon Army!</h1>
      <ul>
        {pokemonData.map((pokemon, i) => (
          <li key={i}>
            <a href={`/pokemon/${pokemon._id}`}>{CAP(pokemon.name)}</a>
          </li>
        ))}
      </ul>
      <a href={"/pokemon/New"}>
        <button>Add New Pokemon</button>
      </a>
    </div>
  );
}

export default Index;

// array.map((item) => {
//     // Multiple statements or complex logic
//     return someValue;
//   });

// array.map((item) => (
//     // A single expression that evaluates to a value
//     someValue
//   ));
