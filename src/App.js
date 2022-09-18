import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Regions from './Regions/Regions';

import './App.css';

const url = "https://pokeapi.co/api/v2/region/";

function App() {

  const [Pokemons, setPokemons] = useState(null)
  const [Region, setRegion] = useState("kanto")
  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemons(response.data.results);
      // console.log(response.data.results)
    });
  }, [])
  if (!Pokemons) return null;
  return (
    <section >
      <div className='header'>
        <h4>POKEDEX</h4>
        {Pokemons.map((u, v) => <button onClick={() => setRegion(u.name)} key={v}>{u.name}</button>)}

      </div>
      <div>
        <Regions region={Region} />
      </div>
    </section>
  );
}

export default App;
