import "./App.css";
import Macas from "./components/Maca";
import Peso from "./components/Altura";
import Eleicao from "./components/Idade";
import Jogo from "./components/jogo";
import Pousada from "./components/Pousada";
import Ganso from "./components/Ganso";
import Recrutamento from "./components/Ganso1";
import Sarumano from "./components/Surumano";
import Soromuna from "./components/Soromuna";
import Transporte from "./components/Denis";
import CentroComando from "./components/Transportado";
import Jaulas from "./components/Junin";

function App() {
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

      <h2>#0030</h2>
      <Ganso/>
      <Recrutamento/>
      <Sarumano/>
     <Soromuna/>
     <Transporte/>
     <CentroComando/>
     <Jaulas/>

    <hr />

      <h2>#0027.sq05</h2>

    <Macas/>
    <Peso/>
    <Eleicao/>
    <Pousada/>
    <Jogo/>

    </div>
  );
}

export default App;
