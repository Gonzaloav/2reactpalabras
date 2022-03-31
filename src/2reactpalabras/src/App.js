
import {useState, useEffect } from "react";
import './App.css';
import Letras from './components/letras/Letras';
import Palabras from './components/palabras/Palabras';

function App() {

const [texto, setTexto] = useState("");

function changeTextHandler(event) {
    setTexto (event.target.value);
    console.log(texto);
  }

useEffect (
  ()=>{
    console.log("effect:", texto);
},
  [texto]
);
  
  return (
    <div>
              <h1>Texto:</h1>
    <form>
              <textarea onChange={changeTextHandler} value={texto}></textarea>
    </form>
   
              <Letras texto={texto}/>
              <Palabras texto={texto}/>
  </div>
  );
}



export default App;
