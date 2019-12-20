let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);

  let quantidadeCerveja = cervejaPorPessoa(duracao) * adultos;

  let quantidadeBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${quantidadeCarne / 1000} kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantidadeCerveja / 355)} latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantidadeBebidas / 2000)} garrafas de 2 litros de Bebidas</p>`
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
