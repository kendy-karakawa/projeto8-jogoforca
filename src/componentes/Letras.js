import { useState } from "react";

export default function Letras(props) {
  const {alfabeto, listaSelecionados,setListaSelecionados,verificarLetraSelecionada,desativado} = props


  function clicou(letraClicado) {
    if (!listaSelecionados.includes(letraClicado)) {
      setListaSelecionados([...listaSelecionados, letraClicado]);
      verificarLetraSelecionada(letraClicado)
    }
    
    
  }

  //${listaSelecionados.includes(alfabeto) ? "selecionado": ""}

  return (
    <ul>
      {alfabeto.map((alfabeto) => (
        <li key={alfabeto}>
          <button
            data-test="letter" 
            className={`button`}
            onClick={() => clicou(alfabeto)}
            type="text"
            disabled={desativado || listaSelecionados.includes(alfabeto) && true}
          >
            {alfabeto.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}
