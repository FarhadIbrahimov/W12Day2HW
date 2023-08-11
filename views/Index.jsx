import React from "react";

function Index(props) {
  return (
    <div>
      <h1>Index</h1>
      <ul>
        {props.pokemonData.map((pokemon, i) => (
          <li key={i}>
            <a href={`/pokemon/${i}`}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
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
