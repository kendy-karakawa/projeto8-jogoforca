export default function Jogo(props) {
  return (
    <div class="jogo">
      <div class="forca">
        <img src={props.img[0]} alt=""></img>
      </div>
      <div class="direita">
        <button class="escolha">Escolha a Palavra</button>
      
      <div class="palavra">
        {props.palavras[0]}
      </div>
      </div>
    </div>
  );
}
