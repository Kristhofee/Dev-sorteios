// Selecionar o botão pelo ID
const botaoSortear = document.getElementById('buttonActive');

// Adicionar um evento de clique ao botão
botaoSortear.addEventListener('click', sortearNumero);

function sortearNumero() {
    // Pegar os valores dos inputs
    const valor1 = document.getElementById('input1').value;
    const valor2 = document.getElementById('input2').value;

    // Validar se os campos estão preenchidos
    if (valor1 === '' || valor2 === '') {
        alert('Preencha ambos os valores!');
        return;
    }

    // Converter os valores para números
    const num1 = Number(valor1);
    const num2 = Number(valor2);

    // Validar se são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Digite números válidos!');
        return;
    }

    // Arredondar valores
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    // Validar intervalo
    if (min >= max) {
        alert('O valor mínimo deve ser MENOR que o máximo!');
        return;
    }

    // Gerar um número aleatório dentro do intervalo
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibir o resultado
    alert(`Número sorteado: ${numeroSorteado}`);
}