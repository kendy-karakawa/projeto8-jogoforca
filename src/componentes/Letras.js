export default function Letras(props){
    const alfabeto = props.alfabeto

    return(
       <ul>
        {alfabeto.map(alfabeto => <li><span>{alfabeto.toUpperCase()}</span></li>)}
       </ul>
    )
}