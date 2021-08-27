import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App/App";


ReactDOM.render(
  // <Contenido
  //   titulo="Hola mascas de la vrg"
  //   contenido="Este es el contenido de este componente"
  // ><h2>Hola sol el hijo, el hijo de la putita de cris</h2></Contenido>
  <App/>,
  document.getElementById("root")
  );
  
  // const contenido =(
  // <div><h1>Hola Putos</h1></div>
  // );
  
  // function Contenido({ titulo, contenido,children}) {
  //   // const { titulo, contenido } = propiedades;
  //   console.log(titulo, contenido);
  //   return (
  //     <div>
  //       <h1>{titulo}</h1>
  //       <span>{contenido}</span>
  //       <div>Espacio para el hijo</div>
  //       {children}
  //     </div>
  //   );
  // }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
