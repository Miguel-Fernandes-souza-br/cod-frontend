import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function calcularMedia(){
    let nota1 = Number(prompt("Nota 1:"))
    let nota2 = Number(prompt("Nota 2:"))
    let media = (nota1 + nota2) / 2
    setSaida(media)
  }

    function rolarD6(){
      let n = Math.ceil(Math.random() * 6)
      setSaida(n)
    }
     function rolarD8(){
      let m = Math.ceil(Math.random() * 8)
      setSaida(m) }

       function rolarD12(){
      let p = Math.ceil(Math.random() * 12)
      setSaida(p)}

       function rolarD20(){
      let o = Math.ceil(Math.random() * 20)
      setSaida(o)}

       function rolarD100(){
      let r = Math.ceil(Math.random() * 100)
      setSaida(r)}

  return (
   <div className='app'>
    <h1>Estados!</h1>
    <button onClick={calcularMedia}>Média</button>
    <button onClick={rolarD6}>D6</button>
    <button onClick={rolarD8}>D8</button>
    <button onClick={rolarD12}>D12</button>
    <button onClick={rolarD20}>D20</button>
    <button onClick={rolarD100}>D100</button>

    <p>
      Resultado: {saida}
    </p>

   </div>
    
  )
}

export default App
