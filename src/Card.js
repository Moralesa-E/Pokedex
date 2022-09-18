import axios from "axios";
import { useEffect, useState } from "react";
import Typeicon from "./TypeIcon";

export default function Cardpokemon({ urlpokemon }) {
    const [Pokemon, setPokemon] = useState(null);

    useEffect(() => {
        // console.log(urlpokemon)
        axios.get(urlpokemon).then((response) => {
            setPokemon(response.data);
            // console.log(response.data)
            // console.log(Object.values(response.data.sprites.other)[2].front_default)
        });
    }, [urlpokemon])

    if (!Pokemon) return null;
    return (
        <section>

            <div className="Card-Pokemon">
                <div className={"BG "} style={{ background: classType(Pokemon.types) }}>
                    <div className="Card-Img">
                        <img src={Object.values(Pokemon.sprites.other)[2].front_default}
                            alt="pokemon" />
                    </div>
                </div>
                <div className="Card-Content">
                    <div><h5>{"#" + Pokemon.id}</h5></div>
                    <div className="Card-Data">
                        <h1> {Pokemon.name}</h1>
                        <div className="Types">
                            <div className="d-flex-c"><h6>Weight</h6><span>{Pokemon.weight/10+" kg"}</span></div>
                            {Pokemon.types.map((u, v) => <div className="d-flex-c" key={v}><Typeicon type={u.type.name}/><span key={v}>{u.type.name}</span></div>)}
                            <div className="d-flex-c"><h6>Height</h6><span>{Pokemon.height*10+" cm"}</span></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

const classType = (types) => {
    const Colors = [
        { color: "steel", value: "#5a8ea2" },
        { color: "water", value: "#4e91d6" },
        { color: "bug", value: "#92c12a" },
        { color: "dragon", value: "#036dc3" },
        { color: "electric", value: "#f4d339" },
        { color: "ghost", value: "#5169ae" },
        { color: "fire", value: "#fe9d53" },
        { color: "fairy", value: "#ec90e7" },
        { color: "ice", value: "#74cfc0" },
        { color: "fighting", value: "#ce3e6a" },
        { color: "normal", value: "#929aa2" },
        { color: "grass", value: "#62bc5a" },
        { color: "psychic", value: "#f97279" },
        { color: "rock", value: "#c6b88c" },
        { color: "dark", value: "#5a5265" },
        { color: "ground", value: "#d97942" },
        { color: "poison", value: "#aa6ac9" },
        { color: "flying", value: "#8faadf" },
        { color: "neutral", value: "white" },
    ]
    let Ltypes = types.map((t) => t.type.name)
    let ColorType = Colors.filter((color) => Ltypes.includes(color.color));

    let colorfilter = ColorType.map((u) => u.value)
    // console.log("linear-gradient("+colorfilter.join()+")")
    // console.log(types.length===1?"whit e,":"")
    return "linear-gradient(" + (types.length === 1 ? "white," : "") + colorfilter.join() + ")"
    // console.log(Ltypes)
    // console.log(Ltypes.sort().join(''))
    // return Ltypes.sort().join('')


}

