//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('btnAdicionar').addEventListener('click', adicionarNome);
    document.getElementById('btnSortear').addEventListener('click', sortearAmigos);
});

function adicionarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    nomes.push(nome);
    nomeInput.value = '';
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = '';

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function embaralharLista(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigos() {
    if (nomes.length < 2) {
        alert('Adicione ao menos dois nomes antes de sortear!');
        return;
    }

    let sorteados = [...nomes];
    let tentativas = 0;
    let maxTentativas = 1000;

    do {
        sorteados = embaralharLista([...nomes]);
        tentativas++;
    } while (sorteados.some((sorteado, i) => sorteado === nomes[i]) && tentativas < maxTentativas);

    if (tentativas === maxTentativas) {
        alert('Não foi possível sortear corretamente. Tente novamente.');
        return;
    }

    let resultadoHTML = '<h2>Resultado do Sorteio:</h2><ul>';
    for (let i = 0; i < nomes.length; i++) {
        resultadoHTML += `<li>${nomes[i]} → ${sorteados[i]}</li>`;
    }
    resultadoHTML += '</ul>';

    document.getElementById('resultado').innerHTML = resultadoHTML;
}