
import React, { useState } from 'react'

function Transporte() {
    const [resultado, setResultado] = useState('')

    function verificarTransporte() {
        let emManutencao = prompt("O transporte está em manutenção? (sim/não)").toLowerCase()
        let emergenciaAtiva = prompt("Existe uma emergência ativa? (sim/não)").toLowerCase()

        if (emManutencao === "não" && emergenciaAtiva === "não") {
            setResultado("Transporte liberado para uso.")

        } else {
            setResultado("Transporte indisponível por motivo de segurança.")
        }
    }

    return (
        <div className='transporte'>
            <h3>Controle de Transporte</h3>

            <button onClick={verificarTransporte}>
                Verificar transporte
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default Transporte
