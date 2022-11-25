import { useState } from "react"

export default function Chute(props){
    const {resposta,desativado,perdeu,ganhou} = props
    const [palavraChute, setPalavraChute] = useState("")

    function chutei(){
        let impute = palavraChute.toLowerCase()
        if (impute == resposta){
            ganhou()
        } else{
            perdeu()
        }
        setPalavraChute("")
    }

    return(
        <div className="chute">
            <h6>Já sei a palavra!</h6>
            <input 
            type="text"
            disabled={desativado}
            onChange={(e)=>setPalavraChute(e.target.value)}
            value={palavraChute}
            data-test="guess-input"></input>
            <button onClick={chutei} data-test="guess-button"><p>Chutar</p></button>
        </div>
    )
}