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
  console.log(arrayResposta);

  function addErro() {
    if (erro == 5) {
      setErro(6);
      setRenderizado(resposta)
    } else {
      setErro(erro + 1);
    }
  }

  function sortearPalavras() {
    let indice = Math.floor(Math.random() * palavras.length);
    setResposta(palavras[indice]);
    renderizar(palavras[indice]);
    setArrayResposta(palavras[indice].split(""));
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

    acertouResposta(novaArray.toString().replaceAll(",", ""))
  }

  function acertouResposta(array) {
    if (array === resposta) {
      setRenderizado(resposta);
      setClasseAcertou("acertou");
    }
  }

  return (
    <div className="container">
      <Jogo
        img={imagens}
        palavras={palavras}
        resposta={resposta}
        setResposta={setResposta}
        erro={erro}
        renderizado={renderizado}
        setRenderizado={setRenderizado}
        sortearPalavras={sortearPalavras}
        classeAcertou={classeAcertou}
      />
      <Letras
        alfabeto={alfabeto}
        listaSelecionados={listaSelecionados}
        setListaSelecionados={setListaSelecionados}
        letra={letra}
        setLetra={setLetra}
        verificarLetraSelecionada={verificarLetraSelecionada}
      />
      <Chute
        resposta={resposta}
        setRenderizado={setRenderizado}
        setErro={setErro}
        setClasseAcertou={setClasseAcertou}
      />
    </div>
  );
}

export default App;
