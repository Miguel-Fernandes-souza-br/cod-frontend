import React, { useState } from 'react'

function Ganso() {
    const[resultado, setResultado] = useState()
    function calcularProvisoes(){
        let marujos = Number(prompt("Quantos Marujos?"))
        let comida = Number(prompt("Quantos quilos de comida?"))
        let comidaPorMarujo = comida / marujos 

        if(marujos >= 10 && comidaPorMarujo >= 1.5){
            setResultado("Provisões suficientes. Rumo ao horizonte !")

        } else{
            setResultado("algo está errado.O mar nao quer ninguém nele hoje")
        }
    }
  return (
    <div className='ganso'>
        <h3>Ganso</h3>
        <button onClick={calcularProvisoes}>Ganso - provi</button>
        {resultado}
        </div>
  )
}

export default Ganso