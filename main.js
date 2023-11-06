const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeDoContato.value)) {
        alert(`O contato: ${inputNomeDoContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeDoContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
    
    
        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeDoContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}