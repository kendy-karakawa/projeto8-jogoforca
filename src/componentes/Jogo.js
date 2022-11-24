import { useState } from "react";

export default function Jogo(props) {
  const {img, palavras, resposta, setResposta, erro, renderizado, setRenderizado,sortearPalavras}= props
  

 

  

  return (
    <div className="jogo">
      <div className="forca">
        <img src={img[erro]} alt="" data-test="game-image"></img>
      </div>
      <div className="direita">
        <button
          className="escolha"
          onClick={sortearPalavras}
          data-test="choose-word"
        >
          Escolha a Palavra
        </button>

        <div className="palavra" data-test="word" data-answer={resposta}>
          {renderizado}
        </div>
      </div>
    </div>
  );
}
