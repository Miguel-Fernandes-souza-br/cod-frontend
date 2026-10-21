import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import MinhasCompras from "./components/MinhasCompras";

function App() {
  const [pagina, setPagina] = useState(0);
  function mostrarHome(){
    setPagina(0)
  }

  return (
    <div className="app">
      <nav>
        <button onClick={mostrarHome}>Home</button>
        <button  onClick={() => setPagina(1)}>Ofertas</button>
         <button  onClick={() => setPagina(2)}>Minhas Compras</button>

      </nav>
      <h1>Navegação</h1>
      {pagina == 0 && <Home />}
      {pagina == 1 && <Ofertas />}
      {pagina == 2 && <MinhasCompras/>}
    </div>
  );
}

export default App;
