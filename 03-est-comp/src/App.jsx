import "./App.css";
import Macas from "./components/Maca";
import Peso from "./components/Altura";
import Eleicao from "./components/Idade";
import Jogo from "./components/jogo";
import Pousada from "./components/Pousada";

function App() {
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

    <Macas/>
    <Peso/>
    <Eleicao/>
    <Pousada/>
    <Jogo/>

    </div>
  );
}

export default App;
