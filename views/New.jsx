import React from "react";
import { capitalizeFirstLetter } from "../controllers/pokemonController";

function New() {
  return (
    <div>
      <form action="/pokemon" method="POST">
        <h1>New</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>

        <button>Submit</button>
      </form>
    </div>
  );
}
export default New;
