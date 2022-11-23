export default function Chute(props){
    const {resposta,setRenderizado, setErro,} = props
    

    function chutei(){
        let impute = prompt("quer chutar ?").toLowerCase()
        if (impute == resposta){
            setRenderizado(resposta)
        } else{
            setErro(6)
        }
    }

    return(
        <div class="chute">
            <h6>Já sei a palavra!</h6>
            <input data-test="guess-input"></input>
            <button onClick={chutei} data-test="guess-button"><p>Chutar</p></button>
        </div>
    )
}