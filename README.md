# Pokemon App

Welcome to the Pokemon App! This project aims to display Pokemon data inside server-side rendered views.

## Table of Contents

- [Introduction](#introduction)
- [Learning Objectives](#learning-objectives)
- [Prerequisites](#prerequisites)
- [User Stories](#user-stories)
- [Getting Started](#getting-started)
  - [Setting up the File Structure](#setting-up-the-file-structure)
  - [Installing NPM Packages](#installing-npm-packages)
  - [Setting up the Server](#setting-up-the-server)
  - [Setting up the 'Database'](#setting-up-the-database)
  - [Creating the Index View](#creating-the-index-view)
  - [Setting up the Show Route](#setting-up-the-show-route)
  - [Linking Index and Show Views](#linking-index-and-show-views)
- [Conclusion](#conclusion)

## Introduction

This project focuses on creating a Pokemon App that utilizes Express to serve server-side rendered views. Users can view a list of Pokemon names, click on individual Pokemon to view more details, and even create new Pokemon.

## Learning Objectives

- Practice setting up Express routes for index and show functionality.
- Gain experience in creating new and create routes with Express.
- Utilize JSX and server-side rendering for dynamic views.

## Prerequisites

To work on this project, you should have a basic understanding of:

- JavaScript
- Express
- Node
- JSX

## User Stories

1. As a user, I want to see a list of Pokemon names on the index page.
2. When I click on a Pokemon's name, I want to be taken to its show page where I can view its details.
3. I also want the ability to create new Pokemon and be redirected back to the index page.

## Getting Started

Follow these steps to set up and run the project:

### Setting up the File Structure

_Create the necessary folders and files for your project:_

```
plaintext
pokemon_app/
|-- views/
|   |-- Index.jsx
|   |-- Show.jsx
|-- models/
|   |-- pokemonData.js
|-- controllers/
|   |-- pokemonController.js
|-- routes/
|   |-- pokemonRoutes.js
|-- server.js
|-- .gitignore
```

### Initializing the Project

_Run the following command to initialize your project and create a package.json file:_

```
npm init -y

```

### Installing NPM Packages

_Install required NPM packages for your project:_

```
npm install express jsx-view-engine react react-dom

```

### Setting up the Server

_Set up your Express server to listen on a specific port and handle routes:_

```js
// server.js

const express = require("express");
const app = express();
const PORT = 3000;

// ... (other configurations and middleware)

// Import routes
const pokemonRoutes = require("./routes/pokemonRoutes");

// Set up view engine
const jsxEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Use routes
app.use("/pokemon", pokemonRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Listen on port
app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
```

### Setting up the 'Database'

_Create and export a 'database' containing Pokemon data:_

```js
const pokemon = [
  { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
  { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
  { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
  { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
  { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
  { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
  { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
];
module.exports = pokemon;
```

## Creating the Index View

The `Index.jsx` file is an important component in our Pokemon App that serves as the index view, displaying a list of Pokemon names along with navigation links. Let's break down the contents of this file and understand its functionality:

### Importing Dependencies

First, we import necessary dependencies. We use `React` from the "react" library for creating UI components, and the `capitalizeFirstLetter` function from the `pokemonController.js` file for formatting text.

```jsx
import React from "react";
import { capitalizeFirstLetter } from "../controllers/pokemonController";
```

To display the list of Pokémon names and create navigation links, we utilize the `map` method on the `pokemonData` array. This method allows us to efficiently iterate through the array and generate the necessary HTML elements.

Here's how it works:

- **pokemonData**: This array contains data about different Pokémon.

- **`.map(...)`**: The `map` method is invoked on the `pokemonData` array.

- **`(pokemon, i) => (...)`**: This is an arrow function acting as a callback for the `map` method. It takes two parameters: `pokemon` and `i` (index). The callback function is executed for each element in the `pokemonData` array.

  - `<li key={i}>`: Creates an HTML list item element (`<li>`) and assigns a unique `key` attribute using the index `i`. This is crucial for React to efficiently update and manage the list of items.

  - `<a href={`/pokemon/${i}`}>...</a>`: Generates an anchor (`<a>`) element with an `href` attribute that dynamically creates URLs for each Pokémon based on its index `i`. This enables users to click on a Pokémon's name to navigate to its details page.

  To ensure consistent formatting of Pokemon names, we've implemented the `capitalizeFirstLetter` function, stored inside the pokemonControllers.js file

  ```js
  function capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }
  ```

  This function takes a string as input and returns a new string with the first letter capitalized. Here's how it works:

**Input**: The function accepts a `string` parameter, which is the text to be capitalized.

**`string.charAt(0)`**: This extracts the first character of the input string.

**`.toUpperCase()`**: The `toUpperCase` method is applied to the first character, converting it to uppercase.

**`string.slice(1)`**: This extracts the remaining part of the input string, starting from the second character.

**`+`**: The `+` operator concatenates the capitalized first character with the rest of the string.

**Return**: The function returns the new string with the first letter capitalized.

This function is crucial for presenting a consistent and visually appealing format for Pokemon names, enhancing the user experience throughout the application.



### Linking Index and Show Views

Created links between the index and show views for seamless navigation.

## Conclusion

This project is a great opportunity to practice setting up routes, rendering views, and working with server-side data. As you complete the requirements and build out the app, you'll gain valuable experience in building dynamic and interactive web applications with Express and server-side rendering.

For more information on the MVC pattern, you can refer to the [Mozilla Developer Network's Glossary on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC).

```

```
