import React, { useState } from 'react'

function Pousada() {
  const [total, setTotal] = useState(0)

  function calcular() {
    const dias = Number(prompt('Quantos dias?'))
    let diaria

    if (dias <= 5) {
      diaria = 100
    } else if (dias <= 10) {
      diaria = 90
    } else {
      diaria = 80
    }

    setTotal(dias * diaria * 0.75 + 150)
  }

  return (
    <div className='pousada'>
      <h2>Pousada, oba!!</h2>
      <button onClick={calcular}>Calcular</button>
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  )
}

export default Pousada