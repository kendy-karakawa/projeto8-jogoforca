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

  function addErro() {
    if (erro == 6) {
      setErro(6);
    } else {
      setErro(erro + 1);
    }
  }

  return (
    <div class="container">
      <Jogo
        img={imagens}
        palavras={palavras}
        resposta={resposta}
        setResposta={setResposta}
        erro={erro}
        renderizado={renderizado}
        setRenderizado={setRenderizado}
      />
      <Letras alfabeto={alfabeto} />
      <Chute
        resposta={resposta}
        setRenderizado={setRenderizado}
        setErro={setErro}
      />
    </div>
  );
}

export default App;
