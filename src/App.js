import "./App.css";

import PokemonsList from "./PokemonList";
import CapturedPokemons from "./Pokedex";
import { PokemonProvider } from "./PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <CapturedPokemons />
      </div>
    </PokemonProvider>
  );
}

export default App;
