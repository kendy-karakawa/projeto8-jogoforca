import { useState } from "react"

export default function Chute(props){
    const {resposta,setRenderizado, setErro,setClasseAcertou} = props
    const [palavraChute, setPalavraChute] = useState("")

    function chutei(){
        let impute = palavraChute.toLowerCase()
        if (impute == resposta){
            setRenderizado(resposta)
            setClasseAcertou("acertou")
        } else{
            setErro(6)
            setRenderizado(resposta)
        }
        setPalavraChute("")
    }

    return(
        <div className="chute">
            <h6>Já sei a palavra!</h6>
            <input 
            onChange={(e)=>setPalavraChute(e.target.value)}
            value={palavraChute}
            data-test="guess-input"></input>
            <button onClick={chutei} data-test="guess-button"><p>Chutar</p></button>
        </div>
    )
}