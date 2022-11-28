import Chute from "./componentes/Chute";
import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
import palavras from "./palavras";
import alfabeto from "./componentes/Alfabeto";
import { useState } from "react";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


function App() {
  const imagens = [
    forca0,
    forca1,
    forca2,
    forca3,
    forca4,
    forca5,
    forca6
  ];

  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(0);
  const [renderizado, setRenderizado] = useState("");
  const [listaSelecionados, setListaSelecionados] = useState([]);
  const [arrayResposta, setArrayResposta] = useState([]);
  const [arrayRenderizado, setArrayRenderizado] = useState([]);
  const [classeAcertou, setClasseAcertou] = useState("");
  const [desativado, setDesativado] = useState(true);
  

  function addErro() {
    if (erro >= 5) {
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
    setErro(0)
    setClasseAcertou("")
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
