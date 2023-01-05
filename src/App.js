import "./App.css";

import PokemonsList from "./PokemonList";
import CapturedPokemons from "./Pokedex";
import { PokemonProvider } from "./PokemonContext";
import PokemonForm from "./PokemonForm";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <CapturedPokemons />
      </div>
      <PokemonForm />
    </PokemonProvider>
  );
}

export default App;
