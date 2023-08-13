import React from "react";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function Index({ pokemonData }) {
  return (
    <div>
      <h1>Here is your Pokemon Army!</h1>
      <ul>
        {pokemonData.map((pokemon, i) => (
          <li key={i}>
            <a href={`/pokemon/${i}`}>{capitalizeFirstLetter(pokemon.name)}</a>
          </li>
        ))}
      </ul>
      <form action={"/New"} method="POST">
        <button>Add New Pokemon</button>
      </form>
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
