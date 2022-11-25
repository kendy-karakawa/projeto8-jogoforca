import { useState } from "react";

export default function Letras(props) {
  const {alfabeto, listaSelecionados,setListaSelecionados,setLetra,verificarLetraSelecionada,desativado} = props


  function clicou(letraClicado) {
    if (!listaSelecionados.includes(letraClicado)) {
      setListaSelecionados([...listaSelecionados, letraClicado]);
      setLetra(letraClicado);
      verificarLetraSelecionada(letraClicado)
    }
    
    
  }

  //${listaSelecionados.includes(alfabeto) ? "selecionado": ""}

  return (
    <ul>
      {alfabeto.map((alfabeto) => (
        <li data-test="letter" disabled={true} key={alfabeto}>
          <button
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
