//ik weet dat ik in de useState moet gaan kijken uit mijn components maar wat ik precies moet meegeven of eruit halen weet ik niet zo goed
//ik weet dat je meerde useStates nodig hebt meestal 1 volle met info en 1 lege.

import { useState } from "react"
import Celsius from "./components/Celsius"
import Fahrenheit from "./components/Fahrenheit"



function App() {
  const [temperatuur,setTemperatuur] = useState()

  const  FnaarS = () => (fahrenheit:number) => ((fahrenheit - 32) * 5) / 9;
        (celsius:number) => (celsius * 9) / 5 + 32;

        const toCelsius = (fahrenheit:number) => ((fahrenheit - 32) * 5) / 9;
        const toFahrenheit = (celsius:number) => (celsius * 9) / 5 + 32;
  
  


  return (
    <>
    <Celsius/>
    <Fahrenheit formules={FnaarS}/>
    

    </>
  )
}

export default App
