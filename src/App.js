import Chute from "./componentes/Chute";
import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
import palavras from "./palavras";
import alfabeto from "./componentes/Alfabeto"



function App() {
  const imagens = ["./assets/forca0.png","./assets/forca1.png",
  "./assets/forca2.png","./assets/forca3.png","./assets/forca4.png","./assets/forca5.png","./assets/forca6.png"]

  

  return (
    <div class="container">
      <Jogo img={imagens} palavras={palavras}/>
      <Letras alfabeto={alfabeto}/>
      <Chute />
    </div>
  );
}

export default App;
