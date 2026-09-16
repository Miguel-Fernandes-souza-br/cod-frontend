
import './App.css'

function App() {

 



  function calcularFreteTelles() {
    let peso = Number(prompt("Digite o peso da carga (em kg):"));
    let distancia = Number(prompt("Digite a distância (em km):"));
    let volume = Number(prompt("Digite o volume (em m³):"));

    let frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume);

    alert("O preço final do frete é: R$ " + frete.toFixed(2));
  }

  function calcularChanceDev() {
      let n = Number(prompt("Digite o número de vezes que o candidato usou o celular:"));

        let chance = (0.1 / (1 + 500 * n)) * 100;

           alert("A chance do candidato ser aprovado é de " + chance.toFixed(4) + "%.")
  }

  function Calcularcarga(){
    let pesoBalança = Number(prompt("Digite o peso informado na balança (Peso Bruto Total em kg):"));
    let taraCaminhao = Number(prompt("Digite a tara do caminhão (Peso vazio em kg):"));

        let pesoCarga = pesoBalança - taraCaminhao;

         alert("O peso da carga que o caminhão está carregando é de " + pesoCarga + " kg.");
  }

  function SalarioJunin(){
     let salarioMensal = Number(prompt("Digite o salário mensal (R$):"));
    let diasTrabalhados = Number(prompt("Digite os dias trabalhados:"));

    let valorPorDia = salarioMensal / diasTrabalhados;
    let salarioSemanal = valorPorDia * 5;

    alert("Junin recebe R$ " + valorPorDia.toFixed(2) + " por dia e R$ " + salarioSemanal.toFixed(2) + " por semana.");
  }

 function calcularFrutas(){
  let qtdInicial = Number(prompt("Digite a quantidade inicial de laranjas:"));
   let qtdFinal = Number(prompt("Digite a quantidade final de laranjas:"));

     let laranjasVendidas = qtdInicial - qtdFinal;

      alert("O relatório diário da Trajeto Pomar indica um total de " + laranjasVendidas + " laranjas vendidas hoje.");
 }

  function calcularDVS(){
    let CLTs = Number(prompt('Quantidade de CLTs:'))
    let estagiarios = Number(prompt("Digite a quantidade de estagiários:"));
    let pj = Number(prompt("Digite a quantidade de devs PJ:"));


let totalDevs = CLTs + estagiarios + pj;


alert("A força de trabalho da Macrohard conta com um total de " + totalDevs + " devs.");

  }

  function trocarSapatos(){
  let qtdPares, precoPar, ValorTotal
  qtdPares = Number(prompt('Quantidade de pares: ')) 
  precoPar = Number(prompt('Preço de cada par:'))

  ValorTotal = qtdPares * precoPar

  alert('Valor total R$' + ValorTotal.toFixed(2))
  }

  function testar(){
    let nome = prompt('Qual seu nome?')
    let boca = nome
    alert(nome + ', seu nome tá na boca')
  }

  function calcularMedia(){
    let nota1 = Number(prompt('Manda a primeira nota:'))
    let nota2 = Number(prompt('Manda a segunda nota:'))

    let media = (nota1+nota2) / 2
    alert('Sua média: ' + media)
  }
 
  function calcularPontos(){
    let vitorias = Number(prompt('Numero de vitorias:'))
    let empates = Number(prompt('Numero de empates:'))
  
    let pontos = vitorias*3 + empates

    alert('O seu time tem '+ pontos  + ' pontos')
  
  }

  return (
    <div className="cont-app">
      <h1>Javascript no React</h1>

      <h2>Exercicios supimpas</h2>

      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
      <button onClick={calcularDVS}>DVS</button>
      <button onClick={calcularFrutas}>Frutas estoque</button>
      <button onClick={SalarioJunin}>Salario junin</button>
      <button onClick={Calcularcarga}>Carga</button>
      <button onClick={calcularChanceDev}>monika</button>
      <button onClick={calcularFreteTelles}>Talles2</button>

      <hr />


      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
