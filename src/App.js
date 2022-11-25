import Chute from "./componentes/Chute";
import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
import palavras from "./palavras";
import alfabeto from "./componentes/Alfabeto";
import { useState } from "react";

function App() {
  const imagens = [
    "./assets/forca0.png",
    "./assets/forca1.png",
    "./assets/forca2.png",
    "./assets/forca3.png",
    "./assets/forca4.png",
    "./assets/forca5.png",
    "./assets/forca6.png",
  ];

  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(0);
  const [renderizado, setRenderizado] = useState("");
  const [listaSelecionados, setListaSelecionados] = useState([]);
  const [letra, setLetra] = useState("");
  const [arrayResposta, setArrayResposta] = useState([]);
  const [arrayRenderizado, setArrayRenderizado] = useState([]);
  const [classeAcertou, setClasseAcertou] = useState("");
  const [desativado, setDesativado] = useState(true);
  console.log(arrayResposta);

  function addErro() {
    if (erro == 5) {
      perdeu();
    } else {
      setErro(erro + 1);
    }
  }

  function perdeu() {
    setErro(6);
    setRenderizado(resposta);
    setDesativado(true);
  }

  function ganhou() {
    setRenderizado(resposta);
    setClasseAcertou("acertou");
    setDesativado(true);
  }

  function sortearPalavras() {
    let indice = Math.floor(Math.random() * palavras.length);
    setResposta(palavras[indice]);
    renderizar(palavras[indice]);
    setArrayResposta(palavras[indice].split(""));
    setDesativado(false);
    setListaSelecionados([])
  }

  function renderizar(palavra) {
    let array = [];
    for (let i = 0; i < palavra.length; i++) {
      array.push("_");
    }
    setArrayRenderizado(array);
    setRenderizado(array.toString().replaceAll(",", " "));
  }

  function verificarLetraSelecionada(letraClicado) {
    let novaArray = [...arrayRenderizado];

    if (arrayResposta.includes(letraClicado)) {
      for (let i = 0; i < resposta.length; i++) {
        if (letraClicado == resposta[i]) {
          novaArray.splice(i, 1, letraClicado);
          console.log(novaArray);
        }
      }
      setArrayRenderizado(novaArray);
      setRenderizado(novaArray.toString().replaceAll(",", " "));
    } else {
      addErro();
    }

    acertouResposta(novaArray.toString().replaceAll(",", ""));
  }

  function acertouResposta(array) {
    if (array === resposta) {
      ganhou();
    }
  }

  return (
    <div className="container">
      <Jogo
        img={imagens}
        resposta={resposta}
        erro={erro}
        renderizado={renderizado}
        sortearPalavras={sortearPalavras}
        classeAcertou={classeAcertou}
      />
      <Letras
        alfabeto={alfabeto}
        listaSelecionados={listaSelecionados}
        setListaSelecionados={setListaSelecionados}
        setLetra={setLetra}
        verificarLetraSelecionada={verificarLetraSelecionada}
        desativado={desativado}
      />
      <Chute
        resposta={resposta}
        desativado={desativado}
        perdeu={perdeu}
        ganhou={ganhou}
      />
    </div>
  );
}

export default App;
