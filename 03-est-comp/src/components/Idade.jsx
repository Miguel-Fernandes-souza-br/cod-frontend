import React, { useState } from 'react'

function Eleicao() {
  const [resultado, setResultado] = useState('')

  function votar() {
    const idade = Number(prompt('Qual é a sua idade?'))

    if (idade < 16) {
      setResultado('Não pode votar')
    } else if (idade < 18 || idade > 65) {
      setResultado('Voto facultativo')
    } else {
      setResultado('Voto obrigatório')
    }
  }

  return (
    <div>
      <h2>Eleição</h2>

      <button onClick={votar}>Verificar</button>

      <h3>{resultado}</h3>
    </div>
  )
}

export default Eleicao