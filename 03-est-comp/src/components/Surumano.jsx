
import React, { useState } from 'react'

function Sarumano() {
    const [resultado, setResultado] = useState('')

    function verificarViagem() {
        let estaGripado = prompt("Está gripado? (sim/não)").toLowerCase()
        let tempoViagem = Number(prompt("Quantos minutos dura a viagem?"))

        if (estaGripado === "não" && tempoViagem < 45 && tempoViagem >= 0) {
            setResultado("Viagem autorizada. Rumo ao show!")

        } else {
            setResultado("Deslocamento inviável. Melhor recusar este evento.")
        }
    }

    return (
        <div className='sarumano'>
            <h3>Sarumano - Eventos</h3>

            <button onClick={verificarViagem}>
                Verificar viagem
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default Sarumano
