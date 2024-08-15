document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Limpar mensagens de erro
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Validar nome
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'O campo Nome é obrigatório.';
        isValid = false;
    }

    // Validar email
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('emailError').textContent = 'O campo Email é obrigatório.';
        isValid = false;
    }

    // Impedir o envio do formulário se houver erros
    if (!isValid) {
        event.preventDefault();
    }
});