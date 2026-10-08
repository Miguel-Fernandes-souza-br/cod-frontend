import React, { useState } from 'react'

function Peso() {
  const [resultado, setResultado] = useState(0)

  function calcular() {
    const altura = Number(prompt('Digite sua altura em metros:'))
    const genero = Number(prompt('Digite 1 para feminino ou 2 para masculino:'))

    if (genero === 1) {
      setResultado((62.1 * altura) - 44.7)
    } else if (genero === 2) {
      setResultado((72.7 * altura) - 58)
    }
  }

  return (
    <div>
      <h2>Peso ideal</h2>

      <button onClick={calcular}>Calcular</button>

      <h3>Peso ideal: {resultado.toFixed(2)} kg</h3>
    </div>
  )
}

export default Peso