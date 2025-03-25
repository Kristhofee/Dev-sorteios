// Selecionar o botão pelo ID
const botaoSortear = document.getElementById('buttonActive');

// Adicionar um evento de clique ao botão
botaoSortear.addEventListener('click', sortearNumero);

function sortearNumero() {
    // Pegar os valores dos inputs
    const input1 = Math.ceil(document.getElementById('input1').value);
    const input2 = Math.floor(document.getElementById('input2').value);

    // Converter os valores para números
    const min = Math.min(Number(input1), Number(input2)); // Menor valor
    const max = Math.max(Number(input1), Number(input2)); // Maior valor

    // Gerar um número aleatório dentro do intervalo
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibir o resultado
    alert(`Número sorteado: ${numeroSorteado}`);
}