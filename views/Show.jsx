import React from "react";

function Show({ pokemonData }) {
  const pokemonWithImgExtention = {
    ...pokemonData,
    img: `${pokemonData.img}.jpg`,
  };
  return (
    <div>
      <h1>Show</h1>
      <p>Name: {pokemonWithImgExtention.name}</p>
      <p>
        Image:{" "}
        <img
          src={pokemonWithImgExtention.img}
          alt={pokemonWithImgExtention.name}
        />
      </p>
    </div>
  );
}

export default Show;
