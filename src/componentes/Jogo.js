import { useState } from "react";

export default function Jogo(props) {
  const {img, palavras, resposta, setResposta, erro, renderizado, setRenderizado}= props
  

  function sortearPalavras() {
    let indice = Math.floor(Math.random() * palavras.length);
    setResposta(palavras[indice]);
    renderizar();
    
  }

  function renderizar() {
    let arrayResposta = [];
    for (let i = 0; i < resposta.length; i++) {
      arrayResposta.push("_");
    }
    setRenderizado(arrayResposta.toString().replaceAll(",", " "));
  }

  return (
    <div class="jogo">
      <div class="forca">
        <img src={img[erro]} alt="" data-test="game-image"></img>
      </div>
      <div class="direita">
        <button
          class="escolha"
          onClick={sortearPalavras}
          data-test="choose-word"
        >
          Escolha a Palavra
        </button>

        <div class="palavra" data-test="word" data-answer={resposta}>
          {renderizado}
        </div>
      </div>
    </div>
  );
}
