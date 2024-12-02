const messages = document.getElementById('messages');

function chat() {
    const userInput = document.getElementById('user-input').value;
    const response = getResponse(userInput);

    messages.innerHTML += `<p>Você: ${userInput}</p>`;
    messages.innerHTML += `<p>AI: ${response}</p>`;
    document.getElementById('user-input').value = '';
}

function getResponse(input) {
    if (input.includes('futuro')) return "O futuro é cheio de possibilidades!";
    if (input.includes('tecnologia')) return "A tecnologia é a chave para o futuro.";
    return "Não tenho certeza sobre isso.";
}
