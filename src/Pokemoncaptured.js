import React, { useState } from "react";

function Pokemoncaptured() {
  const [pokemons] = useState([]);

  return (
    <div className="Pokemoncaptured">
      <h2>Pokemon Captured</h2>

      {pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemoncaptured;
