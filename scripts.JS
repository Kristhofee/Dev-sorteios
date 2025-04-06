// Selecionar o botão pelo ID
const botaoSortear = document.getElementById('buttonActive');

// Adicionar um evento de clique ao botão
botaoSortear.addEventListener('click', sortearNumero);

// Função para mostrar toast
function showToast(message, type = 'success', duration = 5000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // Configura a mensagem
    toastMessage.textContent = message;

    // Remove todas as classes e adiciona as novas de uma vez
    toast.className = `toast-visible toast-${type}`;

    // Esconde após o tempo definido
    setTimeout(() => {
        toast.classList.remove('toast-visible');
    }, duration);
}

function sortearNumero() {
    // Pegar os valores dos inputs
    const valor1 = document.getElementById('input1').value;
    const valor2 = document.getElementById('input2').value;

    // Validar se os campos estão preenchidos
    if (valor1 === '' || valor2 === '') {
        showToast('Preencha ambos os valores!', 'error');
        return;
    }

    // Converter os valores para números
    const num1 = Number(valor1);
    const num2 = Number(valor2);

    // Validar se são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        showToast('Digite números válidos!', 'error');
        return;
    }

    // Arredondar valores
    const min = Math.min(Math.ceil(num1), Math.ceil(num2)); // Menor valor arredondado para cima
    const max = Math.max(Math.floor(num1), Math.floor(num2)); // Maior valor arredondado para baixo

    // Validar intervalo
    if (min >= max) {
        showToast('O valor mínimo deve ser MENOR que o máximo!', 'error');
        return;
    }

    // Gerar um número aleatório dentro do intervalo
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibir o resultado com toast
    showToast(`Número sorteado: ${numeroSorteado}`, 'success');
}