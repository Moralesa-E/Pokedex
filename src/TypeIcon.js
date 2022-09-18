import { useEffect, useState } from 'react'
import  bug from './img/types/Bug_Type_Icon.png';
import  dark from './img/types/Dark_Type_Icon.png';
import  dragon from './img/types/Dragon_Type_Icon.png';
import  electric from './img/types/Electric_Type_Icon.png';
import  fairy from './img/types/Fairy_Type_Icon.png';
import  fighting from './img/types/Fighting_Type_Icon.png';
import  fire from './img/types/Fire_Type_Icon.png';
import  flying from './img/types/Flying_Type_Icon.png';
import  ghost from './img/types/Ghost_Type_Icon.png';
import  grass from './img/types/Grass_Type_Icon.png';
import  ground from './img/types/Ground_Type_Icon.png';
import  ice from './img/types/Ice_Type_Icon.png';
import  normal from './img/types/Normal_Type_Icon.png';
import  poison from './img/types/Poison_Type_Icon.png';
import  psychic from './img/types/Psychic_Type_Icon.png';
import  rock from './img/types/Rock_Type_Icon.png';
import  steel from './img/types/Steel_Type_Icon.png';
import  water from './img/types/Water_Type_Icon.png';

const Types = [
    { type: "bug", Icon: bug },
    { type: "dark", Icon: dark },
    { type: "dragon", Icon: dragon },
    { type: "electric", Icon: electric },
    { type: "fairy", Icon: fairy },
    { type: "fighting", Icon: fighting },
    { type: "fire", Icon: fire },
    { type: "flying", Icon: flying },
    { type: "ghost", Icon: ghost },
    { type: "grass", Icon: grass },
    { type: "ground", Icon: ground },
    { type: "ice", Icon: ice },
    { type: "normal", Icon: normal },
    { type: "poison", Icon: poison },
    { type: "psychic", Icon: psychic },
    { type: "rock", Icon: rock },
    { type: "steel", Icon: steel },
    { type: "water", Icon: water }]
    



export default function Typeicon({ type="bug" }) {

    const [TypeI,setTypeI]=useState(null)

    useEffect(() => {
        let Ty=[...Types]
        let FilType=Ty.filter((t)=>t.type===type)
        setTypeI(FilType[0].Icon)
    }, [type])
    return (
        <img src={TypeI} alt='Type'/>
    );
}