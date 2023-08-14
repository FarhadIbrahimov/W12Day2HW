import React from "react";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function New() {
  return (
    <div>
      <form action="/pokemon" method="POST">
        <h1>New Pokemon</h1>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name"></input>

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
export default New;
