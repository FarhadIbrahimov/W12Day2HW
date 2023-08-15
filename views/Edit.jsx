import React from "react";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function Edit({ poke }) {
  let { name } = poke;
  return (
    <div>
      <form action="/pokemon" method="POST">
        <h1>Edit</h1>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" value={poke}></input>

        <br />
        <br />
        <a href={`/pokemon`}>
          <button>Submit</button>
        </a>
        <br />
        <br />
        <a href={`/pokemon/`}>
          <button>Back</button>
        </a>
      </form>
    </div>
  );
}
export default Edit;
