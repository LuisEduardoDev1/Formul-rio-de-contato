document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Limpar mensagens de erro
    document.getElementById('pNome').textContent = '';
    document.getElementById('uNome').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('escolhaERROR').textContent = '';
    document.getElementById('textoError').textContent = '';
    document.getElementById('checkError').textContent = '';

    const firstName = document.getElementById('fNome').value;
    if (!firstName) {
        document.getElementById('pNome').textContent = 'This field is required.';
        isValid = false;
    }
    const lastName = document.getElementById('lNome').value;
    if (!lastName) {
        document.getElementById('uNome').textContent = 'This field is required.';
        isValid = false;
    }

    const email = document.getElementById('Email').value;
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    const escolhas = document.getElementsByName('queryType');
    let selectedValue = null;
    for (const escolha of escolhas) {
        if (escolha.checked) {
            selectedValue = escolha.value;
            break;
        }
    }
    if (!selectedValue) {
        document.getElementById('escolhaERROR').textContent = 'Please select a query type.';
        isValid = false;
    }

    const textos = document.getElementById('texto').value;
    if (!textos) {
        document.getElementById('textoError').textContent = 'This field is required.';
        isValid = false;
    }

    const check = document.getElementById('check').value;
    if (!check.checked) {
        document.getElementById('checkError').textContent = 'To submit this form, please consent to being contacted.';
        isValid = false;
    }

    // Impedir o envio do formulário se houver erros
    if (!isValid) {
        event.preventDefault();
    }
    if(isValid){
        alert('Deu certo')
    }
});
