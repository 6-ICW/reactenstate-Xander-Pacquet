import { useState } from "react"
//je moet hier een handle click maken, in de handle click functie moet je zorgen dat als je op die knop drukt dat hij kijkt wat er staat en aan de hand van de formules het berekent
//je moet hier zeker ook met interface werken maar ik weet niet goed wat ik moet meegeven of opvragen.
interface Props{
    formule : (FnaarS:string[])=>void
}

function Fahrenheit(){
    const [change,setChange]= useState("")
    handleClick = (e) =>{
        e.preventDefault


    }
    return(<>

    <input type="text" name="fahrenheit" value={change}/> <button onClick={handleClick}>berekenen</button>

    
    </>)
}

export default Fahrenheit