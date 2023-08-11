import React from "react";

function Show({ pokemonData }) {
  return (
    <div>
      <h1>Show</h1>
      <p>Name: {pokemonData.name}</p>
      <p>
        Image: <img src={pokemonData.img} alt={pokemonData.name} />
      </p>
    </div>
  );
}

export default Show;
