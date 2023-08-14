import React from "react";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function New() {
  return (
    <div>
      <form action="/pokemon" method="POST">
        <h1>New</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <a href={`/pokemon`}>
          <button>Submit</button>
        </a>
      </form>
      <br />
      <a href={`/pokemon/`}>
        <button>Back</button>
      </a>
    </div>
  );
}
export default New;
