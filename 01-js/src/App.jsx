
import './App.css'

function App() {

function relatorio() {
    let pf = 40, pj = 33;
    let tempoPF = 12, tempoPJ = 42;
    let valorPF = 2350, valorPJ = 8900;

    alert(
        "Total relatórios: " + (pf + pj) +
        "\nTempo total: " + (tempoPF + tempoPJ) + "h" +
        "\nValor total: R$ " + (valorPF + valorPJ) +
        "\nMédia PF: R$ " + (valorPF / pf).toFixed(2) +
        "\nMédia PJ: R$ " + (valorPJ / pj).toFixed(2) +
        "\nTempo médio PF: " + (tempoPF / pf).toFixed(2) + "h" +
        "\nTempo médio PJ: " + (tempoPJ / pj).toFixed(2) + "h"
    );
}


function calcularFreela() {
    let horas = Number(prompt("Horas estimadas:"));

    let preco = 500 + (horas * 350);
    let lucro = preco - 500;

    alert("Preço: R$ " + preco.toFixed(2) +
          "\nLucro: R$ " + lucro.toFixed(2));
}


function calcularPrompt() {
    let caracteres = Number(prompt("Número de caracteres:"));
    let custoToken = Number(prompt("Custo de cada token:"));

    let tokens = 5 + caracteres;
    let custo = tokens * custoToken;

    alert("Tokens gastos: " + tokens +
          "\nCusto: R$ " + custo.toFixed(2));
}


function calcularLucro() {
    let caminhoes = Number(prompt("Número de caminhões:"));

    let jarés = caminhoes * 50;
    let vendas = jarés * 90;
    let frete = caminhoes * 450;
    let lucro = vendas - frete;

    alert("O lucro foi: R$ " + lucro.toFixed(2));
}


function calcularChurrasco() {
    let pessoas = Number(prompt("Digite o número de pessoas:"));

    let carne = pessoas * 0.5;
    let cerveja = pessoas * 1;
    let agua = pessoas * 0.5;
    let refri = pessoas * 0.2;

    alert("Carne: " + carne.toFixed(1) + " kg" +
          "\nCerveja: " + cerveja.toFixed(1) + " L" +
          "\nÁgua: " + agua.toFixed(1) + " L" +
          "\nRefri: " + refri.toFixed(1) + " L");
}


function calcularRacao() {
    let gramas = Number(prompt("Digite o peso da ração em gramas:"));

    let preco = (gramas / 1000) * 10;

    alert("O preço da ração é: R$ " + preco.toFixed(2));
}


function calcularPrecoObra() {
    let precoCompra = Number(prompt("Digite quanto Romero pagou pela obra:"));

    let precoVenda = precoCompra + (precoCompra * 2);

    alert("O preço de venda da obra é: R$ " + precoVenda.toFixed(2));
}


function calcularPoupancaManoJuca() {
    let salario = Number(prompt("Digite o valor do salário:"));
    let moradia = Number(prompt("Digite o valor da moradia:"));
    let agua = Number(prompt("Digite o valor da água:"));
    let luz = Number(prompt("Digite o valor da luz:"));
    let internet = Number(prompt("Digite o valor da internet:"));
    let gasolina = Number(prompt("Digite o valor da gasolina:"));
    let streamings = Number(prompt("Digite o valor dos streamings:"));
    let telefone = Number(prompt("Digite o valor do telefone:"));
    let outros = Number(prompt("Digite o valor de outros gastos:"));

    let contas = moradia + agua + luz + internet + gasolina + streamings + telefone + outros;
    let sobra = salario - contas;

    alert("Com muito carinho, Mano Juca, você conseguiu guardar: R$ " + sobra.toFixed(2));
}


  function calcularBombasSarumano() {
    let shows = Number(prompt("Digite a quantidade de shows marcados:"));
    let precoBomba = Number(prompt("Digite o preço unitário da bomba de fumaça:"));

    let bombas = shows * 7;
    let dinheiro = bombas * precoBomba;

    alert("Sarumano precisa comprar " + bombas + " bombas de fumaça." +
          "\nEle precisa mobilizar: R$ " + dinheiro.toFixed(2));
}


function calcularLucroCapitaoGanso() {
    let suprimentos = Number(prompt("Digite o valor gasto com suprimentos e mercadorias:"));
    let ingressos = Number(prompt("Digite o faturamento com venda de ingressos:"));
    let itens = Number(prompt("Digite o faturamento com venda de itens:"));

    let faturamento = ingressos + itens;
    let lucro = faturamento - suprimentos;
    let lucroPercentual = (lucro / faturamento) * 100;

    alert("O lucro obtido foi: R$ " + lucro.toFixed(2) +
          "\nO lucro percentual foi: " + lucroPercentual.toFixed(2) + "%");
}

 
function calcularLucroDonaBete() {
    let bruto = Number(prompt("Digite o valor bruto das apostas:"));
    let premiacoes = Number(prompt("Digite o valor gasto com premiações:"));
    let presentes = Number(prompt("Digite o valor gasto com presentes e agrados:"));
    let comissoes = Number(prompt("Digite o valor gasto com comissões:"));

    let lucro = bruto - premiacoes - presentes - comissoes;

    alert("O lucro da Dona Bete foi: R$ " + lucro.toFixed(2));
}


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
     <hr />
      <button onClick={calcularFreteTelles}>Talles2</button>
      <button onClick={calcularLucroDonaBete}>Donabete</button>
      <button onClick={calcularLucroCapitaoGanso}>Ganso</button>
      <button onClick={calcularBombasSarumano}>Sarumano</button>
      <button onClick={calcularPoupancaManoJuca}>mano juca</button>
      <button onClick={ calcularPrecoObra}>Obra</button>
      <button onClick={calcularRacao}>raçao</button>
      <button onClick={calcularChurrasco}>Churrasco</button>
      <hr />
      <button onClick={calcularLucro}>Lucro jacare</button>
      <button onClick={calcularPrompt}>Prompt</button>
      <button onClick={calcularFreela}>Freela</button>
      <button onClick={relatorio}>Relatorio</button>
      <hr />


      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
