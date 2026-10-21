import { useState } from 'react'
import './App.css'
import Oracaodevweb from './components/Oracaodevweb'
import Oracaodefrontend from './components/OracaoFront'
import Oracaodebackend from './components/OracaoBack'
import Oracaodedev from './components/Oracaodedev'
import Oracaodedevcansado from './components/Oracaodedevcansado'

function App() {
  const [pagina, setPagina] = useState(0)

  return (
   <div className="app">
     <nav>
      <button onClick={() => setPagina(0)}>Primeira Oração</button>
      <button onClick={() => setPagina(1)}>Segunda Oração</button>
      <button onClick={() => setPagina(2)}>Terceira Oração</button>
      <button onClick={() => setPagina(3)}>Quarta Oração</button>
      <button onClick={() => setPagina(4)}>Quinta Oração</button>
    </nav>

    <h1>Padre</h1>
    

    {pagina === 0 && <Oracaodevweb />}
    {pagina === 1 && <Oracaodefrontend />}
    {pagina === 2 && <Oracaodebackend />}
    {pagina === 3 && <Oracaodedev />}
    {pagina === 4 && <Oracaodedevcansado />}

   </div>
  )
}

export default App