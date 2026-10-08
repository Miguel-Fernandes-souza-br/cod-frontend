import { useState } from "react"


function jogo() {
    const[resultado, setResultado ] = useState()

    function classificar(){
        let pontos = Number(prompt("Quantos pontos?"))
        if(pontos <= 10){
            setResultado("Mogo o betinha. . .")
        } else if ( pontos <=100){
            setResultado("mantenha a esperança, vc é um lixo mais pode ser reciclado. . .")
        } else if(pontos <= 200){
            setResultado("Supimpa. . .")
        }else{
            setResultado("Farmou aura")
        }
    }
  return (
    <div className="Jogo">
        <h2>Jogo do mano Juca.</h2>
        <button onClick={classificar}>Classificar</button>
        {resultado}
    </div>
  )
}

export default jogo