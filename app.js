// Exercício 1: Calculadora de Idade
// Crie uma função que receba a data de nascimento de uma pessoa como argumento e retorne sua idade em anos, 
// usando a manipulação de datas. Use uma Arrow Function para calcular a idade.



const calcularIdade = () => {
  const dataNascimentoInput = document.getElementById(
    "dataNascimentoInput"
  ).value;

  // Verifica se o campo de data de nascimento foi preenchido
  if (dataNascimentoInput.trim() === "") {
    alert("Por favor, insira sua data de nascimento.");
    return;
  }

  const dataNascimento = new Date(dataNascimentoInput);
  const hoje = new Date();

  const diferencaEmMilissegundos = hoje - dataNascimento;
  const idadeEmAnos = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);
  const idadeCalculada = Math.floor(idadeEmAnos);

  document.getElementById(
    "resultadoIdade"
  ).innerText = `Sua idade é: ${idadeCalculada} anos.`;
};
