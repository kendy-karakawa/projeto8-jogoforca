export default function Letras(props) {
  const {alfabeto, listaSelecionados,setListaSelecionados,letra,setLetra,verificarLetraSelecionada} = props


  function clicou(letraClicado) {
    if (!listaSelecionados.includes(letraClicado)) {
      setListaSelecionados([...listaSelecionados, letraClicado]);
      setLetra(letraClicado);
      verificarLetraSelecionada(letraClicado)
    }
  }


  return (
    <ul>
      {alfabeto.map((alfabeto) => (
        <li data-test="letter" disabled={true} key={alfabeto}>
          <button
            className={`button ${listaSelecionados.includes(alfabeto) && "selecionado"}`}
            onClick={() => clicou(alfabeto)}
            
          >
            {alfabeto.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}
