import axios from "axios";
import { useEffect, useState } from "react";
import Cardpokemon from '../Card'

const url = "https://pokeapi.co/api/v2/region/";

export default function Regions({ region }) {
    const [Pokemons, setPokemons] = useState(null)
    useEffect(() => {
        // console.log(region)
        axios.get(url+region).then((response) => {
            let pokedex = response.data.pokedexes[response.data.pokedexes.length-1].url
            axios.get(pokedex).then((res)=>{

                let entries = res.data.pokemon_entries.map((u)=>u.pokemon_species)
                setPokemons(entries);
                // console.log(entries);
            })
        });
    }, [region])
    if (!Pokemons) return null;
    return (
        <section className='Main'>
            {Pokemons.map((u, v) => <Cardpokemon key={v} urlpokemon={u.url.replace("-species","")} />)}
        </section>
    );
}