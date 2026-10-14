
import React, { useState } from 'react'

function Soromuna() {
    const [resultado, setResultado] = useState('')

    function verificarApresentacao() {
        let somFuncionando = prompt("O som está funcionando? (sim/não)").toLowerCase()
        let figurinoCompleto = prompt("O figurino está completo? (sim/não)").toLowerCase()

        if (somFuncionando === "sim" && figurinoCompleto === "sim") {
            setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")

        } else if (somFuncionando === "não" && figurinoCompleto === "sim") {
            setResultado("Sem som. Realizar apresentação alternativa no salão.")

        } else if (somFuncionando === "sim" && figurinoCompleto === "não") {
            setResultado("Faltando parte do figurino. Te vira no improviso!")

        } else {
            setResultado("Apresentação cancelada. Hora da mágica de desaparecer…")
        }
    }

    return (
        <div className='sarumano'>
            <h3>Sarumano - Mago Ilusionista</h3>

            <button onClick={verificarApresentacao}>
                Verificar apresentação
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default Soromuna
