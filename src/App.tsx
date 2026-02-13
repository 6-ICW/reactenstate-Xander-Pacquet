import { useState } from "react"
import Celsius from "./components/Celsius"
import Fahrenheit from "./components/Fahrenheit"



function App() {
  const [temperatuur,setTemperatuur] = useState()

  const FnaarS = () => (fahrenheit:number) => ((fahrenheit - 32) * 5) / 9;
        (celsius:number) => (celsius * 9) / 5 + 32;

        const toCelsius = (fahrenheit:number) => ((fahrenheit - 32) * 5) / 9;
        const toFahrenheit = (celsius:number) => (celsius * 9) / 5 + 32;
  
  


  return (
    <>
    <Celsius/>
    <Fahrenheit/>
    

    </>
  )
}

export default App
