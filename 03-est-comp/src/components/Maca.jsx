import React, { useState } from 'react'

function Macas() {
  const [total, setTotal] = useState(0)

  function calcular() {
    const quantidade = Number(prompt('Quantas maçãs você vai comprar?'))

    if (quantidade < 12) {
      setTotal(quantidade * 0.30)
    } else {
      setTotal(quantidade * 0.25)
    }
  }

  return (
    <div>
      <h2>Compra de Maçãs</h2>

      <button onClick={calcular}>Calcular</button>

      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  )
}

export default Macas