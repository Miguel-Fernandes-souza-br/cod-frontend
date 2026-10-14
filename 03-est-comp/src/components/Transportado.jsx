
import React, { useState } from 'react'

function CentroComando() {
    const [resultado, setResultado] = useState('')

    function verificarAcesso() {
        let crachaValido = prompt("O crachá está válido? (sim/não)").toLowerCase()
        let digitalReconhecida = prompt("A digital foi reconhecida? (sim/não)").toLowerCase()

        if (crachaValido === "sim" && digitalReconhecida === "sim") {
            setResultado("Acesso liberado ao Centro de Comando")

        } else if (crachaValido === "não" && digitalReconhecida === "sim") {
            setResultado("Crachá inválido. Dirija-se à recepção")

        } else if (crachaValido === "sim" && digitalReconhecida === "não") {
            setResultado("Falha na digital. Tente novamente ou chame o suporte")

        } else {
            setResultado("Acesso negado. Verifique sua identificação.")
        }
    }

    return (
        <div className='centroComando'>
            <h3>Centro de Comando</h3>

            <button onClick={verificarAcesso}>
                Verificar acesso
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default CentroComando
