const botaoSortear = document.getElementById('buttonActive');
botaoSortear.addEventListener('click', sortearNumero);

// Função TOAST
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  // Configura
  toastMessage.textContent = message;
  toast.className = 'toast show'; // Reset classes
  toast.classList.add(type);
  
  setTimeout(() => toast.classList.remove('show'), 10000);
}

function sortearNumero() {
  const valor1 = document.getElementById('input1').value;
  const valor2 = document.getElementById('input2').value;

  // Validações
  if (!valor1 || !valor2) {
    showToast('Preencha ambos os campos!', 'error');
    return;
  }

  const num1 = Number(valor1);
  const num2 = Number(valor2);

  if (isNaN(num1) || isNaN(num2)) {
    showToast('Digite números válidos!', 'error');
    return;
  }

  if (num1 >= num2) {
    showToast('O mínimo deve ser MENOR que o máximo!', 'error');
    return;
  }

  const sorteado = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  showToast(`Sorteado: ${sorteado}`, 'success');
}