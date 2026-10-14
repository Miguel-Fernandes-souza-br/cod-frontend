
import React, { useState } from 'react'

function Recrutamento() {
    const [resultado, setResultado] = useState('')

    function avaliarMarujo() {
        let sabeNadar = prompt("Sabe nadar? (sim/não)").toLowerCase()
        let idade = Number(prompt("Qual é a sua idade?"))
        let possuiRecomendacao = prompt("Tem recomendação de outro pirata? (sim/não)").toLowerCase()

        if (sabeNadar === "sim" && idade > 16) {
            setResultado("Aprovado para o navio!")

        } else if (sabeNadar === "não" && possuiRecomendacao === "sim" && idade >= 14) {
            setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")

        } else {
            setResultado("Reprovado. Volte quando estiver mais preparado para o mar.")
        }
    }

    return (
        <div className='ganso'>
            <h3>Recrutamento do Capitão Ganso</h3>
            <button onClick={avaliarMarujo}>Verificar candidato</button>
            {resultado}
        </div>
    )
}

export default Recrutamento
