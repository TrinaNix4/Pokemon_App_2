import logo from "./logo.svg";
import "./App.css";

import Pokemonslist from "./Pokemonlist";
import Pokemoncaptured from "./Pokemoncaptured";

function App() {
  return (
    <div className="App">
      <Pokemonslist />
      <Pokemoncaptured />
    </div>
  );
}

export default App;
