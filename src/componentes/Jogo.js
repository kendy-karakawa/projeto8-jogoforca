export default function Jogo(props) {
  const { img, resposta, erro, renderizado, sortearPalavras, classeAcertou } = props;

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
          Escolher Palavra
        </button>

        <div
          className={`palavra ${classeAcertou}`}
          data-test="word"
          data-answer={resposta}
        >
          {renderizado}
        </div>
      </div>
    </div>
  );
}
