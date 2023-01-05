import React, { useContext, useState } from "react";
import { PokemonContext } from "./PokemonContext";
// import { generateID } from "./utils";

const PokemonForm = () => {
  const handleFormSubmit = () => {};
  const handleNameOnChange = () => {};

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="pokemon name"
        onChange={handleNameOnChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default PokemonForm;
